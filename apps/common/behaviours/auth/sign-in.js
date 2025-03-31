
'use strict';

const auth = require('../../../../utils/auth');

module.exports = superclass => class extends superclass {
  validate(req, res, next) {
    const validationErrorFunc = (key, type, args) =>
      new this.ValidationError('username', { type: type, arguments: [args] });

    return auth.getTokens(req.form.values.username, req.form.values.password)
      .then(tokens => {
        req.sessionModel.set('tokens', {
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token
        });

        // Continue the rest of the process if the token is valid
        next();
      })
      .catch(error => {
        const errs = {
          username: validationErrorFunc('username', error.type),
          password: validationErrorFunc('password', error.type)
        };

        return next(errs);
      });
  }

  saveValues(req, res, next) {
    // Skip saving values to sessionModel
    next();
  }

  // @todo: Revise default redirect and redirect users after successful sign-in to the page they were trying to access
};
