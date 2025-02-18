
const Behaviour = require('../../../apps/controlled-drugs/behaviours/scheduled-activities-redirect');
const reqres = require('hof').utils.reqres;

describe('scheduled-activities-redirect', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    locals() {}
    successHandler() {}
    emit() {}
  }

  let req;
  let res;
  let next;
  let ScheduledActivitiesRedirect;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    ScheduledActivitiesRedirect = Behaviour(Base);
    instance = new ScheduledActivitiesRedirect();
  });

  describe('The \'locals\' method', () => {
    beforeEach(() => {
      Base.prototype.locals = jest.fn().mockReturnValue({ continueBtn: 'original-button' });
      req.sessionModel.set('referred-by-summary', true);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('locals.continueBtn is altered if referred by summary and any scheduled activity was selected', () => {
      req.sessionModel.set('schedule-1-activities', 'produce');
      const locals = instance.locals(req, res);
      expect(locals.continueBtn).toBe('continue');
    });

    test('locals.continueBtn is unaltered if referred by summary but no scheduled activity was selected', () => {
      const locals = instance.locals(req, res);
      expect(locals.continueBtn).toBe('original-button');
    });

    test('locals.continueBtn was not changed if we were not referred by the summary page', () => {
      req.sessionModel.unset('referred-by-summary');
      const locals = instance.locals(req, res);
      expect(locals.continueBtn).toBe('original-button');
    });
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

    test('redirects to /summary when conditions are correct', () => {
      req.sessionModel.set('referred-by-summary', true);
      req.sessionModel.set('schedule-1-activities', 'produce');
      req.form.options.route = '/schedule-2-activities';
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/controlled-drugs/confirm');
    });

    test('redirects to /no-activities-selected when conditions are correct', () => {
      req.form.options.route = '/schedule-5-activities';
      instance.successHandler(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/controlled-drugs/no-activities-selected');
    });

    test('does not call res.redirect if no exisiting condition for redirection was met', () => {
      instance.successHandler(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
    });
  });
});
