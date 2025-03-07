module.exports = {
  'application-form-type': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
    options: [
      {
        value: 'new-application'
      },
      {
        value: 'continue-an-application'
      },
      {
        value: 'amend-application',
        toggle: 'amend-application-details-fieldset',
        child: 'partials/amend-application-details'
      }
    ]
  },
  'amend-application-details': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      'numeric',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 8 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'amend-application',
      field: 'application-form-type'
    },
    validationLink: {
      value: 'amend-application',
      field: 'application-form-type'
    }
  },
  'licensee-type': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
    options: [
      {
        value: 'first-time-licensee'
      },
      {
        value: 'existing-licensee-renew-or-change-site'
      },
      {
        value: 'existing-licensee-applying-for-new-site'
      }
    ]
  }
};
