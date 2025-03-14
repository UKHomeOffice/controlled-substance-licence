const Behaviour = require('../../../apps/common/behaviours/save-form-session');
const reqres = require('hof').utils.reqres;
const Model = require('hof/model');
const { genAxiosErrorMsg } = require('../../../utils');

jest.mock('hof/model');

jest.mock('../../../config.js', () => {
  const originalModule = jest.requireActual('../../../config.js');
  return {
    ...originalModule,
    saveService: {
      protocol: 'http:',
      host: '127.0.0.1',
      port: '5000'
    }
  };
});

jest.mock('../../../utils', () => {
  const originalModule = jest.requireActual('../../../utils');
  return {
    ...originalModule,
    genAxiosErrorMsg: jest.fn().mockReturnValue('error')
  };
});

describe('save-form-session', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    successHandler() {}
  }

  let req;
  let res;
  let next;
  let SaveFormSession;
  let instance;
  let mockRequest;
  let mockSessionAttributes;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    SaveFormSession = Behaviour(Base);
    instance = new SaveFormSession();
  });

  describe('The \'successHandler\' method', () => {
    beforeAll(() => {
      mockRequest = jest.fn().mockResolvedValue({ data: [{ id: 1 }] });
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

      mockSessionAttributes = {
        'csrf-secret': 'secret',
        errors: null,
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
      };

      req.form.options.route = '/save-me';
      req.sessionModel = {
        attributes: mockSessionAttributes,
        unset: jest.fn(),
        get: jest.fn(value => mockSessionAttributes[value]),
        set: jest.fn(),
        toJSON: jest.fn().mockReturnValue(mockSessionAttributes)
      };
      req.log = jest.fn();
    });

    afterEach(() => {
      jest.restoreAllMocks();
      jest.clearAllMocks();
    });

    test('calls HOFs _request method with the expected values when an application-id does not exist', async () => {
      await instance.successHandler(req, res, next);
      expect(mockRequest).toHaveBeenCalledWith({
        url: 'http://127.0.0.1:5000/applications',
        method: 'POST',
        data: {
          session: mockSessionAttributes,
          applicant_id: 1,
          licence_type: 'precursor-chemicals',
          status_id: 1
        }
      });
      expect(mockSessionAttributes.steps).toContain('/save-me');
    });

    test('calls HOFs _request method with the expected values when an application-id exists', async () => {
      mockSessionAttributes['application-id'] = 1;
      await instance.successHandler(req, res, next);
      expect(mockRequest).toHaveBeenCalledWith({
        url: 'http://127.0.0.1:5000/applications/1',
        method: 'PATCH',
        data: { session: mockSessionAttributes }
      });
    });

    test('does not cause saving behaviour if the current path is in the exemption list', async () => {
      req.form.options.route = '/application-type';
      await instance.successHandler(req, res, next);
      expect(req.sessionModel.toJSON).not.toHaveBeenCalled();
      expect(mockRequest).not.toHaveBeenCalled();
    });

    test('has correct error behaviour', async () => {
      const error = new Error('error message');
      mockRequest = jest.fn().mockRejectedValue(error);
      Model.mockImplementation(() => {
        return {
          _request: mockRequest
        };
      });
      await instance.successHandler(req, res, next);
      expect(mockRequest).toHaveBeenCalled();
      expect(genAxiosErrorMsg).toHaveBeenCalled();
      expect(req.log).toHaveBeenCalledWith('error', 'Failed to save application: error');
      expect(next).toHaveBeenCalledWith(error);
    });

    test('application-id will be unset from session if it is not in the _request() response', async () => {
      mockRequest = jest.fn().mockResolvedValue({ data: [] });
      Model.mockImplementation(() => {
        return {
          _request: mockRequest
        };
      });
      await instance.successHandler(req, res, next);
      expect(req.sessionModel.unset).toHaveBeenCalledWith('application-id');
    });
  });
});
