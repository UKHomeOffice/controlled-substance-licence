const { model: Model } = require('hof');
const config = require('../../config');
const logger = require('hof/lib/logger')({ env: config.env });
const crypto = require('node:crypto');

const hofModel = new Model();

/**
 * Custom error class for handling authentication-related errors.
 * This class extends the built-in Error class and adds additional properties
 * such as status, type, and details to provide more context about the error.
 *
 * @param {number} status - The HTTP status code associated with the error.
 * @param {string} type - The type of the error.
 * @param {string} message - A descriptive error message.
 * @param {object} [details] - Additional details about the error (optional).
 */
class AuthError extends Error {
  constructor({ status, type, message, details }) {
    super(message);
    this.status = status;
    this.type = type;
    this.details = details || null;
  }
}

/**
 * Decodes and verifies a JWT token using the public key.
 * @param {string} token - The JWT token to validate.
 * @returns {boolean} - Returns true if the token is valid, otherwise false.
 */
const decodeAndVerifyJwt = token => {
  try {
    if (!token) {
      logger.info('No JWT provided');
      return false;
    }

    // Split the JWT into its three parts: header, payload, and signature
    const [header, payload, signature] = token.split('.');

    if (!header || !payload || !signature) {
      logger.info('Invalid JWT format');
      return false;
    }

    // Decode the payload (Base64URL decoding)
    const decodedPayload = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));

    // Verify the signature (RS256)
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(`${header}.${payload}`);
    verifier.end();

    // @todo: Revise the online/offline token verification
    const isValid = verifier.verify(
      `-----BEGIN PUBLIC KEY-----\n${config.keycloak.keycloakPublicKey}\n-----END PUBLIC KEY-----`,
      signature,
      'base64url'
    );
    if (!isValid) {
      logger.info('JWT signature validation failed');
      return false;
    }

    // Check token expiration (exp claim)
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedPayload.exp && decodedPayload.exp < currentTime) {
      logger.info('JWT has expired');
      return false;
    }

    logger.info('JWT successfully validated');
    return true;
  } catch (error) {
    logger.error('JWT validation failed', { error });
    return false;
  }
};

/**
 * Determines the error type based on the HTTP status code.
 * @param {number} status - The HTTP status code.
 * @returns {string} - The error type.
 */
const determineErrorType = status => {
  if (status >= 400 && status < 500) {
    return 'authenticationError';
  } else if (status >= 500) {
    return 'serverError';
  }
  return 'unknownError';
};

/**
 * Validates the access token from the token object.
 * @param {object} tokens - The token object containing the access token and other details.
 * @returns {boolean} - Returns true if the access token is valid, otherwise false.
 */
const validateToken = tokens => {
  if (!tokens || !tokens.access_token) {
    logger.info('No access token provided in the token object');
    return false;
  }

  return decodeAndVerifyJwt(tokens.access_token);
};

/**
 * Fetches tokens from Keycloak using the Resource Owner Password Credentials (ROPC) flow.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {object} - Returns the token object if successful.
 * @throws {AuthError} - Throws an AuthError if the token fetch fails.
 */
const getTokens = async (username, password) => {
  try {
    const reqParams = {
      url: config.keycloak.tokenUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        client_id: config.keycloak.userAuthClient.clientId,
        client_secret: config.keycloak.userAuthClient.secret,
        username,
        password,
        grant_type: 'password'
      }
    };

    const response = await hofModel._request(reqParams);

    logger.info('Successfully fetched tokens from Keycloak');
    return response.data;
  } catch (error) {
    const status = error.response?.status || error.status;
    const statusText = error.response?.statusText || 'Unknown Status Text';
    const errorDescription = error.response?.data?.error_description || error.message;

    const errorType = determineErrorType(status);

    const errorMessage = `${status} - ${statusText}: ${errorDescription}`;

    logger.error('Failed to fetch tokens from Keycloak', { error: errorMessage });

    throw new AuthError({
      status,
      type: errorType,
      message: errorMessage,
      details: error.response?.data
    });
  }
};

const refreshToken = async () => {
  // @todo Implement token refresh logic
  logger.info('Refreshing token');
};

const logout = async () => {
  logger.info('Logging out');

  try {
    const reqParams = {
      url: config.keycloak.logoutUrl,
      method: 'POST'
    };

    const response = await hofModel._request(reqParams);

    logger.info('Successfully logged out from Keycloak');
    return response.data;
  } catch (error) {
    logger.error('Failed to logged out from Keycloak', { error: error.response?.data || error.message });
    return null;
  }
};

/**
 * Checks if the user belongs to the authorised user group.
 * @param {object} tokens - The token object containing the access token.
 * @returns {boolean} - Returns true if the user is authorised, otherwise false.
 */
const authorisedUserRole = tokens => {
  if (!tokens || !tokens.access_token) {
    logger.info('No access token provided in the tokens object');
    return false;
  }

  const decodedPayload = JSON.parse(Buffer.from(tokens.access_token.split('.')[1], 'base64url').toString('utf8'));

  const userRoles = decodedPayload?.realm_access?.roles || [];
  if (userRoles.includes(config.keycloak.userAuthClient.allowedUserRole)) {
    logger.info('User is authorised');
    return true;
  }

  logger.info('User is not authorised');
  return false;
};

module.exports = {
  validateToken,
  getTokens,
  refreshToken,
  logout,
  authorisedUserRole
};
