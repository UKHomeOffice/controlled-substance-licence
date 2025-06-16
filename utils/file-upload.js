/* eslint-disable node/no-deprecated-api */
'use strict';

const url = require('url');
const Model = require('hof').model;
const uuid = require('uuid').v4;
const FormData = require('form-data');

const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });

module.exports = class UploadModel extends Model {
  constructor(...args) {
    super(...args);
    this.set('id', uuid());
  }

  async save() {
    if (!config.upload.hostname) {
      const errorMsg = 'File-vault hostname is not defined';
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }

    const attributes = {
      url: `${config.upload.hostname}/file`
    };

    const formData = new FormData();
    formData.append('document', this.get('data'), {
      filename: this.get('name'),
      contentType: this.get('mimetype')
    });

    const reqConf = url.parse(this.url(attributes));
    reqConf.data = formData;
    reqConf.method = 'POST';
    reqConf.headers = {
      ...formData.getHeaders()
    };

    try {
      const response = await this.request(reqConf);

      if (!response || typeof response !== 'object' || Object.keys(response).length === 0) {
        const errorMsg = 'Received empty or invalid response from file-vault';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

      if (!response.url) {
        const errorMsg = 'Did not receive a URL from file-vault';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

      logger.info(`Received response from file-vault with keys: ${Object.keys(response)}`);

      this.set({
        url: response.url.replace('/file/', '/file/generate-link/').split('?')[0]
      });

      this.unset('data');
    } catch (error) {
      logger.error(`File upload failed: ${error.message},
        error: ${JSON.stringify(error)}`);
      throw new Error(`File upload failed: ${error.message}`);
    }
  }

  async auth() {
    const requiredProperties = ['clientId', 'secret', 'username', 'password'];

    if (!config.keycloak.tokenUrl) {
      const errorMsg = 'Keycloak token URL is not defined';
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }

    for (const property of requiredProperties) {
      if (!config.keycloak.fileVault[property]) {
        const errorMsg = `Keycloak ${property} is not defined`;
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }
    }

    const tokenReq = {
      url: config.keycloak.tokenUrl,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        username: config.keycloak.fileVault.username,
        password: config.keycloak.fileVault.password,
        grant_type: 'password',
        client_id: config.keycloak.fileVault.clientId,
        client_secret: config.keycloak.fileVault.secret
      },
      method: 'POST'
    };

    try {
      const response = await this._request(tokenReq);

      if (!response.data || !response.data.access_token) {
        const errorMsg = 'No access token in response';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

      logger.info('Successfully retrieved Keycloak access token for File-vault service usage.');
      return {
        bearer: response.data.access_token
      };
    } catch(err) {
      const errorMsg = `Error occurred: ${err.message},
        Cause: ${err.response.status} ${err.response.statusText}, Data: ${JSON.stringify(err.response.data)}`;
      logger.error(errorMsg);
      throw new Error(errorMsg);
    }
  }
};
