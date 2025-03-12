const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');

const steps = {

  /** Start of journey */

  '/application-type': {
    next: '/licensee-type',
    backLink: '/licence-type'
  },

  '/licensee-type': {
    next: '/confirm'
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
