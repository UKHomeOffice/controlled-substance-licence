jest.mock('hof', () => ({
  model: jest.fn(() => ({
    _request: jest.fn()
  }))
}));

const auth = require('../../utils/auth/index');

jest.mock('node:crypto', () => ({
  createVerify: jest.fn(() => ({
    update: jest.fn(),
    end: jest.fn(),
    verify: jest.fn(() => false)
  }))
}));

const mockRequest = {
  log: jest.fn()
};

auth.setReq(mockRequest);

describe('Auth Module', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('validateAccessToken', () => {
    it('should return false with reason "missing" if access token is not provided', () => {
      const result = auth.validateAccessToken(null);
      expect(result).toEqual({ isAccessTokenValid: false, invalidTokenReason: 'missing' });
      expect(mockRequest.log).toHaveBeenCalledWith('info', 'No access token provided');
    });

    it('should return false with reason "invalid" if token is not verified', () => {
      require('node:crypto').createVerify.mockImplementation(() => ({
        update: jest.fn(),
        end: jest.fn(),
        verify: jest.fn(() => false) // Simulate invalid token
      }));
      const result = auth.validateAccessToken('invalid.token');
      expect(result).toEqual({ isAccessTokenValid: false, invalidTokenReason: 'invalid' });
      expect(mockRequest.log).toHaveBeenCalledWith('info', 'Invalid access token');
    });

    it('should return false with reason "expired" if token is expired', () => {
      require('node:crypto').createVerify.mockImplementation(() => ({
        update: jest.fn(),
        end: jest.fn(),
        verify: jest.fn(() => true) // Simulate valid token
      }));

      const expiredToken = Buffer.from(
        JSON.stringify({ exp: Math.floor(Date.now() / 1000) - 10 }) // Expired 10 seconds ago
      ).toString('base64url');
      const token = `header.${expiredToken}.signature`;

      const result = auth.validateAccessToken(token);
      expect(result).toEqual({ isAccessTokenValid: false, invalidTokenReason: 'expired' });
      expect(mockRequest.log).toHaveBeenCalledWith('info', 'Access token has expired');
    });

    it('should return true if token is valid and not expired', () => {
      require('node:crypto').createVerify.mockImplementation(() => ({
        update: jest.fn(),
        end: jest.fn(),
        verify: jest.fn(() => true) // Simulate valid token
      }));

      const validToken = Buffer.from(
        JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600 }) // Expires in 1 hour
      ).toString('base64url');
      const token = `header.${validToken}.signature`;

      const result = auth.validateAccessToken(token);
      expect(result).toEqual({ isAccessTokenValid: true });
    });
  });

  describe('getFreshTokens', () => {
    it('should return null if no refresh token is provided', async () => {
      const result = await auth.getFreshTokens(null);
      expect(result).toBeNull();
      expect(mockRequest.log).toHaveBeenCalledWith('info', 'No refresh token provided');
    });
  });

  describe('authorisedUserRole', () => {
    it('should return false if no access token is provided', () => {
      const result = auth.authorisedUserRole(null);
      expect(result).toBe(false);
      expect(mockRequest.log).toHaveBeenCalledWith('info', 'No token provided');
    });
  });
});
