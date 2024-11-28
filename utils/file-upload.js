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
      url: config.upload.hostname
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
      const data = await this.request(reqConf);

      if (!data.url) {
        const errorMsg = 'Did not receive a URL from file-vault';
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }

      logger.info(`Received response from file-vault with keys: ${Object.keys(data)}`);

      this.set({
        url: data.url.replace('/file/', '/file/generate-link/').split('?')[0]
      });

      this.unset('data');
    } catch (error) {
      logger.error(`File upload failed: ${error.message},
        error: ${JSON.stringify(error)}`);
      throw new Error(`File upload failed: ${error.message}`);
    }
  }

  async auth() {
    const requiredProperties = ['token', 'username', 'password', 'clientId', 'secret'];

    for (const property of requiredProperties) {
      if (!config.keycloak[property]) {
        const errorMsg = `Keycloak ${property} is not defined`;
        logger.error(errorMsg);
        throw new Error(errorMsg);
      }
    }

    const tokenReq = {
      url: config.keycloak.token,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        grant_type: 'client_credentials',
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

      logger.info('Successfully retrieved access token');
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
