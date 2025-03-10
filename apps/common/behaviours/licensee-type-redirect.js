'use strict';
module.exports = superclass =>
  class extends superclass {
    successHandler(req, res, next) {
      const getApplicationType = req.sessionModel.get('application-form-type');
      const getLicenseeType = req.sessionModel.get('licensee-type');

      if (
        getApplicationType === 'new-application' &&
        getLicenseeType === 'first-time-licensee'
      ) {
        return res.redirect(`${req.baseUrl}/licence-holder-details`);
      } else if (
        getApplicationType === 'new-application' &&
        getLicenseeType === 'existing-licensee-renew-or-change-site'
      ) {
        return res.redirect(`${req.baseUrl}/company-number-changed`);
      } else if (
        getApplicationType === 'new-application' &&
        getLicenseeType === 'existing-licensee-applying-for-new-site'
      ) {
        return res.redirect(`${req.baseUrl}/why-new-licence`);
      }

      return super.successHandler(req, res, next);
    }
  };
