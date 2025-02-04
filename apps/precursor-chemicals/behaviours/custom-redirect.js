module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const formApp = req.baseUrl;
    const confirmStep = req.form.options.confirmStep;

    this.emit('complete', req, res);

    if(req.sessionModel.get('referred-by-summary')) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
