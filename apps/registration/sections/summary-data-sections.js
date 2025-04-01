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
        parse: value => value.toUpperCase() || 'Not Provided'
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
        parse: value => value || 'Not Provided'
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
        parse: value => value || 'Not Provided'
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
  }
};
