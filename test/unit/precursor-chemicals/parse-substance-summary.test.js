
const Behaviour = require('../../../apps/precursor-chemicals/behaviours/parse-substance-summary');
const reqres = require('hof').utils.reqres;

describe('parse-substance-summary', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    saveValues() {}
    locals() {}
  }

  let req;
  let res;
  let ParseSubstanceSummary;
  let instance;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    ParseSubstanceSummary = Behaviour(Base);
    instance = new ParseSubstanceSummary();
  });

  describe('The \'locals\' method', () => {
    beforeEach(() => {
      Base.prototype.locals = jest.fn().mockReturnValue({
        items: [
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
              { field: 'which-operation', value: 'other' },
              { field: 'what-operation', value: 'custom' }
            ]
          }
        ]
      });
      req.form.options = {
        aggregateLimit: 2,
        aggregateTo: 'substances-in-licence'
      };
      req.translate = jest.fn(item => {
        const map = {
          'fields.which-operation.options.storage.label': 'Storage',
          'fields.which-operation.options.other.label': 'Other'
        };
        return map[item];
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('Parsed values are correctly added to locals.items', () => {
      const locals = instance.locals(req, res);
      expect(locals).toHaveProperty('items', [
        {
          fields: [
            { field: 'which-chemical', value: 'Piperidine', parsed: 'Piperidine (2933 3200)'},
            { field: 'substance-category', value: '3', parsed: '3' },
            { field: 'which-operation', value: 'storage', parsed: 'Storage' }
          ]
        },
        {
          fields: [
            { field: 'which-chemical', value: 'Toluene', parsed: 'Toluene (2902 3000)'},
            { field: 'substance-category', value: '3', parsed: '3' },
            { field: 'which-operation', value: 'other', parsed: 'Other: custom' },
            { field: 'what-operation', value: 'custom' }
          ]
        }
      ]);
    });
  });

  describe('The \'saveValues\' method', () => {
    beforeEach(() => {
      Base.prototype.saveValues = jest.fn().mockReturnValue(req, res, next);
      req.translate = jest.fn(value => {
        const map = {
          'fields.substance-category.options.1.label': 'Category 1',
          'fields.substance-category.options.2.label': 'Category 2',
          'fields.substance-category.options.3.label': 'Category 3',
          'fields.substance-category.options.unknown.label': 'I do not know'
        };
        return map[value];
      });
      req.sessionModel.set('substances-in-licence', {
        aggregatedValues: [
          {
            fields: [
              { field: 'which-chemical', value: 'Piperidine' },
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

    test('saveValues was called', () => {
      instance.saveValues(req, res, next);
      expect(Base.prototype.saveValues).toHaveBeenCalled();
    });

    test('Saves a single added category as a correctly parsed string', () => {
      instance.saveValues(req, res, next);
      expect(req.sessionModel.get('parsed-substance-categories')).toBe('Category 3');
    });

    test('Sorts and saves two or more different categories correctly', () => {
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
              { field: 'which-chemical', value: 'Ephedrine' },
              { field: 'substance-category', value: '1' },
              { field: 'which-operation', value: 'storage' }
            ]
          }
        ]
      });
      instance.saveValues(req, res, next);
      expect(req.sessionModel.get('parsed-substance-categories')).toBe('Category 1\nCategory 3');
    });

    test('Does not duplicate categories in finished string', () => {
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
      instance.saveValues(req, res, next);
      expect(req.sessionModel.get('parsed-substance-categories')).toBe('Category 3');
    });
  });
});
