const PDFConverter = require('../../utils/pdf-converter');
const reqres = require('hof').utils.reqres;
const path = require('node:path');
const fs = require('node:fs');

const converterDir = path.resolve('./utils');
const cssDir = path.resolve('./public/css/app.css');
const HOLogoDir = path.resolve('./assets/images/ho-logo.png');

describe('PDFConverter class: ', () => {
  let req;
  let res;
  let locals;
  let sortedLocals;
  let files;
  let pdfConfig;
  let pdfConverter;
  let setSpy;
  let pathSpy;
  let fsSpy;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    pdfConverter = new PDFConverter();

    pathSpy = jest.spyOn(path, 'resolve');
    fsSpy = jest.spyOn(fs, 'readFile');

    pdfConfig = {
      htmlLang: 'en',
      licenceType: 'precursor-chemicals',
      licenceLabel: 'Precursor chemicals',
      amendment: false
    };

    locals = {
      rows: [
        {
          section: 'Evidence',
          fields: [
            {
              label: 'Applicant certificate of good conduct',
              value: 'cert.png',
              step: '/upload-conduct-certificate',
              field: 'certificate-of-good-conduct',
              file: true
            }
          ],
          omitFromPdf: false
        },
        {
          section: 'About the licence',
          fields: [
            {
              label: 'Reason for chemical application',
              value: 'test-reason',
              step: '/why-chemicals-needed',
              field: 'chemicals-used-for'
            }
          ],
          omitFromPdf: false
        }
      ]
    };

    sortedLocals = {
      rows: [
        {
          section: 'About the licence',
          fields: [
            {
              label: 'Reason for chemical application',
              value: 'test-reason',
              step: '/why-chemicals-needed',
              field: 'chemicals-used-for'
            }
          ],
          omitFromPdf: false
        },
        {
          section: 'Evidence',
          fields: [
            {
              label: 'Applicant certificate of good conduct',
              value: 'cert.png',
              step: '/upload-conduct-certificate',
              field: 'certificate-of-good-conduct',
              file: true
            }
          ],
          omitFromPdf: false
        }
      ]
    };

    files = [
      {
        field: 'certificate-of-good-conduct',
        urls: ['url', 'url'],
        label: 'Applicant certificate of good conduct'
      }
    ];
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  describe('readCSS method', () => {
    it('calls path.resolve and fs.readFile with the correct values', async () => {
      await pdfConverter.readCss();
      expect(pathSpy).toHaveBeenCalledWith(converterDir, '../public/css/app.css');
      expect(fsSpy).toHaveBeenCalledWith(cssDir, expect.any(Function));
    });

    it('rejects with an error on failure', async () => {
      fs.readFile = jest.fn().mockImplementation((filePath, cb) => {
        cb(new Error('readFile error'));
      });
      pdfConverter.readCss()
        .catch(error => {
          expect(error.message).toBe('readFile error');
        });
    });
  });

  describe('readHOLogo method', () => {
    it('calls path.resolve and fs.readFilewith the correct values', async () => {
      await pdfConverter.readHOLogo();
      expect(pathSpy).toHaveBeenCalledWith(converterDir, '../assets/images/ho-logo.png');
      expect(fsSpy).toHaveBeenCalledWith(HOLogoDir, expect.any(Function));
    });

    it('rejects with an error on failure', async () => {
      fs.readFile = jest.fn().mockImplementation((filePath, cb) => {
        cb(new Error('readFile error'));
      });
      pdfConverter.readHOLogo()
        .catch(error => {
          expect(error.message).toBe('readFile error');
        });
    });
  });

  describe('sortSections method', () => {
    it('sorts locals.rows as expected', () => {
      expect(pdfConverter.sortSections(locals, pdfConfig.licenceType, pdfConfig.htmlLang)).toStrictEqual(sortedLocals);
    });
  });

  describe('renderHTML method', () => {
    beforeEach(() => {
      pdfConverter.readCss = jest.fn().mockResolvedValue('I am a CSS');
      pdfConverter.readHOLogo = jest.fn().mockResolvedValue('I am an image');
      sortSectionsSpy = jest.spyOn(pdfConverter, 'sortSections');
      req.sessionModel.get = jest.fn().mockReturnValue(['url', 'url']);
      jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => ({
        format: jest.fn().mockReturnValue('13 May 2025 at 11:54:11')
      }));
      res.render = jest.fn().mockImplementation((template, data, cb) => {
        return cb();
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('calls res.render with the correct locals for business PDF', async () => {
      await pdfConverter.renderHTML(res, locals, pdfConfig, files);
      expect(pdfConverter.readCss).toHaveBeenCalled();
      expect(pdfConverter.readHOLogo).toHaveBeenCalled();
      expect(sortSectionsSpy).toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith('pdf.html', Object.assign({}, sortedLocals, {
        htmlLang: 'en',
        css: 'I am a CSS',
        'ho-logo': 'I am an image',
        title: 'Apply for a domestic licence for controlled substances: Precursor chemicals',
        dateTime: '13 May 2025 at 11:54:11',
        addFilesSection: true,
        files: [
          {
            field: 'certificate-of-good-conduct',
            urls: ['url', 'url'],
            label: 'Applicant certificate of good conduct'
          }
        ]
      }), expect.any(Function));
    });

    it('calls res.render with the correct locals for public PDF', async () => {
      await pdfConverter.renderHTML(res, locals, pdfConfig, null);
      expect(pdfConverter.readCss).toHaveBeenCalled();
      expect(pdfConverter.readHOLogo).toHaveBeenCalled();
      expect(sortSectionsSpy).toHaveBeenCalled();
      expect(res.render).toHaveBeenCalledWith('pdf.html', Object.assign({}, sortedLocals, {
        htmlLang: 'en',
        css: 'I am a CSS',
        'ho-logo': 'I am an image',
        title: 'Apply for a domestic licence for controlled substances: Precursor chemicals',
        dateTime: '13 May 2025 at 11:54:11'
      }), expect.any(Function));
    });

    it('uses amendment title variation if amendment is true in pdfConfig', async () => {
      pdfConfig.amendment = true;
      await pdfConverter.renderHTML(res, locals, pdfConfig, files);
      expect(res.render).toHaveBeenCalledWith('pdf.html', Object.assign({}, sortedLocals, {
        htmlLang: 'en',
        css: 'I am a CSS',
        'ho-logo': 'I am an image',
        title: 'Amending precursor chemicals licence application',
        dateTime: '13 May 2025 at 11:54:11',
        addFilesSection: true,
        files: [
          {
            field: 'certificate-of-good-conduct',
            urls: ['url', 'url'],
            label: 'Applicant certificate of good conduct'
          }
        ]
      }), expect.any(Function));
    });
  });

  describe('createBaseConfig method', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('returns expected config if baseUrl is /registration', () => {
      req.baseUrl = '/registration';
      const registrationConfig = pdfConverter.createBaseConfig(req, res);
      expect(registrationConfig).toHaveProperty('htmlLang', 'en');
      expect(registrationConfig).toHaveProperty('licenceType', 'registration');
      expect(registrationConfig).toHaveProperty('licenceLabel', 'Registration');
    });

    it('returns expected config based on set values in req and res', () => {
      res.locals.htmlLang = 'fr';
      req = {
        session: {
          'hof-wizard-common': {
            'licence-type': 'precursor-chemicals'
          }
        },
        sessionModel: {
          get: jest.fn().mockReturnValue('new-application')
        },
        translate: jest.fn().mockReturnValue('Precursor chemicals')
      };
      const setConfig = pdfConverter.createBaseConfig(req, res);
      expect(setConfig).toHaveProperty('htmlLang', 'fr');
      expect(setConfig).toHaveProperty('licenceType', 'precursor-chemicals');
      expect(setConfig).toHaveProperty('licenceLabel', 'Precursor chemicals');
      expect(setConfig).toHaveProperty('amendment', false);
    });

    it('returns expected config for an amendment type application', () => {
      req = {
        session: {
          'hof-wizard-common': {
            'licence-type': 'precursor-chemicals'
          }
        },
        sessionModel: {
          get: jest.fn().mockReturnValue('amend-application')
        },
        translate: jest.fn().mockReturnValue('Precursor chemicals')
      };
      const setConfig = pdfConverter.createBaseConfig(req, res);
      expect(setConfig).toHaveProperty('htmlLang', 'en');
      expect(setConfig).toHaveProperty('licenceType', 'precursor-chemicals');
      expect(setConfig).toHaveProperty('licenceLabel', 'Precursor chemicals');
      expect(setConfig).toHaveProperty('amendment', true);
    });
  });

  describe('generatePDF method', () => {
    beforeEach(() => {
      pdfConverter.readCss = jest.fn().mockResolvedValue('I am a CSS');
      pdfConverter.readHOLogo = jest.fn().mockResolvedValue('I am an image');
      sortSectionsSpy = jest.spyOn(pdfConverter, 'sortSections');
      setSpy = jest.spyOn(pdfConverter, 'set');
      pdfConverter.renderHTML = jest.fn().mockResolvedValue('I am HTML');
      req.sessionModel.get = jest.fn().mockReturnValue(['url', 'url']);
      req.log = jest.fn();
      pdfConverter.save = jest.fn().mockResolvedValue('I am a PDF');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('calls all methods and returns expected values for a business PDF', async () => {
      const pdfData = await pdfConverter.generatePdf(req, res, locals, pdfConfig, files);
      expect(pdfConverter.renderHTML).toHaveBeenCalledWith(res, locals, pdfConfig, files);
      expect(setSpy).toHaveBeenCalledWith({ template: 'I am HTML' });
      expect(pdfConverter.save).toHaveBeenCalled();
      expect(pdfData).toBe('I am a PDF');
      expect(req.log).toHaveBeenCalledWith('info', 'Precursor chemicals business PDF data generated successfully');
    });

    it('calls all methods and returns expected values for an applicant PDF', async () => {
      const pdfData = await pdfConverter.generatePdf(req, res, locals, pdfConfig, null);
      expect(pdfConverter.renderHTML).toHaveBeenCalledWith(res, locals, pdfConfig, null);
      expect(setSpy).toHaveBeenCalledWith({ template: 'I am HTML' });
      expect(pdfConverter.save).toHaveBeenCalled();
      expect(pdfData).toBe('I am a PDF');
      expect(req.log).toHaveBeenCalledWith('info', 'Precursor chemicals applicant PDF data generated successfully');
    });
  });
});
