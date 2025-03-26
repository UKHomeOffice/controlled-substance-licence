// Handle routing around /companies-house-number and /cannot-continue
const checkCompaniesHouseRef = (req, currentRoute) => (
  currentRoute === '/companies-house-number' &&
  req.form.values['companies-house-number-change'] === 'yes'
);

module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const formApp = req.baseUrl;
    const { route: currentRoute, confirmStep } = req.form.options;

    this.emit('complete', req, res);

    if (checkCompaniesHouseRef(req, currentRoute)) {
      return res.redirect(`${formApp}/cannot-continue`);
    }

    if(req.sessionModel.get('referred-by-summary')) {
      return res.redirect(`${formApp}${confirmStep}`);
    }

    return super.successHandler(req, res, next);
  }
};
