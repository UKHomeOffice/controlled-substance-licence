const { model: Model } = require('hof');
const { genAxiosErrorMsg } = require('../../../utils/index');
const config = require('../../../config');
const applicationsUrl = `${config.saveService.host}:${config.saveService.port}/applications`;

module.exports = superclass => class extends superclass {
  async configure(req, res, next) {
    this.cleanSession(req);

    const applicantId = 1; // get applicantId from common session
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
        this.resumeSession(req, savedApplication);
      } else {
        // If there are no saved applications for user remove radio option to continue an application
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

    return super.configure(req, res, next);
  }

  cleanSession(req) {
    const { sessionDefaults } = config;
    const sessionAttributes = Object.keys(req.sessionModel.attributes);
    const cleanList = sessionAttributes.filter(item => !sessionDefaults.fields.includes(item));
    req.sessionModel.unset(cleanList);
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
