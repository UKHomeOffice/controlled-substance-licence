'use strict';

const auth = require('../../../../utils/auth');
const { resetAllSessions } = require('../../../../utils');

module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    auth.setReq(req);
    auth.logout();

    req.log('info', 'Clear session on sign out');
    resetAllSessions(req);

    return super.configure(req, res, next);
  }
};
