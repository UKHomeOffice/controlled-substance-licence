const validators = require('hof/controller/validation/validators');
const { isValidPhoneNumber } = require('../../../utils/index');

const lengthFieldvalidate = (fieldName, maxLength, minLength) => {
  if (fieldName) {
    if(!validators.max(fieldName.length, maxLength) || !validators.min(fieldName.length, minLength)) {
      return true;
    }
  }
  return false;
};
module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, { type: type, arguments: [args] });

    if (key === 'company-number') {
      const companyNumber = req.form.values[key];
      if (companyNumber) {
        if (!validators.regex(companyNumber, /^[A-Za-z\d]{2}\d{6}$/)) {
          return validationErrorFunc('companyNumber');
        }
      }
    }

    if (key === 'business-name') {
      const businessName = req.form.values[key];
      if (lengthFieldvalidate(businessName, 200, 3)) {return validationErrorFunc('lengthErrorMessage');}
    }

    if (key === 'business-type') {
      const businessType = req.form.values[key];
      if (lengthFieldvalidate(businessType, 200, 3)) {return validationErrorFunc('lengthErrorMessage');}
    }

    if (key === 'business-owner') {
      const businessOwner = req.form.values[key];
      if (lengthFieldvalidate(businessOwner, 200, 3)) {return validationErrorFunc('lengthErrorMessage');}
    }

    if (key === 'ordinance-survey-reference') {
      const gridReference = req.form.values[key];
      if (gridReference) {
        if (!validators.regex(gridReference, /^[A-Za-z]{2}[\/,\-| ]?\d{5}[\/,\-| ]?\d{5}/)) {
          return validationErrorFunc('numFormat');
        }

        if(!validators.max(gridReference.length, 14) || !validators.min(gridReference.length, 12)) {
          return validationErrorFunc('lengthSize');
        }
      }
    }

    if (key === 'telephone' || key === 'premises-telephone' ||
      key === 'invoicing-telephone' || key === 'who-is-completing-application-telephone' ||
      key === 'growing-location-uk-telephone' ||
      key === 'site-responsible-person-uk-telephone' ||
      key === 'authorised-witness-uk-telephone') {
      const phoneNumber = req.form.values[key];
      if (phoneNumber) {
        if (!isValidPhoneNumber(phoneNumber) || !validators.ukPhoneNumber(phoneNumber)) {
          return validationErrorFunc('ukPhoneNumber');
        }
      }
    }

    if(key === 'site-owner-telephone' || key === 'invoicing-contact-telephone') {
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
