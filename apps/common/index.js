const saveLicenceTypeSelection = require('./behaviours/save-licence-type-selection');
const steps = {
  '/licence-type': {
    behaviours: [saveLicenceTypeSelection],
    fields: ['licence-type-applyling-for'],
    next: '/application-type'
  },
  '/application-type': {
    fields: ['application-form-type'],
    forks: [
      {
        target: '/precursor-chemicals/information-you-have-given-us',
        condition: req => req.sessionModel.get('isPrecursorChemicals') &&
        req.sessionModel.get('application-form-type') === 'continue-on-application'
      },
      {
        target: '/controlled-drugs/information-you-have-given-us',
        condition: req => req.sessionModel.get('isControlledDrugs') &&
        req.sessionModel.get('application-form-type') === 'continue-on-application'
      }
    ],
    next: '/licensee-type'
  },
  '/licensee-type': {
    fields: ['licensee-type'],
    forks: [
      {
        target: '/precursor-chemicals/licence-holder-details',
        condition: req => req.sessionModel.get('isPrecursorChemicals') &&
        req.sessionModel.get('licensee-type') === 'first-time-licensee'
      },
      {
        target: '/precursor-chemicals/companies-house-number',
        condition: req => req.sessionModel.get('isPrecursorChemicals') &&
        req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site'
      },
      {
        target: '/precursor-chemicals/why-new-licence',
        condition: req => req.sessionModel.get('isPrecursorChemicals') &&
        req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site'
      },
      {
        target: '/controlled-drugs/licence-holder-details',
        condition: req => req.sessionModel.get('isControlledDrugs') &&
        req.sessionModel.get('licensee-type') === 'first-time-licensee'
      },
      {
        target: '/controlled-drugs/company-number-changed',
        condition: req => req.sessionModel.get('isControlledDrugs') &&
        req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site'
      },
      {
        target: '/controlled-drugs/why-new-licence',
        condition: req => req.sessionModel.get('isControlledDrugs') &&
        req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site'
      }
    ]
  }
};

module.exports = {
  name: 'common',
  fields: 'apps/common/fields',
  views: 'apps/common/views',
  translations: 'apps/common/translations',
  baseUrl: '/',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
