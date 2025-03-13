const hof = require('hof');

const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');

const steps = {

  /** Start of journey */

  '/application-type': {
    fields: ['application-form-type', 'amend-application-details'],
    forks: [
      {
        target: '/information-you-have-given-us',
        condition: {
          field: 'application-form-type',
          value: 'continue-an-application'
        }
      }
    ],
    next: '/licensee-type',
    backLink: '/licence-type'
  },

  '/licensee-type': {
    fields: ['licensee-type'],
    next: '/licence-holder-details',
    forks: [
      {
        target: '/company-number-changed',
        condition: {
          field: 'licensee-type',
          value: 'existing-licensee-renew-or-change-site'
        }
      },
      {
        target: '/why-new-licence',
        condition: {
          field: 'licensee-type',
          value: 'existing-licensee-applying-for-new-site'
        }
      }
    ]
  },

  '/licence-holder-details': {
    behaviours: [customValidation],
    fields: [
      'company-name',
      'company-number',
      'telephone',
      'email',
      'website-url'
    ],
    next: '/licence-holder-address',
    backLink: '/application-type'
  },

  '/licence-holder-address': {
    fields: [
      'licence-holder-address-line-1',
      'licence-holder-address-line-2',
      'licence-holder-town-or-city',
      'licence-holder-postcode'
    ],
    next: '/growing-location-address'
  },

  '/growing-location-address': {
    fields: [
      'growing-location-address-line-1',
      'growing-location-address-line-2',
      'growing-location-town-or-city',
      'growing-location-postcode'
    ],
    next: '/growing-location-contact'
  },

  '/growing-location-contact': {
    behaviours: [customValidation],
    fields: [
      'growing-location-email',
      'growing-location-uk-telephone'
    ],
    next: '/site-responsible-officer'
  },

  '/site-responsible-officer': {
    behaviours: [customValidation],
    fields: [
      'site-responsible-person-full-name',
      'site-responsible-person-uk-telephone',
      'site-responsible-person-email',
      'site-responsible-DBS-check'
    ],
    next: '/site-responsible-officer-dbs'
  },

  '/site-responsible-officer-dbs': {
    next: '/confirm'
  },

  /** Continue an application */


  /** Renew existing licence - Background Information */


  /** Existing licence apply for new site - Background Information */


  /** First time licensee - About the applicants */

  '/confirm': {
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections')
  }

};

module.exports = {
  name: 'industrial-hemp',
  baseUrl: '/industrial-hemp',
  fields: 'apps/industrial-hemp/fields',
  translations: 'apps/industrial-hemp/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
