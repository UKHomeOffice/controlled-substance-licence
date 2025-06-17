const { model: Model } = require('hof');
const config = require('../../config');
const crypto = require('node:crypto');

const hofModel = new Model();

let req = null;
const setReq = request => {
  req = request;
};

/**
 * Redacts token values in URLs within a log message.
 * Replaces any 'token=...' with 'token=**REDACTED**'.
 *
 * @param {string} logMessage - The log message to redact.
 * @returns {string} - The log message with token values redacted.
 */
function redactToken(logMessage) {
  return logMessage.replace(/token=[^&\s"]+/g, 'token=**REDACTED**');
}

/**
 * Generates a useful error message from a typical iCasework REST API error response object.
 * It will return at a minimum error.message from the Error object passed in.
 *
 * @param {object} error - An Error object.
 * @returns {string} - An error message for failed iCasework requests containing key causal information.
 */
const generateiCaseworkErrorMsg = error => {
  let errorDetails = '';
  if (error.response?.headers?.['x-application-error-code'] &&
    error.response?.headers?.['x-application-error-info']) {
    errorDetails = `Cause: 
      ERROR CODE: ${error.response?.headers?.['x-application-error-code']}
      ERROR INFO: ${error.response?.headers?.['x-application-error-info']}`;
  } else if (error.response?.data?.error) {
    errorDetails = `Cause: ${error.response.data.error}`;
  }
  const errorCode = error.response?.status ? `${error.response.status} -` : '';
  return `${errorCode} ${error.message}; ${redactToken(errorDetails)}`;
};

/**
 * Builds a full URL for an iCasework API resource, including the optional `db` parameter
 * and any additional query parameters.
 *
 * @param {string} resource - The API resource or endpoint (e.g., 'createcase', 'token').
 * @param {Object} [extraParams={}] - Additional query parameters as key-value pairs.
 * @returns {string} The fully constructed URL.
 */
function buildUrl(resource, extraParams = {}) {
  const baseUrl = `${config.icasework.url}/${resource}`;
  const url = new URL(baseUrl);

  // Add db param if present
  if (config.icasework.db) {
    url.searchParams.set('db', config.icasework.db);
  }

  // Add any extra params
  Object.entries(extraParams).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
}

/**
 * Converts a standard base64-encoded string to base64url encoding (RFC 7515).
 * Replaces '+' with '-', '/' with '_', and removes '=' padding.
 *
 * @param {string} input - The base64-encoded string.
 * @returns {string} The base64url-encoded string.
 */
function toBase64Url(input) {
  return input.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * Encodes an object to base64url.
 *
 * @param {object} input - The object to encode.
 * @returns {string} The base64url-encoded string.
 */
function base64object(input) {
  const json = JSON.stringify(input);
  const base64 = Buffer.from(json, 'utf8').toString('base64');
  return toBase64Url(base64);
}

/**
 * Builds a JWT assertion
 *
 * @param {object} params - Parameters for the assertion.
 * @param {string} params.iss - The issuer (typically the API key).
 * @param {string} params.aud - The audience (token endpoint URL).
 * @param {string} params.secret - The shared secret for signing.
 * @returns {string} The signed JWT assertion as a base64url string.
 */
function buildAssertion({ iss, aud, secret }) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss,
    aud,
    iat: now,
    exp: now + 60 * 5 // 5 minutes expiry
  };

  const unsignedToken = `${base64object(header)}.${base64object(payload)}`;
  const signature = toBase64Url(
    crypto
      .createHmac('sha256', secret)
      .update(unsignedToken)
      .digest('base64')
  );
  return `${unsignedToken}.${signature}`;
}

/**
 * Fetches an access token from iCasework.
 *
 * @async
 * @returns {Promise<object>} Resolves with the token object if successful.
 * @throws {Error} Throws an Error if the token fetch fails or the response does not contain a access token.
 */
const getToken = async () => {
  try {
    const assertion = buildAssertion({
      iss: config.icasework.apiKey,
      aud: buildUrl('token'),
      secret: config.icasework.apiSecret
    });

    const reqParams = {
      url: buildUrl('token'),
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        assertion,
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
      }
    };

    const response = await hofModel._request(reqParams);

    if (response?.data?.access_token === undefined) {
      const errorMessage = 'Access token not found in response';
      const err = new Error(errorMessage);
      err.status = 500;
      throw err;
    }

    req.log('info', 'Successfully fetched tokens from iCasework');
    return response.data;
  } catch (error) {
    const errorMessage = `Failed to fetch tokens from iCasework: ${generateiCaseworkErrorMsg(error)}`;
    throw new Error(errorMessage);
  }
};

/**
 * Creates a new case in iCasework using the provided case data.
 * Fetches an access token, sends a POST request to the iCasework API, and returns the created case response.
 *
 * @async
 * @param {object} caseData - The data for the case to be created.
 * @returns {Promise<object>} Resolves with the created case response object.
 * @throws {Error} Throws an error if the request fails or the response does not contain a case ID.
 */
const createCase = async caseData => {
  if (!req) {
    throw new Error('Request object is not set. Use setReq() to set it.');
  }

  try {
    const token = await getToken();

    const reqParams = {
      url: buildUrl('createcase'),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        'Content-Type': 'application/json'
      },
      data: caseData
    };

    const response = await hofModel._request(reqParams);

    if (response?.data?.createcaseresponse?.caseid === undefined) {
      const errorMessage = 'Case ID not found in response';
      const err = new Error(errorMessage);
      err.status = 500;
      throw err;
    }

    return response.data.createcaseresponse;
  } catch (error) {
    const errorMessage = `Failed to create case in iCasework: ${generateiCaseworkErrorMsg(error)}`;
    throw new Error(errorMessage);
  }
};


module.exports = {
  createCase,
  setReq
};
