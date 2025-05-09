const path = require('node:path');
const fs = require('node:fs');

const config = require('../config');
const { translateOption } = require('.');

const HofPdfConverter = require('hof').apis.pdfConverter;

module.exports = class PDFConverter extends HofPdfConverter {
  constructor(locals) {
    super();
    this.locals = locals;
  }

  readCss() {
    return new Promise((resolve, reject) => {
      const cssFile = path.resolve(__dirname, '../public/css/app.css');
      fs.readFile(cssFile, (err, data) => err ? reject(err) : resolve(data));
    });
  }

  readHOLogo() {
    return new Promise((resolve, reject) => {
      const hoLogoFile = path.resolve(__dirname, '../assets/images/ho-logo.png');
      fs.readFile(hoLogoFile, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(`data:image/png;base64,${data.toString('base64')}`);
      });
    });
  }

  sortSections(locals, licenceType, htmlLang) {
    const translations = require(`../apps/${licenceType ?? 'registration'}/translations/src/${htmlLang}/pages.json`);
    const sectionHeaders = Object.values(translations.confirm.sections);
    const orderedSections = sectionHeaders.map(obj => obj.header);
    let rows = locals.rows;

    rows = rows.slice().sort((a, b) => orderedSections.indexOf(a.section) - orderedSections.indexOf(b.section));

    locals.rows = rows;
    return locals;
  }

  async renderHTML(req, res) {
    const htmlLang = res.locals.htmlLang || 'en';
    const licenceType = req.session['hof-wizard-common']?.['licence-type'];
    const licenceLabel = translateOption(req, 'licence-type', licenceType) || 'Registration';

    let locals = this.sortSections(this.locals, licenceType, htmlLang);

    locals.title = `Apply for a domestic licence for controlled substances: ${licenceLabel}`;
    const pdfDateFormat = Object.assign({}, config.dateFormat, config.timeFormat);
    locals.dateTime = new Intl.DateTimeFormat(config.dateLocales, pdfDateFormat).format(Date.now());
    locals.htmlLang = htmlLang;

    // TODO: Add generated application reference number to the PDF.
    const refNumber = 'TODO: add reference';
    locals.referenceNumber = refNumber;

    locals.css = await this.readCss(req);
    locals['ho-logo'] = await this.readHOLogo();
    return new Promise((resolve, reject) => {
      res.render('pdf.html', locals, (err, html) => err ? reject(err) : resolve(html));
    });
  }

  async generatePdf(req, res) {
    try {
      const html = await this.renderHTML(req, res);
      this.set({ template: html });
      const pdfData = await this.save();
      req.log('info', 'PDF data generated successfully');
      return pdfData;
    } catch(error) {
      req.log('error', 'Error generating PDF data');
      throw error;
    }
  }
};
