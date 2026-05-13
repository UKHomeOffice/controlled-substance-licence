'use strict';
const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });

// At least one uppercase, one lowercase, length of 16 characters and first character must be letter or digit.
const passwordPolicyRegex = /^(?=[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@!?=])(?!.*[@!?=].*[@!?=])[A-Za-z@!?=0-9]{16}$/;

/**
 * Check if passward value is valid
 *
 * @param {string} value - random generated value from crypto-random-string
 * @param {string} username - account username
 * @returns {bool}
 */
const validatePassword = (value, username) => passwordPolicyRegex.test(value) && (value !== username);

/**
  * Generates a password that meets the following requirements:
  * - Minimum length of 16 characters.
  * - Must contain at least one uppercase letter.
  * - Must contain at least one lowercase letter.
  * - Must contain at least one digit.
  * - Must contain one special character.
 * @param {string} passwordLength - expected password length.
 * @param {string} characterSet - expected character set example('ABabc1234@!?=').
 * @async
 * @returns {Promise<string>} A randomly generated password that satisfies the policy.
*/
const generatePassword =  async (passwordLength, characterSet, username) => {
  let randomPassword = '';
  let isPolicyMatch;
  try {
    const cryptoRandomString = await import('crypto-random-string');
    do{
      randomPassword = cryptoRandomString.default({length: passwordLength, characters: characterSet});
      isPolicyMatch = validatePassword(randomPassword, username);
    }
    while(!isPolicyMatch);
  }catch(error) {
    const errorMessage = `Failed to generate password: ${error}`;
    logger.log('error', errorMessage);
    throw new Error(errorMessage);
  }
  return randomPassword;
};


module.exports = {
  generatePassword,
  validatePassword
};
