/*
 * Migration script for user data provided by TopLevel, done in a rush
 * Could be better structured
 */

const fileSystem = require('fs');
const csvParse = require("csv-parse").parse;
const { model: Model } = require('hof');
const config = require('../../config');
//@todo a more flexible way of passing in the the data file, the data file should not be part of the repo
const userDataFilePath = __dirname + '/data-file/' + config.dataMigration.userDataFileName;
const keyCloakCreateUserEndpoint = config.keycloak.apiDomain + 'users'
const { protocol, host, port } = config.saveService;
const rdsUrl = `${protocol}://${host}:${port}/applicants`;
const hofModel = new Model();
const validator = require('hof').controller.validators;

/**
 * @param {int} applicantId
 * @param {string} username
 * @param {string} createdAt
 * @param {string} updatedAt
 * @returns {Object}
 */
const saveApplicantRecordToRdsService = async (applicantId, username, createdAt, updatedAt) => {
    try {
        const reqParams = {
            url: rdsUrl,
            method: 'POST',
            data: {
                applicant_id: applicantId,
                username: username,
                created_at: createdAt,
                updated_at: updatedAt
            }
        };
        const response = await hofModel._request(reqParams);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * @returns {Object}
 */
const getKeycloakAccessToken = async() => {
    try {
        const reqParams = {
            url: config.keycloak.tokenUrl,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                client_id: 'admin-cli',
                client_secret: 'qlZrtmKCmKVpS5h1wYe6cXaFiWi4n41Y',
                grant_type: 'client_credentials'
            }
        };
        const response = await hofModel._request(reqParams);
        return response.data;

    } catch (error) {
        console.log(error);
    }
}

/**
 * @param {string} accessToken
 * @param {string} username
 * @param {string} email
 * @param {string} createdAt
 * @returns {Object}
 */
const createUserOnKeycloak = async (accessToken, username, email, createdAt) => {
    //@todo check if the username do not exist first
    try {
        const reqParams = {
            url: keyCloakCreateUserEndpoint,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            data: {
                username: username,
                enabled: true,
                email: email,
                emailVerified: true,
                createdTimestamp: (new Date(createdAt)).getTime(),
                groups: ['Approved applicants', 'Migrated from TopLevel', 'External users']
            }
        };
        const response = await hofModel._request(reqParams);
        return response.data;

    } catch (error) {
        console.log(error.response);
    }

}

/**
 * @param {array} row
 * @returns {Boolean}
 */
const userDataIntegrityCheck = (row) => {
    //@todo better structure of the data row and definition of which index is for what value
    return Number.isInteger(Number(row[0])) && // applicant ID is integer
        ((typeof row[1] === 'string' || row[1] instanceof String) && row[1] !== '') && //username is string and not empty
        (validator.email(row[3]) && row[3] !== '') && // email address is valid
        !isNaN(new Date(row[4])) &&
        !isNaN(new Date(row[6]))
}
const importUsers = async () => {
    const accessTokenObject = await getKeycloakAccessToken();
    console.log('Starting migration process ...');
    let rowCount = 1;
    //@todo find out total number of rows efficiently to display progress
    try {
        fileSystem.createReadStream(userDataFilePath)
            .pipe(csvParse({ delimiter: ',', from_line: 2 }))
            .on('data', function (row) {
                //@todo output progress
                console.log('Processing data row ' + rowCount);
                if(userDataIntegrityCheck(row)) {
                    console.log('Data row ' + rowCount + ' is valid ...');
                    let rdsSaveResponse = saveApplicantRecordToRdsService(row[0], row[1], row[4], row[6]);
                    let keycloakApiResponse = createUserOnKeycloak(accessTokenObject.access_token, row[1], row[3], row[4]);
                    //@todo process the response from rds and keycloak
                } else {
                    console.log('Do not process the row, row data is not valid');
                    console.log(row);
                    //@todo capture and output problematic records
                }
                rowCount ++;
            })
    } catch (error) {
        //@todo better handling of csv file read error
        console.log(error);
    }

}

let response = importUsers();