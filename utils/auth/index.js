const { model: Model } = require('hof');
const config = require('../../config');
const crypto = require('node:crypto');

const hofModel = new Model();

let req = null;
const setReq = request => {
  req = request;
};

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
 * Validates the access token.
 * Checks if the access token is present, valid, and not expired.
 *
 * @param {string} accessToken - The JWT access token as a string.
 * @returns {object} - An object containing the validation result:
 *   - {boolean} isAccessTokenValid - `true` if the token is valid, otherwise `false`.
 *   - {string} invalidTokenReason - The reason for invalidity, if applicable. Possible values:
 *     - 'missing': The token object or access token is missing
 *     - 'invalid': The access token is invalid
 *     - 'expired': The access token has expired
 */
const validateAccessToken = accessToken => {
  if (!accessToken) {
    req.log('info', 'No access token provided');
    return { isAccessTokenValid: false, invalidTokenReason: 'missing' };
  }

  if (!isTokenVerified(accessToken)) {
    req.log('info', 'Invalid access token');
    return { isAccessTokenValid: false, invalidTokenReason: 'invalid' };
  }

  if (isTokenExpired(accessToken)) {
    req.log('info', 'Access token has expired');
    return { isAccessTokenValid: false, invalidTokenReason: 'expired' };
  }

  return { isAccessTokenValid: true };
};

/**
 * Fetches tokens from Keycloak using the Resource Owner Password Credentials (ROPC) flow.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {object} - Returns the token object if successful.
 * @throws {Error} - Throws an Error if the token fetch fails.
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

    const errorMessage = `${status} - ${statusText}: ${errorDescription}`;

    req.log('error', `Failed to fetch tokens from Keycloak', ${errorMessage }`);

    throw new Error(errorMessage);
  }
};

/**
 * Refreshes the tokens using the refresh token.
 * Sends a request to the Keycloak token endpoint to obtain a new set of tokens.
 *
 * @param {string} refreshToken - The refresh token to use for obtaining a new set of tokens.
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

    if (!response?.data?.access_token || !response?.data?.refresh_token) {
      req.log('error', 'No data returned from Keycloak');
      return null;
    }

    req.log('info', 'Successfully refreshed tokens from Keycloak');
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error.message;
    req.log('error', `Failed to refresh tokens from Keycloak: ${JSON.stringify(errorMessage)}`);
    return error;
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
 * @param {string} token - The JWT token to validate.
 * @returns {boolean} - Returns `true` if the user is authorised, otherwise `false`.
 */
const authorisedUserRole = token => {
  if (!token) {
    req.log('info', 'No token provided');
    return false;
  }

  const decodedPayload = JSON.parse(Buffer.from(token.split('.')[1], 'base64url').toString('utf8'));

  const userRoles = decodedPayload?.realm_access?.roles || [];
  if (userRoles.includes(config.keycloak.userAuthClient.allowedUserRole)) {
    req.log('info', 'User is authorised');
    return true;
  }

  req.log('info', 'User is not authorised');
  return false;
};

module.exports = {
  validateAccessToken,
  getTokens,
  getFreshTokens,
  logout,
  authorisedUserRole,
  setReq
};
