'use strict';

module.exports = {
  'licence-holder-details': {
    steps: [
      {
        step: '/licence-holder-details',
        field: 'company-name'
      },
      {
        step: '/licence-holder-details',
        field: 'name-of-responsible-person'
      },
      {
        step: '/licence-holder-details',
        field: 'company-number',
        parse: (value, req) => value.toUpperCase() || req.translate('journey.not-provided')
      },
      {
        step: '/licence-holder-details',
        field: 'telephone'
      },
      {
        step: '/licence-holder-details',
        field: 'email'
      },
      {
        step: '/licence-holder-details',
        field: 'website-url',
        parse: (value, req) => value || req.translate('journey.not-provided')
      }
    ]
  },
  'licence-holder-address': {
    steps: [
      {
        step: '/licence-holder-address',
        field: 'licence-holder-address-line-1'
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-address-line-2',
        parse: (value, req) => value || req.translate('journey.not-provided')
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-town-or-city'
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-postcode'
      }
    ]
  },
  'business-details': {
    steps: [
      {
        step: '/registered-charity',
        field: 'registered-charity'
      },

      {
        step: '/legal-identity-changed',
        field: 'legal-identity-changed'
      }
    ]
  }
};
