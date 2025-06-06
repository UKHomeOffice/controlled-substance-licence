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
 * Generate a password with 8 characters length and should meet requirement
 * - The password must be created with a minimum of 8 characters.
 * - The characters must consist of at least 1 uppercase character.
 * - The characters must consist of at least 1 lowercase character.
 * - The characters must consist of at least 1 digit
 * @param {string} length - expected password length.
 * @param {string} characterType - expected character type example('ABabc1234').
 * @returns {string} -  valid password that meets password policy
*/
const generatePassword =  async (length, characterType) => {
  let randomPassword = '';
  let isPolicyMatch;
  try {
    const cryptoRandomString = await import('crypto-random-string');
    do{
      randomPassword = cryptoRandomString.default({length: length, characters: characterType});
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
