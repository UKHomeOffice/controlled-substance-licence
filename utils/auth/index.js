const { model: Model } = require('hof');
const { constants } = require('node:buffer');
const config = require('../../config');
const logger = require('hof/lib/logger')({ env: config.env });
const crypto = require('node:crypto');

const hofModel = new Model();

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

    // Decode the header and payload (Base64URL decoding)
    const decodedHeader = JSON.parse(Buffer.from(header, 'base64url').toString('utf8'));
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
 * @returns {object|null} - Returns the token object if successful, otherwise null.
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
        client_id: config.keycloak.cslApp.clientId,
        client_secret: config.keycloak.cslApp.secret,
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

    throw {
      status,
      type: errorType,
      message: errorMessage,
      details: error.response?.data || null
    };
  }
};

/**
 * Determines the error type based on the HTTP status code.
 * @param {number} status - The HTTP status code.
 * @returns {string} - The error type (e.g., 'authentication_error', 'server_error').
 */
const determineErrorType = status => {
  if (status >= 400 && status < 500) {
    return 'authenticationError';
  } else if (status >= 500) {
    return 'serverError';
  }
  return 'unknownError';
};

const refreshToken = async () => {
  // @todo Implement token refresh logic
  logger.info('Refreshing token');
};

const logout = async () => {
  // @todo Implement logout logic
  logger.info('Logging out');

  try {
    const reqParams = {
      url: config.keycloak.logoutUrl,
      method: 'POST'
    };

    const response = await hofModel._request(reqParams);

    // @todo: handle error messages from Keycloak

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
  if (userRoles.includes(config.keycloak.cslApp.allowedUserRole)) {
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
