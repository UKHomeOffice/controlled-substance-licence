'use strict';

const auth = require('../../../utils/auth');
const { resetAllSessions } = require('../../../utils');
const SignOut = require('../../../apps/common/behaviours/auth/sign-out');

jest.mock('../../../utils/auth');
jest.mock('../../../utils', () => ({
  resetAllSessions: jest.fn()
}));

describe('SignOut Behaviour', () => {
  let req;
  let res;
  let next;
  let instance;

  beforeEach(() => {
    req = {
      log: jest.fn()
    };

    res = {};
    next = jest.fn();

    auth.setReq = jest.fn();
    auth.logout = jest.fn();

    const Superclass = class {
      successHandler() {}
    };
    const SignOutClass = SignOut(Superclass);
    instance = new SignOutClass();
  });

  it('should log out the user and clear sessions', async () => {
    await instance.successHandler(req, res, next);

    expect(auth.setReq).toHaveBeenCalledWith(req);
    expect(auth.logout).toHaveBeenCalled();
    expect(req.log).toHaveBeenCalledWith('info', 'Clear session on sign out');
    expect(resetAllSessions).toHaveBeenCalledWith(req);
  });
});
