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
  }
};
