const validators = require('hof/controller/validation/validators');
const checkValidation = require('../../../apps/precursor-chemicals/behaviours/check-validation');

jest.mock('hof/controller/validation/validators', () => ({
  notUrl: jest.fn()
}));


class BaseController {
  constructor() {
    this.superValidateFieldMock = jest.fn();
    this.ValidationError = class ValidationError extends Error {
      constructor(key, options = {}) {
        super('ValidationError');
        this.key = key;
        this.type = options.type;
      }
    };
  }

  validateField(key, req) {
    this.superValidateFieldMock(key, req);
  }
}

const Controller = checkValidation(BaseController);

const makeReq = values => ({
  form: {
    values: values || {}
  }
});

describe('precursor-chemicals/behaviours/check-validation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    validators.notUrl.mockReturnValue(true);
  });

  it('returns requiredChemicalList error when key is which-chemical and is-chemical-not-listed is not checked', () => {
    const controller = new Controller();
    const req = makeReq({
      'which-chemical': '',
      'is-chemical-not-listed': ''
    });

    const err = controller.validateField('which-chemical', req);

    expect(err).toBeInstanceOf(Error);
    expect(err.key).toBe('which-chemical');
    expect(err.type).toBe('requiredChemicalList');
    expect(controller.superValidateFieldMock).not.toHaveBeenCalled();
  });

  it('returns requiredChemicalName error when not-listed-chemical-name is empty', () => {
    const controller = new Controller();
    const req = makeReq({
      'is-chemical-not-listed': 'is-chemical-not-listed',
      'not-listed-chemical-name': ''
    });

    const err = controller.validateField('not-listed-chemical-name', req);

    expect(err.key).toBe('not-listed-chemical-name');
    expect(err.type).toBe('requiredChemicalName');
    expect(controller.superValidateFieldMock).not.toHaveBeenCalled();
  });

  it('returns notUrl error when manually entered chemical name is a URL', () => {
    validators.notUrl.mockReturnValue(false);
    const controller = new Controller();
    const req = makeReq({
      'is-chemical-not-listed': 'is-chemical-not-listed',
      'not-listed-chemical-name': 'http://example.com'
    });

    const err = controller.validateField('not-listed-chemical-name', req);

    expect(err.key).toBe('not-listed-chemical-name');
    expect(err.type).toBe('notUrl');
    expect(validators.notUrl).toHaveBeenCalledWith('http://example.com');
    expect(controller.superValidateFieldMock).not.toHaveBeenCalled();
  });

  it('returns maxlength error when manually entered chemical name is longer than 250 chars', () => {
    const controller = new Controller();
    const req = makeReq({
      'is-chemical-not-listed': 'is-chemical-not-listed',
      'not-listed-chemical-name': 'a'.repeat(251)
    });

    const err = controller.validateField('not-listed-chemical-name', req);

    expect(err.key).toBe('not-listed-chemical-name');
    expect(err.type).toBe('maxlength');
    expect(controller.superValidateFieldMock).not.toHaveBeenCalled();
  });
});
