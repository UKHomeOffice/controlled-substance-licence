const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = type => new this.ValidationError(key, { type: type });
    console.log("key", key)
    console.log("reqform", req.form.values)
    const whichChemical = req.form.values['which-chemical'];
    const chemicalNotListed = req.form.values['chemical-not-listed']
    const manuallyEnteredChemical = req.form.values['manually-enter-chemical']
    

    if (key === 'manually-enter-chemical' && !whichChemical && !manuallyEnteredChemical) {
      console.log("iwejfhoiwejhfiowefhoiewfh")
        return validationErrorFunc('requiredChemicalName');
    }

    if (key === 'which-chemical' && !whichChemical && !chemicalNotListed) {
      console.log("iwejfhoiwejhfiowefhoiewfh2222")
        return validationErrorFunc('requiredChemicalList');
    }

    return super.validateField(key, req);
  }
};
