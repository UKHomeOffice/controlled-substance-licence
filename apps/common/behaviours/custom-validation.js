const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, { type: type, arguments: [args] });

    if (key === 'company-number') {
      const companyNumber = req.form.values[key];
      if (companyNumber) {
        if (!validators.regex(companyNumber, /^[A-Za-z]{1,2}\d{8,12}$/)) {
          return validationErrorFunc('companyNumber');
        }
      }
    }

    if (key === 'telephone' || key === 'premises-telephone' ||
       key === 'invoicing-telephone' || key === 'who-is-completing-application-telephone') {
      const phoneNumber = req.form.values[key];
      if (phoneNumber) {
        const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
        const isValidphoneNumber = validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
        if (!isValidphoneNumber || !validators.ukPhoneNumber(phoneNumber)) {
          return validationErrorFunc('ukPhoneNumber');
        }
      }
    }

    return super.validateField(key, req);
  }
};
