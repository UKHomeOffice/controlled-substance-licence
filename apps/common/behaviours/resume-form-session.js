const { model: Model } = require('hof');
const { genAxiosErrorMsg } = require('../../../utils/index');
const config = require('../../../config');
const applicationsUrl = `${config.saveService.host}:${config.saveService.port}/applications`;

module.exports = superclass => class extends superclass {
  getValues(req, res, next) {
    console.log(req.sessionModel.attributes)
    return super.getValues(req, res, next)
  }

  async saveValues(req, res, next) {
    this.cleanSession(req);

    const applicantId = 1; // get applicantId from common session
    const licenceType = 1; // get licenceType from common session or req.baseUrl
    const applicationFormType = req.form.values['application-form-type'];

    const hofModel = new Model();

    if (applicationFormType === 'continue-an-application') {
      try {
        const userApplications = await hofModel._request({
          url: `${applicationsUrl}/applicant_id/${applicantId}`,
          method: 'GET'
        });

        const openApplications = userApplications.data
          .filter(application => application.licence_type_id === licenceType && !application.submitted_at);

        const savedApplication = openApplications.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        )[openApplications.length - 1];

        if (savedApplication) {
          this.resumeSession(req, savedApplication);
        }
      } catch (error) {
        req.log('error', `Failed to get saved application: ${genAxiosErrorMsg(error)}`);
        return next(error);
      }
    }
    req.sessionModel.set('applicant-id', applicantId);
    req.sessionModel.set('licence-type', licenceType);

    return super.saveValues(req, res, next);
  }

  cleanSession(req) {
    const { sessionDefaults } = config;
    const sessionAttributes = Object.keys(req.sessionModel.attributes);
    const cleanList = sessionAttributes.filter(item => !sessionDefaults.fields.includes(item));
    req.sessionModel.unset(cleanList);
    // req.sessionModel.set('steps', SESSION_DEFAULTS.steps);
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
