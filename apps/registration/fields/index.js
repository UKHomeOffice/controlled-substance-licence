const dateComponent = require('hof').components.date;
const businessTypeOptions = require('../data/business-type.json');

module.exports = {
  'company-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 2 }, { type: 'maxlength', arguments: 200 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'name-of-responsible-person': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 3 }, { type: 'maxlength', arguments: 200 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'company-number': {
    mixin: 'input-text',
    validate: [], // additional validation rules added in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  telephone: {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  email: {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'website-url': {
    mixin: 'input-text',
    validate: ['url', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-1': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-2': {
    mixin: 'input-text',
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-town-or-city': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'registered-charity': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'legal-identity-changed': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'previously-held-licence': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }

  },
  'previous-licence-number': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'previous-licence-holder-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 250 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'previous-licence-date-of-issue': dateComponent('previous-licence-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      {type: 'after', arguments: ['1924-12-31'] },
      {type: 'before', arguments: ['0', 'days'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'company-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'public-limited'
      },
      {
        value: 'private'
      },
      {
        value: 'other'
      }
    ],
    className: ['govuk-radios'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },

  'describe-business-model': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'business-type': {
    mixin: 'select',
    isPageHeading: true,
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.business-type.options.none_selected'
    }].concat(businessTypeOptions),
    showFieldInSummary: true,
    className: ['govuk-!-width-one-half']
  },
  'other-business-type': {
    mixin: 'input-text',
    isPageHeading: true,
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 250 }
    ],
    className: ['govuk-input', 'govuk-!-width-three-quarters']
  },
  'has-any-licence-issued-by-mhra': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'mhra-licence-number': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'mhra-licence-type': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 250 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'mhra-licence-date-of-issue': dateComponent('mhra-licence-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['100', 'years'] } // Validate the date to be less than 100 years in the past
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'is-business-registered-with-cqc': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'registration-number': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'date-of-registration': dateComponent('date-of-registration', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['2002-12-31'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'regulatory-body-registration-details': {
    mixin: 'textarea',
    validate: [ { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'invoicing-contact-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-contact-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-contact-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-purchase-order-number': {
    mixin: 'input-text',
    validate: [
      'notUrl',
      { type: 'minlength', arguments: [1] },
      { type: 'maxlength', arguments: [250] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-line-1': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [1] },
      { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-line-2': {
    mixin: 'input-text',
    validate: ['notUrl',
      { type: 'minlength', arguments: [1] },
      { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-town-or-city': {
    mixin: 'input-text',
    validate: ['required',
      'notUrl',
      { type: 'minlength', arguments: [1] },
      { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'declaration-check': {
    mixin: 'checkbox',
    validate: ['required']
  }
};
