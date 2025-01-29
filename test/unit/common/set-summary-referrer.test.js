
const Behaviour = require('../../../apps/common/behaviours/set-summary-referrer');
const reqres = require('hof').utils.reqres;

describe('set-summary-referrer', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    getValues() {}
    successHandler() {}
  }

  let req;
  let res;
  let SetSummaryReferrer;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    SetSummaryReferrer = Behaviour(Base);
    instance = new SetSummaryReferrer();
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
});
