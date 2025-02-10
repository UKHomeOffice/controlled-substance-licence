'use strict';

const { formatDate, translateOption } = require('../../../utils');

module.exports = {

  'about-the-applicants': {
    steps: [
      {
        step: '/licence-holder-details',
        field: 'licence-holder-details',
        parse: (list, req) => {
          const licenseHolderDetails = [
            req.sessionModel.get('company-name'),
            req.sessionModel.get('company-number').toUpperCase(),
            req.sessionModel.get('website-url'),
            req.sessionModel.get('telephone'),
            req.sessionModel.get('email')
          ];
          return licenseHolderDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/licence-holder-address',
        field: 'licence-holder-address',
        parse: (list, req) => {
          const licenceHolderAddress = [
            req.sessionModel.get('licence-holder-address-line-1'),
            req.sessionModel.get('licence-holder-address-line-2'),
            req.sessionModel.get('licence-holder-town-or-city'),
            req.sessionModel.get('licence-holder-postcode')
          ];
          return licenceHolderAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/premises-address',
        field: 'premises-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/premises-address')) {
            return null;
          }
          const premisesAddressDetails = [
            req.sessionModel.get('premises-address-line-1'),
            req.sessionModel.get('premises-address-line-2'),
            req.sessionModel.get('premises-town-or-city'),
            req.sessionModel.get('premises-postcode')
          ];
          return premisesAddressDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/reuse-premises-address',
        field: 'is-premises-address-same'
      },
      {
        step: '/premises-contact-details',
        field: 'premises-contact-details',
        parse: (list, req) => {
          const premisesContactDetails = [
            req.sessionModel.get('premises-telephone'),
            req.sessionModel.get('premises-email')
          ];
          return premisesContactDetails.join('\n');
        }
      },
      {
        step: '/how-funded',
        field: 'how-are-you-funded'
      },
      {
        step: '/person-in-charge',
        field: 'person-incharge-details',
        parse: (list, req) => {
          const personInchargeDetails = [
            req.sessionModel.get('person-in-charge-full-name'),
            req.sessionModel.get('person-in-charge-email-address')
          ];
          return personInchargeDetails.join('\n');
        }
      },
      {
        step: '/person-in-charge-dbs',
        field: 'person-in-charge-dbs-information',
        parse: (val, req) => {
          const personInChargeDbsInfo = [
            req.sessionModel.get('person-in-charge-dbs-fullname'),
            req.sessionModel.get('person-in-charge-dbs-reference'),
            formatDate(req.sessionModel.get('person-in-charge-dbs-date-of-issue'))
          ];
          return personInChargeDbsInfo.join('\n');
        }
      },
      {
        step: '/person-in-charge-dbs-updates',
        field: 'person-in-charge-dbs-subscription'
      },
      {
        step: '/member-of-professional-body',
        field: 'member-of-professional-body'
      },
      {
        step: '/professional-body-details',
        field: 'professional-body-details'
      },
      {
        step: '/legal-business-proceedings',
        field: 'legal-business-proceedings'
      },
      {
        step: '/legal-proceedings-details',
        field: 'legal-proceedings-details'
      },
      {
        step: '/criminal-conviction',
        field: 'has-anyone-received-criminal-conviction'
      },
      {
        step: '/responsible-for-security',
        field: 'responsible-for-security',
        parse: (val, req) => {
          const securityResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-security') === 'same-as-managing-director';

          if (!securityResponsibleIsSameAsMd) {
            return translateOption(req, 'responsible-for-security', 'no');
          }

          return translateOption(req, 'responsible-for-security', 'yes');
        }
      },
      {
        step: '/person-responsible-for-security',
        field: 'responsible-for-security-details',
        parse: (list, req) => {
          const securityResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-security') === 'same-as-managing-director';

          if (!securityResponsibleIsSameAsMd) {
            const responsibleForSecDetails = [
              req.sessionModel.get('person-responsible-for-security-full-name'),
              req.sessionModel.get('person-responsible-for-security-email-address')
            ];
            return responsibleForSecDetails.join('\n');
          }

          return null;
        }
      },
      {
        step: '/security-officer-dbs',
        field: 'person-responsible-for-security-dbs-information',
        parse: (val, req) => {
          const securityResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-security') === 'same-as-managing-director';

          if(!securityResponsibleIsSameAsMd) {
            const responsibleForSecDbsInfo = [
              req.sessionModel.get('person-responsible-for-security-dbs-fullname'),
              req.sessionModel.get('person-responsible-for-security-dbs-reference'),
              formatDate(req.sessionModel.get('person-responsible-for-security-dbs-date-of-issue'))
            ];
            return responsibleForSecDbsInfo.join('\n');
          }

          return null;
        }
      },
      {
        step: '/security-officer-dbs-updates',
        field: 'person-responsible-for-security-dbs-subscription',
        parse: (val, req) => {
          const securityResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-security') === 'same-as-managing-director';

          if (!securityResponsibleIsSameAsMd) {
            const fieldToTranslate = 'person-responsible-for-security-dbs-subscription';
            const valueToTranslate = req.sessionModel.get('person-responsible-for-security-dbs-subscription');
            return translateOption(req, fieldToTranslate, valueToTranslate);
          }

          return null;
        }
      },
      {
        step: '/employee-or-consultant',
        field: 'is-employee-or-consultant'
      },
      {
        step: '/witness-destruction-of-drugs',
        field: 'require-witness-destruction-of-drugs'
      },
      {
        step: '/schedule-1-activities',
        field: 'schedule-1-activities',
        parse: (list, req) => {
          if (list) {
            return Array.isArray(list) ? list.join('\n') : list;
          }
          return req.translate('pages.confirm.fields.schedule-1-activities.not-provided');
        }
      },
      {
        step: '/schedule-2-activities',
        field: 'schedule-2-activities',
        parse: (list, req) => {
          if (list) {
            return Array.isArray(list) ? list.join('\n') : list;
          }
          return req.translate('pages.confirm.fields.schedule-2-activities.not-provided');
        }
      },
      {
        step: '/schedule-3-activities',
        field: 'schedule-3-activities',
        parse: (list, req) => {
          if (list) {
            return Array.isArray(list) ? list.join('\n') : list;
          }
          return req.translate('pages.confirm.fields.schedule-3-activities.not-provided');
        }
      }
    ]
  }
};
