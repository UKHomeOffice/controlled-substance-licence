const path = require('node:path');
const fs = require('node:fs');
const config = require('../config');

const HofPdfConverter = require('hof').apis.pdfConverter;

module.exports = class PDFConverter extends HofPdfConverter {
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
    const translations = require(`../apps/${licenceType}/translations/src/${htmlLang}/pages.json`);
    const sectionHeaders = Object.values(translations.confirm.sections);
    const orderedSections = sectionHeaders.map(obj => obj.header);
    let rows = locals.rows;

    rows = rows.slice().sort((a, b) => orderedSections.indexOf(a.section) - orderedSections.indexOf(b.section));

    locals.rows = rows;
    return locals;
  }

  async renderHTML(req, res, content, pdfConfig) {
    const { htmlLang, licenceType, licenceLabel, target } = pdfConfig;
    const { dateFormat, timeFormat, dateLocales } = config;

    const locals = this.sortSections(content, licenceType, htmlLang);

    if (locals.files && locals.files.length) {
      delete locals.files;
    }

    locals.htmlLang = htmlLang;
    locals.css = await this.readCss();
    locals['ho-logo'] = await this.readHOLogo();
    locals.title = `Apply for a domestic licence for controlled substances: ${licenceLabel}`;

    const pdfDateFormat = Object.assign({}, dateFormat, timeFormat);
    locals.dateTime = new Intl.DateTimeFormat(dateLocales, pdfDateFormat).format(Date.now());

    // TODO: Add generated application reference number to the PDF.
    const refNumber = 'TODO: add reference';
    locals.referenceNumber = refNumber;

    if (target === 'business') {
      const files = [];
      for (const section of locals.rows) {
        for (const field of section.fields) {
          if (field.file) {
            files.push({
              field: field.field,
              urls: req.sessionModel.get(field.field),
              label: field.label
            });
          }
        }
      }
      locals.addFilesSection = true;
      locals.files = files;
    }

    return new Promise((resolve, reject) => {
      res.render('pdf.html', locals, (err, html) => err ? reject(err) : resolve(html));
    });
  }

  async generatePdf(req, res, locals, pdfConfig) {
    try {
      const html = await this.renderHTML(req, res, locals, pdfConfig);
      this.set({ template: html });
      const pdfData = await this.save();
      req.log('info', `${pdfConfig.licenceLabel} PDF data generated successfully`);
      return pdfData;
    } catch(error) {
      req.log('error', `Error generating ${pdfConfig.licenceLabel} PDF. Cause: ${error.status} - ${error.message}`);
      throw error;
    }
  }
};
