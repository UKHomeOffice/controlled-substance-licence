'use strict';
const { formatDate } = require('../../../utils');

module.exports = {
  'background-information': {
    steps: [
      {
        step: '/application-type',
        field: 'amend-application-details'
      },
      {
        step: '/change-witness-only',
        field: 'is-change-witness-only',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/additional-schedules',
        field: 'is-additional-schedules',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/change-of-activity',
        field: 'is-change-of-activity',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/company-registration-certificate',
        field: 'company-registration-certificate',
        dependsOn: 'is-company-name-changed',
        parse: (documents, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/when-moving-site',
        field: 'moving-site-date',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site' &&
            value) {
            return formatDate(value);
          }
          return null;
        }
      },
      {
        step: '/company-number-changed',
        field: 'is-company-ref-changed'
      },
      {
        step: '/company-name-changed',
        field: 'is-company-name-changed',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return value;
        }
      },
      {
        step: '/when-contract-start',
        field: 'contract-start-date',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site' &&
            value) {
            return formatDate(value);
          }
          return null;
        }
      },
      {
        step: '/contract-details',
        field: 'contract-details',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-applying-for-new-site') {
            return null;
          }
          return value;
        }
      }
    ]
  },
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
        step: '/growing-location-address',
        field: 'growing-location-address',
        parse: (list, req) => {
          const growingLocationAddress = [
            req.sessionModel.get('growing-location-address-line-1'),
            req.sessionModel.get('growing-location-address-line-2'),
            req.sessionModel.get('growing-location-town-or-city'),
            req.sessionModel.get('growing-location-postcode')
          ];
          return growingLocationAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/growing-location-contact',
        field: 'growing-location-contact',
        parse: (list, req) => {
          const growingLocationContact = [
            req.sessionModel.get('growing-location-email'),
            req.sessionModel.get('growing-location-uk-telephone')
          ];
          return growingLocationContact.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer',
        field: 'site-responsible-officer',
        parse: (list, req) => {
          const siteResponsibleOfficerDetails = [
            req.sessionModel.get('site-responsible-person-full-name'),
            req.sessionModel.get('site-responsible-person-uk-telephone'),
            req.sessionModel.get('site-responsible-person-email')
          ];
          return siteResponsibleOfficerDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer-dbs',
        field: 'site-responsible-officer-dbs-information',
        parse: (list, req) => {
          const responsiblePersonDbsInfo = [
            req.sessionModel.get('responsible-person-dbs-fullname'),
            req.sessionModel.get('responsible-person-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-person-dbs-date-of-issue'))
          ];
          return responsiblePersonDbsInfo.filter(element => element).join('\n');
        }
      },
      {
        step: '/site-responsible-officer-dbs-updates',
        field: 'responsible-officer-dbs-subscription'
      },
      {
        step: '/witness-destruction-plant',
        field: 'witness-destruction-plant'
      },
      {
        step: '/how-leaves-flowers-destroyed',
        field: 'how-leaves-flowers-destroyed'
      },
      {
        step: '/authorised-witness-details',
        field: 'authorised-witness-details',
        parse: (list, req) => {
          const authorisedWitnessDetails = [
            req.sessionModel.get('authorised-witness-full-name'),
            req.sessionModel.get('authorised-witness-uk-telephone'),
            req.sessionModel.get('authorised-witness-email')
          ];
          return authorisedWitnessDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/authorised-witness-dbs',
        field: 'authorised-witness-dbs-information',
        parse: (list, req) => {
          if (req.sessionModel.get('witness-destruction-plant') === 'no') return null;
          const authorisedWitnessDbsInfo = [
            req.sessionModel.get('authorised-witness-dbs-full-name'),
            req.sessionModel.get('authorised-witness-dbs-reference'),
            formatDate(req.sessionModel.get('authorised-witness-dbs-date-of-issue'))
          ];
          return authorisedWitnessDbsInfo.filter(element => element).join('\n');
        }
      },
      {
        step: '/authorised-witness-dbs-updates',
        field: 'authorised-witness-dbs-subscription'
      },
      {
        step: '/why-new-licence',
        field: 'why-new-licence',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/contractual-agreement',
        field: 'is-contractual-agreement',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/legal-business-proceedings',
        field: 'legal-business-proceedings'
      },
      {
        step: '/legal-business-proceedings-details',
        field: 'legal-business-proceedings-details'
      },
      {
        step: '/criminal-conviction',
        field: 'has-anyone-received-criminal-conviction'
      },
      {
        step: '/other-regulatory-licences',
        field: 'hold-other-regulatory-licences'
      },
      {
        step: '/other-licence-details',
        field: 'other-licence-details',
        parse: (list, req) => {
          if (req.sessionModel.get('hold-other-regulatory-licences') === 'no') {
            return null;
          }
          const otherLicenceDetails = [
            req.sessionModel.get('other-licence-type'),
            req.sessionModel.get('other-licence-number'),
            formatDate(req.sessionModel.get('other-licence-date-of-issue'))
          ];
          return otherLicenceDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/licence-refused',
        field: 'is-licence-refused'
      },
      {
        step: '/refusal-reason',
        field: 'refusal-reason'
      },
      {
        step: '/company-type',
        field: 'company-type'
      },
      {
        step: '/business-model',
        field: 'describe-business-model'
      },
      {
        step: '/company-certificate',
        field: 'company-registration-certificate',
        parse: (documents, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/cultivate-industrial-hemp',
        field: 'cultivate-industrial-hemp'
      },
      {
        step: '/where-cultivating-cannabis',
        field: 'where-cultivating-cannabis'
      },
      {
        step: '/field-acreage',
        field: 'field-acreage'
      },
      {
        step: '/how-many-fields',
        field: 'how-many-fields'
      },
      {
        step: '/cultivation-field-details',
        field: 'cultivation-field-details'
      },
      {
        step: '/aerial-photos-and-maps',
        field: 'aerial-photos-upload',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/company-own-fields',
        field: 'is-company-own-fields'
      },
      {
        step: '/who-owns-fields',
        field: 'who-own-fields'
      },
      {
        step: '/permission-for-intended-activities',
        field: 'is-permission-for-activities'
      },
      {
        step: '/other-operating-businesses',
        field: 'other-operating-businesses'
      },
      {
        step: '/adjacent-businesses',
        field: 'adjacent-businesses'
      },
      {
        step: '/own-other-operating-businesses',
        field: 'own-operating-businesses'
      },
      {
        step: '/other-businesses-summary',
        field: 'other-business-aggregate',
        changeLink: 'other-businesses-summary/edit',
        parse: obj => {
          if (!obj?.aggregatedValues) { return null; }
          return obj.aggregatedValues.map(item => {
            const businessName = item.fields.find(field => field.field === 'business-name')?.value;
            const businessType = item.fields.find(field => field.field === 'business-type')?.value;
            const businessOwner = item.fields.find(field => field.field === 'business-owner')?.value;
            const businessInvolve = item.fields.find(field => field.field === 'business-involvement')?.value;
            const surveyRef = item.fields.find(field => field.field === 'ordnance-survey-reference')?.value;

            return `${businessName}\n` +
                   `${businessType}\n` +
                   `${businessOwner}\n` +
                   `${businessInvolve}\n` +
                   `${surveyRef}\n`;
          }).join('\n');
        }

      },
      {
        step: '/different-postcodes',
        field: 'is-different-postcodes'
      },
      {
        step: '/different-postcode-addresses',
        field: 'different-postcode-details'
      },
      {
        step: '/adjacent-to-fields',
        field: 'adjacent-field-details'
      },
      {
        step: '/perimeter-details',
        field: 'perimeter-details'
      },
      {
        step: '/perimeter-images',
        field: 'perimeter-upload',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/record-keeping-details',
        field: 'record-keeping-details'
      },
      {
        step: '/record-keeping-document-images',
        field: 'record-keeping-document',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        }
      },
      {
        step: '/seed-supplier-details',
        field: 'seed-supplier-details'
      },
      {
        step: '/customer-base-details',
        field: 'customer-base-details'
      },
      {
        step: '/end-product-details',
        field: 'end-product-details'
      },
      {
        step: '/end-product-production',
        field: 'end-product-production-details'
      },
      {
        step: '/seed-type-details',
        field: 'seed-type-details'
      },
      {
        step: '/thc-content-level',
        field: 'thc-content-level'
      },
      {
        step: '/invoicing-address',
        field: 'invoicing-address',
        parse: (list, req) => {
          const invoicingAddress = [
            req.sessionModel.get('invoicing-address-line-1'),
            req.sessionModel.get('invoicing-address-line-2'),
            req.sessionModel.get('invoicing-address-town-or-city'),
            req.sessionModel.get('invoicing-address-postcode')
          ];
          return invoicingAddress.filter(element => element).join('\n');
        }
      },
      {
        step: '/invoicing-contact-details',
        field: 'invoicing-contact-name'
      },
      {
        step: '/invoicing-contact-details',
        field: 'invoicing-contact-email'
      },
      {
        step: '/invoicing-contact-details',
        field: 'invoicing-contact-telephone'
      },
      {
        step: '/invoicing-contact-details',
        field: 'invoicing-purchase-order-number',
        parse: (value, req) => {
          if (!req.sessionModel.get('steps').includes('/invoicing-contact-details')) {
            return null;
          }
          return value ? value : req.translate('journey.not-provided');
        }
      },
      {
        step: '/invoicing-contact-details',
        field: 'refund-accound-details'
      },
      {
        step: '/licence-email-address',
        field: 'licence-email-address'
      },
      {
        step: '/who-completing-application',
        field: 'who-is-completing-application-full-name'
      },
      {
        step: '/who-completing-application',
        field: 'who-is-completing-application-email'
      },
      {
        step: '/who-completing-application',
        field: 'who-is-completing-application-telephone'
      },
      {
        step: '/regulatory-affairs-officer',
        field: 'regulatory-affairs-officer'
      },
      {
        step: '/regulatory-affairs-officer',
        field: 'officer-non-compliance-reason'
      },
      {
        step: '/extra-information',
        field: 'extra-information',
        parse: (value, req) => {
          if (!req.sessionModel.get('steps').includes('/extra-information')) {
            return null;
          }
          return value ? value : req.translate('journey.not-provided');
        }
      }
    ]
  }
};
