'use strict';
const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });

// At least one uppercase, one lowercase, one special character, and one digit, and minimum 8 characters
const passwordPolicyRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&*+=?@])(?=.*\d)[A-Za-z!#$%&*+=?@0-9]{8,}$/;

/**
 * Check if passward value is valid
 *
 * @param {string} value - random generated value from crypto-random-string
 * @returns {bool}
 */
const validatePassword = value => passwordPolicyRegex.test(value);

/**
  * Generates a password that meets the following requirements:
  * - Minimum length of 8 characters.
  * - Must contain at least one uppercase letter.
  * - Must contain at least one lowercase letter.
  * - Must contain at least one digit.
  * - Must contain at least one special character.
 * @param {string} passwordLength - expected password length.
 * @param {string} characterSet - expected character set example('ABabc1234').
 * @async
 * @returns {Promise<string>} A randomly generated password that satisfies the policy.
*/
const generatePassword =  async (passwordLength, characterSet) => {
  let randomPassword = '';
  let isPolicyMatch;
  try {
    const cryptoRandomString = await import('crypto-random-string');
    do{
      randomPassword = cryptoRandomString.default({length: passwordLength, characters: characterSet});
      isPolicyMatch = validatePassword(randomPassword);
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
