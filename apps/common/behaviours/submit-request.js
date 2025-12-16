const config = require('../../../config');
const { sendEmail, prepareUpload } = require('../../../utils/email-service');
const { getApplicationFiles } = require('../../../utils');

const PDFConverter = require('../../../utils/pdf-converter');
const FileUpload = require('../../../utils/file-upload');
const iCasework = require('../../../utils/icasework');
const buildCaseData = require('../../../utils/icasework/build-case-data');
const { updateApplication } = require('../../../utils/data-service');

const fs = require('node:fs');
const path = require('node:path');

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
      req.log('info', 'Submission PDF uploaded successfully');
    } catch (error) {
      const errorMsg = `Failed to upload business PDF: ${error}`;
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
      req.log('info', `Case created in iCasework. Reference: ${referenceNumber}`);
    } catch (error) {
      const errorMsg = `Failed to get Reference number from iCasework: ${error.message}`;
      req.log('error', errorMsg);
      return next(Error(errorMsg));
    }

    // Update application record with reference number and status
    try {
      const applicationData = {
        applicationId: req.sessionModel.get('application-id'),
        caseId: referenceNumber,
        statusId: 3 // Completed
      };

      await updateApplication(applicationData);
    } catch (error) {
      req.log('error', `Failed to updated application: ${error.message}`);
      return next(error);
    }

    // send applicant confirmation with PDF attachment
    const recipientEmail = req.sessionModel.get('who-is-completing-application-email');
    const applicantSubmissionLink = prepareUpload(applicantPdfData);
    const emailHeader = req.translate('journey.email-header');
    const emailIntro = req.translate('journey.email-intro');

    // Check if DBS update service instructions should be included
    let dbsUpdateServiceInstructions = '';
    const hasDbsSubscription = req.sessionModel.get('aggregated-witness-dbs-info')?.aggregatedValues?.some(item =>
      item.fields?.some(field =>
        field.field === 'responsible-for-witnessing-dbs-subscription' &&
        field.value === 'yes'
      )
    );

    if (hasDbsSubscription) {
      dbsUpdateServiceInstructions = fs.readFileSync(
        path.join(__dirname, '../views/content/en/dbs-update-service-instructions.md'),
        'utf8'
      );
    }

    const personalisation = {
      referenceNumber,
      emailHeader,
      emailIntro: emailIntro !== 'journey.email-intro' ? emailIntro : emailHeader,
      licenseType: pdfConfig.licenceLabel,
      applicantSubmissionLink,
      dbsUpdateServiceInstructions
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
