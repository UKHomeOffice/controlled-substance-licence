const { findSatisfiedForkCondition } = require('../../../utils');

// Handle routing around /companies-house-number and /cannot-continue
const checkCompaniesHouseRef = (req, currentRoute) => (
  currentRoute === '/company-number-changed' &&
   req.form.values['is-company-ref-changed'] === 'yes'
);

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const formApp = req.baseUrl;
    const { route: currentRoute, confirmStep } = req.form.options;
    const isContinueOnEdit = req.form.options.continueOnEdit;

    this.emit('complete', req, res);

    if (checkCompaniesHouseRef(req, currentRoute)) {
      return res.redirect(`${formApp}/register-again`);
    }

    if (req.sessionModel.get('referred-by-information-given-summary') &&
        !findSatisfiedForkCondition(req, req.form.options.forks)) {
      if (!isContinueOnEdit) {
        return res.redirect(`${formApp}/information-you-have-given-us`);
      }
    }

    if(req.sessionModel.get('referred-by-summary')) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
