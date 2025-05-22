const config = require('../../../config');
const { sendEmail, prepareUpload } = require('../../../utils/email-service');
const { getApplicationFiles } = require('../../../utils');

const PDFConverter = require('../../../utils/pdf-converter');
const FileUpload = require('../../../utils/file-upload');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // @todo: a few additional steps are required before sending the email:
    // - generate username and password for the user
    // - create user in Keycloak
    // - create user in DB
    // - PDF generation
    // - iCasework integration to create a case assosiated with the application
    // - obtain the unique reference number from iCasework (case id)

    // generate PDFs
    const locals = super.locals(req, res);
    const applicationFiles = getApplicationFiles(req, locals.rows);

    const pdfConverter = new PDFConverter();
    pdfConverter.on('fail', error => {
      const errorMsg = `PDF generation failed: ${error}`;
      req.log('error', errorMsg);
    });
    pdfConverter.on('success', responseData => {
      req.log('info', `PDF generation succeeded`);
    });

    const pdfConfig = pdfConverter.createBaseConfig(req, res);
    let pdfData;
    try {
      pdfData = await Promise.all([
        pdfConverter.generatePdf(req, res, locals, pdfConfig, applicationFiles),
        pdfConverter.generatePdf(req, res, locals, pdfConfig, null)
      ]);
    } catch (error) {
      const errorMsg = `Failed to generate PDF data: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }
    const [businessPdfData, applicantPdfData] = pdfData;


    // @todo: 'referenceNumber' replace with the actual reference number from iCasework
    const referenceNumber = req.sessionModel.get('referenceNumber');

    // Upload business PDF via file-vault
    const businessPDF = {
      name: `${referenceNumber}.pdf`,
      data: businessPdfData,
      mimetype: 'application/pdf'
    };
    const upload = new FileUpload(businessPDF);
    try {
      await upload.save();
      req.log('info', 'Registration submission PDF uploaded successfully');
      // @todo: remove below log during icasework integration
      req.log('info', upload.toJSON().url);
    } catch (error) {
      const errorMsg = `Failed to upload registration submission PDF: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // send applicant confirmation with PDF attachment
    const recipientEmail = req.sessionModel.get('email');
    const applicantSubmissionLink = prepareUpload(applicantPdfData);

    const personalisationConfirmation = {
      referenceNumber,
      // @todo: 'body' should be removed once templates are ready
      body: 'Registration application submitted successfully.',
      applicantSubmissionLink
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
      referenceNumber,
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
