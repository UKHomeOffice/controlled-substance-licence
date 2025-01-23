module.exports = superclass =>
  class extends superclass {
    saveValues(req, res, next) {
      const isFirstTimeLicensee =  req.form.values['licensee-type'] === 'first-time-licensee';
      req.sessionModel.set('isFirstTimeLicensee', isFirstTimeLicensee);
      return super.saveValues(req, res, next);
    }
  };
