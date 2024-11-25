const dateComponent = require('hof').components.date;

module.exports = {
  'company-name': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 2 }, { type: 'maxlength', arguments: 200 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'company-number': {
    mixin: ['input-text'],
    validate: [], // additional validation rules added in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  telephone: {
    mixin: ['input-text'],
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  email: {
    mixin: ['input-text'],
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'website-url': {
    mixin: ['input-text'],
    validate: ['url', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-1': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-2': {
    mixin: ['input-text'],
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-town-or-city': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-postcode': {
    mixin: ['input-text'],
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'is-premises-address-same': {
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    className: ['govuk-radios govuk-radios--inline'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'premises-address-line-1': {
    validate: ['required', { type: 'maxlength', arguments: [250]}, 'notUrl'],
    mixin: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-address-line-2': {
    validate: [{ type: 'maxlength', arguments: [250]}, 'notUrl'],
    mixin: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-town-or-city': {
    validate: ['required', { type: 'maxlength', arguments: [250]}, 'notUrl'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-postcode': {
    validate: ['required', 'postcode'],
    mixin: 'input-text',
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'premises-telephone': {
    validate: ['required'], // additional validation rules added in custom-validation.js
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-email': {
    validate: ['required', 'email'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-full-name': {
    validate: ['required', 'notUrl'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-email-address': {
    validate: ['required', 'email'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-confirmed-dbs': {
    mixin: 'checkbox',
    validate: [ 'required' ]
  },
  'guarantor-dbs-full-name': {
    validate: ['required', 'notUrl'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-dbs-reference': {
    validate: ['required', 'notUrl'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-dbs-date-of-issue': dateComponent('guarantor-dbs-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['3', 'years'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'responsible-officer-fullname': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-email': {
    mixin: 'input-text',
    validate: [ 'required', 'email' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-certificate': {
    mixin: 'checkbox',
    validate: [ 'required' ]
  },
  'responsible-officer-dbs-application-fullname': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-reference': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-date-of-issue': dateComponent('responsible-officer-dbs-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['3', 'years'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'is-guarantor-subscribed': {
    isPageHeading: true,
    mixin: 'radio-group',
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
  'responsible-officer-dbs-update-subscription': {
    isPageHeading: true,
    mixin: 'radio-group',
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
  'has-anyone-received-criminal-conviction': {
    isPageHeading: true,
    mixin: 'radio-group',
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
  'invoicing-address-line-1': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-line-2': {
    mixin: ['input-text'],
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-town-or-city': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-postcode': {
    mixin: ['input-text'],
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'invoicing-fullname': {
    mixin: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-email': {
    mixin: ['input-text'],
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-telephone': {
    mixin: ['input-text'],
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-purchase-order-number': {
    mixin: ['input-text'],
    validate: ['notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  }
};
