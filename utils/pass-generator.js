'use strict';
// const cryptoRandomString = require('crypto-random-string');
const generatePass =  async (length, characterType) => {
  const cryptoRandomString = await import('crypto-random-string');
  let randomPass = '';

  do {
    randomPass = cryptoRandomString.default({length: length, characters: characterType});
  }
  while(!randomPass?.match(/[A-Z]/) &&
        !randomPass?.match(/[a-z]/) &&
        !randomPass?.match(/[!#$%&*+=?@]/) &&
        !randomPass?.match(/\d/));

  return randomPass;
};


module.exports = {
  generatePass
};
