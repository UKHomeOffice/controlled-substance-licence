const { findSatisfiedForkCondition } = require('../../../utils');

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
);

const checkHasAuthorisedDestruction = (req, currentRoute, action) => {
  if (
    currentRoute !== '/witness-destruction-of-drugs' ||
    action !== 'edit' ||
    req.form.values['require-witness-destruction-of-drugs'] !== 'no'
  ) {
    return false;
  }

  const hasTradingReasonsAdded = !!req.sessionModel.get('aggregated-trading-reasons')?.aggregatedValues?.length;
  const hasCompanyCertificateUploaded = !!req.sessionModel.get('company-registration-certificate');

  return hasTradingReasonsAdded || hasCompanyCertificateUploaded;
};

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    if (!req.form.options.ignoreCustomRedirect) {
      const { route: currentRoute, confirmStep } = req.form.options;
      const { action } = req.params;
      const formApp = req.baseUrl;
      const isContinueOnEdit = req.form.options.continueOnEdit;

      this.emit('complete', req, res);

      if (checkCompaniesHouseRef(req, currentRoute)) {
        return res.redirect(`${formApp}/register-again`);
      }

      if (
        currentRoute === '/witness-destruction-of-drugs' &&
        action === 'edit' &&
        req.form.values['require-witness-destruction-of-drugs'] === 'yes'
      ) {
        const witnessInfo = req.sessionModel.get('aggregated-witness-dbs-info');
        if (Array.isArray(witnessInfo?.aggregatedValues) && witnessInfo.aggregatedValues.length > 0) {
          witnessInfo.aggregatedValues = [];
          req.sessionModel.set('aggregated-witness-dbs-info', witnessInfo);
        }
      }

      const redirectChecks = [
        checkResponsibleForSecurity(req, currentRoute, action),
        checkResponsibleForSecurityDetails(req, currentRoute, action),
        checkResponsibleForSecurityDbs(req, currentRoute, action),
        checkResponsibleForCompReg(req, currentRoute, action),
        checkResponsibleForCompRegDetails(req, currentRoute, action),
        checkResponsibleForCompRegDbs(req, currentRoute, action),
        checkProvidingContractService(req, currentRoute, action),
        checkServiceDetails(req, currentRoute, action)
      ].some(Boolean);

      const shouldRedirectToInfoSummary =
        (req.sessionModel.get('referred-by-information-given-summary') &&
          currentRoute === '/witness-dbs-summary') ||
        checkHasAuthorisedDestruction(req, currentRoute, action);

      if (shouldRedirectToInfoSummary) {
        return res.redirect(`${formApp}/information-you-have-given-us`);
      }

      if (
        req.sessionModel.get('referred-by-information-given-summary') &&
        !findSatisfiedForkCondition(req, req.form.options.forks)
      ) {
        if (!isContinueOnEdit || redirectChecks) {
          return res.redirect(`${formApp}/information-you-have-given-us`);
        }
      }

      if (req.sessionModel.get('referred-by-summary') || redirectChecks) {
        return res.redirect(`${formApp}${confirmStep}`);
      }
    }

    return super.successHandler(req, res, next);
  }
};
