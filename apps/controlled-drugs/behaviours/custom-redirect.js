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

// Providing a service under contract section
const checkProvidingContractService = (req, currentRoute, action) => (
  currentRoute === '/service-under-contract' &&
  action === 'edit' &&
  (
    req.form.values['service-under-contract'] === 'no' ||
    !!req.sessionModel.get('service-details')
  )
);

const checkServiceDetails = (req, currentRoute, action) => (
  currentRoute === '/service-details' &&
  action === 'edit' &&
  !!req.sessionModel.get('service-expiry-date')
);

// Handle routing around /company-number-changed and /register-again
const checkCompaniesHouseRef = (req, currentRoute) => (
  currentRoute === '/company-number-changed' &&
  req.form.values['companies-house-number-change'] === 'yes'
)

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const { route: currentRoute, confirmStep } = req.form.options;
    const { action } = req.params;
    const formApp = req.baseUrl;

    this.emit('complete', req, res);

    if (checkCompaniesHouseRef(req, currentRoute)) {
      return res.redirect(`${formApp}/register-again`);
    }

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
      checkResponsibleForWitnessDrugsDbs(req, currentRoute, action),
      checkProvidingContractService(req, currentRoute, action),
      checkServiceDetails(req, currentRoute, action)
    ].some(Boolean);

    if (shouldRedirectToConfirmStep) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
