const hof = require('hof');
const Summary = hof.components.summary;
// Temporarily commented out until "The organisation and how it operates" section is active
// const customValidation = require('./behaviours/custom-validation');

const steps = {

  /** About the applicants
   *
   * The following steps are currently commented out:
   *
   * '/licence-holder-details': {
   *   behaviours: [customValidation],
   *   fields: [
   *     'company-name',
   *     'company-number',
   *     'telephone',
   *     'email',
   *     'website-url'
   *   ],
   *   next: '/licence-holder-address'
   * },
   *
   * '/licence-holder-address': {
   *   fields: [
   *     'licence-holder-address-line-1',
   *     'licence-holder-address-line-2',
   *     'licence-holder-town-or-city',
   *     'licence-holder-postcode'
   *   ],
   *   next: '/reuse-premises-address'
   * },
   *
   * '/reuse-premises-address': {
   *   fields: ['is-premises-address-same'],
   *   forks: [
   *     {
   *       target: '/premises-address',
   *       condition: {
   *         field: 'is-premises-address-same',
   *         value: 'no'
   *       }
   *     }
   *   ],
   *   next: '/premises-contact-details'
   * },
   *
   * '/premises-address': {
   *   fields: [
   *     'premises-address-line-1',
   *     'premises-address-line-2',
   *     'premises-town-or-city',
   *     'premises-postcode'
   *   ],
   *   next: '/premises-contact-details'
   * },
   *
   * '/premises-contact-details': {
   *   behaviours: [customValidation],
   *   fields: [
   *     'premises-telephone',
   *     'premises-email'
   *   ],
   *   next: '/responsible-officer-details'
   * },
   *
   * '/responsible-officer-details': {
   *   fields: [
   *     'responsible-officer-fullname',
   *     'responsible-officer-email',
   *     'responsible-officer-dbs-certificate'
   *   ],
   *   next: '/responsible-officer-dbs-information'
   * },
   *
   * '/responsible-officer-dbs-information': {
   *   fields: [
   *     'responsible-officer-dbs-application-fullname',
   *     'responsible-officer-dbs-reference',
   *     'responsible-officer-dbs-date-of-issue'
   *   ],
   *   next: '/responsible-officer-dbs'
   * },
   *
   * '/responsible-officer-dbs': {
   *   fields: [
   *     'responsible-officer-dbs-update-subscription'
   *   ],
   *   next: '/guarantor-details'
   * },
   *
   * '/guarantor-details': {
   *   next: '/guarantor-dbs-information'
   * },
   *
   * '/guarantor-dbs-information': {
   *   next: '/guarantor-dbs-updates'
   * },
   *
   * '/guarantor-dbs-updates': {
   *   next: '/criminal-convictions'
   * },
   *
   * '/criminal-convictions': {
   *   next: '/invoicing-address'
   * },
   *
   * '/invoicing-address': {
   *   next: '/invoicing-contact-details'
   * },
   *
   * '/invoicing-contact-details': {
   *   next: '/substance-category'
   * },
   *
   */

  /** About the licence
   *
   * The following steps are currently commented out:
   *
   * '/substance-category': {
   *   next: '/which-chemical'
   * },
   *
   * '/which-chemical': {
   *   next: '/which-operation'
   * },
   *
   * '/chemical-name': {
   *   next: '/which-operation'
   * },
   *
   * '/which-operation': {
   *   next: '/substances-in-licence'
   * },
   *
   * '/what-operation': {
   *   next: '/substances-in-licence'
   * },
   *
   * '/substances-in-licence': {
   *   next: '/why-chemicals-needed'
   * },
   *
   * '/why-chemicals-needed': {
   *   next: '/upload-company-certificate'
   * },
   *
   */

  /** Evidence
   *
   * The following steps are currently commented out:
   *
   * '/upload-company-certificate': {
   *   next: '/upload-conduct-certificate'
   * },
   *
   * '/upload-conduct-certificate': {
   *   next: '/main-customers'
   * },
   *
   */

  /** The organisation and how it operates */

  '/main-customers': {
    fields: [ 'main-customers' ],
    next: '/main-suppliers'
  },

  '/main-suppliers': {
    fields: [ 'main-suppliers' ],
    next: '/security-measures'
  },

  '/security-measures': {
    fields: [ 'security-measures' ],
    next: '/how-secure-premises'
  },

  '/how-secure-premises': {
    fields: [ 'how-secure-premises' ],
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
    // Temporarily changed to '/summary' for now,
    // will revert to 'licence-email-address' once "The organisation and how it operates" section is active
    next: '/summary'
    // next: '/licence-email-address'
  },

  /** Finalise application
   *
   * The following steps are currently commented out:
   *
   * '/licence-email-address': {
   *   next: '/who-completing'
   * },
   *
   * '/who-completing': {
   *   next: '/discharging-licence-responsibilities'
   * },
   *
   * '/discharging-licence-responsibilities': {
   *   next: '/extra-application-information'
   * },
   *
   * '/extra-application-information': {
   *   next: '/summary'
   * },
   *
   */

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
