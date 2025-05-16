const config = require('../../config');
const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');
const CustomRedirect = require('./behaviours/custom-redirect');
const SetSummaryReferrer = require('../common/behaviours/set-summary-referrer');
const LoopAggregator = require('../common/behaviours/loop-aggregator');
const LimitItems = require('../common/behaviours/limit-items');
const ParseTradingReasonsSummary = require('./behaviours/parse-trading-reasons-summary');
const CancelSummaryReferrer = require('../common/behaviours/cancel-summary-referrer');
const SaveDocument = require('../common/behaviours/save-document');
const RemoveDocument = require('../common/behaviours/remove-document');
const ScheduledActivitiesRedirect = require('./behaviours/scheduled-activities-redirect');
const FileDownload = require('../common/behaviours/file-download');
const InformationYouHaveGivenUs = require('../common/behaviours/information-you-have-given-us');
const SaveFormSession = require('../common/behaviours/save-form-session');
const ResumeFormSession = require('../common/behaviours/resume-form-session');
const FilterSelectFieldOptions = require('../common/behaviours/filter-select-field-options');
const SignOutOnExit = require('../common/behaviours/sign-out-on-exit');
const Auth = require('../common/behaviours/auth/auth-check');
const SubmitRequest = require('../common/behaviours/submit-request');

const steps = {

  '/application-type': {
    behaviours: [ResumeFormSession],
    fields: ['application-form-type', 'amend-application-details'],
    template: 'continue-only',
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
    template: 'continue-only',
    next: '/licence-holder-details'
  },

  /** Continue an application */


  '/information-you-have-given-us': {
    behaviours: [Summary, InformationYouHaveGivenUs],
    template: 'information-you-have-given-us',
    sections: require('./sections/summary-data-sections'),
    forks: [
      {
        target: '/companies-house-number',
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
    next: '/licence-holder-details',
    locals: {
      fullWidthPage: true,
      showExit: true
    }
  },

  /** Existing licensee renewing or changing a currently licensed site - Background Information */

  '/company-number-changed': {
    fields: ['companies-house-number-change'],
    next: '/company-name-changed',
    behaviours: [SetSummaryReferrer]
  },

  '/register-again': {
    backLink: '/controlled-drugs/company-number-changed'
    // End of user journey
  },

  '/company-name-changed': {
    fields: ['companies-house-name-change'],
    forks: [
      {
        target: '/change-witness-only',
        condition: {
          field: 'companies-house-name-change',
          value: 'no'
        }
      }
    ],
    next: '/company-registration-certificate-name-change'
  },

  '/company-registration-certificate-name-change': {
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload'],
    next: '/change-witness-only',
    locals: {
      documentCategory: {
        name: 'company-registration-certificate'
      }
    }
  },

  '/change-witness-only': {
    fields: ['change-authorised-witness'],
    next: '/additional-schedules'
  },

  '/additional-schedules': {
    fields: ['requesting-additional-schedules'],
    next: '/change-of-activity'
  },

  '/change-of-activity': {
    fields: ['change-of-activity'],
    next: '/licence-holder-details'
  },

  /** Existing licence apply for new site - Background Information */

  '/why-new-licence': {
    fields: ['why-requesting-new-licence'],
    forks: [
      {
        target: '/when-moving-site',
        condition: {
          field: 'why-requesting-new-licence',
          value: 'moving-site'
        }
      }
    ],
    next: '/contractual-agreement'
  },

  '/when-moving-site': {
    fields: ['date-moving-site'],
    next: '/licence-holder-details'
  },

  '/contractual-agreement': {
    fields: ['site-part-of-contractual-agreement'],
    forks: [
      {
        target: '/when-contract-start',
        condition: {
          field: 'site-part-of-contractual-agreement',
          value: 'yes'
        }
      }
    ],
    next: '/licence-holder-details'
  },

  '/when-contract-start': {
    fields: ['contract-start-date'],
    next: '/contract-details'
  },

  '/contract-details': {
    fields: ['contract-details'],
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
        target: '/professional-body-details',
        condition: {
          field: 'member-of-professional-body',
          value: 'yes'
        }
      }
    ],
    next: '/legal-business-proceedings'
  },

  '/professional-body-details': {
    fields: ['professional-body-details'],
    next: '/legal-business-proceedings'
  },

  '/legal-business-proceedings': {
    fields: ['legal-business-proceedings'],
    forks: [
      {
        target: '/legal-proceedings-details',
        condition: {
          field: 'legal-business-proceedings',
          value: 'yes'
        }
      }
    ],
    next: '/criminal-conviction'
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
    continueOnEdit: true
  },

  '/security-officer-dbs-updates': {
    fields: ['person-responsible-for-security-dbs-subscription'],
    next: '/compliance-and-regulatory',
    template: 'person-in-charge-dbs-updates'
  },

  '/compliance-and-regulatory': {
    fields: ['responsible-for-compliance-regulatory'],
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
    next: '/regulatory-and-compliance-dbs',
    continueOnEdit: true
  },

  '/regulatory-and-compliance-dbs': {
    fields: [
      'responsible-for-compliance-regulatory-dbs-fullname',
      'responsible-for-compliance-regulatory-dbs-reference',
      'responsible-for-compliance-regulatory-dbs-date-of-issue'
    ],
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
    // The conditional check should be performed in reverse order, as the last fork takes over.
    forks: [
      {
        target: '/trading-reasons',
        condition: {
          field: 'require-witness-destruction-of-drugs',
          value: 'no'
        }
      },
      {
        target: '/company-registration-certificate',
        condition: req => req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site' &&
          req.sessionModel.get('require-witness-destruction-of-drugs') === 'no'
      }
    ],
    next: '/who-witnesses-destruction-of-drugs',
    continueOnEdit: true
  },

  '/who-witnesses-destruction-of-drugs': {
    continueOnEdit: true,
    fields: ['responsible-for-witnessing-the-destruction'],
    forks: [
      {
        target: '/person-to-witness',
        condition: {
          field: 'responsible-for-witnessing-the-destruction',
          value: 'someone-else'
        }
      },
      {
        target: '/company-registration-certificate',
        condition: req => req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site' &&
          req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director'
      }
    ],
    next: '/trading-reasons'
  },

  '/person-to-witness': {
    fields: [
      'responsible-for-witnessing-full-name',
      'responsible-for-witnessing-email-address',
      'responsible-for-witnessing-confirmed-dbs'
    ],
    next: '/witness-dbs',
    continueOnEdit: true
  },

  '/witness-dbs': {
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
    next: '/trading-reasons',
    forks: [
      {
        target: '/company-registration-certificate',
        condition: req => req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site'
      }
    ],
    template: 'person-in-charge-dbs-updates'
  },

  '/company-registration-certificate': {
    behaviours: [
      SaveDocument('company-registration-certificate', 'file-upload'),
      RemoveDocument('company-registration-certificate')
    ],
    fields: ['file-upload'],
    next: '/trading-reasons',
    locals: {
      documentCategory: {
        name: 'company-registration-certificate'
      }
    }
  },

  '/trading-reasons': {
    behaviours: [FilterSelectFieldOptions('aggregated-trading-reasons', 'trading-reasons')],
    fields: ['trading-reasons'],
    forks: [
      {
        target: '/specify-trading-reasons',
        condition: req => Array.isArray(req.sessionModel.get('trading-reasons')) ?
          req.sessionModel.get('trading-reasons').includes('other') :
          req.sessionModel.get('trading-reasons') === 'other'
      }
    ],
    ignoreCustomRedirect: true,
    next: '/trading-reasons-summary'
  },

  '/specify-trading-reasons': {
    fields: ['specify-trading-reasons'],
    ignoreCustomRedirect: true,
    next: '/trading-reasons-summary'
  },

  '/trading-reasons-summary': {
    behaviours: [
      LoopAggregator,
      LimitItems,
      SetSummaryReferrer,
      ParseTradingReasonsSummary
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
    fields: ['why-applying-licence'],
    next: '/main-customer-details'
  },

  '/main-customer-details': {
    fields: ['main-customer-details'],
    next: '/source-drugs'
  },

  '/source-drugs': {
    fields: ['source-drugs-details'],
    next: '/mhra-licences'
  },

  '/mhra-licences': {
    fields: ['has-any-licence-issued-by-mhra'],
    forks: [
      {
        target: '/mhra-licence-details',
        condition: {
          field: 'has-any-licence-issued-by-mhra',
          value: 'yes'
        }
      }
    ],
    next: '/care-quality-commission-or-equivalent'
  },

  '/mhra-licence-details': {
    fields: [
      'mhra-licence-number',
      'mhra-licence-type',
      'mhra-licence-date-of-issue'
    ],
    next: '/care-quality-commission-or-equivalent'
  },

  '/care-quality-commission-or-equivalent': {
    fields: ['is-business-registered-with-cqc'],
    forks: [
      {
        target: '/registration-details',
        condition: {
          field: 'is-business-registered-with-cqc',
          value: 'yes'
        }
      }
    ],
    next: '/regulatory-body-registration'
  },

  '/registration-details': {
    fields: [
      'registration-number',
      'date-of-registration'
    ],
    next: '/regulatory-body-registration'
  },

  '/regulatory-body-registration': {
    fields: ['regulatory-body-registration-details'],
    next: '/service-under-contract'
  },

  '/service-under-contract': {
    fields: ['service-under-contract'],
    forks: [
      {
        target: '/service-details',
        condition: {
          field: 'service-under-contract',
          value: 'yes'
        }
      }
    ],
    next: '/status-of-site',
    continueOnEdit: true
  },

  '/service-details': {
    fields: ['service-details'],
    next: '/service-expiry-date',
    continueOnEdit: true
  },

  '/service-expiry-date': {
    fields: ['service-expiry-date'],
    next: '/status-of-site'
  },

  '/status-of-site': {
    fields: ['status-of-site'],
    forks: [
      {
        target: '/site-owner-contact-details',
        condition: req => {
          return req.sessionModel.get('status-of-site') === 'rented' ||
            req.sessionModel.get('status-of-site') === 'leased';
        }
      }
    ],
    next: '/licence-details'
  },

  '/site-owner-contact-details': {
    behaviours: [customValidation],
    fields: ['site-owner-full-name', 'site-owner-email-address', 'site-owner-telephone', 'site-owner-address'],
    next: '/licence-details'
  },

  '/licence-details': {
    next: '/schedule-1-activities'
  },

  '/schedule-1-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-1-activities'],
    next: '/schedule-2-activities',
    template: 'schedule-x-activities',
    locals: {
      continueBtn: 'save-and-continue-to-schedule-2'
    },
    continueOnEdit: true
  },

  '/schedule-2-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-2-activities'],
    next: '/schedule-3-activities',
    template: 'schedule-x-activities',
    locals: {
      continueBtn: 'save-and-continue-to-schedule-3'
    },
    continueOnEdit: true
  },

  '/schedule-3-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-3-activities'],
    next: '/schedule-4-part-1-activities',
    template: 'schedule-x-activities',
    locals: {
      continueBtn: 'save-and-continue-to-schedule-4-part-1'
    },
    continueOnEdit: true
  },

  '/schedule-4-part-1-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-4-part-1-activities'],
    next: '/schedule-4-part-2-activities',
    template: 'schedule-x-activities',
    locals: {
      continueBtn: 'save-and-continue-to-schedule-4-part-2'
    },
    continueOnEdit: true
  },

  '/schedule-4-part-2-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-4-part-2-activities'],
    next: '/schedule-5-activities',
    template: 'schedule-x-activities',
    locals: {
      continueBtn: 'save-and-continue-to-schedule-5'
    },
    continueOnEdit: true
  },

  '/schedule-5-activities': {
    behaviours: [SetSummaryReferrer, ScheduledActivitiesRedirect],
    fields: ['schedule-5-activities'],
    template: 'schedule-x-activities',
    next: '/upload-activity-template'
  },

  '/no-activities-selected': {
    backLink: '/controlled-drugs/schedule-5-activities'
  },

  '/upload-activity-template': {
    behaviours: [
      SaveDocument('user-activity-template', 'file-upload'),
      RemoveDocument('user-activity-template')
    ],
    fields: ['file-upload'],
    next: '/security-features',
    locals: {
      documentCategory: {
        name: 'user-activity-template',
        customFileType: true
      }
    }
  },

  '/security-features': {
    fields: ['security-features'],
    next: '/separate-room'
  },

  '/separate-room': {
    fields: ['cd-kept-in-separate-room'],
    next: '/safe-or-cabinet'
  },

  '/safe-or-cabinet': {
    fields: ['cd-kept-in-safe-or-cabinet'],
    forks: [
      {
        target: '/prefabricated-strong-room',
        condition: {
          field: 'cd-kept-in-safe-or-cabinet',
          value: 'no'
        }
      }
    ],
    next: '/specification-details'
  },

  '/specification-details': {
    fields: ['specification-details'],
    next: '/drugs-kept-at-site'
  },

  '/prefabricated-strong-room': {
    fields: ['kept-in-prefabricated-room'],
    forks: [
      {
        target: '/drugs-kept-at-site',
        condition: {
          field: 'kept-in-prefabricated-room',
          value: 'no'
        }
      }
    ],
    next: '/specification-details'
  },

  '/drugs-kept-at-site': {
    fields: ['drugs-kept-at-site'],
    forks: [
      {
        target: '/electronic-alarm-system',
        condition: {
          field: 'drugs-kept-at-site',
          value: 'yes'
        }
      }
    ],
    next: '/storage-details'
  },

  '/storage-details': {
    fields: ['storage-details'],
    next: '/electronic-alarm-system'
  },

  '/electronic-alarm-system': {
    fields: ['have-electronic-alarm-system'],
    forks: [
      {
        target: '/alarm-system-details',
        condition: {
          field: 'have-electronic-alarm-system',
          value: 'yes'
        }
      }
    ],
    next: '/standard-operating-procedures'
  },

  '/alarm-system-details': {
    fields: ['installing-company-name', 'installing-company-address', 'installing-company-registered-with'],
    next: '/separate-zone-for-storage'
  },

  '/separate-zone-for-storage': {
    fields: ['separate-zone'],
    next: '/offsite-receiving-centre'
  },

  '/offsite-receiving-centre': {
    fields: ['alarm-system-monitored'],
    next: '/redcare-or-dual-path'
  },

  '/redcare-or-dual-path': {
    fields: ['is-alarm-system-connected'],
    next: '/annual-service'
  },

  '/annual-service': {
    fields: ['is-alarm-serviced-annually'],
    next: '/alarm-reference-number'
  },

  '/alarm-reference-number': {
    fields: ['alarm-system-reference-number'],
    next: '/alarm-system-police-response'
  },

  '/alarm-system-police-response': {
    fields: ['alarm-system-police-response'],
    next: '/standard-operating-procedures'
  },

  '/standard-operating-procedures': {
    fields: ['standard-operating-procedures'],
    next: '/record-keeping-system-procedures'
  },

  '/record-keeping-system-procedures': {
    fields: ['record-keeping-system-procedures'],
    next: '/invoicing-address'
  },

  '/invoicing-address': {
    fields: [
      'invoicing-address-line-1',
      'invoicing-address-line-2',
      'invoicing-address-town-or-city',
      'invoicing-address-postcode'
    ],
    next: '/invoicing-contact-details'
  },

  '/invoicing-contact-details': {
    behaviours: [customValidation],
    fields: [
      'invoicing-contact-name',
      'invoicing-contact-email',
      'invoicing-contact-telephone',
      'invoicing-purchase-order-number'
    ],
    next: '/licence-email-address'
  },

  '/licence-email-address': {
    fields: ['licence-email-address'],
    next: '/who-completing-application'
  },

  '/who-completing-application': {
    behaviours: [customValidation],
    fields: [
      'who-is-completing-application-full-name',
      'who-is-completing-application-email',
      'who-is-completing-application-telephone'
    ],
    next: '/extra-information'
  },

  '/extra-information': {
    fields: ['extra-information'],
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
    behaviours: [SubmitRequest],
    fields: ['declaration-check'],
    next: '/application-submitted'
  },

  '/application-submitted': {
    backLink: false,
    clearSession: true
  },
  '/user-activity-template-download': {
    behaviours: [
      FileDownload('/assets/documents', 'controlled-drugs-activity-user-list.xlsx')
    ]
  },

  '/save-and-exit': {
    behaviours: [SignOutOnExit],
    backLink: false
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
  steps: steps,
  behaviours: [Auth, SaveFormSession, CustomRedirect]
};
