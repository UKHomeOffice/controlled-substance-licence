const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');

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
