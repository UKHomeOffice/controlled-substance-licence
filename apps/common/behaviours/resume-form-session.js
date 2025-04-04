const { model: Model } = require('hof');
const { generateErrorMsg } = require('../../../utils/index');
const config = require('../../../config');
const { protocol, host, port } = config.saveService;
const applicationsUrl = `${protocol}://${host}:${port}/applications`;

module.exports = superclass => class extends superclass {
  async getValues(req, res, next) {
    try {
      this.cleanSession(req);

      const applicantId = 1; // todo: get applicantId from common session logged in user
      const licenceType = req.session['hof-wizard-common']?.['licence-type'];

      const hofModel = new Model();

      const userApplications = await hofModel._request({
        url: `${applicationsUrl}/applicant_id/${applicantId}`,
        method: 'GET'
      });

      const openApplications = userApplications.data
        .filter(application => application.licence_type === licenceType && !application.submitted_at);

      const savedApplication = openApplications.reduce((latest, current) => {
        return !latest || current.created_at > latest.created_at ? current : latest;
      }, null);

      if (savedApplication) {
        req.sessionModel.set('application-to-resume', savedApplication);
      } else {
        // If there are no saved applications for user remove radio option for continue an application
        const applicationTypeOptions = req.form.options.fields['application-form-type'].options;
        req.form.options.fields['application-form-type'].options = applicationTypeOptions.filter(
          radio => radio.value !== 'continue-an-application'
        );
      }
      req.sessionModel.set('applicant-id', applicantId);
      req.sessionModel.set('licence-type', licenceType);
    } catch (error) {
      req.log('error', `Failed to get saved application: ${generateErrorMsg(error)}`);
      return next(error);
    }
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
      try {
        this.resumeSession(req, applicationToResume);
      } catch (error) {
        // Saved session data is corrupt or cannot be resumed in this format
        req.log('error', `Error parsing session: ${error}`);
        return next(error);
      }
    }
    req.sessionModel.unset('application-to-resume');
    return super.saveValues(req, res, next);
  }

  resumeSession(req, application) {
    req.log('info', `Resuming Form Session: ${application.id}`);

    const savedApplicationProps = {
      'application-id': application.id,
      'application-created-at': application.created_at,
      'application-expires-at': application.expires_at
    };

    const session = typeof application.session === 'string' ? JSON.parse(application.session) : application.session;

    req.sessionModel.set(Object.assign({}, session, savedApplicationProps));
  }
};
