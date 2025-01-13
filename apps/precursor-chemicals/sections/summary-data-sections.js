'use strict';

const { formatDate } = require('../../../utils');

const getLabel = (req, field, value) => {
  return req.translate(`fields.${field}.options.${value}.label`);
};

const parseOperations = (req, opsField, standardOps, customOp) => {
  // A single checked box will be stored as a string not an array of length 1 so...
  if (typeof standardOps === 'string') {
    standardOps = Array.of(standardOps);
  }

  return standardOps.map(operation => {
    if (operation === 'other' && customOp) {
      return `${getLabel(req, opsField, operation)}: ${customOp}`;
    }
    return getLabel(req, opsField, operation);
  }).join('; ');
};

const chemicals = require('../data/chemicals.json');

const findChemical = (chemicals, valueToFind) => {
  return chemicals.find(chemical => chemical.value === valueToFind);
};

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
        step: '/responsible-officer-details',
        field: 'responsible-officer-details',
        parse: (val, req) => {
          const responsibleOfficerDetails = [
            req.sessionModel.get('responsible-officer-fullname'),
            req.sessionModel.get('responsible-officer-email')
          ];
          return responsibleOfficerDetails.join('\n');
        }
      },
      {
        step: '/responsible-officer-dbs-information',
        field: 'responsible-officer-dbs-information',
        parse: (val, req) => {
          const responsibleOfficerDBSInfo = [
            req.sessionModel.get('responsible-officer-dbs-application-fullname'),
            req.sessionModel.get('responsible-officer-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-officer-dbs-date-of-issue'))
          ];
          return responsibleOfficerDBSInfo.join('\n');
        }
      },
      {
        step: '/responsible-officer-dbs',
        field: 'responsible-officer-dbs-update-subscription'
      },
      {
        step: '/guarantor-details',
        field: 'guarantor-details',
        parse: (list, req) => {
          const guarantorDetails = [
            req.sessionModel.get('guarantor-full-name'),
            req.sessionModel.get('guarantor-email-address')
          ];
          return guarantorDetails.join('\n');
        }
      },
      {
        step: '/guarantor-dbs-information',
        field: 'guarantor-dbs-information',
        parse: (list, req) => {
          const guarantorDbsInformation = [
            req.sessionModel.get('guarantor-dbs-full-name'),
            req.sessionModel.get('guarantor-dbs-reference'),
            formatDate(req.sessionModel.get('guarantor-dbs-date-of-issue'))
          ];
          return guarantorDbsInformation.join('\n');
        }
      },
      {
        step: '/guarantor-dbs-updates',
        field: 'is-guarantor-subscribed'
      },
      {
        step: '/criminal-convictions',
        field: 'has-anyone-received-criminal-conviction'
      },
      {
        step: '/invoicing-address',
        field: 'invoicing-address-details',
        parse: (list, req) => {
          const invoicingAddress = [
            req.sessionModel.get('invoicing-address-line-1'),
            req.sessionModel.get('invoicing-address-line-2'),
            req.sessionModel.get('invoicing-town-or-city'),
            req.sessionModel.get('invoicing-postcode')
          ];
          return invoicingAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/invoicing-contact-details',
        field: 'invoicing-contact-details',
        parse: (list, req) => {
          const invoicingContactDetails = [
            req.sessionModel.get('invoicing-fullname'),
            req.sessionModel.get('invoicing-email'),
            req.sessionModel.get('invoicing-telephone'),
            req.sessionModel.get('invoicing-purchase-order-number')
          ];
          return invoicingContactDetails.filter(element => element).join('\n');
        }
      }
    ]
  },
  'about-the-licence': {
    steps: [
      {
        step: '/substances-in-licence',
        field: 'substances-in-licence',
        parse: (obj, req) => {
          if (!obj?.aggregatedValues) { return null; }
          const categories = obj.aggregatedValues.map(item => {
            const categoryField = item.fields.find(field => field.field === 'substance-category');
            return getLabel(req, categoryField.field, categoryField.value);
          }).sort();
          return categories.join('\n');
        }
      },
      {
        step: '/substances-in-licence',
        field: 'substances-in-licence',
        parse: (obj, req) => {
          if (!obj?.aggregatedValues) { return null; }
          return obj.aggregatedValues.map(item => {
            const substance = item.fields.find(field => field.field === 'which-chemical')?.value;
            const standardOps = item.fields.find(field => field.field === 'which-operation');
            const customOps = item.fields.find(field => field.field === 'what-operation')?.value;

            const parsedSubstance = findChemical(chemicals, substance)?.label ?? substance;
            const parsedOps = parseOperations(req, standardOps.field, standardOps.value, customOps);

            return `${parsedSubstance}\n\n${parsedOps}`;
          }).join('\n\n');
        }
      },
      {
        step: '/why-chemicals-needed',
        field: 'chemicals-used-for'
      }
    ]
  },
  evidence: {
    steps: [
      {
        step: '/upload-company-certificate',
        field: 'company-registration-certificate',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/upload-conduct-certificate',
        field: 'certificate-of-good-conduct',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      }
    ]
  },
  organisation: {
    steps: [
      {
        step: '/main-customers',
        field: 'main-customers'
      },
      {
        step: '/main-suppliers',
        field: 'main-suppliers'
      },
      {
        step: '/security-measures',
        field: 'security-measures',
        parse: value => {
          return Array.isArray(value) ? value.map(option => option).join('\n') : value;
        }
      },
      {
        step: '/how-secure-premises',
        field: 'how-secure-premises'
      },
      {
        step: '/storage-and-handling',
        field: 'storage-and-handling'
      },
      {
        step: '/chemical-stock-control',
        field: 'chemical-stock-control'
      },
      {
        step: '/legitimate-use',
        field: 'legitimate-use'
      },
      {
        step: '/operating-procedures-and-auditing',
        field: 'operating-procedures-and-auditing'
      }
    ]
  },

  'finalise-application': {
    steps: [
      {
        step: '/licence-email-address',
        field: 'licence-email'
      },
      {
        step: '/who-completing',
        field: 'who-is-completing-application-details',
        parse: (val, req) => {
          const whoIsCompletingApplicationDetails = [
            req.sessionModel.get('who-is-completing-application-full-name'),
            req.sessionModel.get('who-is-completing-application-telephone'),
            req.sessionModel.get('who-is-completing-application-email')
          ];
          return whoIsCompletingApplicationDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/discharging-licence-responsibilities',
        field: 'is-discharge-all-licence-responsibilities'
      },
      {
        step: '/discharging-licence-responsibilities',
        field: 'explain-not-discharge-responsibilities'
      },
      {
        step: '/extra-application-information',
        field: 'extra-information',
        parse: (list, req) => {
          return req.sessionModel.get('extra-information') ||
            'Not provided';
        }
      }
    ]
  }
};
