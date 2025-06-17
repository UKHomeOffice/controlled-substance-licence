const config = require('../../../config');
const { sendEmail, prepareUpload } = require('../../../utils/email-service');
const { getApplicationFiles } = require('../../../utils');
const { generatePassword } = require('../../../utils/pass-generator');

const PDFConverter = require('../../../utils/pdf-converter');
const FileUpload = require('../../../utils/file-upload');
const UserCreator = require('../../../utils/user-creator');
const iCasework = require('../../../utils/icasework');
const buildCaseData = require('../../../utils/icasework/build-case-data');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // generate PDFs
    const locals = super.locals(req, res);
    const applicationFiles = getApplicationFiles(req, locals.rows);

    const pdfConverter = new PDFConverter();
    pdfConverter.on('fail', (error, responseData, originalSettings, statusCode, responseTime) => {
      const errorMsg = `PDF generation failed: message: ${error.message}, stack: ${error.stack}
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
    } catch (error) {
      const errorMsg = `Failed to upload registration submission PDF: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    const userDetails = {
      email: req.sessionModel.get('email'),
      companyName: req.sessionModel.get('company-name'),
      companyPostcode: req.sessionModel.get('licence-holder-postcode'),
      password: await generatePassword(
        config.keycloak.passwordPolicy.length,
        config.keycloak.passwordPolicy.characterSet
      )
    };

    // Create user account in auth provider
    // Add user to applicants
    try {
      const userCreator = new UserCreator();
      const authToken = await userCreator.auth();
      const registeredUser = await userCreator.registerUser(userDetails, authToken);
      const applicantId = await userCreator.addUserToApplicants(registeredUser);
      Object.assign(userDetails, registeredUser, { applicantId });
      req.sessionModel.set('applicant-username', userDetails.username);
    } catch (error) {
      const errorMsg = `Failed to create new user: ${error}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // Fetch auth token required for generating document links in caseData
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
      req.sessionModel.set('referenceNumber', referenceNumber);
      req.log('info', 'Case created in iCasework. Reference: %s', referenceNumber);
    } catch (error) {
      const errorMsg = `Failed to get Reference number from iCasework: ${error.message}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // send applicant confirmation with PDF attachment
    const applicantSubmissionLink = prepareUpload(applicantPdfData);
    const personalisationConfirmation = {
      referenceNumber,
      applicantSubmissionLink,
      username: userDetails.username
    };

    try {
      await sendEmail(
        config.govukNotify.emailTemplates.registrationUserConfirmation,
        userDetails.email,
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
      password: userDetails.password
    };

    try {
      await sendEmail(
        config.govukNotify.emailTemplates.registrationPassword,
        userDetails.email,
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
