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

  /** Continue an application */


  /** Renew existing licence - Background Information */


  /** Existing licence apply for new site - Background Information */

  '/why-new-licence': {
    fields: ['why-new-licence'],
    forks: [
      {
        target: '/when-moving-site',
        condition: {
          field: 'why-new-licence',
          value: 'moving-site'
        }
      }
    ],
    next: '/contractual-agreement'
  },

  '/when-moving-site': {
    fields: ['moving-site-date'],
    next: '/licence-holder-details',
    locals: { showSaveAndExit: true }
  },

  '/contractual-agreement': {
    fields: ['is-contractual-agreement'],
    forks: [
      {
        target: '/when-contract-start',
        condition: {
          field: 'is-contractual-agreement',
          value: 'yes'
        }
      }
    ],
    next: '/licence-holder-details'
  },

  '/when-contract-start': {},

  /** First time licensee - About the applicants */

  '/licence-holder-details': {
    behaviours: [customValidation],
    fields: [
      'company-name',
      'company-number',
      'telephone',
      'email',
      'website-url'
    ],
    next: '/licence-holder-address'
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
    fields: [
      'responsible-person-dbs-fullname',
      'responsible-person-dbs-reference',
      'responsible-person-dbs-date-of-issue'
    ],
    next: '/site-responsible-officer-dbs-updates'
  },

  '/site-responsible-officer-dbs-updates': {
    fields: ['responsible-officer-dbs-subscription'],
    next: '/witness-destruction-plant'
  },

  '/witness-destruction-plant': {
    fields: ['witness-destruction-plant'],
    next: '/how-leaves-flowers-destroyed'
  },

  '/how-leaves-flowers-destroyed': {
    fields: ['how-leaves-flowers-destroyed'],
    next: '/legal-business-proceedings',
    forks: [
      {
        target: '/authorised-witness-details',
        condition: {
          field: 'witness-destruction-plant',
          value: 'yes'
        }
      }
    ]
  },

  '/authorised-witness-details': {
    behaviours: [customValidation],
    fields: [
      'authorised-witness-full-name',
      'authorised-witness-uk-telephone',
      'authorised-witness-email',
      'authorise-witness-DBS-check'
    ],
    next: '/authorised-witness-dbs'
  },

  '/authorised-witness-dbs': {
    fields: [
      'authorised-witness-dbs-full-name',
      'authorised-witness-dbs-reference',
      'authorised-witness-dbs-date-of-issue'
    ],
    next: '/authorised-witness-dbs-updates'
  },

  '/authorised-witness-dbs-updates': {
    fields: ['authorised-witness-dbs-subscription'],
    next: '/legal-business-proceedings',
    template: 'site-responsible-officer-dbs-updates'
  },

  '/legal-business-proceedings': {
    fields: ['legal-business-proceedings'],
    forks: [
      {
        target: '/legal-business-proceedings-details',
        condition: {
          field: 'legal-business-proceedings',
          value: 'yes'
        }
      }
    ],
    next: '/criminal-conviction'
  },

  '/legal-business-proceedings-details': {
    fields: ['legal-business-proceedings-details'],
    next: '/criminal-conviction'
  },

  '/criminal-conviction': {
    fields: ['has-anyone-received-criminal-conviction'],
    next: '/other-regulatory-licences'
  },

  '/other-regulatory-licences': {
    next: '/confirm'
  },

  '/confirm': {
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections')
  },

  '/session-timeout': {}
};

module.exports = {
  name: 'industrial-hemp',
  baseUrl: '/industrial-hemp',
  fields: 'apps/industrial-hemp/fields',
  translations: 'apps/industrial-hemp/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
