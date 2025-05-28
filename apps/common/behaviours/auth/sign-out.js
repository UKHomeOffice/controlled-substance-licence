'use strict';

const auth = require('../../../../utils/auth');
const { resetAllSessions } = require('../../../../utils');

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    auth.setReq(req);
    auth.logout();

    req.log('info', 'Clear session on sign out');
    resetAllSessions(req);

    // Continue with the rest of the process
    return super.successHandler(req, res, next);
  }
};
