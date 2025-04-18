
const Behaviour = require('../../../apps/precursor-chemicals/behaviours/custom-redirect');
const reqres = require('hof').utils.reqres;

describe('custom-redirect', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    successHandler() {}
    emit() {}
  }

  let req;
  let res;
  let CustomRedirect;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    CustomRedirect = Behaviour(Base);
    instance = new CustomRedirect();
  });

  describe('The \'successHandler\' method', () => {
    beforeEach(() => {
      Base.prototype.successHandler = jest.fn().mockReturnValue(req, res, next);
      Base.prototype.emit = jest.fn();
      res.redirect = jest.fn(() => '/precursor-chemicals/summary');
      req.baseUrl = '/precursor-chemicals';
      req.form.options.confirmStep = '/summary';
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('successHandler was called', () => {
      instance.successHandler(req, res, next);
      expect(Base.prototype.emit).toHaveBeenCalled();
      expect(Base.prototype.successHandler).toHaveBeenCalled();
    });

    test('calls res.redirect if the referred-by-summary session value was set', () => {
      req.sessionModel.set('referred-by-summary', true);
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/summary');
    });

    test('calls res.redirect if the user should be forwarded to /cannot-continue', () => {
      req.form.options.route = '/companies-house-number';
      req.form.values['companies-house-number-change'] = 'yes';
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/cannot-continue');
    });

    test('calls res.redirect if the user should be forwarded to /information-you-have-given-us', () => {
      req.sessionModel.set('referred-by-information-given-summary', true);
      req.form.options.isContinueOnEdit = true;
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/information-you-have-given-us');
    });

    test('does not call res.redirect if no exisiting condition for redirection was met', () => {
      instance.successHandler(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
    });
  });
});
