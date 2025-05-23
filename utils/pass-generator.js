'use strict';

const cryptoRandomString = require('crypto-random-string');

const generatePass = length => {
  return cryptoRandomString({length: length, type: 'ascii-printable'});
};

module.exports = {
  generatePass
};
