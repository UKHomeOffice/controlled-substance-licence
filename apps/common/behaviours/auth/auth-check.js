'use strict';

const auth = require('../../../../utils/auth');

// @todo 'applicant-id' should be added to sessionModel once user is authenticated

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    req.log('info', 'Checking token validity');
    auth.setReq(req);

    const sessionTokens = req.session['hof-wizard-common']?.tokens;

    const { isValid, reason } = auth.validateToken(sessionTokens?.access_token);

    const checkUserAuthorisation = () => {
      if (!auth.authorisedUserRole(sessionTokens) && req.form.options.route !== '/signed-in-successfully') {
        req.log('info', 'User is not authorised to apply for a license.');
        res.redirect('/signed-in-successfully');
        return false;
      }
      return true;
    };

    if (!isValid) {
      if (reason === 'expired') {
        req.log('info', 'Access token expired. Attempting to refresh token...');
        try {
          const newTokens = await auth.refreshToken(sessionTokens?.refresh_token);

          if (newTokens) {
            req.log('info', 'Token refreshed successfully. Updating session.');
            req.session['hof-wizard-common'].tokens.access_token = newTokens.access_token;
            req.session['hof-wizard-common'].tokens.refresh_token = newTokens.refresh_token;

            // Check user authorisation after refreshing the token
            if (!checkUserAuthorisation()) {
              return false;
            }

            // Continue to the next middleware after refreshing the token and user is authorised
            return next();
          }
        } catch (error) {
          req.log('error', `Error refreshing token: ${error}`);
        }
      }

      req.log('info', 'Clear session on failed authentication');
      req.sessionModel.reset();
      return res.redirect('/sign-in');
    }

    // Check user authorisation
    if (!checkUserAuthorisation()) {
      return false;
    }

    // Continue to the next middleware if the token is valid and user is authorised
    return next();
  }
};
