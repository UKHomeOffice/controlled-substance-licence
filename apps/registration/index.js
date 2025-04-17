const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');
const SaveDocument = require('../common/behaviours/save-document');
const RemoveDocument = require('../common/behaviours/remove-document');

const steps = {

  '/': {
    next: '/licence-holder-details',
    template: 'start'
  },

  '/licence-holder-details': {
    behaviours: [customValidation],
    fields: [
      'company-name',
      'name-of-responsible-person',
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
    next: '/registered-charity'
  },

  '/registered-charity': {
    fields: ['registered-charity'],
    next: '/legal-identity-changed'
  },

  '/legal-identity-changed': {
    fields: ['legal-identity-changed'],
    forks: [
      {
        target: '/previously-held-licence',
        condition: {
          field: 'legal-identity-changed',
          value: 'yes'
        }
      }
    ],
    next: '/business-type'
  },

  '/previously-held-licence': {
    fields: ['previously-held-licence'],
    forks: [
      {
        target: '/previous-licence-details',
        condition: {
          field: 'previously-held-licence',
          value: 'yes'
        }
      }
    ],
    next: '/business-type'
  },

  '/previous-licence-details': {
    fields: [
      'previous-licence-number',
      'previous-licence-holder-name',
      'previous-licence-date-of-issue'
    ],
    next: '/business-type'
  },

  '/business-type': {
    next: '/business-type-summary'
  },

  '/business-type-summary': {
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
      }
    ],
    next: '/upload-company-certificate'
  },

  '/business-model': {
    fields: ['describe-business-model'],
    next: '/mhra-licences'
  },

  '/upload-company-certificate': {
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload'],
    next: '/mhra-licences',
    locals: {
      documentCategory: {
        name: 'company-registration-certificate'
      }
    }
  },

  '/mhra-licences': {
    fields: ['has-any-licence-issued-by-mhra'],
    forks: [
      {
        target: '/care-quality-commission-or-equivalent',
        condition: {
          field: 'has-any-licence-issued-by-mhra',
          value: 'no'
        }
      }
    ],
    next: '/mhra-licence-details'
  },

  '/mhra-licence-details': {
    fields: [
      'mhra-licence-number',
      'mhra-licence-type',
      'mhra-licence-date-of-issue'
    ],
    next: '/care-quality-commission-or-equivalent'
  },

  '/care-quality-commission-or-equivalent': {
    fields: ['is-business-registered-with-cqc'],
    forks: [
      {
        target: '/regulatory-body-registration',
        condition: {
          field: 'is-business-registered-with-cqc',
          value: 'no'
        }
      }
    ],
    next: '/registration-details'
  },

  '/registration-details': {
    fields: [
      'registration-number',
      'date-of-registration'
    ],
    next: '/regulatory-body-registration'
  },

  '/regulatory-body-registration': {
    fields: ['regulatory-body-registration-details'],
    next: '/confirm'
  },

  '/confirm': {
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections'),
    next: '/declaration',
    locals: {
      fullWidthPage: true
    }
  },

  '/declaration': {
    next: '/registration-submitted'
  },

  '/registration-submitted': {
    backLink: false,
    clearSession: true
  }

};

module.exports = {
  name: 'registration',
  baseUrl: '/registration',
  fields: 'apps/registration/fields',
  translations: 'apps/registration/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
