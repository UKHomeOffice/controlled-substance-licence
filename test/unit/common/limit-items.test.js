
const Behaviour = require('../../../apps/common/behaviours/limit-items');
const reqres = require('hof').utils.reqres;

describe('limit-items', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    locals() {}
  }

  let req;
  let res;
  let LimitItems;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();

    LimitItems = Behaviour(Base);
    instance = new LimitItems();
  });

  describe('The \'locals\' method', () => {
    beforeEach(() => {
      Base.prototype.locals = jest.fn().mockReturnValue(req, res);
      req.form.options = {
        aggregateLimit: 2,
        aggregateTo: 'substances-in-licence'
      };
      req.sessionModel.set('substances-in-licence', {
        aggregatedValues: [
          {
            fields: [
              { field: 'which-chemical', value: 'Piperidine' },
              { field: 'substance-category', value: '3' },
              { field: 'which-operation', value: 'storage' }
            ]
          },
          {
            fields: [
              { field: 'which-chemical', value: 'Toluene' },
              { field: 'substance-category', value: '3' },
              { field: 'which-operation', value: 'storage' }
            ]
          }
        ]
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('locals.noMoreItems is set when the aggregateLimit is met', () => {
      const locals = instance.locals(req, res);
      expect(locals.noMoreItems).toBe(true);
    });

    test('locals.noMoreItems is not set when the aggregateLimit is not met', () => {
      req.form.options.aggregateLimit = 100;
      const locals = instance.locals(req, res);
      expect(locals.noMoreItems).toBe(false);
    });
  });
});
