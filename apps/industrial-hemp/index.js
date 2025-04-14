const hof = require('hof');
const CustomRedirect = require('./behaviours/custom-redirect');
const SetSummaryReferrer = require('../common/behaviours/set-summary-referrer');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');
const SaveDocument = require('../common/behaviours/save-document');
const RemoveDocument = require('../common/behaviours/remove-document');
const Auth = require('../common/behaviours/auth/auth-check');

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

  // Existing licensee renewing or changing a currently licensed site

  '/company-number-changed': {
    fields: ['is-company-ref-changed'],
    next: '/company-name-changed',
    behaviours: [SetSummaryReferrer, CustomRedirect]
  },
  '/register-again': {
    backLink: '/industrial-hemp/company-number-changed'
    // End of user journey
  },
  '/company-name-changed': {
    fields: ['is-company-name-changed'],
    forks: [
      {
        target: '/company-registration-certificate',
        condition: {
          field: 'is-company-name-changed',
          value: 'yes'
        }
      }
    ],
    next: '/change-witness-only'
  },
  '/company-registration-certificate': {
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload'],
    locals: {
      documentCategory: {
        name: 'company-registration-certificate'
      }
    },
    next: '/change-witness-only'
  },
  '/change-witness-only': {
    fields: ['is-change-witness-only'],
    next: '/additional-schedules'
  },
  '/additional-schedules': {
    fields: ['is-additional-schedules'],
    next: '/change-of-activity'
  },
  '/change-of-activity': {
    fields: ['is-change-of-activity'],
    next: '/licence-holder-details'
  },
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
  '/when-contract-start': {
    fields: ['contract-start-date'],
    next: '/contract-details'
  },
  '/contract-details': {
    fields: ['contract-details'],
    next: '/licence-holder-details'
  },
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
    fields: ['hold-other-regulatory-licences'],
    forks: [
      {
        target: '/other-licence-details',
        condition: {
          field: 'hold-other-regulatory-licences',
          value: 'yes'
        }
      }
    ],
    next: '/licence-refused'
  },

  '/other-licence-details': {
    fields: [
      'other-licence-type',
      'other-licence-number',
      'other-licence-date-of-issue'
    ],
    next: '/licence-refused'
  },

  '/licence-refused': {
    fields: ['is-licence-refused'],
    forks: [
      {
        target: '/refusal-reason',
        condition: {
          field: 'is-licence-refused',
          value: 'yes'
        }
      }
    ],
    next: '/company-type'
  },

  '/refusal-reason': {
    fields: ['refusal-reason'],
    next: '/company-type'
  },

  '/company-type': {
    fields: ['company-type'],
    forks: [
      {
        target: '/business-model',
        condition: {
          field: 'company-type',
          value: 'other'
        }
      },
      {
        target: '/cultivate-industrial-hemp',
        condition: {
          field: 'licensee-type',
          value: 'existing-licensee-renew-or-change-site'
        }
      }
    ],
    next: '/company-certificate'
  },

  '/business-model': {
    fields: ['describe-business-model'],
    next: '/cultivate-industrial-hemp'
  },

  '/company-certificate': {
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload'],
    locals: {
      documentCategory: {
        name: 'company-registration-certificate'
      }
    },
    template: 'company-registration-certificate',
    next: '/cultivate-industrial-hemp'
  },

  '/cultivate-industrial-hemp': {
    fields: ['cultivate-industrial-hemp'],
    forks: [
      {
        target: '/where-cultivating-cannabis',
        condition: {
          field: 'cultivate-industrial-hemp',
          value: 'yes'
        }
      }
    ],
    next: '/no-licence-needed'
  },

  '/where-cultivating-cannabis': {
    fields: ['where-cultivating-cannabis'],
    forks: [
      {
        target: '/field-acreage',
        condition: {
          field: 'where-cultivating-cannabis',
          value: 'outside'
        }
      }
    ],
    next: '/controlled-drugs-licence'
  },
  '/field-acreage': {
    fields: ['field-acreage'],
    next: '/how-many-fields'
  },
  '/how-many-fields': {
    fields: ['how-many-fields'],
    next: '/cultivation-field-details'
  },
  '/cultivation-field-details': {
    fields: ['cultivation-field-details'],
    next: '/aerial-photos-and-maps'
  },
  '/aerial-photos-and-maps': {
    next: '/company-own-fields'
  },
  '/company-own-fields': {
    fields: ['is-company-own-fields'],
    forks: [
      {
        target: '/other-operating-businesses',
        condition: {
          field: 'is-company-own-fields',
          value: 'yes'
        }
      }
    ],
    next: '/who-owns-fields'
  },
  '/who-owns-fields': {
    fields: ['who-own-fields'],
    next: '/permission-for-intended-activities'
  },
  '/permission-for-intended-activities': {
    fields: ['is-permission-for-activities'],
    next: '/other-operating-businesses'
  },
  '/other-operating-businesses': {
    next: '/confirm'
  },
  '/no-licence-needed': {
    // End of user journey
  },

  '/controlled-drugs-licence': {
    // End of user journey
  },


  /** Continue an application */

  /** Renew existing licence - Background Information */

  /** Existing licence apply for new site - Background Information */
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
  steps: steps,
  confirmStep: '/confirm',
  behaviours: [ Auth ]
};
