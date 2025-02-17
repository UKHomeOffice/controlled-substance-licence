const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, { type: type, arguments: [args] });
    function isValidPhoneNumber(phoneNumber) {
      const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
      return validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
    }

    if (key === 'company-number') {
      const companyNumber = req.form.values[key];
      if (companyNumber) {
        if (!validators.regex(companyNumber, /^[A-Za-z\d]{2}\d{6}$/)) {
          return validationErrorFunc('companyNumber');
        }
      }
    }

    if (key === 'telephone' || key === 'premises-telephone' ||
       key === 'invoicing-telephone' || key === 'who-is-completing-application-telephone') {
      const phoneNumber = req.form.values[key];
      if (phoneNumber) {
        if (!isValidPhoneNumber(phoneNumber) || !validators.ukPhoneNumber(phoneNumber)) {
          return validationErrorFunc('ukPhoneNumber');
        }
      }
    }

    if(key === 'site-owner-telephone') {
      const phoneNumber = req.form.values[key];
      if(phoneNumber) {
        if(!isValidPhoneNumber(phoneNumber)  || !validators.internationalPhoneNumber(phoneNumber)) {
          return validationErrorFunc('internationalPhoneNumber');
        }
      }
    }

    return super.validateField(key, req);
  }
};
