
'use strict';

const auth = require('../../../../utils/auth');
const { model: Model } = require('hof');
const config = require('../../../../config');
const { protocol, host, port } = config.saveService;
const applicantsUrl = `${protocol}://${host}:${port}/applicants`;

/**
 * Retrieves the applicant ID associated with the given username.
 *
 * @async
 * @param {string} username - The username for which to retrieve the applicant ID.
 * @returns {Promise<string|null|Error>} - Resolves with the applicant ID if found,
 *                                         `null` if no applicant ID is found,
 *                                         or an error object if the request fails.
 */
async function getApplicantId(username) {
  try {
    const hofModel = new Model();
    const response = await hofModel._request({
      url: `${applicantsUrl}/username/${username}`,
      method: 'GET'
    });
    return response.data[0]?.applicant_id || null;
  } catch (error) {
    return error;
  }
}

module.exports = superclass => class extends superclass {
  async validate(req, res, next) {
    auth.setReq(req);

    const validationErrorFunc = (key, type, args) =>
      new this.ValidationError(key, { type: type, arguments: [args] });

    try {
      const applicantId = await getApplicantId(req.form.values.username);
      if (!applicantId) {
        const errorMessage = 'Failed to retrieve applicant ID';
        throw new Error(errorMessage);
      }

      const tokens = await auth.getTokens(req.form.values.username, req.form.values.password);

      req.sessionModel.set('applicant-id', applicantId);
      req.sessionModel.set('auth_tokens', {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      });

    } catch (error) {
      req.log('error', `Validation failed: ${error.message}`);

      // Do not keep any entered password inputs from a failed login attempt
      req.form.values.password = '';

      const errs = {
        username: validationErrorFunc('username', 'authenticationError'),
        password: validationErrorFunc('password', 'authenticationError')
      };

      next(errs);
    }

    next();
  }

  saveValues(req, res, next) {
    // Skip saving values to sessionModel
    return next();
  }

  // @todo: Revise default redirect and redirect users after successful sign-in to the page they were trying to access
};
