// Security responsible person redirects
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

// Compliance and Regulatory responsible person redirects
const checkResponsibleForCompReg = (req, currentRoute, action) => {
  if (
    currentRoute === '/compliance-and-regulatory' &&
    action === 'edit' &&
    (
      req.form.values['responsible-for-compliance-regulatory'] === 'same-as-managing-director' ||
      !!req.sessionModel.get('responsible-for-compliance-regulatory-full-name')
    )
  ) {
    return true;
  }
  return false;
};

const checkResponsibleForCompRegDetails = (req, currentRoute, action) => (
  currentRoute === '/person-responsible-for-compliance-and-regulatory' &&
  action === 'edit' &&
  !!req.sessionModel.get('responsible-for-compliance-regulatory-dbs-fullname')
);

const checkResponsibleForCompRegDbs = (req, currentRoute, action) => (
  currentRoute === '/regulatory-and-compliance-dbs' &&
  action === 'edit' &&
  !!req.sessionModel.get('responsible-for-compliance-regulatory-dbs-subscription')
);

// responsible person for witnessing the destruction of controlled drugs redirects
const checkResponsibleForWitnessDrugs = (req, currentRoute, action) => {
  if (
    currentRoute === '/who-witnesses-destruction-of-drugs' &&
    action === 'edit' &&
    (
      req.form.values['responsible-for-witnessing-the-destruction'] === 'same-as-managing-director' ||
      !!req.sessionModel.get('responsible-for-witnessing-full-name')
    )
  ) {
    return true;
  }
  return false;
};

const checkResponsibleForWitnessDrugsDetails = (req, currentRoute, action) => (
  currentRoute === '/person-to-witness' &&
  action === 'edit' &&
  !!req.sessionModel.get('responsible-for-witnessing-dbs-fullname')
);

const checkResponsibleForWitnessDrugsDbs = (req, currentRoute, action) => (
  currentRoute === '/witness-dbs' &&
  action === 'edit' &&
  !!req.sessionModel.get('responsible-for-witnessing-dbs-subscription')
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
      checkResponsibleForSecurityDbs(req, currentRoute, action),
      checkResponsibleForCompReg(req, currentRoute, action),
      checkResponsibleForCompRegDetails(req, currentRoute, action),
      checkResponsibleForCompRegDbs(req, currentRoute, action),
      checkResponsibleForWitnessDrugs(req, currentRoute, action),
      checkResponsibleForWitnessDrugsDetails(req, currentRoute, action),
      checkResponsibleForWitnessDrugsDbs(req, currentRoute, action)
    ].some(Boolean);

    if (shouldRedirectToConfirmStep) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
