
const Behaviour = require('../../../apps/controlled-drugs/behaviours/activities-continue-button');
const reqres = require('hof').utils.reqres;

describe('activities-continue-button', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    locals() {}
  }

  let req;
  let res;
  let ActivitiesContinueButton;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    ActivitiesContinueButton = Behaviour(Base);
    instance = new ActivitiesContinueButton();
  });

  describe('The \'locals\' method', () => {
    beforeEach(() => {
      Base.prototype.locals = jest.fn().mockReturnValue({ continueBtn: 'original-button' });
      req.sessionModel.set('referred-by-summary', true);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('locals.continueBtn is altered if we were referred by the summary page', () => {
      const locals = instance.locals(req, res);
      expect(locals.continueBtn).toBe('continue');
    });

    test('locals.continueBtn was not changed if we were not referred by the summary page', () => {
      req.sessionModel.unset('referred-by-summary');
      const locals = instance.locals(req, res);
      expect(locals.continueBtn).toBe('original-button');
    });
  });
});
