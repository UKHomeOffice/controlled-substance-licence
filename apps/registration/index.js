const hof = require('hof');
const Summary = hof.components.summary;

const steps = {

  '/': {
    next: '/licence-holder-details',
    template: 'start'
  },

  '/licence-holder-details': {
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
  },

};

module.exports = {
  name: 'registration',
  baseUrl: '/registration',
  fields: 'apps/registration/fields',
  translations: 'apps/registration/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
