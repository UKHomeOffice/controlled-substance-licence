const path = require('node:path');
const fs = require('node:fs');
const config = require('../config');

const { translateOption } = require('.');
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

  async renderHTML(res, content, pdfConfig, files) {
    const { htmlLang, licenceType, licenceLabel, amendment } = pdfConfig;
    const { dateFormat, timeFormat, dateLocales } = config;

    let localContent = Object.assign({}, content);
    localContent = this.sortSections(localContent, licenceType, htmlLang);

    localContent.htmlLang = htmlLang;
    localContent.css = await this.readCss();
    localContent['ho-logo'] = await this.readHOLogo();
    localContent.title = amendment ?
      `Amending ${licenceLabel.toLowerCase()} licence application` :
      `Apply for a domestic licence for controlled substances: ${licenceLabel}`;

    const pdfDateFormat = Object.assign({}, dateFormat, timeFormat);
    localContent.dateTime = new Intl.DateTimeFormat(dateLocales, pdfDateFormat).format(Date.now());

    if (files && files.length) {
      localContent.addFilesSection = true;
      localContent.files = files;
    } else if (localContent.files && localContent.files.length) {
      delete localContent.files;
    }

    return new Promise((resolve, reject) => {
      res.render('pdf.html', localContent, (err, html) => err ? reject(err) : resolve(html));
    });
  }

  createBaseConfig(req, res) {
    const htmlLang = res.locals.htmlLang || 'en';
    const formApp = req.baseUrl;
    if (formApp === '/registration') {
      return { htmlLang, licenceType: 'registration', licenceLabel: 'Registration' };
    }
    const licenceType = req.session['hof-wizard-common']?.['licence-type'];
    const licenceLabel = translateOption(req, 'licence-type', licenceType);
    const amendment = (req.sessionModel.get('application-form-type') === 'amend-application'
      || req.sessionModel.get('application-form-type') === 'continue-an-application')
      && req.sessionModel.get('amend-application-details');
    return { htmlLang, licenceType, licenceLabel, amendment };
  }

  async generatePdf(req, res, locals, pdfConfig, files) {
    try {
      const html = await this.renderHTML(res, locals, pdfConfig, files);
      this.set({ template: html });
      const pdfData = await this.save(null, error => {
        if (error) {
          req.log('error', `[ERROR IN MODEL WHILE SAVING/REQUEST] Error generating PDF: ${error.message}
            FULL ERROR: ${JSON.stringify(error)}`);
          throw error;
        }
      });
      const userType = files ? 'business' : 'applicant';
      req.log('info', `${pdfConfig.licenceLabel} ${userType} PDF data generated successfully`);
      return pdfData;
    } catch(error) {
      req.log('error', `Error generating ${pdfConfig.licenceLabel} PDF. Cause: ${error.status} - ${error.message}`);
      throw error;
    }
  }
};
