const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = type => new this.ValidationError(key, { type: type });
    const whichChemical = req.form.values['which-chemical'];
    const chemicalNotListed = req.form.values['chemical-not-listed'];
    const manuallyEnterChemical = req.form.values['manually-enter-chemical'];

    if (key === 'which-chemical' && !whichChemical && !chemicalNotListed) {
      return validationErrorFunc('requiredChemicalList');
    }

    if (key === 'manually-enter-chemical' && chemicalNotListed === 'chemical-not-listed-checked') {
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
