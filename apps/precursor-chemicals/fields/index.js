module.exports = {
  'company-name': {
    mixins: ['input-text'],
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 2 }, { type: 'maxlength', arguments: 200 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'company-number': {
    mixins: ['input-text'],
    validate: [], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  telephone: {
    mixins: ['input-text'],
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  email: {
    mixins: ['input-text'],
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'website-url': {
    mixins: ['input-text', { type: 'maxlength', arguments: 250 }],
    validate: ['url'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-1': {
    mixins: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-2': {
    mixins: ['input-text'],
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-town-or-city': {
    mixins: ['input-text'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-postcode': {
    mixins: ['input-text'],
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  }
};
