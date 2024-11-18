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
    mixins: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-address-line-2': {
    mixins: ['input-text'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-town-or-city': {
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-postcode': {
    mixins: 'input-text',
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'premises-telephone': {
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-email': {
    mixins: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  }
};
