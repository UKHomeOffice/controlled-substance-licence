const config = require('../config');
const translations = require('../apps/precursor-chemicals/translations/src/en/fields.json');
const validators = require('hof/controller/validation/validators');
const logger = require('hof/lib/logger')({ env: config.env });
const { model: Model } = require('hof');
const { protocol, host, port } = config.saveService;
const rdsApiBaseUrl = `${protocol}://${host}:${port}`;

/**
 * Retrieves the label for a given field key and field value from the translations object.
 *
 * @param {string} fieldKey - The key representing the field in the translations object.
 * @param {string|string[]} fieldValue - The value or values for which the label(s) need to be retrieved.
 * @returns {string|undefined} - The label(s) corresponding to the field value(s), or undefined if not found.
 */
const getLabel = (fieldKey, fieldValue) => {
  if ( Array.isArray(fieldValue)) {
    return fieldValue.map(option => translations[fieldKey]?.options[option]?.label).join(', ') || undefined;
  }
  return translations[fieldKey]?.options[fieldValue]?.label || undefined;
};

/**
 * Retrieves a translated label for a given field and value where the field had multiple options (radio or checkbox).
 *
 * @param {object} req - the request object - required to use its translate method
 * @param {string} field - The field with options (e.g. from fields.json)
 * @param {string} value - The option value for which the label(s) need to be retrieved.
 * @returns {string} - The label(s) corresponding to the field option value(s).
 */
const translateOption = (req, field, value) => {
  return req.translate(`fields.${field}.options.${value}.label`);
};

/**
 * Formats a given date string into a specified format.
 *
 * @param {string} date - The date string to be formatted.
 * @returns {string|undefined} - The formatted date string.
 *
 * @example
 * Assuming config.dateLocales is 'en-GB' and config.dateFormat is { day: 'numeric', month: 'long', year: 'numeric' }
 * formatDate('2023-10-23'); // returns '23 October 2023'
 */
const formatDate = date => {
  try {
    const dateObj = new Date(date);
    return new Intl.DateTimeFormat(config.dateLocales, config.dateFormat).format(dateObj);
  } catch (error) {
    logger.warn('Warning: Failed to format date', error);
    return undefined;
  }
};

/**
 * Sanitises a filename by replacing the middle part with **REDACTED**,
 * keeping the first 2 and last 2 characters before the extension.
 *
 * @param {string} filename - The original filename to be sanitised.
 * @returns {string} - The sanitised filename with the middle part replaced by **REDACTED**.
 *
 * @example
 * sanitiseFilename('filename.txt');
 * // returns 'fi**REDACTED**me.txt'
 *
 * @example
 * sanitiseFilename('abcdefghijklmnopqrstuvwxyz.jpg');
 * // returns 'ab**REDACTED**yz.jpg'
 */
const sanitiseFilename = filename => filename?.replace(/^(.{2}).*(.{2}\.[^.]+)$/, '$1**REDACTED**$2');

/**
 * Translates and merges a group of options in an aggregator loop
 * Where standard options are provided as checkboxes and additional items can be added as a separate text field
 *
 * @param {object} req - The request object required to use pass through req.translate().
 * @param {string} opsField - The value or values for which the label(s) need to be retrieved.
 * @param {string|array} standardOps - A string (single item checked) or array of options from a select
 * @param {string} customOps - A string from a text input to attach if the 'other' option is selected
 * @returns {string} - A the joined concatenated array of operations, all translated from value to label.
 */
const parseOperations = (req, opsField, standardOps, customOps) => {
  let checkedOps = standardOps;
  // A single checked box will be stored as a string not an array of length 1 so...
  if (typeof checkedOps === 'string') {
    checkedOps = Array.of(checkedOps);
  }

  return checkedOps.map(operation => {
    if (operation === 'other' && customOps) {
      return `${translateOption(req, opsField, operation)}: ${customOps}`;
    }
    return translateOption(req, opsField, operation);
  }).join(', ');
};

/**
 * Finds and returns the first matching item from an array of objects based on a given value.
 * The objects in the array should contain a 'value' property, and optionally other properties such as 'label'.
 * @param {array} data - An array of objects, each containing at least a 'value' property.
 * @param {string} valueToFind - The value to search for in the array.
 * @returns {object|undefined} - The first object that matches the given value, or undefined if no match is found.
 *
 * @example
 * findArrayItemByValue(chemicals 'Ephedrine');
 * // returns {
 *   "label": "Ephedrine (2939 4100)",
 *   "value": "Ephedrine",
 *   "category": "1",
 *   "cnCode": "2939 4100"
 * }
 *
 * @example
 * findArrayItemByValue(tradingReasons 'broker');
 * // returns {
 *   "label": "Broker",
 *   "value": "broker",
 * }
 *
 */
const findArrayItemByValue = (data, valueToFind) => {
  return data.find(item => item.value === valueToFind);
};

/**
 * Returns true for a valid phone number; returns false for an invalid phone number.
 *
 * @param {string} phoneNumber - The phone number to be validated.
 * @returns {boolean} - true if the phone number is valid or false if the phone number is invalid or undefined.
 */
const isValidPhoneNumber = phoneNumber => {
  const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
  return validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
};

/**
 * From the request object, determines if any of the current step's fork conditions are satisfied by a field value.
 *
 * @param {object} req - The request object.
 * @param {array} forks - Optionally pass the forks array for a specific step.
 * @returns {object|undefined} - Returns a form step fork object if one was satisfied or undefined if not.
 */
const findSatisfiedForkCondition = (req, forks) => {
  if (forks && Array.isArray(forks)) {
    return forks.find(fork => {
      if (typeof fork.condition === 'function') {
        return fork.condition(req);
      }
      const { field, value } = fork.condition;
      return req.sessionModel.get(field) === value;
    });
  }
  return undefined;
};

/**
 * Generates a useful error message from a typical Axios error reponse object
 * It will return at a minimum error.message from the Error object passed in.
 *
 * @param {object} error - An Error object.
 * @returns {string} - An error message for failed Axios requests containing key causal information.
 */
const generateErrorMsg = error => {
  const errorDetails = error.response?.data ? `Cause: ${JSON.stringify(error.response.data)}` : '';
  const errorCode = error.response?.status ? `${error.response.status} -` : '';
  return `${errorCode} ${error.message}; ${errorDetails}`;
};

/**
 * Makes a request to hof-rds-api service endpoint to clear table rows according to passed arguments
 * calls generateErrorMsg if an error occurs with the hof _request method
 *
 * @param {string} table - The database table to clear rows from
 * @param {string} submitStatus - The submission status of rows to be removed e.g. submitted/unsubmitted/all
 * @param {string} dateType - The table datetime column to calculate retention period/expiry from
 * @param {string} days - The number of days the retention period is calculated back to from today's date
 * @param {string} periodType - Calculate retention period using either 'calendar' or 'business'
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete
 */
const clearExpiredApplictions = async (table, submitStatus, dateType, days, periodType) => {
  const hofModel = new Model();
  try {
    await hofModel._request({
      url: `${rdsApiBaseUrl}/${table}/clear/${submitStatus}/${dateType}/older/${days}/${periodType}`,
      method: 'DELETE'
    });
    // eslint-disable-next-line max-len
    logger.info(`Cleared ${submitStatus} ${table} where ${dateType} is older than ${days} ${periodType} days.`);
  } catch (error) {
    logger.error(generateErrorMsg(error));
  }
};

/**
 * Resets all session data for keys in `req.session` that start with the 'hof-wizard' prefix.
 * This is useful for clearing wizard-related session data while leaving other session data intact.
 *
 * @param {object} req - The request object containing the session.
 */
const resetAllSessions = req => {
  if (config.wizardSessionKeyPrefix === undefined) {
    const errorMessage = 'Session key prefix is not defined in the configuration.';
    req.log('error', errorMessage);
    throw new Error(errorMessage);
  }
  const prefix = config.wizardSessionKeyPrefix;
  Object.keys(req.session).forEach(key => {
    if (key.startsWith(prefix)) {
      req.session[key] = {};
    }
  });

  req.log('info', `All sessions with prefix '${prefix}' have been reset.`);
};

module.exports = {
  getLabel,
  translateOption,
  formatDate,
  sanitiseFilename,
  parseOperations,
  findArrayItemByValue,
  isValidPhoneNumber,
  findSatisfiedForkCondition,
  generateErrorMsg,
  clearExpiredApplictions,
  resetAllSessions
};
