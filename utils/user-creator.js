/* eslint-disable node/no-deprecated-api */
'use strict';

const Model = require('hof').model;

const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });

const { generateUniqueUsername } = require('./user-registration');

module.exports = class UserCreator {
  constructor() {
    this.hofModel = new Model();
    this.username = '';
    this.requestAttempts = 1;
  }

  async auth() {
    const requiredProperties = ['clientId', 'secret'];

    if (!config.keycloak.tokenUrl) {
      const errorMsg = 'Keycloak token URL is not defined';
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }

    for (const property of requiredProperties) {
      if (!config.keycloak.adminClient[property]) {
        const errorMsg = `Keycloak admin ${property} is not defined`;
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }
    }

    const tokenReq = {
      url: config.keycloak.tokenUrl,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        grant_type: 'client_credentials',
        client_id: config.keycloak.adminClient.clientId,
        client_secret: config.keycloak.adminClient.secret
      },
      method: 'POST'
    };

    try {
      const response = await this.hofModel._request(tokenReq);

      if (!response.data || !response.data.access_token) {
        const errorMsg = 'No access token in response';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

      logger.info('Successfully retrieved access token');
      return {
        bearer: response.data.access_token
      };
    } catch(error) {
      const errorMsg = `Error retrieving auth token: ${error.message},
        Cause: ${error.response.status} ${error.response.statusText}, Data: ${JSON.stringify(error.response.data)}`;
      logger.error(errorMsg);
      throw error;
    }
  }

  createRequestConfig(userDetails, authToken) {
    const { username, password, email } = userDetails;

    let errorMsg;
    if (!username || !password || !email) {
      errorMsg = 'User information missing from create user request';
    }

    if (!authToken.bearer) {
      errorMsg = 'Auth token undefined in create user request';
    }

    if (!config.keycloak.adminUrl) {
      errorMsg = 'Keycloak admin URL undefined in create user request';
    }

    if (errorMsg) {
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }

    const reqConfig = {
      url: `${config.keycloak.adminUrl}/users`,
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${authToken.bearer}`
      },
      data: {
        username: username,
        enabled: true,
        email: email,
        emailVerified: false,
        credentials: [
          {
            type: 'password',
            value: password,
            temporary: false
          }
        ],
        groups: config.keycloak.adminClient.defaultGroups
      },
      method: 'POST'
    };

    return reqConfig;
  }

  registerUser(userDetails, authToken) {
    const { companyName, companyPostcode } = userDetails;
    this.username = generateUniqueUsername(companyName, companyPostcode, this.username);
    const prospectiveUser = Object.assign({}, userDetails, { username: this.username });
    const userRequestConfig = this.createRequestConfig(prospectiveUser, authToken);

    logger.info(`Register user attempt: ${this.requestAttempts}`);
    return this.hofModel._request(userRequestConfig)
      .then(() => {
        logger.info('User registered successfully');
        return prospectiveUser;
      })
      .catch(error => {
        if (error.status === 409 && error.response.data.errorMessage === 'User exists with same username') {
          logger.warn('User exists with generated username: regenerate and retry...');
          this.requestAttempts++;
          return this.registerUser(userDetails, authToken);
        }
        const errorMsg = `Error registering new user: ${JSON.stringify(
          {message: error.message, stack: error.stack, ...error}
        )}`;
        logger.error(errorMsg);
        throw error;
      });
  }

  async addUserToApplicants(user) {
    if (!user.username) {
      const errorMsg = 'Username missing from create applicant config';
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }

    const { protocol, host, port } = config.saveService;
    const reqParams = {
      url: `${protocol}://${host}:${port}/applicants`,
      method: 'POST',
      data: { username: user.username }
    };

    try {
      const response = await this.hofModel._request(reqParams);

      if (!response.data[0]?.applicant_id) {
        const errorMsg = `Applicant id not received in response ${JSON.stringify(response.data)}`;
        throw new Error(errorMsg);
      }

      return response.data[0]?.applicant_id;
    } catch (error) {
      const errorMsg = `Error adding user to applicants: ${JSON.stringify(
        { message: error.message, stack: error.stack, ...error }
      )}`;
      logger.error(errorMsg);
      throw error;
    }
  }
};
