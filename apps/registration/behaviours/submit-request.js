const config = require('../../../config');
const { sendEmail } = require('../../../utils/email-service');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // @todo: a few additional steps are required before sending the email:
    // - generate username and password for the user
    // - create user in Keycloak
    // - create user in DB
    // - PDF generation
    // - iCasework integration to create a case assosiated with the application
    // - obtain the unique reference number from iCasework (case id)

    const recipientEmail = req.sessionModel.get('email');
    const personalisationConfirmation = {
      // @todo: 'referenceNumber' replace with the actual reference number from iCasework
      referenceNumber: req.sessionModel.get('referenceNumber'),
      // @todo: 'body' should be removed once templates are ready
      body: 'Registration application submitted successfully.'
    };

    try {
      await sendEmail(
        config.govukNotify.emailTemplates.registrationUserConfirmation,
        recipientEmail,
        personalisationConfirmation
      );
      req.log('info', 'Registration confirmation sent successfully');
    } catch (error) {
      const errorMsg = `Failed to send Registration confirmation email: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // Send the email with password

    const personalisationPassword = {
      // @todo: 'referenceNumber' replace with the actual reference number from iCasework
      referenceNumber: req.sessionModel.get('referenceNumber'),
      // @todo: 'body' should be removed once templates are ready
      body: 'Password email.'
    };
    try {
      await sendEmail(
        config.govukNotify.emailTemplates.registrationPassword,
        recipientEmail,
        personalisationPassword
      );
      req.log('info', 'Password email sent successfully');
    } catch (error) {
      const errorMsg = `Failed to send Password email: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    return super.successHandler(req, res, next);
  }
};
