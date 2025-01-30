'use strict';

const { formatDate } = require('../../../utils');

module.exports = {

  'about-the-applicants': {
    steps: [
      {
        step: '/licence-holder-details',
        field: 'licence-holder-details',
        parse: (list, req) => {
          const licenseHolderDetails = [
            req.sessionModel.get('company-name'),
            req.sessionModel.get('company-number').toUpperCase(),
            req.sessionModel.get('website-url'),
            req.sessionModel.get('telephone'),
            req.sessionModel.get('email')
          ];
          return licenseHolderDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-address',
        parse: (list, req) => {
          const licenceHolderAddress = [
            req.sessionModel.get('licence-holder-address-line-1'),
            req.sessionModel.get('licence-holder-address-line-2'),
            req.sessionModel.get('licence-holder-town-or-city'),
            req.sessionModel.get('licence-holder-postcode')
          ];
          return licenceHolderAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/premises-address',
        field: 'premises-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/premises-address')) {
            return null;
          }
          const premisesAddressDetails = [
            req.sessionModel.get('premises-address-line-1'),
            req.sessionModel.get('premises-address-line-2'),
            req.sessionModel.get('premises-town-or-city'),
            req.sessionModel.get('premises-postcode')
          ];
          return premisesAddressDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/reuse-premises-address',
        field: 'is-premises-address-same'
      },
      {
        step: '/premises-contact-details',
        field: 'premises-contact-details',
        parse: (list, req) => {
          const premisesContactDetails = [
            req.sessionModel.get('premises-telephone'),
            req.sessionModel.get('premises-email')
          ];
          return premisesContactDetails.join('\n');
        }
      },
      {
        step: '/how-funded',
        field: 'how-are-you-funded'
      },
      {
        step: '/person-in-charge',
        field: 'person-incharge-details',
        parse: (list, req) => {
          const personInchargeDetails = [
            req.sessionModel.get('person-in-charge-full-name'),
            req.sessionModel.get('person-in-charge-email-address')
          ];
          return personInchargeDetails.join('\n');
        }
      },
      {
        step: '/person-in-charge-dbs',
        field: 'person-in-charge-dbs-information',
        parse: (val, req) => {
          const personInChargeDbsInfo = [
            req.sessionModel.get('person-in-charge-dbs-fullname'),
            req.sessionModel.get('person-in-charge-dbs-reference'),
            formatDate(req.sessionModel.get('person-in-charge-dbs-date-of-issue'))
          ];
          return personInChargeDbsInfo.join('\n');
        }
      },
      {
        step: '/person-in-charge-dbs-updates',
        field: 'person-in-charge-dbs-subscription'
      },
      {
        step: '/member-of-professional-body',
        field: 'member-of-professional-body'
      },
      {
        step: '/professional-body-details',
        field: 'professional-body-details'
      },
      {
        step: '/legal-business-proceedings',
        field: 'legal-business-proceedings'
      },
      {
        step: '/legal-proceedings-details',
        field: 'legal-proceedings-details'
      },
      {
        step: '/criminal-conviction',
        field: 'has-anyone-received-criminal-conviction'
      }
    ]
  }
};
