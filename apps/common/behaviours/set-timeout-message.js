const config = require('../../../config');

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    const { route: currentRoute } = req.form.options;
    const saveExemptList = config.sessionDefaults.saveExemptions;
    if (saveExemptList.includes(currentRoute)) {
      return locals;
    }
    locals.timedOutSavedApplication = true;
    return locals;
  }
}
