/* eslint-disable camelcase */

const axios = require('axios');
const config = require('../../../config');
const { genAxiosErrorMsg } = require('../../../utils/index');
const applicationsUrl = `${config.saveService.host}:${config.saveService.port}/applications`;

module.exports = superclass => class extends superclass {
  async saveValues(req, res, next) {
    // remove csrf secret and errors from session data to prevent CSRF Secret issues in the session
    const session = req.sessionModel.toJSON();
    delete session['csrf-secret'];
    delete session.errors;
    delete session['valid-token'];

    if (session.steps.indexOf(req.path) === -1) {
      session.steps.push(req.path);
    }

    // ensure no /edit steps are add to the steps property when we save to the store
    session.steps = session.steps.filter(step => !step.match(/\/change|edit$/));

    const applicantId = req.sessionModel.get('applicant-id');
    const applicationId = req.sessionModel.get('application-id');
    const applicationType = req.sessionModel.get('licence-type');

    req.log('info', `Saving Form Session: ${applicationId}`);

    try {
      const response = await axios({
        url: applicationId ? `${applicationsUrl}/${applicationId}` : applicationsUrl,
        method: applicationId ? 'PATCH' : 'POST',
        data: applicationId ? { session } : { session, applicantId, applicationType }
      });

      const resBody = response.data;

      if (resBody && resBody.length && resBody[0].id) {
        req.sessionModel.set('application-id', resBody[0].id);
      } else {
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
    return super.saveValues(req, res, next);
  }
};
