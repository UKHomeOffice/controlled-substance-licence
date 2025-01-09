module.exports = {
  'licence-type': {
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'precursor-chemicals'
      },
      {
        value: 'controlled-drugs'
      },
      {
        value: 'low-thc-cannabis'
      }
    ]
  },
  'application-form-type': {
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'new-application'
      },
      {
        value: 'continue-an-application'
      },
      {
        value: 'amend-application'
      }
    ]
  },
  'licensee-type': {
    isPageHeading: 'true',
    mixin: 'radio-group',
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
