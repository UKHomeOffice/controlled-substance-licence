const hof = require('hof');
const Summary = hof.components.summary;
const customValidation = require('../common/behaviours/custom-validation');

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
    next: '/legal-business-proceedings'
  },

  '/professional-body-details': {
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
    forks: [
      {
        target: '/person-responsible-for-security',
        condition: {
          field: 'responsible-for-security',
          value: 'someone-else'
        }
      }
    ],
    next: '/compliance-and-regulatory'
  },

  '/person-responsible-for-security': {
    fields: [
      'person-responsible-for-security-full-name',
      'person-responsible-for-security-email-address',
      'person-responsible-for-security-confirmed-dbs'
    ],
    next: '/security-officer-dbs'
  },

  '/security-officer-dbs': {
    next: '/security-officer-dbs-updates'
  },

  '/security-officer-dbs-updates': {
    next: '/compliance-and-regulatory'
  },

  '/compliance-and-regulatory': {
    next: '/person-responsible-for-compliance-and-regulatory'
  },

  '/person-responsible-for-compliance-and-regulatory': {
    next: '/regulatory-and-compliance-dbs-updates'
  },

  '/regulatory-and-compliance-dbs-updates': {
    next: '/employee-or-consultant'
  },

  '/employee-or-consultant': {
    next: '/witness-destruction-of-drugs'
  },

  '/witness-destruction-of-drugs': {
    next: '/who-witnesses-destruction-of-drugs'
  },

  '/who-witnesses-destruction-of-drugs': {
    next: '/person-to-witness'
  },

  '/person-to-witness': {
    next: '/witness-dbs'
  },

  '/witness-dbs': {
    next: '/witness-dbs-updates'
  },

  '/witness-dbs-updates': {
    next: '/company-registration-certificate'
  },

  '/company-registration-certificate': {
    next: '/trading-reasons'
  },

  '/trading-reasons': {
    next: '/trading-reasons-summary'
  },

  '/specify-trading-reasons': {
    next: '/trading-reasons-summary'
  },

  '/trading-reasons-summary': {
    next: '/why-you-need-licence'
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
    behaviours: [Summary],
    sections: require('./sections/summary-data-sections'),
    next: '/declaration'
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
  steps: steps
};
