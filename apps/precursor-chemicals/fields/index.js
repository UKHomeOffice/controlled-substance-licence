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
    validate: ['required', 'ukPhoneNumber'],
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-email': {
    validate: ['required', 'email'],
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  }
};
