const PDFConverter = require('../../../utils/pdf-converter');
const fs = require('node:fs');
const { translateOption } = require('../../../utils');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    // generate PDFs
    const locals = super.locals(req, res);
    const pdfConverter = new PDFConverter();
    const htmlLang = res.locals.htmlLang || 'en';
    const licenceType = req.session['hof-wizard-common']?.['licence-type'] || 'registration';
    const licenceLabel = translateOption(req, 'licence-type', licenceType) || 'Registration';
    const pdfConfig = { htmlLang, licenceType, licenceLabel };
    try {
      const [businessPdfData, applicantPdfData] = await Promise.all([
        pdfConverter.generatePdf(req, res, locals, Object.assign(pdfConfig, { target: 'business' })),
        pdfConverter.generatePdf(req, res, locals, Object.assign(pdfConfig, { target: 'applicant' }))
      ]);

      // temporarily write data to root level files for testing
      fs.writeFile('business.pdf', businessPdfData, 'utf8', err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File written successfully!');
      });
      fs.writeFile('applicant.pdf', applicantPdfData, 'utf8', err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File written successfully!');
      });
    } catch (error) {
      return next(error);
    }
    return super.successHandler(req, res, next);
  }
};
