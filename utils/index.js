const config = require('../config');
const translations = require('../apps/precursor-chemicals/translations/src/en/fields.json');
const validators = require('hof/controller/validation/validators');

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
 * @returns {string} - The formatted date string.
 *
 * @example
 * Assuming config.dateLocales is 'en-GB' and config.dateFormat is { day: 'numeric', month: 'long', year: 'numeric' }
 * formatDate('2023-10-23'); // returns '23 October 2023'
 */
const formatDate = date => {
  const dateObj = new Date(date);
  return new Intl.DateTimeFormat(config.dateLocales, config.dateFormat).format(dateObj);
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

module.exports = {
  getLabel,
  translateOption,
  formatDate,
  sanitiseFilename,
  parseOperations,
  findArrayItemByValue,
  isValidPhoneNumber
};
