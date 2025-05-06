/* eslint-disable camelcase */
const { model: Model } = require('hof');
const config = require('../../../config');
const { generateErrorMsg } = require('../../../utils/index');
const { protocol, host, port } = config.saveService;
const applicationsUrl = `${protocol}://${host}:${port}/applications`;

module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    const { route: currentRoute } = req.form.options;
    const saveExemptList = config.sessionDefaults.saveExemptions;
    if (saveExemptList.includes(currentRoute)) {
      return locals;
    }
    locals.showSaveAndExit = true;
    return locals;
  }

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

    if (!session.steps.includes(currentRoute)) {
      session.steps.push(currentRoute);
    }

    // ensure no /edit steps are add to the steps property when we save to the store
    session.steps = session.steps.filter(step => !step.match(/\/change|edit|delete$/));

    const applicant_id = req.session['hof-wizard-common']?.['applicant-id'];
    const applicationId = req.sessionModel.get('application-id');
    const licence_type = req.sessionModel.get('licence-type');
    const status_id = 1;

    req.log('info', `Saving Form Session: ${applicationId ?? 'New application'}`);

    const patchData = { session };
    if (applicationId && req.sessionModel.get('application-form-type') !== 'continue-an-application') {
      req.log('info', `Overwriting saved application: ${applicationId}`);
      patchData.created_at = new Date().toISOString();
    }

    const postData = { session, applicant_id, licence_type, status_id };

    try {
      const reqParams = {
        url: applicationId ? `${applicationsUrl}/${applicationId}` : applicationsUrl,
        method: applicationId ? 'PATCH' : 'POST',
        data: applicationId ? patchData : postData
      };

      const hofModel = new Model();

      const response = await hofModel._request(reqParams);
      if (!response.data[0]?.id) {
        const errorMessage = `Id not received in response ${JSON.stringify(response.data)}`;
        throw new Error(errorMessage);
      }

      if (!applicationId) {
        req.sessionModel.set('application-id', response.data[0].id);
      }
    } catch (error) {
      req.log('error', `Failed to save application: ${generateErrorMsg(error)}`);
      return next(error);
    }

    if (req.body['save-and-exit']) {
      return res.redirect(`${req.baseUrl}/save-and-exit`);
    }

    return super.successHandler(req, res, next);
  }
};
