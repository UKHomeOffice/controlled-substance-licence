'use strict';

const auth = require('../../../utils/auth');
const SignIn = require('../../../apps/common/behaviours/auth/sign-in');

jest.mock('../../../utils/auth');

describe('SignIn Behaviour', () => {
  let req;
  let res;
  let next;
  let instance;

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
      }
    };

    res = {};
    next = jest.fn();
    auth.setReq = jest.fn();
    auth.getTokens = jest.fn();

    const Superclass = class {};
    const SignInClass = SignIn(Superclass);
    instance = new SignInClass();
  });

  it('should store tokens in session and call next on successful authentication', async () => {
    const mockTokens = {
      access_token: 'access.token',
      refresh_token: 'refresh.token'
    };

    auth.getTokens.mockResolvedValue(mockTokens);

    await instance.validate(req, res, next);

    expect(auth.setReq).toHaveBeenCalledWith(req);
    expect(auth.getTokens).toHaveBeenCalledWith('testuser', 'password123');
    expect(req.sessionModel.set).toHaveBeenCalledWith('tokens', {
      access_token: 'access.token',
      refresh_token: 'refresh.token'
    });
    expect(next).toHaveBeenCalled();
  });

  it('should call next immediately in saveValues', () => {
    instance.saveValues(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
