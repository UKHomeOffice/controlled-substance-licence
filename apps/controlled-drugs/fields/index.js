const dateComponent = require('hof').components.date;
const tradingReasons = require('../data/trading-reasons.json');

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
        toggle: 'amend-application-details',
        child: 'input-text'
      }
    ]
  },
  'amend-application-details': {
    mixin: 'input-text',
    validate: [
      'required',
      'numeric',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 8 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
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
  },
  'companies-house-number-change': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
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
  'companies-house-name-change': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
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

  'change-authorised-witness': {
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
  'requesting-additional-schedules': {
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
  'change-of-activity': {
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
  'why-applying-licence': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'main-customer-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'source-drugs-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
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
  'trading-reasons': {
    mixin: 'select',
    isPageHeading: true,
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.trading-reasons.options.none_selected'
    }].concat(tradingReasons),
    showFieldInSummary: true,
    className: ['govuk-!-width-one-half']
  },
  'specify-trading-reasons': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 500 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
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
  },
  'site-owner-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-owner-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-owner-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-owner-address': {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    className: ['govuk-!-width-two-thirds']
  },
  'service-under-contract': {
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
  'service-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'service-expiry-date': dateComponent('service-expiry-date', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      // 'before' '-100' 'years' allows dates less than 100 years into the future.
      { type: 'before', arguments: ['-100', 'years'] },
      'after'
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    },
    isPageHeading: true
  }),
  'status-of-site': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'rented'
      },
      {
        value: 'leased'
      },
      {
        value: 'owned-or-owner-occupied'
      }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'schedule-1-activities': {
    mixin: 'checkbox-group',
    options: [
      'possess',
      'supply',
      'produce',
      'manufacture',
      'administration-clinical-trials-on-humans',
      'cultivation-high-thc-cannabis'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'schedule-2-activities': {
    mixin: 'checkbox-group',
    options: [
      'possess',
      'supply',
      'produce',
      'manufacture'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'schedule-3-activities': {
    mixin: 'checkbox-group',
    options: [
      'possess',
      'supply',
      'produce',
      'manufacture'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'schedule-4-part-1-activities': {
    mixin: 'checkbox-group',
    options: [
      'possess',
      'supply',
      'produce',
      'manufacture'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'schedule-4-part-2-activities': {
    mixin: 'checkbox-group',
    options: [
      'supply',
      'produce',
      'manufacture'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'schedule-5-activities': {
    mixin: 'checkbox-group',
    options: [
      'supply',
      'produce'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'security-features': {
    mixin: 'checkbox-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      'cctv-system',
      'electronic-stock-recording-system',
      'perimeter-fencing',
      'lockable-physical-security',
      'attendance-of-security-guards'
    ],
    legend: {
      className: 'govuk-fieldset__legend--m'
    }
  },
  'cd-kept-in-separate-room': {
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
  'cd-kept-in-safe-or-cabinet': {
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
  'kept-in-prefabricated-room': {
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
  'specification-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'drugs-kept-at-site': {
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
  'have-electronic-alarm-system': {
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
  'storage-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'installing-company-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ]
  },
  'installing-company-address': {
    mixin: 'textarea',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: [ 'required', { type: 'maxlength', arguments: 500 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'installing-company-registered-with': {
    mixin: 'radio-group',
    validate: [ 'required' ],
    options: [
      {
        value: 'british-security-industry'
      },
      {
        value: 'national-security'
      },
      {
        value: 'security-systems-inspection-board'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline']
  },
  'separate-zone': {
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
  'alarm-system-monitored': {
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
  'is-alarm-system-connected': {
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
  'is-alarm-serviced-annually': {
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
  'alarm-system-reference-number': {
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
  'alarm-system-police-response': {
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
  'standard-operating-procedures': {
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
    ],
    legend: {
      className: 'govuk-fieldset__legend--m govuk-!-padding-top-3 govuk-!-margin-bottom-6'
    }
  },
  'record-keeping-system-procedures': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'invoicing-address-line-1': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-line-2': {
    mixin: 'input-text',
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-town-or-city': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-address-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'invoicing-contact-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-contact-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-contact-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-purchase-order-number': {
    mixin: 'input-text',
    validate: [
      'notUrl',
      { type: 'maxlength', arguments: [250] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'licence-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    isPageHeading: true,
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'extra-information': {
    mixin: 'textarea',
    validate: [ { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'declaration-check': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'why-requesting-new-licence': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
    options: [
      {
        value: 'moving-site'
      },
      {
        value: 'another-site'
      }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'date-moving-site': dateComponent('date-moving-site', {
    mixin: 'input-date',
    isPageHeading: 'true',
    validate: [
      'required',
      'date',
      { type: 'after', arguments: ['0', 'days'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'site-part-of-contractual-agreement': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
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
  'contract-start-date': dateComponent('contract-start-date', {
    mixin: 'input-date',
    isPageHeading: 'true',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['-1', 'years'] }, // Validate the date to be within 1 year in the future
      { type: 'after', arguments: ['1', 'years'] } // Validate the date to be less than 1 year in the past
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'contract-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  }
};
