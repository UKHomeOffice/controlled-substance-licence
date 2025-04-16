const Behaviour = require('../../../apps/common/behaviours/resume-form-session');
const reqres = require('hof').utils.reqres;
const Model = require('hof/model');

jest.mock('hof/model');

jest.mock('../../../config.js', () => {
  const originalModule = jest.requireActual('../../../config.js');
  return {
    ...originalModule,
    saveService: {
      protocol: 'http',
      host: '127.0.0.1',
      port: '5000'
    }
  };
});

jest.mock('../../../utils', () => {
  const originalModule = jest.requireActual('../../../utils');
  return {
    ...originalModule,
    generateErrorMsg: jest.fn().mockReturnValue('error')
  };
});

describe('resume-form-session', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    getValues() {}
    saveValues() {}
    successHandler() {}
  }

  let req;
  let res;
  let next;
  let ResumeFormSession;
  let instance;
  let mockRequest;
  let mockApplication;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    ResumeFormSession = Behaviour(Base);
    instance = new ResumeFormSession();

    mockApplication = {
      id: 1,
      applicant_id: 1,
      licence_type: 'precursor-chemicals',
      session: {
        'applicant-id': 1,
        'licence-type': 'precursor-chemicals',
        'application-form-type': 'new-application',
        steps: [
          '/application-type',
          '/licensee-type',
          '/licence-holder-details'
        ],
        'licensee-type': 'first-time-licensee',
        'company-name': 'Home Office',
        'company-number': '16850062',
        telephone: '07777777777',
        email: 'sas-hof-test@digital.homeoffice.gov.uk',
        'website-url': 'https://www.homeoffice.gov.uk'
      },
      status_id: 1,
      submitted_at: null,
      icasework_case_id: null,
      expires_at: '2025-03-14'
    };
  });

  describe('The \'getValues\' method', () => {
    beforeAll(() => {
      mockRequest = jest.fn().mockResolvedValue({ data: [] });
      Model.mockImplementation(() => {
        return {
          _request: mockRequest
        };
      });
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    beforeEach(() => {
      Base.prototype.getValues = jest.fn().mockReturnValue(req, res, next);

      req.session = {'hof-wizard-common': { 'licence-type': 'precursor-chemicals' }};
      req.sessionModel = {
        attributes: { 'csrf-secret': 'secret' },
        unset: jest.fn(),
        get: jest.fn(),
        set: jest.fn()
      };
      req.log = jest.fn();
      req.form.options.fields = {
        'application-form-type': {
          options: [
            { value: 'test' },
            { value: 'continue-an-application' },
            { value: 'amend-application' }
          ]
        }
      };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('calls this.cleanSession', async () => {
      const mockCleanSession = jest.spyOn(instance, 'cleanSession');
      await instance.getValues(req, res, next);
      expect(mockCleanSession).toHaveBeenCalled();
    });

    test('calls HOFs _request method with the expected values', async () => {
      await instance.getValues(req, res, next);
      expect(mockRequest).toHaveBeenCalledWith({
        url: 'http://127.0.0.1:5000/applications/applicant_id/1',
        method: 'GET'
      });
    });

    test('if no saved application is found for user and licence the continue radio option is removed', async () => {
      await instance.getValues(req, res, next);
      expect(req.form.options.fields['application-form-type'].options).toHaveLength(2);
    });

    test('correct data are set in session when a valid previous application exists', async () => {
      mockRequest = jest.fn().mockResolvedValue({ data: [mockApplication] });
      Model.mockImplementation(() => {
        return {
          _request: mockRequest
        };
      });
      await instance.getValues(req, res, next);
      expect(req.sessionModel.set).toHaveBeenCalledWith('application-to-resume', mockApplication);
      expect(req.sessionModel.set).toHaveBeenCalledWith('applicant-id', 1);
      expect(req.sessionModel.set).toHaveBeenCalledWith('licence-type', 'precursor-chemicals');
    });

    test('has correct error behaviour', async () => {
      const error = new Error('error message');
      mockRequest = jest.fn().mockRejectedValue(error);
      Model.mockImplementation(() => {
        return {
          _request: mockRequest
        };
      });
      await instance.getValues(req, res, next);
      expect(mockRequest).toHaveBeenCalled();
      expect(req.log).toHaveBeenCalledWith('error', 'Failed to get saved application: error');
      expect(next).toHaveBeenCalledWith(error);
    });
  });

  describe('The \'saveValues\' method', () => {
    beforeEach(() => {
      Base.prototype.saveValues = jest.fn().mockReturnValue(req, res, next);

      req.sessionModel = {
        get: jest.fn().mockReturnValue(mockApplication),
        set: jest.fn(),
        unset: jest.fn()
      };

      req.form.values = {
        'application-form-type': 'continue-an-application'
      };

      req.log = jest.fn();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('sessionModel.set() is called with expected properties when a saved application was found', () => {
      const mockSavedApplicationProps = { 'application-id': 1 };
      instance.saveValues(req, res, next);
      expect(req.log).toHaveBeenCalledWith('info', 'Resuming Form Session: 1');
      expect(req.sessionModel.set).toHaveBeenCalledWith(
        Object.assign({}, mockApplication.session, mockSavedApplicationProps)
      );
    });

    test('this.resumeSession() is not called if no application was found', () => {
      req.sessionModel.get = jest.fn();
      const spiedResumeSession = jest.spyOn(instance, 'resumeSession');
      instance.saveValues(req, res, next);
      expect(spiedResumeSession).not.toHaveBeenCalled();
    });

    test('If the user is not resuming a session, only set the application-id and new application flag', () => {
      const mockSavedApplicationProps = { 'application-id': 1 };
      req.form.values = { 'application-form-type': 'new-application' };
      const spiedResumeSession = jest.spyOn(instance, 'resumeSession');
      instance.saveValues(req, res, next);
      expect(req.sessionModel.set).toHaveBeenCalledWith('overwrite-application', true);
      expect(req.sessionModel.set).toHaveBeenCalledWith('application-id', 1);
      expect(req.sessionModel.set).not.toHaveBeenCalledWith(
        Object.assign({}, mockApplication.session, mockSavedApplicationProps)
      );
      expect(req.sessionModel.unset).toHaveBeenCalledWith('application-to-resume');
      expect(spiedResumeSession).not.toHaveBeenCalled();
    });
  });

  describe('The \'successHandler\' method', () => {
    beforeEach(() => {
      Base.prototype.successHandler = jest.fn().mockReturnValue(req, res, next);

      req.baseUrl = '/precursor-chemicals';

      res.redirect = jest.fn();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('If the user chose to continue-an-application redirect to information-you-have-given-us step', () => {
      req.form.values = {
        'application-form-type': 'continue-an-application'
      };
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/information-you-have-given-us');
    });

    test('If the user chose not to continue-an-application redirect according to step definitions', () => {
      req.form.values = {
        'application-form-type': 'new-application'
      };
      instance.successHandler(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
      expect(Base.prototype.successHandler).toHaveBeenCalled();
    });
  });
});
