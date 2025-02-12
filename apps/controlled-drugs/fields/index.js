const dateComponent = require('hof').components.date;

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
        value: 'amend-application'
      }
    ]
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
  },
  'company-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 2 }, { type: 'maxlength', arguments: 200 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'company-number': {
    mixin: 'input-text',
    validate: [], // additional validation rules added in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  telephone: {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  email: {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'website-url': {
    mixin: 'input-text',
    validate: ['url', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-1': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-address-line-2': {
    mixin: 'input-text',
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-town-or-city': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-holder-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'is-premises-address-same': {
    mixin: 'radio-group',
    isPageHeading: 'true',
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
    mixin: 'input-text',
    validate: ['required', { type: 'maxlength', arguments: [250]}, 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-address-line-2': {
    mixin: 'input-text',
    validate: [{ type: 'maxlength', arguments: [250]}, 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-town-or-city': {
    mixin: 'input-text',
    validate: ['required', { type: 'maxlength', arguments: [250]}, 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'premises-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation rules added in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'premises-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'how-are-you-funded': {
    mixin: 'radio-group',
    isPageHeading: 'true',
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
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-in-charge-confirmed-dbs': {
    mixin: 'checkbox',
    validate: ['required']
  },
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
  'person-in-charge-dbs-subscription': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'member-of-professional-body': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'professional-body-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'legal-business-proceedings': {
    mixin: 'radio-group',
    isPageHeading: 'true',
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
    mixin: 'radio-group',
    isPageHeading: true,
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
  },
  'responsible-for-security': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'same-as-managing-director'
      },
      {
        value: 'someone-else'
      }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'person-responsible-for-security-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-responsible-for-security-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-responsible-for-security-confirmed-dbs': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'person-responsible-for-security-dbs-fullname': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-responsible-for-security-dbs-reference': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'person-responsible-for-security-dbs-date-of-issue': dateComponent(
    'person-responsible-for-security-dbs-date-of-issue',
    {
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
    }
  ),
  'person-responsible-for-security-dbs-subscription': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'responsible-for-compliance-regulatory': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'same-as-managing-director'
      },
      {
        value: 'someone-else'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'responsible-for-compliance-regulatory-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-compliance-regulatory-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-compliance-regulatory-confirmed-dbs': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'responsible-for-compliance-regulatory-dbs-fullname': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-compliance-regulatory-dbs-reference': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-compliance-regulatory-dbs-date-of-issue': dateComponent(
    'responsible-for-compliance-regulatory-dbs-date-of-issue',
    {
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
    }
  ),
  'responsible-for-compliance-regulatory-dbs-subscription': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'is-employee-or-consultant': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'employee'
      },
      {
        value: 'consultant'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'require-witness-destruction-of-drugs': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'responsible-for-witnessing-the-destruction': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'same-as-managing-director'
      },
      {
        value: 'someone-else'
      }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'responsible-for-witnessing-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-witnessing-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-witnessing-confirmed-dbs': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'responsible-for-witnessing-dbs-fullname': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-witnessing-dbs-reference': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-for-witnessing-dbs-date-of-issue': dateComponent('responsible-for-witnessing-dbs-date-of-issue', {
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
  'responsible-for-witnessing-dbs-subscription': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'has-any-licence-issued-by-mhra': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'mhra-licence-number': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'mhra-licence-type': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'mhra-licence-date-of-issue': dateComponent('mhra-licence-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['2008-12-31'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'is-business-registered-with-cqc': {
    mixin: 'radio-group',
    isPageHeading: true,
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
  'registration-number': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'date-of-registration': dateComponent('date-of-registration', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['2002-12-31'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'regulatory-body-registration-details': {
    mixin: 'textarea',
    validate: [ { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  }
};
