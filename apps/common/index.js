const Auth = require('./behaviours/auth/auth-check');
const SignIn = require('./behaviours/auth/sign-in');
const SignOut = require('./behaviours/auth/sign-out');

const steps = {
  '/': {
    next: '/licence-type',
    template: 'start'
  },
  '/licence-type': {
    behaviours: [ Auth ],
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

  '/session-timeout': {},
  '/sign-in': {
    behaviours: [ SignIn ],
    fields: ['username', 'password'],
    next: '/licence-type'
  },
  '/signed-in-successfully': {
    next: '/sign-out'
  },
  '/sign-out': {
    behaviours: [ SignOut ]
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
