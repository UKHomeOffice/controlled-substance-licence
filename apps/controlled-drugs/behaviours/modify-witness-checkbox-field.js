module.exports = superclass => class extends superclass {
  configure(req, res, next) {
    const { route: currentRoute,} = req.form.options;
    
    if (URL.canParse(req.get('Referrer'))) {
      const referrer = new URL(req.get('Referrer'));
      const referrerPath = referrer.pathname;
      if (referrerPath.includes('/witness-dbs-summary') && currentRoute === '/authorised-witness-information') {
        if(!req.sessionModel.get('responsible-for-witnessing-full-name') && req.sessionModel.get('responsible-for-witnessing-confirmed-dbs')) {
          req.sessionModel.set('responsible-for-witnessing-confirmed-dbs', false);
        }
      }
       if(req.sessionModel.get('responsible-for-witnessing-full-name') && !req.sessionModel.get('responsible-for-witnessing-confirmed-dbs')) {
          req.sessionModel.set('responsible-for-witnessing-confirmed-dbs', true);
      }
    }
    super.configure(req, res, next);
  }
};