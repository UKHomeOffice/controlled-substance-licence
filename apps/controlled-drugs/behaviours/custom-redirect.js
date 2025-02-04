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
    const { route: currentRoute, confirmStep } = req.form.options;
    const { action } = req.params;
    const formApp = req.baseUrl;

    this.emit('complete', req, res);

    const shouldRedirectToConfirmStep = [
      req.sessionModel.get('referred-by-summary'),
      checkResponsibleForSecurity(req, currentRoute, action),
      checkResponsibleForSecurityDetails(req, currentRoute, action),
      checkResponsibleForSecurityDbs(req, currentRoute, action)
    ].some(Boolean);

    if (shouldRedirectToConfirmStep) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
