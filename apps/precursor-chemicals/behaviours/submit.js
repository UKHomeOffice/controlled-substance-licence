const PDFConverter = require('../../../utils/pdf-converter');
const fs = require('node:fs');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    const locals = super.locals(req, res);
    const pdfConverter = new PDFConverter(locals);
    try {
      const pdfData = await pdfConverter.generatePdf(req, res);
      fs.writeFile('output.pdf', pdfData, 'utf8', (err) => {
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
