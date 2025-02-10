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
        step: '/compliance-and-regulatory',
        field: 'responsible-for-compliance-regulatory',
        parse: (val, req) => {
          const compRegResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-compliance-regulatory') === 'same-as-managing-director';

          if (!compRegResponsibleIsSameAsMd) {
            return translateOption(req, 'responsible-for-compliance-regulatory', 'no');
          }

          return translateOption(req, 'responsible-for-compliance-regulatory', 'yes');
        }
      },
      {
        step: '/person-responsible-for-compliance-and-regulatory',
        field: 'responsible-for-compliance-regulatory-details',
        parse: (list, req) => {
          const compRegResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-compliance-regulatory') === 'same-as-managing-director';

          if (!compRegResponsibleIsSameAsMd) {
            const responsibleForCompRegDetails = [
              req.sessionModel.get('responsible-for-compliance-regulatory-full-name'),
              req.sessionModel.get('responsible-for-compliance-regulatory-email-address')
            ];
            return responsibleForCompRegDetails.join('\n');
          }

          return null;
        }
      },
      {
        step: '/regulatory-and-compliance-dbs',
        field: 'responsible-for-compliance-regulatory-dbs-information',
        parse: (val, req) => {
          const compRegResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-compliance-regulatory') === 'same-as-managing-director';

          if(!compRegResponsibleIsSameAsMd) {
            const responsibleForCompRegDbsInfo = [
              req.sessionModel.get('responsible-for-compliance-regulatory-dbs-fullname'),
              req.sessionModel.get('responsible-for-compliance-regulatory-dbs-reference'),
              formatDate(req.sessionModel.get('responsible-for-compliance-regulatory-dbs-date-of-issue'))
            ];
            return responsibleForCompRegDbsInfo.join('\n');
          }

          return null;
        }
      },
      {
        step: '/regulatory-and-compliance-dbs-updates',
        field: 'responsible-for-compliance-regulatory-dbs-subscription',
        parse: (val, req) => {
          const compRegResponsibleIsSameAsMd =
            req.sessionModel.get('responsible-for-compliance-regulatory') === 'same-as-managing-director';

          if (!compRegResponsibleIsSameAsMd) {
            const fieldToTranslate = 'responsible-for-compliance-regulatory-dbs-subscription';
            const valueToTranslate = req.sessionModel.get('responsible-for-compliance-regulatory-dbs-subscription');
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
        step: '/who-witnesses-destruction-of-drugs',
        field: 'responsible-for-witnessing-the-destruction',
        parse: (val, req) => {
          const responsibleForWitnessDrugsIsSameAsMd =
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director';

          if (!responsibleForWitnessDrugsIsSameAsMd) {
            return translateOption(req, 'responsible-for-witnessing-the-destruction', 'no');
          }

          return translateOption(req, 'responsible-for-witnessing-the-destruction', 'yes');
        }
      },
      {
        step: '/person-to-witness',
        field: 'responsible-for-witnessing-details',
        parse: (list, req) => {
          const responsibleForWitnessDrugsIsSameAsMd =
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director';

          if (!responsibleForWitnessDrugsIsSameAsMd) {
            const responsibleForWitnessDrugsDetails = [
              req.sessionModel.get('responsible-for-witnessing-full-name'),
              req.sessionModel.get('responsible-for-witnessing-email-address')
            ];
            return responsibleForWitnessDrugsDetails.join('\n');
          }

          return null;
        }
      },
      {
        step: '/witness-dbs',
        field: 'responsible-for-witnessing-dbs-information',
        parse: (val, req) => {
          const responsibleForWitnessDrugsIsSameAsMd =
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director';

          if(!responsibleForWitnessDrugsIsSameAsMd) {
            const responsibleForWitnessDrugsDbsInfo = [
              req.sessionModel.get('responsible-for-witnessing-dbs-fullname'),
              req.sessionModel.get('responsible-for-witnessing-dbs-reference'),
              formatDate(req.sessionModel.get('responsible-for-witnessing-dbs-date-of-issue'))
            ];
            return responsibleForWitnessDrugsDbsInfo.join('\n');
          }

          return null;
        }
      },
      {
        step: '/witness-dbs-updates',
        field: 'responsible-for-witnessing-dbs-subscription',
        parse: (val, req) => {
          const responsibleForWitnessDrugsIsSameAsMd =
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director';

          if (!responsibleForWitnessDrugsIsSameAsMd) {
            const fieldToTranslate = 'responsible-for-witnessing-dbs-subscription';
            const valueToTranslate = req.sessionModel.get('responsible-for-witnessing-dbs-subscription');
            return translateOption(req, fieldToTranslate, valueToTranslate);
          }

          return null;
        }
      },
      {
        step: '/company-registration-certificate',
        field: 'company-registration-certificate',
        parse: (documents, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      }
    ]
  }
};
