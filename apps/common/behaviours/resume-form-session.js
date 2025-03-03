const { model: Model } = require('hof');
const { genAxiosErrorMsg } = require('../../../utils/index');
const config = require('../../../config');
const applicationsUrl = `${config.saveService.host}:${config.saveService.port}/applications`;

module.exports = superclass => class extends superclass {
  async saveValues(req, res, next) {
    const applicantId = ''; // get applicantId from common session
    const applicationType = ''; // get applicationType from common session or req.baseUrl
    const licenseeType = req.form.values['licensee-type'];

    const hofModel = new Model();

    if (licenseeType === 'continue-an-application') {
      try {
        const userApplications = await hofModel._request({
          url: `${applicationsUrl}/applicant_id/${applicantId}`,
          method: 'GET'
        });

        const openApplications = userApplications.data
          .filter(application => {
            return application.application_type === applicationType && !application.submitted_at;
          })
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        const savedApplication = openApplications[openApplications.length - 1];
        this.resumeSession(req, savedApplication);
      } catch (error) {
        req.log('error', `Failed to get saved application: ${genAxiosErrorMsg(error)}`);
        return next(error);
      }
    }
    req.sessionModel.set('applicant-id', applicantId);
    req.sessionModel.set('application-type', applicationType);

    return super.saveValues(req, res, next);
  }

  resumeSession(req, application) {
    let session;

    const savedApplicationProps = {
      'application-id': application.id,
      'application-created-at': application.created_at,
      'application-expires-at': application.expires_at
    };

    try {
      session = JSON.parse(application.session);
    } catch (error) {
      // Log the error
      req.log('warn', `Error parsing session: ${error}`);
      session = application.session;
    }

    // ensure no /edit steps are add to the steps property when session resumed
    session.steps = session.steps.filter(step => !step.match(/\/change|edit$/));

    delete session['csrf-secret'];
    delete session.errors;

    req.sessionModel.set(Object.assign({}, session, savedApplicationProps));
  }
};
