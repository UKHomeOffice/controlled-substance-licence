'use strict';

/**
 * Generates a unique username based on the company name, postcode, and the last generated username.
 * @param {string} companyName - The name of the company to include the part in username
 * @param {string} postcode - The postcode to include in the username
 * @param {string} lastGeneratedUsername - The last username that was generated, used to increment the suffix.
 * @returns {string} - A unique, lowercase username string.
 */
function generateUniqueUsername(companyName, postcode, lastGeneratedUsername) {
  const companyNamePart = companyName.length < 5 ? companyName : companyName.slice(0, 5);
  const postcodePart = postcode.slice(0, 3).trimEnd();
  let username = (companyNamePart + postcodePart).toLowerCase();

  // Append an incremented integer suffix to the username if lastGeneratedUsername is provided
  if (lastGeneratedUsername) {
    const suffix = lastGeneratedUsername.replace(username, '');
    const counter = suffix === '' ? 1 : Number(suffix) + 1;
    username = username + counter;
  }

  return username;
}

module.exports = {
  generateUniqueUsername
};
