'use strict';
const { formatDate } = require('../../../utils');

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
        parse: (value, req) => value.toUpperCase() || req.translate('journey.not-provided')
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
        parse: (value, req) => value || req.translate('journey.not-provided')
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
        parse: (value, req) => value || req.translate('journey.not-provided')
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
  },
  'business-details': {
    steps: [
      {
        step: '/registered-charity',
        field: 'registered-charity'
      },

      {
        step: '/legal-identity-changed',
        field: 'legal-identity-changed'
      },

      {
        step: '/previously-held-licence',
        field: 'previously-held-licence'
      },

      {
        dependsOn: 'previously-held-licence',
        step: '/previous-licence-details',
        field: 'previous-licence-number'
      },

      {
        dependsOn: 'previously-held-licence',
        step: '/previous-licence-details',
        field: 'previous-licence-holder-name'
      },

      {
        dependsOn: 'previously-held-licence',
        step: '/previous-licence-details',
        field: 'previous-licence-date-of-issue',
        parse: value => value ? formatDate(value) : null
      },
      {
        step: '/company-type',
        field: 'company-type'
      },
      {
        step: '/business-model',
        field: 'describe-business-model'
      },
      {
        step: '/upload-company-certificate',
        field: 'company-registration-certificate',
        parse: (documents, req) => {
          if (req.sessionModel.get('company-type') === 'other') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/mhra-licences',
        field: 'has-any-licence-issued-by-mhra'
      },
      {
        step: '/mhra-licence-details',
        field: 'mhra-licence-details',
        parse: (val, req) => {
          if (!req.sessionModel.get('steps').includes('/mhra-licence-details')) {
            return null;
          }
          const mhraLicenceDetails = [
            req.sessionModel.get('mhra-licence-number'),
            req.sessionModel.get('mhra-licence-type'),
            formatDate(req.sessionModel.get('mhra-licence-date-of-issue'))
          ];
          return mhraLicenceDetails.join('\n');
        }
      },
      {
        step: '/care-quality-commission-or-equivalent',
        field: 'is-business-registered-with-cqc'
      },
      {
        step: '/registration-details',
        field: 'registration-number'
      },
      {
        step: '/registration-details',
        field: 'date-of-registration',
        parse: value => value ? formatDate(value) : null
      },
      {
        step: '/regulatory-body-registration',
        field: 'regulatory-body-registration-details',
        parse: (value, req) => {
          return value ? value : req.translate('journey.not-provided');
        }
      }
    ]
  }
};
