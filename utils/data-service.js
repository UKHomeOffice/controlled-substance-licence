'use strict';

const config = require('../config');

const { model: Model } = require('hof');
const { protocol, host, port } = config.saveService;
const applicantsUrl = `${protocol}://${host}:${port}/applicants`;

/**
 * Retrieves the applicant ID associated with the given username.
 *
 * @async
 * @param {string} username - The username for which to retrieve the applicant ID.
 * @returns {Promise<string|null|Error>} - Resolves with the applicant ID if found,
 *                                         `null` if no applicant ID is found,
 *                                         or an error object if the request fails.
 */
async function getApplicantId(username) {
  try {
    const hofModel = new Model();
    const response = await hofModel._request({
      url: `${applicantsUrl}/username/${username}`,
      method: 'GET'
    });
    return response.data[0]?.applicant_id || null;
  } catch (error) {
    const errorMessage = `Error retrieving applicant ID: ${JSON.stringify(error)}`;
    throw new Error(errorMessage);
  }
}

module.exports = {
  getApplicantId
};
