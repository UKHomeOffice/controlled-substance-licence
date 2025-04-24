'use strict';

const auth = require('../../../utils/auth');
const AuthCheck = require('../../../apps/common/behaviours/auth/auth-check');
const { resetAllSessions } = require('../../../utils');

jest.mock('../../../utils/auth');
jest.mock('../../../utils', () => ({
  resetAllSessions: jest.fn()
}));

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
          auth_tokens: {
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
    auth.validateAccessToken = jest.fn();
    auth.getFreshTokens = jest.fn();
    auth.authorisedUserRole = jest.fn();

    const Superclass = class {};
    const AuthCheckClass = AuthCheck(Superclass);
    instance = new AuthCheckClass();
  });

  it('should redirect to /sign-in if token is missing or invalid', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: false, invalidTokenReason: 'missing' });

    await instance.configure(req, res, next);

    expect(auth.setReq).toHaveBeenCalledWith(req);
    expect(req.log).toHaveBeenCalledWith('info', 'Checking token validity');
    expect(resetAllSessions).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/sign-in');
    expect(next).not.toHaveBeenCalled();
  });

  it('should refresh token if it is expired and continue if successful', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: false, invalidTokenReason: 'expired' });
    auth.getFreshTokens.mockResolvedValue({
      access_token: 'new.access.token',
      refresh_token: 'new.refresh.token'
    });
    auth.authorisedUserRole.mockReturnValue(true);

    await instance.configure(req, res, next);

    expect(auth.getFreshTokens).toHaveBeenCalledWith('refresh.token');
    expect(req.session['hof-wizard-common'].auth_tokens.access_token).toBe('new.access.token');
    expect(req.session['hof-wizard-common'].auth_tokens.refresh_token).toBe('new.refresh.token');
    expect(auth.validateAccessToken).toHaveBeenCalledWith('new.access.token');
  });

  it('should redirect to /sign-in if token refresh fails', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: false, invalidTokenReason: 'expired' });
    auth.getFreshTokens.mockRejectedValue(new Error('Refresh failed'));

    await instance.configure(req, res, next);

    expect(auth.getFreshTokens).toHaveBeenCalledWith('refresh.token');
    expect(req.log).toHaveBeenCalledWith('error', expect.stringContaining('Refresh failed'));
    expect(resetAllSessions).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/sign-in');
    expect(next).not.toHaveBeenCalled();
  });

  it('should redirect to /signed-in-successfully if user is not authorised', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: true });
    auth.authorisedUserRole.mockReturnValue(false);

    await instance.configure(req, res, next);

    expect(auth.authorisedUserRole).toHaveBeenCalledWith(req.session['hof-wizard-common'].auth_tokens.access_token);
    expect(req.log).toHaveBeenCalledWith('info', 'User is not authorised to apply for a license.');
    expect(res.redirect).toHaveBeenCalledWith('/signed-in-successfully');
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next if token is valid and user is authorised', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: true });
    auth.authorisedUserRole.mockReturnValue(true);

    await instance.configure(req, res, next);

    expect(auth.validateAccessToken).toHaveBeenCalledWith('valid.token');
    expect(auth.authorisedUserRole).toHaveBeenCalledWith(req.session['hof-wizard-common'].auth_tokens.access_token);
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error if new tokens cannot be refreshed', async () => {
    auth.validateAccessToken.mockReturnValue({ isAccessTokenValid: false, invalidTokenReason: 'expired' });
    auth.getFreshTokens.mockResolvedValue(null);

    await instance.configure(req, res, next);

    expect(req.log).toHaveBeenCalledWith('info', 'Access token expired. Attempting to refresh token...');
    expect(req.log).toHaveBeenCalledWith('error', 'Failed to refresh tokens');
    expect(resetAllSessions).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/sign-in');
  });
});
