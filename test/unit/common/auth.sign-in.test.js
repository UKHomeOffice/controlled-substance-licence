'use strict';

const auth = require('../../../utils/auth');
const SignIn = require('../../../apps/common/behaviours/auth/sign-in');
const { getApplicantId } = require('../../../utils/data-service');

jest.mock('../../../utils/auth');
jest.mock('../../../utils/data-service', () => ({
  getApplicantId: jest.fn()
}));

describe('SignIn Behaviour', () => {
  let req;
  let res;
  let next;
  let instance;
  let expectedValidationError;

  beforeEach(() => {
    req = {
      form: {
        values: {
          username: 'testuser',
          password: 'password123'
        }
      },
      sessionModel: {
        set: jest.fn()
      },
      log: jest.fn()
    };

    res = {};
    next = jest.fn();
    auth.setReq = jest.fn();
    auth.getTokens = jest.fn();

    const Superclass = class {
      ValidationError = class {
        constructor(key, options) {
          this.key = key;
          this.options = options;
        }
      };
    };
    const SignInClass = SignIn(Superclass);
    instance = new SignInClass();

    expectedValidationError = {
      username: expect.objectContaining({
        key: 'username',
        options: expect.objectContaining({
          type: 'authenticationError'
        })
      }),
      password: expect.objectContaining({
        key: 'password',
        options: expect.objectContaining({
          type: 'authenticationError'
        })
      })
    };
  });

  it('should store tokens in session and call next on successful authentication', async () => {
    const mockTokens = {
      access_token: 'access.token',
      refresh_token: 'refresh.token'
    };

    getApplicantId.mockResolvedValue('applicant-123');

    auth.getTokens.mockResolvedValue(mockTokens);

    await instance.validate(req, res, next);

    expect(auth.setReq).toHaveBeenCalledWith(req);
    expect(auth.getTokens).toHaveBeenCalledWith('testuser', 'password123');
    expect(req.sessionModel.set).toHaveBeenCalledWith('auth_tokens', {
      access_token: 'access.token',
      refresh_token: 'refresh.token'
    });
    expect(next).toHaveBeenCalled();
  });

  it('should handle failure to retrieve applicant ID', async () => {
    getApplicantId.mockResolvedValue(null);

    await instance.validate(req, res, next);

    expect(req.log).toHaveBeenCalledWith('error', 'Validation failed: Failed to retrieve applicant ID');
    expect(next).toHaveBeenCalledWith(expectedValidationError);
  });

  it('should handle failure to generate tokens', async () => {
    getApplicantId.mockResolvedValue('applicant-123');
    auth.getTokens.mockRejectedValue(new Error('Token generation failed'));

    await instance.validate(req, res, next);

    expect(req.log).toHaveBeenCalledWith('error', 'Validation failed: Token generation failed');
    expect(next).toHaveBeenCalledWith(expectedValidationError);
  });

  it('should call next immediately in saveValues', () => {
    instance.saveValues(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
