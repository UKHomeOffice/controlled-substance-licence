'use strict';

const download = require('../../../utils/file-download');

module.exports = (basePath, fileName) => superclass => class extends superclass {
  configure(req, res, next) {
    download.responseFile(basePath, fileName, res, next);
  }
};
