/*
 * Migration script for user data provided by TopLevel, done in a rush
 * Could be better structured
 */

const fileSystem = require('node:fs');
const csvParse = require('csv-parse').parse;
const { model: Model } = require('hof');
const config = require('../../config');
// @todo a more flexible way of passing in the the data file, the data file should not be part of the repo
const userDataFilePath = __dirname + '/data-file/userData.csv';
const failedUserDataFilePath = __dirname + '/data-file/failedRows.csv';
const keyCloakCreateUserEndpoint = config.keycloak.adminUrl + '/users';
const { protocol, host, port } = config.saveService;
const rdsUrl = `${protocol}://${host}:${port}/applicants`;
const hofModel = new Model();
const validator = require('hof').controller.validators;

const writeFailedRow = row => {
  const data = row.join([',']) + '\r\n';
  fileSystem.appendFile(failedUserDataFilePath, data, function (error) {
    if (error) {
      console.log(error);
    }
  });
};

/**
 * @param {int} applicantId
 * @param {string} username
 * @param {string} createdAt
 * @param {string} updatedAt
 * @returns {Object}
 */
const saveApplicantRecordToRdsService = async (applicantId, username, createdAt, updatedAt) => {
  try {
    const processedUsername = (typeof username === 'string' || username instanceof String) ?
      username.toUpperCase() : username;
    const reqParams = {
      url: rdsUrl,
      method: 'POST',
      data: {
        applicant_id: applicantId,
        username: processedUsername,
        created_at: new Date(createdAt).toISOString(),
        updated_at: new Date(updatedAt).toISOString()
      }
    };
    const response = await hofModel._request(reqParams);
    return response.data;
  } catch (error) {
    writeFailedRow([username, '', 'rds']);
    console.log(error);
  }

  return true;
};

/**
 * @returns {Object}
 */
const getKeycloakAccessToken = async () => {
  try {
    const reqParams = {
      url: config.keycloak.tokenUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        client_id: config.keycloak.adminClient.clientId,
        client_secret: config.keycloak.adminClient.secret,
        grant_type: 'client_credentials'
      }
    };
    const response = await hofModel._request(reqParams);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return true;
};

/**
 * @param {string} accessToken
 * @param {string} username
 * @param {string} email
 * @param {string} createdAt
 * @param {string} isApproved
 * @returns {Object}
 */
const createUserOnKeycloak = async (accessToken, username, email, createdAt, isApproved) => {
  // @todo check if the username do not exist first
  try {
    const groups = ['Migrated from TopLevel', 'External users'];
    if(isApproved === '1') {
      groups.push('Approved applicants');
    }
    const reqParams = {
      url: keyCloakCreateUserEndpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken
      },
      data: {
        username: username,
        enabled: true,
        email: email,
        emailVerified: false,
        createdTimestamp: (new Date(createdAt)).getTime(),
        groups: groups
      }
    };
    const response = await hofModel._request(reqParams);
    return response.data;
  } catch (error) {
    console.log('KeyCloak API error');
    console.log(error.response.config.headers.data, error.response.data);
    writeFailedRow([username, email, 'keycloak']);
  }
  return true;
};

/**
 * @param {array} row
 * @returns {Boolean}
 */
const userDataIntegrityCheck = row => {
  // @todo better structure of the data row and definition of which index is for what value
  return Array.isArray(row) &&
        row.length === 6 &&
        Number.isInteger(Number(row[0])) && // applicant ID is integer
        // username is string and not empty
        ((typeof row[1] === 'string' || row[1] instanceof String) && row[1] !== '') &&
        // approved user column should only be string '1' (approved) or string '0' (not apporved)
        ((typeof row[5] === 'string' || row[5] instanceof String) && row[5] !== '' &&
            (row[5] === '1' || row[5] === '0'));
};

/**
 * @param {string} dateString
 * @returns {string}
 */
const formatDate = dateString => {
  const data = dateString.split(' ');
  const initial = data[0].split(/\//);
  const formattedDate = [ initial[1], initial[0], initial[2] ].join('/');
  const result = [formattedDate, data[1]].join(' ');
  return result;
};

const importUsers = async () => {
  const accessTokenObject = await getKeycloakAccessToken();
  console.log('Starting migration process ...');
  let rowCount = 1;
  // @todo find out total number of rows efficiently to display progress
  const start = Date.now();
  try {
    fileSystem.createReadStream(userDataFilePath)
      .pipe(csvParse({ delimiter: ',', from_line: 2 }))
      .on('data', async function (row) {
        // @todo output progress
        console.log('Processing data row ' + rowCount);
        if(userDataIntegrityCheck(row)) {
          row[1] = row[1].trim();
          row[3] = formatDate(row[3]);
          row[4] = row[4] === 'NULL' ? new Date().toISOString() : formatDate(row[4]);
          row[2] = row[2].trim();
          if(!validator.email(row[2])) {
            console.log('Invalid email for user: ' + row[1]);
            row[2] = '';
          }
          await saveApplicantRecordToRdsService(row[0], row[1], row[3], row[4]);
          await createUserOnKeycloak(accessTokenObject.access_token, row[1], row[2], row[3], row[5]);
          const ms = Date.now() - start;
          console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
          // @todo process the response from rds and keycloak
        } else {
          console.log('Do not process the row, row data is not valid');
          console.log(row);
          writeFailedRow([row[1], row[2]], 'validation');
          // //@todo capture and output problematic records
        }
        rowCount ++;
      });
  } catch (error) {
    // @todo better handling of csv file read error
    console.log(error);
  }
};

importUsers();
