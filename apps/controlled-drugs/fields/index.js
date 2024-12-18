const dateComponent = require('hof').components.date;

module.exports = {
  'person-in-charge-dbs-fullname': {
    mixin: 'input-text',
    validate: [ 
      'required', 
      'notUrl', 
      { type: 'minlength', arguments: 3 }, 
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-dbs-reference': {
    mixin: 'input-text',
    validate: [ 
      'required',
      { type: 'minlength', arguments: 3 }, 
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-dbs-date-of-issue': dateComponent('person-in-charge-dbs-date-of-issue', {
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
  'person-in-charge-dbs-updates': {
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
