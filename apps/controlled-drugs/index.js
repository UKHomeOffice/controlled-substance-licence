
const steps = {

  '/licence-holder-details': {
    next: '/licence-holder-address'
  },

  '/licence-holder-address': {
    next: '/reuse-licence-holder-address'
  },

  '/reuse-licence-holder-address': {
    next: '/premises-contact-details'
  },

  '/premises-address': {
    next: '/premises-contact-details'
  },

  '/premises-contact-details': {
    next: '/how-funded'
  },

  '/how-funded': {
    next: '/person-in-charge'
  },

  '/person-in-charge': {
    next: '/person-in-charge-dbs'
  },

  '/person-in-charge-dbs': {
    next: '/person-in-charge-dbs-updates'
  },

  '/person-in-charge-dbs-updates': {
    next: '/member-of-professional-body'
  },

  '/member-of-professional-body': {
    next: '/legal-business-proceedings'
  },

  '/professional-body-details': {
    next: '/legal-business-proceedings'
  },

  '/legal-business-proceedings': {
    next: '/criminal-conviction'
  },

  '/legal-proceedings-details': {
    next: '/criminal-conviction'
  },

  '/criminal-conviction': {
    next: '/responsible-for-security'
  },

  '/responsible-for-security': {
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
  baseUrl: '/controlled-drugs',
  params: '/:action?/:id?/:edit?',
  steps: steps
};
