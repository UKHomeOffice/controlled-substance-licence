'use strict';

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
      }
    ]
  }
};
