'use strict';

// Temporarily commented out until "The organisation and how it operates" section is active
// const { formatDate } = require('../../../utils');

module.exports = {
  /** Temporarily commented out until "The organisation and how it operates" section is active
   *
   * 'about-the-applicants': {
   *   steps: [
   *     {
   *       step: '/licence-holder-details',
   *       field: 'licence-holder-details',
   *       parse: (list, req) => {
   *         const licenseHolderDetails = [];
   *         licenseHolderDetails.push(req.sessionModel.get('company-name'));
   *         if (req.sessionModel.get('company-number')) {
   *           licenseHolderDetails.push(req.sessionModel.get('company-number').toUpperCase());
   *         }
   *         if (req.sessionModel.get('website-url')) {
   *           licenseHolderDetails.push(req.sessionModel.get('website-url'));
   *         }
   *         licenseHolderDetails.push(req.sessionModel.get('telephone'));
   *         licenseHolderDetails.push(req.sessionModel.get('email'));
   *         return licenseHolderDetails.join('\n');
   *       }
   *     },
   *     {
   *       step: '/licence-holder-address',
   *       field: 'licence-holder-address',
   *       parse: (list, req) => {
   *         const licenceHolderAddress = [];
   *         licenceHolderAddress.push(req.sessionModel.get('licence-holder-address-line-1'));
   *         if (req.sessionModel.get('licence-holder-address-line-2')) {
   *           licenceHolderAddress.push(req.sessionModel.get('licence-holder-address-line-2'));
   *         }
   *         licenceHolderAddress.push(req.sessionModel.get('licence-holder-town-or-city'));
   *         licenceHolderAddress.push(req.sessionModel.get('licence-holder-postcode'));
   *         return licenceHolderAddress.join('\n');
   *       }
   *     },
   *     {
   *       step: '/premises-address',
   *       field: 'premises-address-details',
   *       parse: (list, req) => {
   *         if (!req.sessionModel.get('steps').includes('/premises-address')) {
   *           return null;
   *         }
   *         const addressDetails = [];
   *         addressDetails.push(req.sessionModel.get('premises-address-line-1'));
   *         if (req.sessionModel.get('premises-address-line-2')) {
   *           addressDetails.push(req.sessionModel.get('premises-address-line-2'));
   *         }
   *         addressDetails.push(req.sessionModel.get('premises-town-or-city'));
   *         addressDetails.push(req.sessionModel.get('premises-postcode'));
   *         return addressDetails.join('\n');
   *       }
   *     },
   *     {
   *       step: '/reuse-premises-address',
   *       field: 'is-premises-address-same'
   *     },
   *     {
   *       step: '/premises-contact-details',
   *       field: 'premises-contact-details',
   *       parse: (list, req) => {
   *         const contactDetails = [];
   *         contactDetails.push(req.sessionModel.get('premises-telephone'));
   *         contactDetails.push(req.sessionModel.get('premises-email'));
   *         return contactDetails.join('\n');
   *       }
   *     },
   *     {
   *       step: '/responsible-officer-details',
   *       field: 'responsible-officer-details',
   *       parse: (val, req) => {
   *         const formattedResponsibleOfficerDetails = Array(
   *           req.sessionModel.get('responsible-officer-fullname'),
   *           req.sessionModel.get('responsible-officer-email')
   *         ).join('\n');
   *         return formattedResponsibleOfficerDetails;
   *       }
   *     },
   *     {
   *       step: '/responsible-officer-dbs-information',
   *       field: 'responsible-officer-dbs-information',
   *       parse: (val, req) => {
   *         const formattedResponsibleOfficerDBSInfo = Array(
   *           req.sessionModel.get('responsible-officer-dbs-application-fullname'),
   *           req.sessionModel.get('responsible-officer-dbs-reference'),
   *           formatDate(req.sessionModel.get('responsible-officer-dbs-date-of-issue'))
   *         ).join('\n');
   *         return formattedResponsibleOfficerDBSInfo;
   *       }
   *     },
   *     {
   *       step: '/responsible-officer-dbs',
   *       field: 'responsible-officer-dbs-update-subscription'
   *     }
   *   ]
   * },
   */

  organisation: {
    steps: [
      {
        step: '/main-customers',
        field: 'main-customers'
      },
      {
        step: '/main-suppliers',
        field: 'main-suppliers'
      },
      {
        step: '/security-measures',
        field: 'security-measures',
        parse: value => {
          return Array.isArray(value) ? value.map(option => option).join('\n') : value;
        }
      },
      {
        step: '/how-secure-premises',
        field: 'how-secure-premises'
      }
    ]
  }
};
