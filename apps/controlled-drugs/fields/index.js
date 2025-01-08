module.exports = {
  'legal-business-proceedings': {
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
  'legal-proceedings-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  }
};
