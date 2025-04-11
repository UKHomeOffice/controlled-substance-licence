'use strict';

const auth = require('../../../../utils/auth');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    auth.setReq(req);
    await auth.logout();

    req.log('info', 'Clear session on sign out');
    req.sessionModel.reset();

    // Continue with the rest of the process
    return super.successHandler(req, res, next);
  }
};
