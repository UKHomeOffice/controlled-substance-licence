const hof = require('hof');
const Summary = hof.components.summary;

const steps = {

  '/licence-holder-details': {
    next: '/licence-holder-address'
  },

  '/licence-holder-address': {
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
    fields: [
      'premises-telephone',
      'premises-email'
    ],
    next: '/responsible-officer-details'
  },

  '/responsible-officer-details': {
    next: '/responsible-officer-dbs-information'
  },

  '/responsible-officer-dbs-information': {
    next: '/responsible-officer-dbs'
  },

  '/responsible-officer-dbs': {
    next: '/guarantor-details'
  },

  '/guarantor-details': {
    next: '/guarantor-dbs-information'
  },

  '/guarantor-dbs-information': {
    next: '/guarantor-dbs-updates'
  },

  '/guarantor-dbs-updates': {
    next: '/criminal-convictions'
  },

  '/criminal-convictions': {
    next: '/invoicing-address'
  },

  '/invoicing-address': {
    next: '/invoicing-contact-details'
  },

  '/invoicing-contact-details': {
    next: '/substance-category'
  },

  '/substance-category': {
    next: '/which-chemical'
  },

  '/which-chemical': {
    next: '/which-operation'
  },

  '/chemical-name': {
    next: '/which-operation'
  },

  '/which-operation': {
    next: '/substances-in-licence'
  },

  '/what-operation': {
    next: '/substances-in-licence'
  },

  '/substances-in-licence': {
    next: '/why-chemicals-needed'
  },

  '/why-chemicals-needed': {
    next: '/upload-company-certificate'
  },

  '/upload-company-certificate': {
    next: '/upload-conduct-certificate'
  },

  '/upload-conduct-certificate': {
    next: '/main-customers'
  },

  '/main-customers': {
    next: '/main-suppliers'
  },

  '/main-suppliers': {
    next: '/security-measures'
  },

  '/security-measures': {
    next: '/how-secure-premises'
  },

  '/how-secure-premises': {
    next: '/storage-and-handling'
  },

  '/storage-and-handling': {
    next: '/chemical-stock-control'
  },

  '/chemical-stock-control': {
    next: '/legitimate-use'
  },

  '/legitimate-use': {
    next: '/operating-procedures-and-auditing'
  },

  '/operating-procedures-and-auditing': {
    next: '/licence-email-address'
  },

  '/licence-email-address': {
    next: '/who-completing'
  },

  '/who-completing': {
    next: '/discharging-licence-responsibilities'
  },

  '/discharging-licence-responsibilities': {
    next: '/extra-application-information'
  },

  '/extra-application-information': {
    next: '/summary'
  },

  '/summary': {
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
  name: 'precursor-chemicals',
  baseUrl: '/',
  params: '/:action?/:id?/:edit?',
  confirmStep: '/summary',
  steps: steps
};
