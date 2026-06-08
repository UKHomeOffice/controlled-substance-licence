const setChemicalName = require('../../../apps/precursor-chemicals/behaviours/set-chemical-name');

describe('set-chemical-name behaviour', () => {
  let req;
  let res;

  const buildReq = values => ({
    sessionModel: {
      get: jest.fn(key => values[key])
    }
  });

  it('sets chemicalName from "which-chemical"', () => {
    class Base {
      locals(request, response) {
        return {
          request,
          response
        };
      }
    }

    const Behaviour = setChemicalName(Base);
    req = buildReq({ 'which-chemical': 'Acetone' });
    res = { id: 'res' };

    const instance = new Behaviour();
    const result = instance.locals(req, res);

    expect(result).toEqual({
      request: req,
      response: res,
      chemicalName: 'Acetone'
    });
  });

  it('falls back to "not-listed-chemical-name" when "which-chemical" is not set', () => {
    class Base {
      locals() {
        return {};
      }
    }

    const Behaviour = setChemicalName(Base);
    req = buildReq({
      'which-chemical': '',
      'not-listed-chemical-name': 'Custom chemical'
    });

    const instance = new Behaviour();
    const result = instance.locals(req, res);

    expect(result).toEqual({
      chemicalName: 'Custom chemical'
    });
  });
});
