'use strict';

const cryptoRandomString = require('crypto-random-string');
const {consecutiveUniqueRandom} = require('unique-random');

const generatePass = (min, max, characterType) => {
  const length = consecutiveUniqueRandom(min, max);
  return cryptoRandomString({length: length, type: characterType});
};


module.exports = {
  generatePass
};
