const config = require('../../config');
const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');
const SaveDocument = require('../common/behaviours/save-document');
const RemoveDocument = require('../common/behaviours/remove-document');
const FilterChemicals = require('./behaviours/filter-chemicals');
const LoopAggregator = require('../common/behaviours/loop-aggregator');
const LimitItems = require('../common/behaviours/limit-items');
const ParseSubstanceSummary = require('./behaviours/parse-substance-summary');
const steps = {

  /** About the applicants */

  '/licence-holder-details': {
    behaviours: [customValidation],
    fields: [
      'company-name',
      'company-number',
      'telephone',
      'email',
      'website-url'
    ],
    next: '/licence-holder-address',
    backLink: '/licensee-type'
  },

  '/licence-holder-address': {
    fields: [
      'licence-holder-address-line-1',
      'licence-holder-address-line-2',
      'licence-holder-town-or-city',
      'licence-holder-postcode'
    ],
    next: '/reuse-premises-address'
  },

  '/reuse-premises-address': {
    fields: ['is-premises-address-same'],
    forks: [
      {
        target: '/premises-address',
        condition: {
          field: 'is-premises-address-same',
          value: 'no'
        }
      }
    ],
    next: '/premises-contact-details'
  },

  '/premises-address': {
    fields: [
      'premises-address-line-1',
      'premises-address-line-2',
      'premises-town-or-city',
      'premises-postcode'
    ],
    next: '/premises-contact-details'
  },

  '/premises-contact-details': {
    behaviours: [customValidation],
    fields: [
      'premises-telephone',
      'premises-email'
    ],
    next: '/responsible-officer-details'
  },

  '/responsible-officer-details': {
    fields: [
      'responsible-officer-fullname',
      'responsible-officer-email',
      'responsible-officer-dbs-certificate'
    ],
    next: '/responsible-officer-dbs-information'
  },

  '/responsible-officer-dbs-information': {
    fields: [
      'responsible-officer-dbs-application-fullname',
      'responsible-officer-dbs-reference',
      'responsible-officer-dbs-date-of-issue'
    ],
    next: '/responsible-officer-dbs'
  },

  '/responsible-officer-dbs': {
    fields: [
      'responsible-officer-dbs-update-subscription'
    ],
    next: '/guarantor-details'
  },

  '/guarantor-details': {
    fields: [
      'guarantor-full-name',
      'guarantor-email-address',
      'guarantor-confirmed-dbs'
    ],
    next: '/guarantor-dbs-information'
  },

  '/guarantor-dbs-information': {
    fields: [
      'guarantor-dbs-full-name',
      'guarantor-dbs-reference',
      'guarantor-dbs-date-of-issue'
    ],
    next: '/guarantor-dbs-updates'
  },

  '/guarantor-dbs-updates': {
    fields: ['is-guarantor-subscribed'],
    next: '/criminal-convictions'
  },

  '/criminal-convictions': {
    fields: ['has-anyone-received-criminal-conviction'],
    next: '/invoicing-address'
  },

  '/invoicing-address': {
    fields: [
      'invoicing-address-line-1',
      'invoicing-address-line-2',
      'invoicing-town-or-city',
      'invoicing-postcode'
    ],
    next: '/invoicing-contact-details'
  },

  '/invoicing-contact-details': {
    behaviours: [customValidation],
    fields: [
      'invoicing-fullname',
      'invoicing-email',
      'invoicing-telephone',
      'invoicing-purchase-order-number'
    ],
    next: '/substance-category'
  },

  /** About the licence */

  '/substance-category': {
    fields: ['substance-category'],
    next: '/which-chemical'
  },

  '/which-chemical': {
    fields: ['which-chemical'],
    behaviours: [FilterChemicals],
    next: '/which-operation'
  },

  '/which-operation': {
    fields: ['which-operation'],
    forks: [
      {
        target: '/what-operation',
        condition: req => Array.isArray(req.sessionModel.get('which-operation')) ?
          req.sessionModel.get('which-operation').includes('other') :
          req.sessionModel.get('which-operation') === 'other'
      }
    ],
    next: '/substances-in-licence'
  },

  '/what-operation': {
    fields: ['what-operation'],
    next: '/substances-in-licence'
  },

  '/substances-in-licence': {
    behaviours: [
      LoopAggregator,
      LimitItems,
      ParseSubstanceSummary
    ],
    aggregateTo: 'substances-in-licence',
    aggregateFrom: [
      'which-chemical',
      'substance-category',
      'which-operation',
      'what-operation'
    ],
    addStep: 'substance-category',
    addAnotherLinkText: 'substance',
    continueOnEdit: false,
    template: 'substance-summary',
    backLink: 'substance-category',
    aggregateLimit: config.aggregateLimits.precursorChemicals.substanceLimit,
    next: '/why-chemicals-needed'
  },

  '/why-chemicals-needed': {
    fields: ['chemicals-used-for'],
    // next: '/upload-company-certificate'
    next: '/summary'
  },

  /** Evidence */

  '/upload-company-certificate': {
    next: '/upload-conduct-certificate',
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload']
  },

  '/upload-conduct-certificate': {
    next: '/main-customers',
    behaviours: [
      SaveDocument('certificate-of-good-conduct', 'file-upload'),
      RemoveDocument('certificate-of-good-conduct')
    ],
    fields: ['file-upload']
  },

  /** The organisation and how it operates */

  '/main-customers': {
    fields: ['main-customers'],
    next: '/main-suppliers'
  },

  '/main-suppliers': {
    fields: ['main-suppliers'],
    next: '/security-measures'
  },

  '/security-measures': {
    fields: ['security-measures'],
    next: '/how-secure-premises'
  },

  '/how-secure-premises': {
    fields: ['how-secure-premises'],
    next: '/storage-and-handling'
  },

  '/storage-and-handling': {
    fields: ['storage-and-handling'],
    next: '/chemical-stock-control'
  },

  '/chemical-stock-control': {
    fields: ['chemical-stock-control'],
    next: '/legitimate-use'
  },

  '/legitimate-use': {
    fields: ['legitimate-use'],
    next: '/operating-procedures-and-auditing'
  },

  '/operating-procedures-and-auditing': {
    fields: ['operating-procedures-and-auditing'],
    next: '/licence-email-address'
  },

  /* Finalise application */

  '/licence-email-address': {
    fields: ['licence-email'],
    next: '/who-completing'
  },

  '/who-completing': {
    behaviours: [customValidation],
    fields: [
      'who-is-completing-application-full-name',
      'who-is-completing-application-telephone',
      'who-is-completing-application-email'
    ],
    next: '/discharging-licence-responsibilities'
  },

  '/discharging-licence-responsibilities': {
    fields: ['is-discharge-all-licence-responsibilities', 'explain-not-discharge-responsibilities'],
    next: '/extra-application-information'
  },

  '/extra-application-information': {
    fields: ['extra-information'],
    next: '/summary'
  },

  '/summary': {
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections'),
    next: '/declaration'
  },

  '/declaration': {
    fields: ['declaration-check'],
    next: '/application-submitted'
  },

  '/application-submitted': {
    backLink: false,
    clearSession: true
  },

  '/information-you-have-given-us': {
    next: '/licence-holder-details',
    backLink: '/application-type'
  },

  '/companies-house-number': {
    next: '/licence-holder-details',
    backLink: '/licensee-type'
  },

  '/why-new-licence': {
    next: '/licence-holder-details',
    backLink: '/licensee-type'
  }
};

module.exports = {
  name: 'precursor-chemicals',
  fields: 'apps/precursor-chemicals/fields',
  views: 'apps/precursor-chemicals/views',
  translations: 'apps/precursor-chemicals/translations',
  baseUrl: '/precursor-chemicals',
  params: '/:action?/:id?/:edit?',
  confirmStep: '/summary',
  steps: steps
};
