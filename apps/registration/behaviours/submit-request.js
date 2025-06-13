const config = require('../../../config');
const { sendEmail, prepareUpload } = require('../../../utils/email-service');
const { getApplicationFiles } = require('../../../utils');

const PDFConverter = require('../../../utils/pdf-converter');
const FileUpload = require('../../../utils/file-upload');
const iCasework = require('../../../utils/icasework');
const buildCaseData = require('../../../utils/icasework/build-case-data');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // @todo: a few additional steps are required before sending the email:
    // - generate username and password for the user
    // - create user in Keycloak
    // - create user in DB

    // generate PDFs
    const locals = super.locals(req, res);
    const applicationFiles = getApplicationFiles(req, locals.rows);

    const pdfConverter = new PDFConverter();
    pdfConverter.on('fail', (error, responseData, originalSettings, statusCode, responseTime) => {
      const errorMsg = `PDF generation failed: ${JSON.stringify({message: error.message, stack: error.stack, ...error})}
      responseData: ${JSON.stringify(responseData)}
      originalSettings: ${JSON.stringify(originalSettings)}
      statusCode: ${statusCode}
      responseTime: ${responseTime}`;
      req.log('error', errorMsg);
    });
    pdfConverter.on('success', () => {
      req.log('info', 'PDF generation succeeded');
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

    // Upload business PDF via file-vault
    const businessPDF = {
      name: `${req.sessionID}.pdf`,
      data: businessPdfData,
      mimetype: 'application/pdf'
    };
    const upload = new FileUpload(businessPDF);
    try {
      await upload.save();
      businessPDF.url = upload.toJSON().url;
      req.log('info', 'Registration submission PDF uploaded successfully');
      // @todo: remove below log during icasework integration
      req.log('info', upload.toJSON().url);
    } catch (error) {
      const errorMsg = `Failed to upload registration submission PDF: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    let authToken;
    try {
      authToken = await upload.auth();
    } catch (error) {
      const errorMsg = `Failed to fetch authToken: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // Build caseData from session or other sources
    const caseData = buildCaseData(req, businessPDF, applicationFiles, authToken.bearer);

    // Create case in iCasework and get reference number
    let referenceNumber;
    iCasework.setReq(req);
    try {
      const newCase = await iCasework.createCase(caseData);
      referenceNumber = newCase.caseid;
      req.log('info', 'Case created in iCasework. Reference: %s', referenceNumber);
    } catch (error) {
      const errorMsg = `Failed to get Reference number from iCasework: ${error.message}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // @todo: update application record
    // - reference number
    // - submitted_at datetime
    // - status to 'submitted'

    const recipientEmail = req.sessionModel.get('email');
    // send applicant confirmation with PDF attachment
    const username = 'auto-generated-username'; // @todo: replace with the actual generated username
    const applicantSubmissionLink = prepareUpload(applicantPdfData);
    const personalisationConfirmation = {
      referenceNumber,
      applicantSubmissionLink,
      username
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
    const password = 'auto-generated-password'; // @todo: replace with the actual generated password
    const personalisationPassword = {
      password
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
