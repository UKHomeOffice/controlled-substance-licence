'use strict';
const { formatDate } = require('../../../utils');

module.exports = {
  'background-information': {
    steps: [
      {
        step: '/application-type',
        field: 'amend-application-details'
      }
    ]
  },
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
        step: '/growing-location-address',
        field: 'growing-location-address',
        parse: (list, req) => {
          const growingLocationAddress = [
            req.sessionModel.get('growing-location-address-line-1'),
            req.sessionModel.get('growing-location-address-line-2'),
            req.sessionModel.get('growing-location-town-or-city'),
            req.sessionModel.get('growing-location-postcode')
          ];
          return growingLocationAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/growing-location-contact',
        field: 'growing-location-contact',
        parse: (list, req) => {
          const growingLocationContact = [
            req.sessionModel.get('growing-location-email'),
            req.sessionModel.get('growing-location-uk-telephone')
          ];
          return growingLocationContact.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer',
        field: 'site-responsible-officer',
        parse: (list, req) => {
          const siteResponsibleOfficerDetails = [
            req.sessionModel.get('site-responsible-person-full-name'),
            req.sessionModel.get('site-responsible-person-uk-telephone'),
            req.sessionModel.get('site-responsible-person-email')
          ];
          return siteResponsibleOfficerDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer-dbs',
        field: 'site-responsible-officer-dbs-information',
        parse: (list, req) => {
          const responsiblePersonDbsInfo = [
            req.sessionModel.get('responsible-person-dbs-fullname'),
            req.sessionModel.get('responsible-person-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-person-dbs-date-of-issue'))
          ];
          return responsiblePersonDbsInfo.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer-dbs-updates',
        field: 'responsible-officer-dbs-subscription'
      },
      {
        step: '/witness-destruction-plant',
        field: 'witness-destruction-plant'
      },
      {
        step: '/how-leaves-flowers-destroyed',
        field: 'how-leaves-flowers-destroyed'
      },
      {
        step: '/authorised-witness-details',
        field: 'authorised-witness-details',
        parse: (list, req) => {
          const authorisedWitnessDetails = [
            req.sessionModel.get('authorised-witness-full-name'),
            req.sessionModel.get('authorised-witness-uk-telephone'),
            req.sessionModel.get('authorised-witness-email')
          ];
          return authorisedWitnessDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/authorised-witness-dbs',
        field: 'authorised-witness-dbs-information',
        parse: (list, req) => {
          if (req.sessionModel.get('witness-destruction-plant') === 'no') return null;
          const authorisedWitnessDbsInfo = [
            req.sessionModel.get('authorised-witness-dbs-full-name'),
            req.sessionModel.get('authorised-witness-dbs-reference'),
            formatDate(req.sessionModel.get('authorised-witness-dbs-date-of-issue'))
          ];
          return authorisedWitnessDbsInfo.filter(element => element).join('\n');
        }
      },
      {
        step: '/authorised-witness-dbs-updates',
        field: 'authorised-witness-dbs-subscription'
      }

    ]
  }
};
