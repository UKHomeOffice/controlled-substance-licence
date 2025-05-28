const Auth = require('./behaviours/auth/auth-check');
const SignIn = require('./behaviours/auth/sign-in');
const SignOut = require('./behaviours/auth/sign-out');
const SetFeedbackUrl = require('./behaviours/set-feedback-url');

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
    next: '/industrial-hemp/application-type',
    backLink: ' ' // workaround to show Back link to the root of the app
  },
  '/sign-in': {
    behaviours: [ SignIn ],
    fields: ['username', 'password'],
    next: '/licence-type'
  },
  '/signed-in-successfully': {
    behaviours: [ Auth, SignOut ],
    next: '/licence-type'
  }
};

module.exports = {
  name: 'common',
  fields: 'apps/common/fields',
  translations: 'apps/common/translations',
  baseUrl: '/',
  params: '/:action?/:id?/:edit?',
  steps: steps,
  behaviours: [SetFeedbackUrl]
};
