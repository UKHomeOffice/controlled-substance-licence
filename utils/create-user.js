/* eslint-disable node/no-deprecated-api */
'use strict';

const Model = require('hof').model;

const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });


module.exports = class UserCreator {
  constructor() {
    this.hofModel = new Model();
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

  async createUser(userDetails, authToken) {
    const username = 'auto-generated-username-2'; // @todo: replace with the actual generated username
    const password = 'Aaaaaa$8';
    try {
      const userRequestConfig = this.createRequestConfig(userDetails, authToken);
      const response = await this.hofModel._request(userRequestConfig);

      if (!response || typeof response !== 'object' || Object.keys(response).length === 0) {
        const errorMsg = 'Received empty or invalid response';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

    return response;
    } catch (error) {
      if (error.status === 409 && error.response.data.errorMessage === 'User exists with same username') {
        logger.warn('User exists with same username, regenerating name');
      } else {
        const errorMsg = `Error retrieving auth token: ${error.message},
        Cause: ${error.response.status} ${error.response.statusText}, Data: ${JSON.stringify(error.response.data)}`;
        logger.error(`User creation request failed: ${error.message},
          error: ${JSON.stringify({stack: error.stack, ...error})}`);
        throw new Error(`User creation request failed: ${error.message}`);
      }
    }
  }
};
