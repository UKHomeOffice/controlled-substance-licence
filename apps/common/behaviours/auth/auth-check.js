'use strict';

const config = require('../../../../config');
const logger = require('hof/lib/logger')({ env: config.env });
const auth = require('../../../../utils/auth');

// @todo 'applicant-id' should be added to sessionModel once user is authenticated

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    req.log('info', 'Checking token validity');

    const isValidToken = await auth.validateToken(req.sessionModel.get('tokens'));

    if (!isValidToken) {
      req.log('info', 'Invalid or missing token. Redirecting to sign-in page.');
      req.sessionModel.unset('tokens');
      return res.redirect('/sign-in');
    }

    if (auth.authorisedUserRole(req.sessionModel.get('tokens'))) {
      req.log('info', 'User is not authorized to apply for a license.');
      return res.redirect('/signed-in-successfully');
    }

    // Continue with the rest of the process if the token is valid
    return super.configure(req, res, next);
  }
};
