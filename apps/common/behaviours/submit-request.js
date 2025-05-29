const config = require('../../../config');
const { sendEmail } = require('../../../utils/email-service');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // @todo: a few additional steps are required before sending the email:
    // - PDF generation
    // - iCasework integration to create a case assosiated with the application
    // - obtain the unique reference number from iCasework (case id)
    // - update application record in DB with received reference number and application status

    const recipientEmail = req.sessionModel.get('email');
    const licenceType = req.sessionModel.get('licence-type');
    const applicantSubmissionLink = 'link-to-PDF'; // @todo: replace with the actual link to the PDF document
    // @todo: replace with the actual reference number from iCasework
    const referenceNumber = 'reference-number-placeholder';
    const personalisation = {
      referenceNumber,
      emailHeader: req.translate('journey.email-header'),
      emailIntro: req.translate('journey.email-intro') || req.translate('journey.email-header'),
      licenseType: req.translate(`fields.${licenceType}.label`),
      applicantSubmissionLink
    };

    try {
      await sendEmail(
        config.govukNotify.emailTemplates.licenceApplicationUserConfirmation,
        recipientEmail,
        personalisation
      );
      req.log('info', 'Application confirmation sent successfully');
    } catch (error) {
      const errorMsg = `Failed to send Application confirmation email: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    return super.successHandler(req, res, next);
  }
};
