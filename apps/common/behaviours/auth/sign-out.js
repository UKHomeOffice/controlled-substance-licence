'use strict';

const auth = require('../../../../utils/auth');

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    auth.logout();

    // @todo: clear session

    // Continue with the rest of the process
    return super.configure(req, res, next);
  }
};
