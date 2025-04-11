const { model: Model } = require('hof');
const config = require('../../config');
const crypto = require('node:crypto');

const hofModel = new Model();

let req = null;
const setReq = request => {
  req = request;
};

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
const isTokenVerified = token => {
  try {
    if (!token) {
      req.log('info', 'No JWT provided');
      return false;
    }

    // Split the JWT into its three parts: header, payload, and signature
    const [header, payload, signature] = token.split('.');

    if (!header || !payload || !signature) {
      req.log('info', 'Invalid JWT format');
      return false;
    }

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
      req.log('info', 'JWT signature validation failed');
      return false;
    }

    req.log('info', 'JWT successfully validated');
    return true;
  } catch (error) {
    req.log('error', `JWT validation failed: ${error}`);
    return false;
  }
};

/**
 * Checks if a JWT token is expired based on its `exp` claim.
 * @param {string} token - The JWT token to check.
 * @returns {boolean} - Returns `true` if the token is expired, otherwise `false`.
 */
const isTokenExpired = token => {
  const [, payload] = token.split('.'); // Only extract the payload

  // Decode the payload (Base64URL decoding)
  const decodedPayload = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));

  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  if (decodedPayload.exp && decodedPayload.exp < currentTime) {
    req.log('info', 'JWT has expired');
    return true;
  }
  return false;
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
 * Checks if the access token is present, valid, and not expired.
 *
 * @param {object} tokens - The token object containing the access token and other details.
 * @returns {object} - An object containing the validation result:
 *   - {boolean} isValid - `true` if the token is valid, otherwise `false`.
 *   - {string} reason - The reason for invalidity, if applicable. Possible values:
 *     - 'missing': The token object or access token is missing
 *     - 'invalid': The access token is invalid
 *     - 'expired': The access token has expired
 */
const validateToken = accessToken => {
  if (!accessToken) {
    req.log('info', 'No access token provided');
    return { isValid: false, reason: 'missing' };
  }

  if (!isTokenVerified(accessToken)) {
    req.log('info', 'Invalid access token');
    return { isValid: false, reason: 'invalid' };
  }

  if (isTokenExpired(accessToken)) {
    req.log('info', 'Access token has expired');
    return { isValid: false, reason: 'expired' };
  }

  return { isValid: true };
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

    req.log('info', 'Successfully fetched tokens from Keycloak');
    return response.data;
  } catch (error) {
    const status = error.response?.status || error.status;
    const statusText = error.response?.statusText || 'Unknown Status Text';
    const errorDescription = error.response?.data?.error_description || error.message;

    const errorType = determineErrorType(status);

    const errorMessage = `${status} - ${statusText}: ${errorDescription}`;

    req.log('error', `Failed to fetch tokens from Keycloak', ${errorMessage }`);

    throw new AuthError({
      status,
      type: errorType,
      message: errorMessage,
      details: error.response?.data
    });
  }
};

/**
 * Refreshes the tokens using the refresh token.
 * Sends a request to the Keycloak token endpoint to obtain a new access token.
 *
 * @param {string} refreshToken - The refresh token to use for obtaining a new access token.
 * @returns {object|null} - Returns the new token object if successful, or `null` if the refresh fails.
 */
const getFreshTokens = async refreshToken => {
  if (!refreshToken) {
    req.log('info', 'No refresh token provided');
    return null;
  }

  req.log('info', 'Refreshing token');
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
        refresh_token: refreshToken,
        grant_type: 'refresh_token'
      }
    };

    const response = await hofModel._request(reqParams);

    req.log('info', 'Successfully refreshed tokens from Keycloak');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    req.log('error', `Failed to refresh tokens from Keycloak: ${JSON.stringify(errorMessage)}`);
    return null;
  }
};


/**
 * Logs the user out by sending a request to the Keycloak logout endpoint.
 * This function invalidates the user's session on the Keycloak server.
 *
 * @async
 * @returns {object|null} - Returns the response data from Keycloak if the logout is successful, or `null` if it fails.
 */
const logout = async () => {
  req.log('info', 'Logging out');

  try {
    const reqParams = {
      url: config.keycloak.logoutUrl,
      method: 'POST'
    };

    const response = await hofModel._request(reqParams);

    req.log('info', 'Successfully logged out from Keycloak');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    req.log('error', `Failed to log out from Keycloak: ${JSON.stringify(errorMessage)}`);
    return null;
  }
};

/**
 * Checks if the user belongs to the authorised user group.
 * @param {object} tokens - The token object containing the access token.
 * @returns {boolean} - Returns `true` if the user is authorised, otherwise `false`.
 */
const authorisedUserRole = tokens => {
  if (!tokens || !tokens.access_token) {
    req.log('info', 'No access token provided in the tokens object');
    return false;
  }

  const decodedPayload = JSON.parse(Buffer.from(tokens.access_token.split('.')[1], 'base64url').toString('utf8'));

  const userRoles = decodedPayload?.realm_access?.roles || [];
  if (userRoles.includes(config.keycloak.userAuthClient.allowedUserRole)) {
    req.log('info', 'User is authorised');
    return true;
  }

  req.log('info', 'User is not authorised');
  return false;
};

module.exports = {
  validateToken,
  getTokens,
  getFreshTokens,
  logout,
  authorisedUserRole,
  setReq
};
