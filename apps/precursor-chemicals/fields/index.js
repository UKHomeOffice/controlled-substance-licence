const dateComponent = require('hof').components.date;

module.exports = {
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
    mixins: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-address-line-2': {
    validate: [{ type: 'maxlength', arguments: [250]}, 'notUrl'],
    mixins: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-town-or-city': {
    validate: ['required', { type: 'maxlength', arguments: [250]}, 'notUrl'],
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-postcode': {
    validate: ['required', 'postcode'],
    mixins: 'input-text',
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'premises-telephone': {
    validate: ['required'], // additional validation rules added in custom-validation.js
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-email': {
    validate: ['required', 'email'],
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-full-name': {
    validate: ['required', 'notUrl'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-email-address': {
    validate: ['required'],
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
  }
};
