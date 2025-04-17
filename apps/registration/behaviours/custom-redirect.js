
module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const { route: currentRoute, confirmStep } = req.form.options;
    const { action } = req.params;
    const formApp = req.baseUrl;

    this.emit('complete', req, res);

    const shouldRedirectToConfirmStep = req.sessionModel.get('referred-by-summary');

    if (shouldRedirectToConfirmStep) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
