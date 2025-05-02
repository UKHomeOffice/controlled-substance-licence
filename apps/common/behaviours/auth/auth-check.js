'use strict';

const auth = require('../../../../utils/auth');
const { resetAllSessions } = require('../../../../utils');

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    req.log('info', 'Checking token validity');
    auth.setReq(req);

    const authTokens = req.session['hof-wizard-common']?.auth_tokens;

    let { isAccessTokenValid, invalidTokenReason } = auth.validateAccessToken(authTokens?.access_token);

    if (!isAccessTokenValid && invalidTokenReason === 'expired') {
      req.log('info', 'Access token expired. Attempting to refresh token...');
      try {
        const newTokens = await auth.getFreshTokens(authTokens?.refresh_token);

        if (!newTokens) {
          throw new Error('Failed to refresh tokens');
        }

        req.log('info', 'Token refreshed successfully. Updating session.');
        req.session['hof-wizard-common'].auth_tokens.access_token = newTokens.access_token;
        req.session['hof-wizard-common'].auth_tokens.refresh_token = newTokens.refresh_token;

        // Validate the new access token
        ({ isAccessTokenValid, invalidTokenReason } = auth.validateAccessToken(newTokens.access_token));
      } catch (error) {
        req.log('error', error.message);
      }
    }

    if (!isAccessTokenValid) {
      req.log('info', 'Clear session on failed authentication');
      resetAllSessions(req);
      return res.redirect('/sign-in');
    }

    // Check user authorisation
    if (!auth.authorisedUserRole(authTokens?.access_token) && req.form.options.route !== '/signed-in-successfully') {
      req.log('info', 'User is not authorised to apply for a license.');
      return res.redirect('/signed-in-successfully');
    }

    // Continue to the next middleware if the token is valid and user is authorised
    return next();
  }
};
