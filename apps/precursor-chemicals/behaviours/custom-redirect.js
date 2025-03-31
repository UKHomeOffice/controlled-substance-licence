const { currentStepSatisfiesForkCondition } = require('../../../utils');

// Handle routing around /companies-house-number and /cannot-continue
const checkCompaniesHouseRef = (req, currentRoute) => (
  currentRoute === '/companies-house-number' &&
  req.form.values['companies-house-number-change'] === 'yes'
);

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    if (!req.form.options.ignoreCustomRedirect) {
      const formApp = req.baseUrl;
      const { route: currentRoute, confirmStep } = req.form.options;
      const isContinueOnEdit = req.form.options.continueOnEdit;

      this.emit('complete', req, res);

      if (checkCompaniesHouseRef(req, currentRoute)) {
        return res.redirect(`${formApp}/cannot-continue`);
      }

      if (req.sessionModel.get('referred-by-summary')) {
        return res.redirect(`${formApp}${confirmStep}`);
      }

      if (
        req.sessionModel.get('referred-by-information-given-summary') &&
        !isContinueOnEdit &&
        !currentStepSatisfiesForkCondition(req)
      ) {
        return res.redirect(`${formApp}/information-you-have-given-us`);
      }
    }

    return super.successHandler(req, res, next);
  }
};
