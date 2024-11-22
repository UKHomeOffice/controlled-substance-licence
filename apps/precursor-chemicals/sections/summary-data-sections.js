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
        step: '/guarantor-details',
        field: 'guarantor-details',
        parse: (list, req) => {
          const guarantorDetails = [];
          guarantorDetails.push(req.sessionModel.get('guarantor-full-name'));
          guarantorDetails.push(req.sessionModel.get('guarantor-email-address'));
          return guarantorDetails.join('\n');
        }
      },
      {
        step: '/guarantor-dbs-information',
        field: 'guarantor-dbs-information',
        parse: (list, req) => {
          const guarantorDbsInformation = [];
          guarantorDbsInformation.push(req.sessionModel.get('guarantor-dbs-full-name'));
          guarantorDbsInformation.push(req.sessionModel.get('guarantor-dbs-reference'));
          guarantorDbsInformation.push(formatDate(req.sessionModel.get('guarantor-dbs-date-of-issue')));
          return guarantorDbsInformation.join('\n');
        }
      },
      {
        step: '/guarantor-dbs-updates',
        field: 'is-guarantor-subscribed'
      }
    ]
  }
};
