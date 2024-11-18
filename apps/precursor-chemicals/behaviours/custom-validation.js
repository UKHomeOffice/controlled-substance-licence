const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, {type: type, arguments: [args]});

    if (key === 'premises-address-line-1') {
      if (!validators.required(req.form.values[key])) {
        return validationErrorFunc('required');
      }
      if (req.form.values[key]?.length > 250) {
        return validationErrorFunc('maxlength');
      }
      if (!validators.notUrl(req.form.values[key])) {
        return validationErrorFunc('notUrl');
      }
    }

    if (key === 'premises-address-line-2') {
      if (req.form.values[key]?.length > 250) {
        return validationErrorFunc('maxlength');
      }
      if (!validators.notUrl(req.form.values[key])) {
        return validationErrorFunc('notUrl');
      }
    }

    if (key === 'premises-town-or-city') {
      if (!validators.required(req.form.values[key])) {
        return validationErrorFunc('required');
      }
      if (req.form.values[key]?.length > 250) {
        return validationErrorFunc('maxlength');
      }
      if (!validators.notUrl(req.form.values[key])) {
        return validationErrorFunc('notUrl');
      }
    }

    if (key === 'premises-postcode') {
      if (!validators.required(req.form.values[key])) {
        return validationErrorFunc('required');
      }
      if (req.form.values[key]?.length > 250) {
        return validationErrorFunc('maxlength');
      }
      if (!validators.notUrl(req.form.values[key])) {
        return validationErrorFunc('notUrl');
      }

      if (!validators.postcode(req.form.values[key])) {
        return validationErrorFunc('postcode');
      }
    }

    if(key === 'premises-telephone') {
      if (!validators.required(req.form.values[key])) {
        return validationErrorFunc('required');
      }

      if (req.form.values[key]?.length < 8 || req.form.values[key]?.length > 16) {
        return validationErrorFunc('maxlength');
      }

      if (!validators.ukPhoneNumber(req.form.values[key])) {
        return validationErrorFunc('ukPhoneNumber');
      }
    }

    if(key === 'premises-email') {
      if (!validators.required(req.form.values[key])) {
        return validationErrorFunc('required');
      }

      if (req.form.values[key]?.length < 6 || req.form.values[key]?.length > 256) {
        return validationErrorFunc('maxlength');
      }

      if (!validators.email(req.form.values[key])) {
        return validationErrorFunc('email');
      }
    }

    return super.validateField(key, req);
  }
};
