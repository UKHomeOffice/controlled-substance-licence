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
    const licenceLabel = translateOption(req, 'licence-type', this.licenceType) || 'Registration';
    const pdfConfig = { htmlLang, licenceType, licenceLabel, target: 'business' };
    try {
      const pdfData = await pdfConverter.generatePdf(req, res, locals, pdfConfig);

      // temporarily write data to root level file for testing
      fs.writeFile('output.pdf', pdfData, 'utf8', err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('File written successfully!');
      });
    } catch (error) {
      req.log('error', JSON.stringify(error));
      return next(error);
    }
    return super.successHandler(req, res, next);
  }
};
