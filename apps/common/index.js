const SetTimeoutMessage = require('./behaviours/set-timeout-message');

const steps = {
  '/': {
    next: '/sign-in',
    template: 'start'
  },
  '/sign-in': {
    fields: ['username', 'password'],
    next: '/licence-type'
  },
  '/licence-type': {
    fields: ['licence-type'],
    forks: [
      {
        target: '/precursor-chemicals/application-type',
        condition: {
          field: 'licence-type',
          value: 'precursor-chemicals'
        }
      },
      {
        target: '/controlled-drugs/application-type',
        condition: {
          field: 'licence-type',
          value: 'controlled-drugs'
        }
      }
    ],
    next: '/industrial-hemp/application-type'
  },

  '/session-timeout': {
    behaviours: [SetTimeoutMessage]
  }
};

module.exports = {
  name: 'common',
  fields: 'apps/common/fields',
  translations: 'apps/common/translations',
  baseUrl: '/',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
