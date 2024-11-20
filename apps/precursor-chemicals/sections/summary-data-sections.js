'use strict';

const { formatDate } = require('../../../utils');

module.exports = {
  'about-the-applicants': {
    steps: [
      {
        step: '/reuse-premises-address',
        field: 'is-premises-address-same'
      },
      {
        step: '/premises-address',
        field: 'premises-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/premises-address')) {
            return null;
          }
          const addressDetails = [];
          addressDetails.push(req.sessionModel.get('premises-address-line-1'));
          if(req.sessionModel.get('premises-address-line-2')) {
            addressDetails.push(req.sessionModel.get('premises-address-line-2'));
          }
          addressDetails.push(req.sessionModel.get('premises-town-or-city'));
          addressDetails.push(req.sessionModel.get('premises-postcode'));
          return addressDetails.join('\n');
        }
      },
      {
        step: '/premises-contact-details',
        field: 'premises-contact-details',
        parse: (list, req) => {
          const contactDetails = [];
          contactDetails.push(req.sessionModel.get('premises-telephone'));
          contactDetails.push(req.sessionModel.get('premises-email'));
          return contactDetails.join('\n');
        }
      },
      {
        step: '/responsible-officer-details',
        field: 'responsible-officer-details',
        parse: (val, req) => {
          const formattedResponsibleOfficerDetails = Array(
            req.sessionModel.get('responsible-officer-fullname'),
            req.sessionModel.get('responsible-officer-email')
          ).join('\n');
          return formattedResponsibleOfficerDetails;
        }
      },
      {
        step: '/responsible-officer-dbs-information',
        field: 'responsible-officer-dbs-information',
        parse: (val, req) => {
          const formattedResponsibleOfficerDBSInfo = Array(
            req.sessionModel.get('responsible-officer-dbs-application-fullname'),
            req.sessionModel.get('responsible-officer-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-officer-dbs-date-of-issue'))
          ).join('\n');
          return formattedResponsibleOfficerDBSInfo;
        }
      },
      {
        step: '/responsible-officer-dbs',
        field: 'responsible-officer-dbs-update-subscription'
      }
    ]
  }
};
