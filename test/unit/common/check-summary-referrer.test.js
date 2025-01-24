
const Behaviour = require('../../../apps/common/behaviours/check-summary-referrer');
const reqres = require('hof').utils.reqres;

describe('check-summary-referrer', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    getValues() {}
    successHandler() {}
  }

  let req;
  let res;
  let CheckSummaryReferrer;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    CheckSummaryReferrer = Behaviour(Base);
    instance = new CheckSummaryReferrer();
  });

  describe('The \'getValues\' method', () => {
    beforeEach(() => {
      Base.prototype.getValues = jest.fn().mockReturnValue(req, res, next);
      req.get = jest.fn(item => {
        if (item === 'Referrer') {
          return 'https://csl.homeoffice.gov.uk/precursor-chemicals/summary';
        }
        return null;
      });
      req.form.options.confirmStep = '/summary';
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('getValues was called', () => {
      instance.getValues(req, res);
      expect(Base.prototype.getValues).toHaveBeenCalled();
    });

    test('Saves to session when the referrer was detected as summary page', () => {
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('referred-by-summary')).toBe(true);
    });
  });

  describe('The \'successHandler\' method', () => {
    beforeEach(() => {
      Base.prototype.successHandler = jest.fn().mockReturnValue(req, res, next);
      res.redirect = jest.fn(() => '/precursor-chemicals/summary');
      req.baseUrl = '/precursor-chemicals';
      req.form.options.confirmStep = '/summary';
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('successHandler was called', () => {
      instance.successHandler(req, res, next);
      expect(Base.prototype.getValues).toHaveBeenCalled();
    });

    test('calls res.redirect if the appropriate session value was found', () => {
      req.sessionModel.set('referred-by-summary', true);
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/summary');
    });

    test('does not call res.redirect if the appropriate session value is not found', () => {
      instance.successHandler(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
    });
  });
});
