const steps = {
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
    ]
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
