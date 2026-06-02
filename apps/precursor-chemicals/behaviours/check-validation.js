const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = type => new this.ValidationError(key, { type: type });
    const whichChemical = req.form.values['which-chemical'];
    const chemicalNotListed = req.form.values['is-chemical-not-listed'];
    const manuallyEnterChemical = req.form.values['not-listed-chemical-name'];

    if (key === 'which-chemical' && !whichChemical && !chemicalNotListed) {
      return validationErrorFunc('requiredChemicalList');
    }

    if (key === 'not-listed-chemical-name' && chemicalNotListed === 'is-chemical-not-listed') {
      const notUrl = validators.notUrl(manuallyEnterChemical);
      const maxlength = 250;
      if (!manuallyEnterChemical) {
        return validationErrorFunc('requiredChemicalName');
      }
      if (!notUrl) {
        return validationErrorFunc('notUrl');
      }

      if (manuallyEnterChemical.length > maxlength) {
        return validationErrorFunc('maxlength');
      }
    }

    return super.validateField(key, req);
  }
};
