module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const currentRoute = req.form.options.route;
    const action = req.params.action;
    const formApp = req.baseUrl;
    const confirmStep = req.form.options.confirmStep;

    this.emit('complete', req, res);

    if (
      currentRoute === '/responsible-for-security' &&
      action === 'edit' &&
      formApp === '/controlled-drugs' &&
      req.form.values['responsible-for-security'] === 'same-as-managing-director'
    ) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    if (
      currentRoute === '/compliance-and-regulatory' &&
      action === 'edit' &&
      formApp === '/controlled-drugs' &&
      req.form.values['responsible-for-compliance-regulatory'] === 'same-as-managing-director'
    ) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    if (req.sessionModel.get('referred-by-summary')) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
