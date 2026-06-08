const setAggregateFrom = require('../../../apps/precursor-chemicals/behaviours/set-aggregate-from');

describe('apps/precursor-chemicals/behaviours/set-aggregate-from', () => {
  const CHEMICAL_FIELD = 'which-chemical';
  const NOT_LISTED_CHEMICAL_NAME_FIELD = 'not-listed-chemical-name';
  const NOT_LISTED_CHEMICAL_CHECKBOX_FIELD = 'is-chemical-not-listed';
  const BASE_AGGREGATE_FIELDS = ['substance-category', 'which-operation', 'what-operation'];

  const buildReq = values => ({
    sessionModel: {
      get: jest.fn(key => values[key])
    },
    form: {
      options: {}
    }
  });


  it('uses not-listed-chemical-name when which-chemical is empty', () => {
    class Base {
      getValues() {
        return null;
      }
    }

    const Behaviour = setAggregateFrom(Base);
    const instance = new Behaviour();

    const req = buildReq({
      [CHEMICAL_FIELD]: '',
      [NOT_LISTED_CHEMICAL_NAME_FIELD]: 'Custom chemical'
    });

    instance.getValues(req, {}, jest.fn());

    expect(req.form.options.aggregateFrom).toEqual([
      NOT_LISTED_CHEMICAL_NAME_FIELD,
      ...BASE_AGGREGATE_FIELDS
    ]);
  });

  it('uses which-chemical when not-listed-chemical-name is empty', () => {
    class Base {
      getValues() {
        return null;
      }
    }

    const Behaviour = setAggregateFrom(Base);
    const instance = new Behaviour();

    const req = buildReq({
      [CHEMICAL_FIELD]: 'Acetone',
      [NOT_LISTED_CHEMICAL_CHECKBOX_FIELD]: ''
    });

    instance.getValues(req, {}, jest.fn());

    expect(req.form.options.aggregateFrom).toEqual([CHEMICAL_FIELD, ...BASE_AGGREGATE_FIELDS]);
  });
});
