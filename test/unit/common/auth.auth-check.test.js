'use strict';

const auth = require('../../../utils/auth');
const AuthCheck = require('../../../apps/common/behaviours/auth/auth-check');

jest.mock('../../../utils/auth');

describe('AuthCheck Behaviour', () => {
  let req;
  let res;
  let next;
  let instance;

  beforeEach(() => {
    req = {
      log: jest.fn(),
      session: {
        'hof-wizard-common': {
          tokens: {
            access_token: 'valid.token',
            refresh_token: 'refresh.token'
          }
        }
      },
      form: {
        options: {
          route: '/some-route'
        }
      },
      sessionModel: {
        reset: jest.fn()
      }
    };

    res = {
      redirect: jest.fn()
    };

    next = jest.fn();

    auth.setReq = jest.fn();
    auth.validateToken = jest.fn();
    auth.refreshToken = jest.fn();
    auth.authorisedUserRole = jest.fn();

    const Superclass = class {};
    const AuthCheckClass = AuthCheck(Superclass);
    instance = new AuthCheckClass();
  });

  it('should redirect to /sign-in if token is missing or invalid', async () => {
    auth.validateToken.mockReturnValue({ isValid: false, reason: 'missing' });

    await instance.configure(req, res, next);

    expect(auth.setReq).toHaveBeenCalledWith(req);
    expect(req.log).toHaveBeenCalledWith('info', 'Checking token validity');
    expect(req.sessionModel.reset).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/sign-in');
    expect(next).not.toHaveBeenCalled();
  });

  it('should refresh token if it is expired and continue if successful', async () => {
    auth.validateToken.mockReturnValue({ isValid: false, reason: 'expired' });
    auth.refreshToken.mockResolvedValue({
      access_token: 'new.access.token',
      refresh_token: 'new.refresh.token'
    });
    auth.authorisedUserRole.mockReturnValue(true);

    await instance.configure(req, res, next);

    expect(auth.refreshToken).toHaveBeenCalledWith('refresh.token');
    expect(req.session['hof-wizard-common'].tokens.access_token).toBe('new.access.token');
    expect(req.session['hof-wizard-common'].tokens.refresh_token).toBe('new.refresh.token');
    expect(next).toHaveBeenCalled();
  });

  it('should redirect to /sign-in if token refresh fails', async () => {
    auth.validateToken.mockReturnValue({ isValid: false, reason: 'expired' });
    auth.refreshToken.mockRejectedValue(new Error('Refresh failed'));

    await instance.configure(req, res, next);

    expect(auth.refreshToken).toHaveBeenCalledWith('refresh.token');
    expect(req.log).toHaveBeenCalledWith('error', expect.stringContaining('Error refreshing token'));
    expect(req.sessionModel.reset).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/sign-in');
    expect(next).not.toHaveBeenCalled();
  });

  it('should redirect to /signed-in-successfully if user is not authorised', async () => {
    auth.validateToken.mockReturnValue({ isValid: true });
    auth.authorisedUserRole.mockReturnValue(false);

    await instance.configure(req, res, next);

    expect(auth.authorisedUserRole).toHaveBeenCalledWith(req.session['hof-wizard-common'].tokens);
    expect(req.log).toHaveBeenCalledWith('info', 'User is not authorised to apply for a license.');
    expect(res.redirect).toHaveBeenCalledWith('/signed-in-successfully');
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next if token is valid and user is authorised', async () => {
    auth.validateToken.mockReturnValue({ isValid: true });
    auth.authorisedUserRole.mockReturnValue(true);

    await instance.configure(req, res, next);

    expect(auth.validateToken).toHaveBeenCalledWith('valid.token');
    expect(auth.authorisedUserRole).toHaveBeenCalledWith(req.session['hof-wizard-common'].tokens);
    expect(next).toHaveBeenCalled();
  });
});
