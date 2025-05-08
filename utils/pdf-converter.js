const path = require('node:path');
const fs = require('node:fs');

const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });

const { translateOption } = require('.');

const HofPdfConverter = require('hof').apis.pdfConverter;

module.exports = class PDFConverter extends HofPdfConverter {
  readCss() {
    return new Promise((resolve, reject) => {
      const cssFile = path.resolve(__dirname, '../../../public/css/app.css');
      fs.readFile(cssFile, (err, data) => err ? reject(err) : resolve(data));
    });
  }

  readHOLogo() {
    return new Promise((resolve, reject) => {
      const hoLogoFile = path.resolve(__dirname, '../../../assets/images/ho-logo.png');
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
    const orderedSections = _.map(sectionHeaders, obj => obj.header);
    let rows = locals.rows;

    rows = rows.slice().sort((a, b) => orderedSections.indexOf(a.section) - orderedSections.indexOf(b.section));

    locals.rows = rows;
    return locals;
  }

  async renderHTML(req, res) {
    let locals = super.locals(req, res);

    const htmlLang = res.locals.htmlLang || 'en';
    const licenceType = req.session['hof-wizard-common']?.['licence-type'];
    const licenceLabel = translateOption(req, 'licence-type', licenceType) || 'Registration';

    if (this.behaviourConfig.sortSections) {
      locals = this.sortSections(locs, licenceType, htmlLang);
    }

    locals.title = `Apply for a domestic licence for controlled substances ${licenceLabel}`;
    const pdfDateFormat = Object.assign({}, config.dateFormat, config.timeFormat);
    locals.dateTime = new Intl.DateTimeFormat(config.dateLocales, pdfDateFormat).format(Date.now());
    locals.htmlLang = htmlLang;

    // Add generated reference number to the PDF.
    const refNumber = uuid();
    locals.referenceNumber = refNumber;

    locals.css = await this.readCss(req);
    locals['ho-logo'] = await this.readHOLogo();
    return new Promise((resolve, reject) => {
      res.render('pdf.html', locals, (err, html) => err ? reject(err) : resolve(html));
    });
  }

};
