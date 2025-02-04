const checkResponsibleForSecurity = (req, currentRoute, action) => {
  if (
    currentRoute === '/responsible-for-security' &&
    action === 'edit' &&
    (
      req.form.values['responsible-for-security'] === 'same-as-managing-director' ||
      !!req.sessionModel.get('person-responsible-for-security-full-name')
    )
  ) {
    return true;
  }
  return false;
};

const checkResponsibleForSecurityDetails = (req, currentRoute, action) => (
  currentRoute === '/person-responsible-for-security' &&
  action === 'edit' &&
  !!req.sessionModel.get('person-responsible-for-security-dbs-fullname')
);

const checkResponsibleForSecurityDbs = (req, currentRoute, action) => (
  currentRoute === '/security-officer-dbs' &&
  action === 'edit' &&
  !!req.sessionModel.get('person-responsible-for-security-dbs-subscription')
);

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const currentRoute = req.form.options.route;
    const action = req.params.action;
    const formApp = req.baseUrl;
    const confirmStep = req.form.options.confirmStep;

    this.emit('complete', req, res);

    switch(true) {
      case req.sessionModel.get('referred-by-summary'):
      case checkResponsibleForSecurity(req, currentRoute, action):
      case checkResponsibleForSecurityDetails(req, currentRoute, action):
      case checkResponsibleForSecurityDbs(req, currentRoute, action):
        return res.redirect(`${formApp}${confirmStep}`);
      default:
        return super.successHandler(req, res, next);
    }
  }
};
