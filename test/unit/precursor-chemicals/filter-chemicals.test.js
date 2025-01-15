const Behaviour = require('../../../apps/precursor-chemicals/behaviours/filter-chemicals');
const reqres = require('hof').utils.reqres;
const chemicals = require('../../../apps/precursor-chemicals/data/chemicals.json');

describe('filter-chemicals behaviour', () => {
  test('Behaviour exports a function', () => {
    expect(typeof Behaviour).toBe('function');
  });

  class Base {
    configure() {}
  }

  let req;
  let res;
  let instance;
  let next;
  let FilterChemicals;

  // + 1 to include the none_selected option
  const fullListLength = chemicals.length + 1;
  const cat1Length = chemicals.filter(chem => chem.category === '1').length + 1;
  const cat2Length = chemicals.filter(chem => chem.category === '2').length + 1;
  const cat3Length = chemicals.filter(chem => chem.category === '3').length + 1;

  beforeEach(() => {
    req = reqres.req();
    res = reqres.res();
    next = jest.fn();

    FilterChemicals = Behaviour(Base);
    instance = new FilterChemicals();
  });

  describe('The \'configure\' method', () => {
    beforeEach(() => {
      Base.prototype.configure = jest.fn().mockReturnValue(req, res, next);
      req.sessionModel.set('substance-category', 'unknown');
      req.form.options = {
        fields: {
          'which-chemical': {
            options: [{
              value: '',
              label: 'Select a chemical'
            }].concat(chemicals)
          }
        }
      };
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('next is called at the end of the behaviour', () => {
      expect(next).toHaveBeenCalled;
    });

    test('session value for category is set as provided', () => {
      expect(req.sessionModel.get('substance-category')).toBe('unknown');
    });

    test('if the category chosen was \'I do not know\' the full list of chemicals is available', () => {
      instance.configure(req, res, next);
      expect(req.form.options.fields['which-chemical'].options).toHaveLength(fullListLength);
    });

    test('if \'Category 1\' was chosen the list of chemicals to choose from is appropriately filtered', () => {
      req.sessionModel.set('substance-category', '1');
      instance.configure(req, res, next);
      expect(req.form.options.fields['which-chemical'].options).toHaveLength(cat1Length);
    });

    test('if \'Category 2\' was chosen the list of chemicals to choose from is appropriately filtered', () => {
      req.sessionModel.set('substance-category', '2');
      instance.configure(req, res, next);
      expect(req.form.options.fields['which-chemical'].options).toHaveLength(cat2Length);
    });

    test('if \'Category 3\' was chosen the list of chemicals to choose from is appropriately filtered', () => {
      req.sessionModel.set('substance-category', '3');
      instance.configure(req, res, next);
      expect(req.form.options.fields['which-chemical'].options).toHaveLength(cat3Length);
    });
  });
});
