module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    if(!req.sessionModel.get('selectedLicenceType')) {
      const selectedLicenceType = req.form.values['licence-type-applyling-for'];
      req.sessionModel.set('selectedLicenceType', selectedLicenceType);
    }
    const isPrecursorChemicals = req.form.values['licence-type-applyling-for'] === 'precursor-chemicals';
    const isControlledDrugs = req.form.values['licence-type-applyling-for'] === 'controlled-drugs';

    req.sessionModel.set('isPrecursorChemicals', isPrecursorChemicals);
    req.sessionModel.set('isControlledDrugs', isControlledDrugs);


    return super.saveValues(req, res, next);
  }
};
