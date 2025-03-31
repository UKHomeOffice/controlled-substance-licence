'use strict';

const auth = require('../../../../utils/auth');

// @todo 'applicant-id' should be added to sessionModel once user is authenticated

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    req.log('info', 'Checking token validity');

    const sessionTokens = req.session['hof-wizard-common']?.tokens;

    const isValidToken = await auth.validateToken(sessionTokens);

    if (!isValidToken) {
      req.log('info', 'Invalid or missing token. Redirecting to sign-in page.');
      req.sessionModel.unset('tokens');

      return res.redirect('/sign-in');
    }

    if (auth.authorisedUserRole(req.sessionModel.get('tokens'))) {
      req.log('info', 'User is not authorised to apply for a license.');
      return res.redirect('/signed-in-successfully');
    }

    // Continue to the next middleware if the token is valid
    return next();
  }
};
