
const Behaviour = require('../../../apps/common/behaviours/information-you-have-given-us');
const reqres = require('hof').utils.reqres;

describe('information-you-have-given-us', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    getValues() {}
    saveValues() {}
  }

  let req;
  let res;
  let InformationYouHaveGivenUs;
  let instance;
  let next;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    InformationYouHaveGivenUs = Behaviour(Base);
    instance = new InformationYouHaveGivenUs();
  });

  describe('The \'getValues\' method', () => {
    beforeEach(() => {
      Base.prototype.getValues = jest.fn().mockReturnValue(req, res, next);
      req.sessionModel.set('steps', [
        '/step-one',
        '/step-two'
      ]);
      req.form.options.steps = {
        '/step-one': {
          fields: ['step-one'],
          forks: [
            {
              target: '/step-one-point-five',
              condition: {
                field: 'step-one',
                value: 'no'
              }
            }
          ],
          next: '/step-two'
        },
        '/step-one-point-five': {
          next: '/step-two',
          fields: ['step-one-point-five']
        },
        '/step-two': {
          fields: ['step-two'],
          next: '/step-three'
        },
        '/step-three': {
          fields: ['step-three'],
          next: '/confirm'
        },
        '/confirm': {
          next: '/declaration'
        },
        '/declaration': {}
      };
      req.sessionModel.set('step-one', 'yes');
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('getValues was called', () => {
      instance.getValues(req, res, next);
      expect(Base.prototype.getValues).toHaveBeenCalled();
    });

    test('Saves correctly ordered steps and next step to session when no fork is satisfied', () => {
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('steps')).toStrictEqual(['/step-one', '/step-two']);
      expect(req.sessionModel.get('save-return-next-step')).toBe('/step-three');
    });

    test('Saves correctly ordered steps and next step to session when a fork is satisfied', () => {
      req.sessionModel.set('step-one', 'no');
      req.sessionModel.set('steps', [
        '/step-one',
        '/step-two',
        '/step-one-point-five'
      ]);
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('steps')).toStrictEqual(['/step-one', '/step-one-point-five', '/step-two']);
      expect(req.sessionModel.get('save-return-next-step')).toBe('/step-three');
    });

    test('Will set the confirm step as the next step if is has been visited', () => {
      req.form.options.confirmStep = '/confirm';
      req.sessionModel.set('steps', [
        '/step-one',
        '/step-two',
        '/step-three',
        '/confirm',
        '/declaration'
      ]);
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('save-return-next-step')).toBe('/confirm');
    });

    test('The \'referred-by-information-given-summary\' flag is set to true', () => {
      instance.getValues(req, res, next);
      expect(req.sessionModel.get('referred-by-information-given-summary')).toBe(true);
    });
  });

  describe('The \'saveValues\' method', () => {
    beforeEach(() => {
      Base.prototype.saveValues = jest.fn().mockReturnValue(req, res, next);
      res.redirect = jest.fn();
      req.sessionModel.set('save-return-next-step', '/step-three');
      req.baseUrl = '/precursor-chemicals';
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('res.redirect was called with the appropriate path when a nextStep is found', () => {
      instance.saveValues(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/step-three');
    });

    test('routing is by HOF default when a nextStep is not', () => {
      req.sessionModel.set('save-return-next-step', undefined);
      instance.saveValues(req, res, next);
      expect(res.redirect).not.toHaveBeenCalled();
      expect(Base.prototype.saveValues).toHaveBeenCalled();
    });

    test('The \'referred-by-information-given-summary\' flag is set to false', () => {
      instance.saveValues(req, res, next);
      expect(req.sessionModel.get('referred-by-information-given-summary')).toBe(false);
    });

    test('If the Exit button was clicked, redirect to /save-and-exit', () => {
      req.body.exit = true;
      instance.saveValues(req, res, next);
      expect(res.redirect).toHaveBeenCalledWith('/precursor-chemicals/save-and-exit');
    });
  });
});
