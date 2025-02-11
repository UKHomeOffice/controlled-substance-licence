const config = require('../../config');
const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');
const CustomRedirect = require('./behaviours/custom-redirect');
const LoopAggregator = require('../common/behaviours/loop-aggregator');
const LimitItems = require('../common/behaviours/limit-items');
const SetSummaryReferrer = require('../common/behaviours/set-summary-referrer');
const ParseTradingReasonsSummary = require('./behaviours/parse-trading-reasons-summary');
const CancelSummaryReferrer = require('../common/behaviours/cancel-summary-referrer');

const steps = {

  '/application-type': {
    fields: ['application-form-type'],
    forks: [
      {
        target: '/information-you-have-given-us',
        condition: {
          field: 'application-form-type',
          value: 'continue-an-application'
        }
      }
    ],
    next: '/licensee-type',
    backLink: '/licence-type'
  },

  '/licensee-type': {
    fields: ['licensee-type'],
    forks: [
      {
        target: '/company-number-changed',
        condition: {
          field: 'licensee-type',
          value: 'existing-licensee-renew-or-change-site'
        }
      },
      {
        target: '/why-new-licence',
        condition: {
          field: 'licensee-type',
          value: 'existing-licensee-applying-for-new-site'
        }
      }
    ],
    next: '/licence-holder-details'
  },

  /** Continue an application */

  '/information-you-have-given-us': {
    next: '/licence-holder-details'
  },

  /** Renew existing licence - Background Information */

  '/company-number-changed': {
    next: '/licence-holder-details'
  },

  /** Excisting licence apply for new site - Background Information */

  '/why-new-licence': {
    next: '/licence-holder-details'
  },

  /** First time licensee - About the applicants */

  '/licence-holder-details': {
    behaviours: [customValidation],
    fields: [
      'company-name',
      'company-number',
      'telephone',
      'email',
      'website-url'
    ],
    next: '/licence-holder-address'
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
    next: '/how-funded'
  },

  '/how-funded': {
    fields: ['how-are-you-funded'],
    next: '/person-in-charge'
  },

  '/person-in-charge': {
    fields: [
      'person-in-charge-full-name',
      'person-in-charge-email-address',
      'person-in-charge-confirmed-dbs'
    ],
    next: '/person-in-charge-dbs'
  },

  '/person-in-charge-dbs': {
    fields: [
      'person-in-charge-dbs-fullname',
      'person-in-charge-dbs-reference',
      'person-in-charge-dbs-date-of-issue'
    ],
    next: '/person-in-charge-dbs-updates'
  },

  '/person-in-charge-dbs-updates': {
    fields: [
      'person-in-charge-dbs-subscription'
    ],
    next: '/member-of-professional-body'
  },

  '/member-of-professional-body': {
    fields: ['member-of-professional-body'],
    forks: [
      {
        target: '/legal-business-proceedings',
        condition: {
          field: 'member-of-professional-body',
          value: 'no'
        }
      }
    ],
    next: '/professional-body-details'
  },

  '/professional-body-details': {
    fields: ['professional-body-details'],
    next: '/legal-business-proceedings'
  },

  '/legal-business-proceedings': {
    fields: ['legal-business-proceedings'],
    forks: [
      {
        target: '/criminal-conviction',
        condition: {
          field: 'legal-business-proceedings',
          value: 'no'
        }
      }
    ],
    next: '/legal-proceedings-details'
  },

  '/legal-proceedings-details': {
    fields: ['legal-proceedings-details'],
    next: '/criminal-conviction'
  },

  '/criminal-conviction': {
    fields: ['has-anyone-received-criminal-conviction'],
    next: '/responsible-for-security'
  },

  '/responsible-for-security': {
    fields: ['responsible-for-security'],
    behaviours: [CustomRedirect],
    forks: [
      {
        target: '/person-responsible-for-security',
        condition: {
          field: 'responsible-for-security',
          value: 'someone-else'
        }
      }
    ],
    next: '/compliance-and-regulatory',
    continueOnEdit: true
  },

  '/person-responsible-for-security': {
    fields: [
      'person-responsible-for-security-full-name',
      'person-responsible-for-security-email-address',
      'person-responsible-for-security-confirmed-dbs'
    ],
    behaviours: [CustomRedirect],
    next: '/security-officer-dbs',
    continueOnEdit: true
  },

  '/security-officer-dbs': {
    next: '/security-officer-dbs-updates',
    fields: [
      'person-responsible-for-security-dbs-fullname',
      'person-responsible-for-security-dbs-reference',
      'person-responsible-for-security-dbs-date-of-issue'
    ],
    behaviours: [CustomRedirect],
    continueOnEdit: true
  },

  '/security-officer-dbs-updates': {
    fields: ['person-responsible-for-security-dbs-subscription'],
    next: '/compliance-and-regulatory',
    template: 'person-in-charge-dbs-updates'
  },

  '/compliance-and-regulatory': {
    fields: ['responsible-for-compliance-regulatory'],
    behaviours: [CustomRedirect],
    forks: [
      {
        target: '/person-responsible-for-compliance-and-regulatory',
        condition: {
          field: 'responsible-for-compliance-regulatory',
          value: 'someone-else'
        }
      }
    ],
    next: '/employee-or-consultant',
    continueOnEdit: true
  },

  '/person-responsible-for-compliance-and-regulatory': {
    fields: [
      'responsible-for-compliance-regulatory-full-name',
      'responsible-for-compliance-regulatory-email-address',
      'responsible-for-compliance-regulatory-confirmed-dbs'
    ],
    behaviours: [CustomRedirect],
    next: '/regulatory-and-compliance-dbs',
    continueOnEdit: true
  },

  '/regulatory-and-compliance-dbs': {
    fields: [
      'responsible-for-compliance-regulatory-dbs-fullname',
      'responsible-for-compliance-regulatory-dbs-reference',
      'responsible-for-compliance-regulatory-dbs-date-of-issue'
    ],
    behaviours: [CustomRedirect],
    next: '/regulatory-and-compliance-dbs-updates',
    continueOnEdit: true
  },

  '/regulatory-and-compliance-dbs-updates': {
    fields: ['responsible-for-compliance-regulatory-dbs-subscription'],
    next: '/employee-or-consultant',
    template: 'person-in-charge-dbs-updates'
  },

  '/employee-or-consultant': {
    fields: ['is-employee-or-consultant'],
    next: '/witness-destruction-of-drugs'
  },

  '/witness-destruction-of-drugs': {
    fields: ['require-witness-destruction-of-drugs'],
    forks: [
      {
        target: '/trading-reasons',
        condition: {
          field: 'require-witness-destruction-of-drugs',
          value: 'no'
        }
      }
    ],
    next: '/who-witnesses-destruction-of-drugs'
  },

  '/who-witnesses-destruction-of-drugs': {
    behaviours: [CustomRedirect],
    fields: ['responsible-for-witnessing-the-destruction'],
    forks: [
      {
        target: '/person-to-witness',
        condition: {
          field: 'responsible-for-witnessing-the-destruction',
          value: 'someone-else'
        }
      }
    ],
    next: '/trading-reasons',
    continueOnEdit: true
  },

  '/person-to-witness': {
    behaviours: [CustomRedirect],
    fields: [
      'responsible-for-witnessing-full-name',
      'responsible-for-witnessing-email-address',
      'responsible-for-witnessing-confirmed-dbs'
    ],
    next: '/witness-dbs',
    continueOnEdit: true
  },

  '/witness-dbs': {
    behaviours: [CustomRedirect],
    fields: [
      'responsible-for-witnessing-dbs-fullname',
      'responsible-for-witnessing-dbs-reference',
      'responsible-for-witnessing-dbs-date-of-issue'
    ],
    next: '/witness-dbs-updates',
    continueOnEdit: true
  },

  '/witness-dbs-updates': {
    fields: ['responsible-for-witnessing-dbs-subscription'],
    next: '/company-registration-certificate',
    template: 'person-in-charge-dbs-updates'
  },

  '/company-registration-certificate': {
    next: '/trading-reasons'
  },

  '/trading-reasons': {
    fields: ['trading-reasons'],
    forks: [
      {
        target: '/specify-trading-reasons',
        condition: req => Array.isArray(req.sessionModel.get('trading-reasons')) ?
          req.sessionModel.get('trading-reasons').includes('other') :
          req.sessionModel.get('trading-reasons') === 'other'
      }
    ],
    next: '/trading-reasons-summary'
  },

  '/specify-trading-reasons': {
    fields: ['specify-trading-reasons'],
    next: '/trading-reasons-summary'
  },

  '/trading-reasons-summary': {
    behaviours: [
      LoopAggregator,
      LimitItems,
      SetSummaryReferrer,
      ParseTradingReasonsSummary,
      CustomRedirect
    ],
    aggregateTo: 'aggregated-trading-reasons',
    aggregateFrom: [
      'trading-reasons',
      'specify-trading-reasons'
    ],
    titleField: 'trading-reasons',
    addStep: 'trading-reasons',
    template: 'trading-reasons-summary',
    backLink: 'trading-reasons',
    aggregateLimit: config.aggregateLimits.controlledDrugs.tradingReasonsLimit,
    next: '/why-you-need-licence',
    locals: {
      fullWidthPage: true
    }
  },

  '/why-you-need-licence': {
    next: '/main-customer-details'
  },

  '/main-customer-details': {
    next: '/source-drugs'
  },

  '/source-drugs': {
    next: '/mhra-licences'
  },

  '/mhra-licences': {
    next: '/care-quality-commission-or-equivalent'
  },

  '/mhra-licence-details': {
    next: '/care-quality-commission-or-equivalent'
  },

  '/care-quality-commission-or-equivalent': {
    next: '/regulatory-body-registration'
  },

  '/registration-details': {
    next: '/regulatory-body-registration'
  },

  '/regulatory-body-registration': {
    next: '/service-under-contract'
  },

  '/service-under-contract': {
    next: '/status-of-site'
  },

  '/service-details': {
    next: '/service-expiry-date'
  },

  '/service-expiry-date': {
    next: '/status-of-site'
  },

  '/status-of-site': {
    next: '/site-owner-contact-details'
  },

  '/site-owner-contact-details': {
    next: '/licence-details'
  },

  '/licence-details': {
    next: '/schedule-1-activities'
  },

  '/schedule-1-activities': {
    next: '/schedule-2-activities'
  },

  '/schedule-2-activities': {
    next: '/schedule-3-activities'
  },

  '/schedule-3-activities': {
    next: '/schedule-4-part-1-activities'
  },

  '/schedule-4-part-1-activities': {
    next: '/schedule-4-part-2-activities'
  },

  '/schedule-4-part-2-activities': {
    next: '/schedule-5-activities'
  },

  '/schedule-5-activities': {
    next: '/upload-activity-template'
  },

  '/no-activities-selected': {
    // redirect to /schedule-1-activities
  },

  '/upload-activity-template': {
    next: '/security-features'
  },

  '/security-features': {
    next: '/separate-room'
  },

  '/separate-room': {
    next: '/safe-or-cabinet'
  },

  '/safe-or-cabinet': {
    next: '/prefabricated-strong-room'
  },

  '/specification-details': {
    next: '/drugs-kept-at-site'
  },

  '/prefabricated-strong-room': {
    next: '/drugs-kept-at-site'
  },

  '/drugs-kept-at-site': {
    next: '/electronic-alarm-system'
  },

  '/alarm-system-details': {
    next: '/separate-zone-for-storage'
  },

  '/separate-zone-for-storage': {
    next: '/offsite-receiving-centre'
  },

  '/offsite-receiving-centre': {
    next: '/redcare-or-dual-path'
  },

  '/redcare-or-dual-path': {
    next: '/annual-service'
  },

  '/annual-service': {
    next: '/alarm-reference-number'
  },

  '/alarm-reference-number': {
    next: '/alarm-system-police-response'
  },

  '/alarm-system-police-response': {
    next: '/standard-operating-procedures'
  },

  '/electronic-alarm-system': {
    next: '/standard-operating-procedures'
  },

  '/standard-operating-procedures': {
    next: '/record-keeping-system-procedures'
  },

  '/record-keeping-system-procedures': {
    next: '/invoicing-address'
  },

  '/invoicing-address': {
    next: '/invoicing-contact-details'
  },

  '/invoicing-contact-details': {
    next: '/licence-email-address'
  },

  '/licence-email-address': {
    next: '/who-completing-application'
  },

  '/who-completing-application': {
    next: '/extra-information'
  },

  '/extra-information': {
    next: '/confirm'
  },

  '/confirm': {
    behaviours: [Summary, CancelSummaryReferrer],
    sections: require('./sections/summary-data-sections'),
    next: '/declaration',
    locals: {
      fullWidthPage: true
    }
  },

  '/declaration': {
    next: '/application-submitted'
  },

  '/application-submitted': {
  }
};

module.exports = {
  name: 'controlled-drugs',
  fields: 'apps/controlled-drugs/fields',
  views: 'apps/controlled-drugs/views',
  translations: 'apps/controlled-drugs/translations',
  baseUrl: '/controlled-drugs',
  params: '/:action?/:id?/:edit?',
  confirmStep: '/confirm',
  steps: steps
};
