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
        value: 'industrial-hemp'
      }
    ]
  },
  username: {
    mixin: 'input-text',
    validate: ['required']
  },
  password: {
    mixin: 'input-text',
    type: 'password',
    validate: ['required']
  }
};
