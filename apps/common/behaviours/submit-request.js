const config = require('../../../config');
const { sendEmail, prepareUpload } = require('../../../utils/email-service');
const { getApplicationFiles } = require('../../../utils');

const PDFConverter = require('../../../utils/pdf-converter');
const FileUpload = require('../../../utils/file-upload');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // @todo: a few additional steps are required before sending the email:
    // - iCasework integration to create a case assosiated with the application
    // - obtain the unique reference number from iCasework (case id)
    // - update application record in DB with received reference number and application status

    // generate PDFs
    const locals = super.locals(req, res);
    const applicationFiles = getApplicationFiles(req, locals.rows);

    const pdfConverter = new PDFConverter();
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

    console.log('business DATA', businessPdfData);
    console.log('applicant DATA', applicantPdfData);

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
      req.log('info', 'Submission PDF uploaded successfully');
      // @todo: remove below log during icasework integration
      req.log('info', upload.toJSON().url);
    } catch (error) {
      const errorMsg = `Failed to upload business PDF: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // send applicant confirmation with PDF attachment
    const recipientEmail = req.sessionModel.get('email');
    const applicantSubmissionLink = prepareUpload(applicantPdfData);
    const personalisation = {
      referenceNumber,
      // @todo: 'body' should be removed once templates are ready
      body: 'Licence application submitted successfully.',
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
