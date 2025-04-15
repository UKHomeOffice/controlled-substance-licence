'use strict';
const { formatDate, findArrayItemByValue } = require('../../../utils');
const businessTypeOptions = require('../data/business-type.json');

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
        step: '/business-type-summary',
        field: 'aggregated-business-type',
        changeLink: 'business-type-summary/edit',
        parse: obj => {
          if (!obj?.aggregatedValues) { return null; }
          return obj.aggregatedValues.map(item => {
            const businessTypeValue = item.fields.find(field => field.field === 'business-type')?.value;
            const businessTypeLabel = findArrayItemByValue(businessTypeOptions, businessTypeValue)?.label
             ?? businessTypeValue;
            const otherBusinessType = item.fields.find(field => field.field === 'other-business-type')?.value;

            return otherBusinessType ? `${businessTypeLabel}: ${otherBusinessType}` : businessTypeLabel;
          }).join('\n');
        }
      }
    ]
  }
};
