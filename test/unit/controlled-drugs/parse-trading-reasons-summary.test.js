
const Behaviour = require('../../../apps/controlled-drugs/behaviours/parse-trading-reasons-summary');
const reqres = require('hof').utils.reqres;

describe('parse-trading-reasons-summary', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    locals() {}
  }

  let req;
  let res;
  let ParseTradingReasonsSummary;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    ParseTradingReasonsSummary = Behaviour(Base);
    instance = new ParseTradingReasonsSummary();
  });

  describe('The \'locals\' method', () => {
    beforeEach(() => {
      Base.prototype.locals = jest.fn().mockReturnValue({
        items: [
          {
            fields: [
              { field: 'trading-reasons', value: 'broker' }
            ]
          },
          {
            fields: [
              { field: 'trading-reasons', value: 'other' },
              { field: 'specify-trading-reasons', value: 'Additional info' }
            ]
          }
        ]
      });
      req.form.options = {
        aggregateLimit: 2,
        aggregateTo: 'aggregated-trading-reasons'
      };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('Parsed values are correctly added to locals.items', () => {
      const locals = instance.locals(req, res);
      expect(locals).toHaveProperty('items', [
        {
          fields: [
            { field: 'trading-reasons', value: 'broker', parsed: 'Broker' }
          ]
        },
        {
          fields: [
            { field: 'trading-reasons', value: 'other', parsed: 'Other: Additional info' },
            { field: 'specify-trading-reasons', value: 'Additional info' }
          ]
        }
      ]);
    });
  });
});
