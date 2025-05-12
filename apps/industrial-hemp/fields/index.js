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

  'why-new-licence': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    options: [{ value: 'moving-site' }, { value: 'another-site' }],
    validate: ['required'],
    className: ['govuk-radios'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-contractual-agreement': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    options: [{ value: 'yes' }, { value: 'no' }],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'moving-site-date': dateComponent('moving-site-date', {
    mixin: 'input-date',
    isPageHeading: 'true',
    validate: [
      'required',
      'date',
      { type: 'after', arguments: ['0', 'days'] }
    ]
  }),
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
    type: 'email',
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
  'growing-location-address-line-1': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'growing-location-address-line-2': {
    mixin: 'input-text',
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'growing-location-town-or-city': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'growing-location-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'growing-location-email': {
    mixin: 'input-text',
    validate: ['email'],
    type: 'email',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'growing-location-uk-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-responsible-person-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-responsible-person-uk-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-responsible-person-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    type: 'email',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'site-responsible-DBS-check': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'responsible-person-dbs-fullname': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-person-dbs-reference': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-person-dbs-date-of-issue': dateComponent('responsible-person-dbs-date-of-issue', {
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
  'responsible-officer-dbs-subscription': {
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
  'witness-destruction-plant': {
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
  'how-leaves-flowers-destroyed': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'authorised-witness-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'authorised-witness-uk-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'authorised-witness-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    type: 'email',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'authorise-witness-DBS-check': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'authorised-witness-dbs-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [200] }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'authorised-witness-dbs-reference': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 3 },
      { type: 'maxlength', arguments: 25 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'authorised-witness-dbs-date-of-issue': dateComponent('authorised-witness-dbs-date-of-issue', {
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
  'authorised-witness-dbs-subscription': {
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
  'legal-business-proceedings': {
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
  'legal-business-proceedings-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
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
  'is-company-ref-changed': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-company-name-changed': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-change-witness-only': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-additional-schedules': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-change-of-activity': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ],
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'hold-other-regulatory-licences': {
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
  'other-licence-type': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 200 }
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'other-licence-number': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 2 },
      { type: 'maxlength', arguments: 50 },
      'alphanum'
    ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'other-licence-date-of-issue': dateComponent('other-licence-date-of-issue', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['50', 'years'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'is-licence-refused': {
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
  'refusal-reason': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'contract-start-date': dateComponent('contract-start-date', {
    mixin: 'input-date',
    isPageHeading: true,
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
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'company-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'public-limited'
      },
      {
        value: 'private'
      },
      {
        value: 'other'
      }
    ],
    className: ['govuk-radios'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'describe-business-model': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'cultivate-industrial-hemp': {
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
  'where-cultivating-cannabis': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: 'inside'
      },
      {
        value: 'outside'
      }
    ],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'is-company-own-fields': {
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
  'who-own-fields': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'is-permission-for-activities': {
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
  'field-acreage': {
    mixin: 'input-text',
    isPageHeading: true,
    validate: [
      'required',
      { type: 'maxlength', arguments: 50 }
    ],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'how-many-fields': {
    mixin: 'input-text',
    isPageHeading: true,
    validate: [
      'required',
      'numeric',
      {type: 'max', arguments: 1000},
      {type: 'min', arguments: 1}
    ],
    className: ['govuk-input', 'govuk-input--width-5'],
    attributes: [{ suffix: 'fields' }]
  },
  'cultivation-field-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    labelClassName: ['govuk-label--m']
  },
  'record-keeping-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'seed-supplier-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'customer-base-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'end-product-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'end-product-production-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'seed-type-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'thc-content-level': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
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
  'refund-accound-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 500 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }]
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
  'regulatory-affairs-officer': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no',
        toggle: 'officer-non-compliance-reason',
        child: 'textarea'
      }
    ]
  },
  'officer-non-compliance-reason': {
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    dependent: {
      value: 'no',
      field: 'regulatory-affairs-officer'
    }
  },
  'extra-information': {
    mixin: 'textarea',
    validate: [ { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'is-different-postcodes': {
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
  'different-postcode-details': {
    mixin: 'textarea',
    validate: ['required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'adjacent-field-details': {
    mixin: 'textarea',
    validate: ['required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'perimeter-details': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    labelClassName: ['govuk-label--m']
  }
};
