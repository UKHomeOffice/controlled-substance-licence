module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    const currentFormType = req.form.values['licence-type-applyling-for'];
    req.sessionModel.set('currentFormType', currentFormType);

    return super.saveValues(req, res, next);
  }
};
