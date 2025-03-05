const hof = require('hof');
const Summary = hof.components.summary;

const steps = {

  /** Start of journey */

  '/application-type': {
    next: '/licensee-type',
    backLink: '/licence-type'
  },

  '/licensee-type': {
    next: '/confirm'
  },
  
  /** Continue an application */


  /** Renew existing licence - Background Information */


  /** Existing licence apply for new site - Background Information */

  
  /** First time licensee - About the applicants */

  '/confirm': {
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections')
  },

};

module.exports = {
  name: 'industrial-hemp',
  baseUrl: '/industrial-hemp',
  fields: 'apps/industrial-hemp/fields',
  translations: 'apps/industrial-hemp/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
