'use strict';

const config = require('../../../../config');
const logger = require('hof/lib/logger')({ env: config.env });
const auth = require('../../../../utils/auth');

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    auth.logout();

    // Continue with the rest of the process if the token is valid
    return super.configure(req, res);
  }
};
