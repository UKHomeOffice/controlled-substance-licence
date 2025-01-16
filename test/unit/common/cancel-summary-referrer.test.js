
const Behaviour = require('../../../apps/common/behaviours/cancel-summary-referrer');
const reqres = require('hof').utils.reqres;

describe('cancel-summary-referrer', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    getValues() {}
  }

  let req;
  let res;
  let CancelSummaryReferrer;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    CancelSummaryReferrer = Behaviour(Base);
    instance = new CancelSummaryReferrer();
  });

  describe('The \'getValues\' method', () => {
    beforeEach(() => {
      Base.prototype.getValues = jest.fn().mockReturnValue(req, res, next);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('getValues was called', () => {
      instance.getValues(req, res);
      expect(Base.prototype.getValues).toHaveBeenCalled();
    });

    test('Removes the \'referred-by-summary\' session item if present', () => {
      req.sessionModel.set('referred-by-summary', true);
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('referred-by-summary')).toBe(undefined);
    });
  });
});
