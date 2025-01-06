module.exports = {
  'how-are-you-funded': {
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'for-profit-enterprise'
      },
      {
        value: 'atleast-50-percent-from-public-fund'
      },
      {
        value: '100-percent-venture-capital'
      }
    ]
  },
  'person-in-charge-full-name': {
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-email-address': {
    validate: ['required', 'email'],
    mixin: 'input-text',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-confirmed-dbs': {
    mixin: 'checkbox',
    validate: ['required']
  }
};
