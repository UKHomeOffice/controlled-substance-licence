/**
 * Use this behaviour as an accompanyment to 'custom-redirect'
 * if you will lose the edit action before you need to redirect to summary
 * e.g. with aggreagte loop update conditions.
 */
module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    if (URL.canParse(req.get('Referrer'))) {
      const referrer = new URL(req.get('Referrer'));
      const referrerPath = referrer.pathname;
      if (referrerPath.includes(req.form.options.confirmStep)) {
        req.sessionModel.set('referred-by-summary', true);
      }
    }
    return super.getValues(req, res, next);
  }
};
