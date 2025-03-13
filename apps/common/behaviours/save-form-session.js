/* eslint-disable camelcase */
const { model: Model } = require('hof');
const config = require('../../../config');
const { genAxiosErrorMsg } = require('../../../utils/index');
const { protocol, host, port } = config.saveService;
const applicationsUrl = `${protocol}//${host}:${port}/applications`;
module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // SaveFormSession is set at app level so ignore it for few steps that don't need save.
    const { route: currentRoute } = req.form.options;
    const saveExemptList = config.sessionDefaults.saveExemptions;
    if (saveExemptList.includes(currentRoute)) {
      return super.successHandler(req, res, next);
    }

    // remove csrf secret and errors from session data to prevent CSRF Secret issues in the session
    const session = req.sessionModel.toJSON();
    delete session['csrf-secret'];
    delete session.errors;
    delete session.errorValues;
    delete session['valid-token'];

    if (!session.steps.includes(currentRoute)) {
      session.steps.push(currentRoute);
    }

    // ensure no /edit steps are add to the steps property when we save to the store
    session.steps = session.steps.filter(step => !step.match(/\/change|edit$/));

    const applicant_id = req.sessionModel.get('applicant-id');
    const applicationId = req.sessionModel.get('application-id');
    const licence_type = req.sessionModel.get('licence-type');
    const status_id = 1;

    req.log('info', `Saving Form Session: ${applicationId ?? 'New application'}`);

    try {
      const reqParams = {
        url: applicationId ? `${applicationsUrl}/${applicationId}` : applicationsUrl,
        method: applicationId ? 'PATCH' : 'POST',
        data: applicationId ? { session } : { session, applicant_id, licence_type, status_id }
      };

      const hofModel = new Model();

      const response = await hofModel._request(reqParams);
      if (!response.data[0]?.id) {
        req.sessionModel.unset('application-id');
      }

      // @todo CSL-133 Add save-and-exit
      // if (req.body['save-and-exit']) {
      //  ...
      // }
    } catch (error) {
      req.log('error', `Failed to save application: ${genAxiosErrorMsg(error)}`);
      return next(error);
    }
    return super.successHandler(req, res, next);
  }
};
