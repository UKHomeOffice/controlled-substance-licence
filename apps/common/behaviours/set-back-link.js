module.exports = superclass =>
  class extends superclass {
    locals(req, res) {
      const locals = super.locals(req, res);
      const isFirstTimeLicensee = req.session['hof-wizard-common'].isFirstTimeLicensee;
      if (locals?.route === 'licence-holder-details' && isFirstTimeLicensee) {
        locals.backLink = '/licensee-type';
      }
      return locals;
    }
  };
