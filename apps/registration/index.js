
const steps = {

  '/': {
    next: '/licence-holder-details',
    template: 'start'
  },
}

module.exports = {
  name: 'registration',
  baseUrl: '/registration',
  fields: 'apps/registration/fields',
  translations: 'apps/registration/translations',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
