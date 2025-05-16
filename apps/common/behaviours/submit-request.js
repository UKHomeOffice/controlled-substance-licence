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
    const personalisation = {
      // @todo: 'referenceNumber' replace with the actual reference number from iCasework
      referenceNumber: req.sessionModel.get('referenceNumber'),
      // @todo: 'body' should be removed once templates are ready
      body: 'Licence application submitted successfully.'
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
