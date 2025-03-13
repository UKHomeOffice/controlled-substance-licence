const { model: Model } = require('hof');
const { genAxiosErrorMsg } = require('../../../utils/index');
const config = require('../../../config');
const { protocol, host, port } = config.saveService;
const applicationsUrl = `${protocol}//${host}:${port}/applications`;

module.exports = superclass => class extends superclass {
  async getValues(req, res, next) {
    this.cleanSession(req);

    const applicantId = 1; // get applicantId from common session logged in user
    const licenceType = req.session['hof-wizard-common']['licence-type'];

    const hofModel = new Model();

    try {
      const userApplications = await hofModel._request({
        url: `${applicationsUrl}/applicant_id/${applicantId}`,
        method: 'GET'
      });

      const openApplications = userApplications.data
        .filter(application => application.licence_type === licenceType && !application.submitted_at);

      const savedApplication = openApplications.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      )[openApplications.length - 1];

      if (savedApplication) {
        req.sessionModel.set('application-to-resume', savedApplication);
      } else {
        // If there are no saved applications for user remove radio option for continue an application
        const applicationTypeOptions = req.form.options.fields['application-form-type'].options;
        req.form.options.fields['application-form-type'].options = applicationTypeOptions.filter(
          radio => radio.value !== 'continue-an-application'
        );
      }
    } catch (error) {
      req.log('error', `Failed to get saved application: ${genAxiosErrorMsg(error)}`);
      return next(error);
    }

    req.sessionModel.set('applicant-id', applicantId);
    req.sessionModel.set('licence-type', licenceType);

    return super.getValues(req, res, next);
  }

  cleanSession(req) {
    const { sessionDefaults } = config;
    const sessionAttributes = Object.keys(req.sessionModel.attributes);
    const cleanList = sessionAttributes.filter(item => !sessionDefaults.fields.includes(item));
    req.sessionModel.unset(cleanList);
  }

  saveValues(req, res, next) {
    const resumeApplication = req.form.values['application-form-type'] === 'continue-an-application';
    const applicationToResume = req.sessionModel.get('application-to-resume');
    if (resumeApplication && applicationToResume) {
      this.resumeSession(req, applicationToResume);
    }
    req.sessionModel.unset('application-to-resume');
    return super.saveValues(req, res, next);
  }

  resumeSession(req, application) {
    req.log('info', `Resuming Form Session: ${application.id}`);

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

    req.sessionModel.set(Object.assign({}, session, savedApplicationProps));
  }
};
