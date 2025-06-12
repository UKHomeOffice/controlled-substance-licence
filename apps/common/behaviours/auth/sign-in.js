
'use strict';

const auth = require('../../../../utils/auth');
const { getApplicantId } = require('../../../../utils/data-service');

module.exports = superclass => class extends superclass {
  async validate(req, res, next) {
    auth.setReq(req);

    const validationErrorFunc = (key, type) =>
      new this.ValidationError(key, { type: type});

    try {
      const applicantId = await getApplicantId(req.form.values.username?.toUpperCase());
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

      return next(errs);
    }

    return next();
  }

  saveValues(req, res, next) {
    // Skip saving values to sessionModel
    return next();
  }

  // @todo: Revise default redirect and redirect users after successful sign-in to the page they were trying to access
};
