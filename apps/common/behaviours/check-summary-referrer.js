module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    if (URL.canParse(req.get('Referrer'))) {
      const referrer = new URL(req.get('Referrer'));
      const referrerPath = referrer.pathname;
      if (referrerPath.includes('summary')) {
        req.sessionModel.set('referred-by-summary', true);
      }
    }
    return super.getValues(req, res, next);
  }

  successHandler(req, res, next) {
    if (req.sessionModel.get('referred-by-summary')) {
      return res.redirect(`${req.baseUrl}${req.form.options.confirmStep}`);
    }
    return super.successHandler(req, res, next);
  }
};
