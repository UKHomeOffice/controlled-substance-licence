
const Behaviour = require('../../../apps/controlled-drugs/behaviours/custom-redirect');
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
  let next;
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
      res.redirect = jest.fn(() => '/controlled-drugs/confirm');
      req.baseUrl = '/controlled-drugs';
      req.form.options.confirmStep = '/confirm';
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
      expect(res.redirect).toHaveBeenCalledWith('/controlled-drugs/confirm');
    });

    test('calls res.redirect if conditions for responsible-for-security page are met', () => {
      req.baseUrl = '/controlled-drugs';
      req.form.options.confirmStep = '/confirm';
      req.form.options.route = '/responsible-for-security';
      req.params.action = 'edit';
      req.form.values['responsible-for-security'] = 'same-as-managing-director';
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/controlled-drugs/confirm');
    });

    test('does not call res.redirect if no exisiting condition for redirection was met', () => {
      instance.successHandler(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
    });
  });
});
