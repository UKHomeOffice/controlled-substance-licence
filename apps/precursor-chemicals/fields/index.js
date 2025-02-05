const dateComponent = require('hof').components.date;
const chemicals = require('../data/chemicals.json');

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
  'companies-house-number-change': {
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
  'companies-house-name-change': {
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
  'change-responsible-officer-or-guarantor': {
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
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'additional-category': {
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
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'change-substance-or-operation': {
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
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
  },
  'why-requesting-new-licence': {
    mixin: 'radio-group',
    isPageHeading: 'true',
    validate: ['required'],
    options: [
      {
        value: 'we-are-moving-site'
      },
      {
        value: 'for-another-site'
      }
    ]
  },
  'moving-date': dateComponent('moving-date', {
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
  'contractual-agreement': {
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
  'contract-start-date': dateComponent('contract-start-date', {
    mixin: 'input-date',
    isPageHeading: true,
    validate: [
      'required',
      'date',
      { type: 'after', arguments: ['0', 'days'] }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-4'
    }
  }),
  'contract-details': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 2000 }],
    attributes: [{ attribute: 'rows', value: 8 }]
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
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    }
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
  'responsible-officer-fullname': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-email': {
    mixin: 'input-text',
    validate: [ 'required', 'email' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-certificate': {
    mixin: 'checkbox',
    validate: [ 'required' ]
  },
  'responsible-officer-dbs-application-fullname': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-reference': {
    mixin: 'input-text',
    validate: [ 'required', 'notUrl' ],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'responsible-officer-dbs-date-of-issue': dateComponent('responsible-officer-dbs-date-of-issue', {
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
  'responsible-officer-dbs-update-subscription': {
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
  'guarantor-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-email-address': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-confirmed-dbs': {
    mixin: 'checkbox',
    validate: [ 'required' ]
  },
  'guarantor-dbs-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-dbs-reference': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'guarantor-dbs-date-of-issue': dateComponent('guarantor-dbs-date-of-issue', {
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
  'is-guarantor-subscribed': {
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
  'invoicing-town-or-city': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-postcode': {
    mixin: 'input-text',
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'invoicing-fullname': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'invoicing-purchase-order-number': {
    mixin: 'input-text',
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'substance-category': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: [ 'required' ],
    options: [
      {
        value: '1'
      },
      {
        value: '2'
      },
      {
        value: '3'
      },
      {
        value: 'unknown'
      }
    ],
    legend: {
      className: 'govuk-!-margin-bottom-6'
    },
    showFieldInSummary: true
  },
  'which-chemical': {
    mixin: 'select',
    isPageHeading: true,
    className: ['typeahead'],
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.which-chemical.options.none_selected'
    }].concat(chemicals),
    showFieldInSummary: true
  },
  'which-operation': {
    mixin: 'checkbox-group',
    validate: ['required'],
    isPageHeading: true,
    options: [
      {
        value: 'resale-or-supply'
      },
      {
        value: 'import-or-export'
      },
      {
        value: 'manufacture-of-precursors'
      },
      {
        value: 'manufacture-of-products'
      },
      {
        value: 'supply-of-precursors'
      },
      {
        value: 'supply-of-products'
      },
      {
        value: 'storage'
      },
      {
        value: 'research-development-teaching'
      },
      {
        value: 'incineration'
      },
      {
        value: 'lab-testing-and-processing'
      },
      {
        value: 'packing-or-repackaging'
      },
      {
        value: 'veterinary-pharma-drug'
      },
      {
        value: 'other'
      }
    ],
    showFieldInSummary: true
  },
  'what-operation': {
    mixin: 'input-text',
    isPageHeading: true,
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    showFieldInSummary: false
  },
  'chemicals-used-for': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 2000 }],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'main-customers': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'main-suppliers': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'security-measures': {
    mixin: 'checkbox-group',
    validate: [ 'required' ],
    isPageHeading: true,
    options: [
      {
        value: 'cctv-system'
      },
      {
        value: 'electronic-stock-recording-system'
      },
      {
        value: 'perimeter-fencing'
      },
      {
        value: 'lockable-physical-security'
      },
      {
        value: 'security-guards'
      }
    ]
  },
  'how-secure-premises': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'storage-and-handling': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'chemical-stock-control': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'legitimate-use': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'operating-procedures-and-auditing': {
    mixin: 'textarea',
    validate: [ 'required', { type: 'maxlength', arguments: 2000 }, 'notUrl' ],
    attributes: [{ attribute: 'rows', value: 8 }],
    isPageHeading: true
  },
  'licence-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-telephone': {
    mixin: 'input-text',
    validate: ['required'], // additional validation covered in custom-validation.js
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'who-is-completing-application-email': {
    mixin: 'input-text',
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'is-discharge-all-licence-responsibilities': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no',
        toggle: 'explain-not-discharge-responsibilities',
        child: 'textarea'
      }
    ]
  },
  'explain-not-discharge-responsibilities': {
    dependent: {
      field: 'is-discharge-all-licence-responsibilities',
      value: 'no'
    },
    validate: [
      'required',
      'notUrl',
      { type: 'maxlength', arguments: 2000 }
    ],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'extra-information': {
    mixin: 'textarea',
    isPageHeading: true,
    validate: ['notUrl', { type: 'maxlength', arguments: 2000 }],
    attributes: [{ attribute: 'rows', value: 8 }]
  },
  'declaration-check': {
    mixin: 'checkbox',
    validate: ['required']
  }
};
