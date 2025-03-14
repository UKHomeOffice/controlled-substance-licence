'use strict';

const config = require('../config');
const logger = require('hof/lib/logger')({ env: config.env });
const path = require('node:path');


/**
 * Sends a file as a response for download.
 *
 * @param {string} basePath - The base directory path where the file is located.
 * @param {string} fileName - The name of the file to be downloaded.
 * @param {object} res - The response object from an Express.js route handler.
 * @param {function} next - The next middleware function in the Express.js stack.
 */
const responseFile = async (basePath, fileName, res, next) => {
  try {
    const fullFileName = path.join(basePath, fileName);
    const baseDir = path.resolve(__dirname, '..');
    const filePath = path.join(baseDir, fullFileName);

    res.download(filePath, fileName, err => {
      if (err) {
        const errorMsg = `Error occurred on file download. Cause: ${err.status} - ${err.message}`;
        logger.error(errorMsg);
        next(err);
      }
    });
  } catch (error) {
    const errorMsg = `Unexpected error occurred: ${error.message}`;
    logger.error(errorMsg);
    next(error);
  }
};

module.exports = {
  responseFile
};
