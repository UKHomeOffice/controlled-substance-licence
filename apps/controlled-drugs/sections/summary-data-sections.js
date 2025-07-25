'use strict';

const { formatDate, translateOption, findArrayItemByValue } = require('../../../utils');
const tradingReasons = require('../data/trading-reasons.json');

/**
 * Parses a list of 0 or more checkbox options from a 'checkbox-group' field.
 *
 * @param {array|string} list - The checked box option(s). This is string for one checked and array for more than one
 * @param {object} req - The request object
 * @returns {string} - A string of the list items separated by a newline or the value of journey.not-provided.
 */
const parseCheckboxes = (list, req) => {
  if (list) {
    return Array.isArray(list) ? list.join('\n') : list;
  }
  return req.translate('journey.not-provided');
};

module.exports = {
  'background-information': {
    steps: [
      {
        step: '/application-type',
        field: 'amend-application-details'
      },
      {
        step: '/licensee-type',
        field: 'licensee-type'
      },
      {
        step: '/company-number-changed',
        field: 'companies-house-number-change',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return value;
        }
      },
      {
        step: '/company-name-changed',
        field: 'companies-house-name-change',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return value;
        }
      },
      {
        step: '/company-registration-certificate-name-change',
        field: 'company-registration-certificate',
        dependsOn: 'companies-house-name-change',
        parse: (documents, req) => {
          if (req.sessionModel.get('licensee-type') !== 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        },
        file: true
      },
      {
        step: '/change-witness-only',
        field: 'change-authorised-witness',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/additional-schedules',
        field: 'requesting-additional-schedules',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/change-of-activity',
        field: 'change-of-activity',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/why-new-licence',
        field: 'why-requesting-new-licence',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site') {
            return value;
          }
          return null;
        }
      },
      {
        step: '/when-moving-site',
        field: 'date-moving-site',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site' &&
                value) {
            return formatDate(value);
          }
          return null;
        }
      },
      {
        step: '/contractual-agreement',
        field: 'site-part-of-contractual-agreement',
        parse: (value, req) => {
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site') {
            return value;
          }
          return null;
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
          if (req.sessionModel.get('licensee-type') === 'existing-licensee-applying-for-new-site' &&
              value) {
            return value;
          }
          return null;
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
            req.sessionModel.get('company-number')?.toUpperCase(),
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
          return premisesContactDetails.filter(element => element).join('\n');
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
          return personInchargeDetails.filter(element => element).join('\n');
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
          return personInChargeDbsInfo.filter(element => element).join('\n');
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
          if (!val) return null;
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
            return responsibleForSecDetails.filter(element => element).join('\n');
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
            return responsibleForSecDbsInfo.filter(element => element).join('\n');
          }

          return null;
        }
      },
      {
        step: '/security-officer-dbs-updates',
        field: 'person-responsible-for-security-dbs-subscription',
        parse: (val, req) => {
          if (!val) return null;
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
          if (!val) return null;
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
            return responsibleForCompRegDetails.filter(element => element).join('\n');
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
            return responsibleForCompRegDbsInfo.filter(element => element).join('\n');
          }

          return null;
        }
      },
      {
        step: '/regulatory-and-compliance-dbs-updates',
        field: 'responsible-for-compliance-regulatory-dbs-subscription',
        parse: (val, req) => {
          if (!val) return null;
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
          if (req.sessionModel.get('require-witness-destruction-of-drugs') === 'no' || !val) {
            return null;
          }
          const responsibleForWitnessDrugsIsSameAsMd =
          req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director';

          return translateOption(req, 'responsible-for-witnessing-the-destruction',
            responsibleForWitnessDrugsIsSameAsMd ? 'yes' : 'no');
        }
      },
      {
        step: '/person-to-witness',
        field: 'responsible-for-witnessing-details',
        parse: (list, req) => {
          if(req.sessionModel.get('require-witness-destruction-of-drugs') === 'no' ||
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director') {
            return null;
          }

          const responsibleForWitnessDrugsDetails = [
            req.sessionModel.get('responsible-for-witnessing-full-name'),
            req.sessionModel.get('responsible-for-witnessing-email-address')
          ];
          return responsibleForWitnessDrugsDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/witness-dbs',
        field: 'responsible-for-witnessing-dbs-information',
        parse: (val, req) => {
          if(req.sessionModel.get('require-witness-destruction-of-drugs') === 'no' ||
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director') {
            return null;
          }

          const responsibleForWitnessDrugsDbsInfo = [
            req.sessionModel.get('responsible-for-witnessing-dbs-fullname'),
            req.sessionModel.get('responsible-for-witnessing-dbs-reference'),
            formatDate(req.sessionModel.get('responsible-for-witnessing-dbs-date-of-issue'))
          ];
          return responsibleForWitnessDrugsDbsInfo.filter(element => element).join('\n');
        }
      },
      {
        step: '/witness-dbs-updates',
        field: 'responsible-for-witnessing-dbs-subscription',
        parse: (val, req) => {
          if (!val) return null;
          if(req.sessionModel.get('require-witness-destruction-of-drugs') === 'no' ||
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director') {
            return null;
          }
          const fieldToTranslate = 'responsible-for-witnessing-dbs-subscription';
          const valueToTranslate = req.sessionModel.get('responsible-for-witnessing-dbs-subscription');
          return translateOption(req, fieldToTranslate, valueToTranslate);
        }
      },
      {
        step: '/company-registration-certificate',
        field: 'company-registration-certificate',
        parse: (documents, req) => {
          if (req.sessionModel.get('require-witness-destruction-of-drugs') === 'no' ||
            req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'same-as-managing-director' ||
            req.sessionModel.get('licensee-type') === 'existing-licensee-renew-or-change-site') {
            return null;
          }
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        },
        file: true
      },
      {
        step: '/trading-reasons-summary',
        field: 'aggregated-trading-reasons',
        changeLink: 'trading-reasons-summary/edit',
        parse: (obj, req) => {
          if (!obj?.aggregatedValues) { return null; }

          const tradingReasonLabels = [];
          const customReasons = [];

          const tradingReasonsSummary = obj.aggregatedValues.map(item => {
            const reasonValue = item.fields.find(field => field.field === 'trading-reasons')?.value;
            const reasonLabel = findArrayItemByValue(tradingReasons, reasonValue)?.label ?? reasonValue;
            const customReason = item.fields.find(field => field.field === 'specify-trading-reasons')?.value;

            const label = customReason ? `${reasonLabel}: ${customReason}` : reasonLabel;
            tradingReasonLabels.push(label);

            if (customReason) {
              customReasons.push(customReason);
            }

            return label;
          });

          req.sessionModel.set('tradingReasons', tradingReasonLabels.join('\n'));
          if(customReasons.length) {
            req.sessionModel.set('tradingCustomReasons', customReasons.join('\n'));
          }

          return tradingReasonsSummary.join('\n');
        }
      },
      {
        step: '/why-you-need-licence',
        field: 'why-applying-licence'
      },
      {
        step: '/main-customer-details',
        field: 'main-customer-details'
      },
      {
        step: '/source-drugs',
        field: 'source-drugs-details'
      },
      {
        step: '/mhra-licences',
        field: 'has-any-licence-issued-by-mhra'
      },
      {
        step: '/mhra-licence-details',
        field: 'mhra-licence-details',
        parse: (val, req) => {
          if (!req.sessionModel.get('steps').includes('/mhra-licence-details')) {
            return null;
          }
          const mhraLicenceDetails = [
            req.sessionModel.get('mhra-licence-number'),
            req.sessionModel.get('mhra-licence-type'),
            formatDate(req.sessionModel.get('mhra-licence-date-of-issue'))
          ];
          return mhraLicenceDetails.filter(element => element).join('\n');
        }
      },
      {
        step: '/care-quality-commission-or-equivalent',
        field: 'is-business-registered-with-cqc'
      },
      {
        step: '/registration-details',
        field: 'registration-number'
      },
      {
        step: '/registration-details',
        field: 'date-of-registration',
        parse: value => value ? formatDate(value) : null
      },
      {
        step: '/regulatory-body-registration',
        field: 'regulatory-body-registration-details',
        parse: (value, req) => {
          if ( !req.sessionModel.get('steps').includes('/regulatory-body-registration')) {
            return null;
          }
          return value ? value : req.translate('journey.not-provided');
        }
      },
      {
        step: '/service-under-contract',
        field: 'service-under-contract'
      },
      {
        dependsOn: 'service-under-contract',
        step: '/service-details',
        field: 'service-details'
      },
      {
        dependsOn: 'service-under-contract',
        step: '/service-expiry-date',
        field: 'service-expiry-date',
        parse: value => value ? formatDate(value) : null
      },
      {
        step: '/status-of-site',
        field: 'status-of-site'
      },
      {
        step: '/site-owner-contact-details',
        field: 'site-owner-full-name'
      },
      {
        step: '/site-owner-contact-details',
        field: 'site-owner-email-address'
      },
      {
        step: '/site-owner-contact-details',
        field: 'site-owner-telephone'
      },
      {
        step: '/site-owner-contact-details',
        field: 'site-owner-address'
      },
      {
        step: '/schedule-1-activities',
        field: 'schedule-1-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-1-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/schedule-2-activities',
        field: 'schedule-2-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-2-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/schedule-3-activities',
        field: 'schedule-3-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-3-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/schedule-4-part-1-activities',
        field: 'schedule-4-part-1-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-4-part-1-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/schedule-4-part-2-activities',
        field: 'schedule-4-part-2-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-4-part-2-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/schedule-5-activities',
        field: 'schedule-5-activities',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/schedule-5-activities') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/upload-activity-template',
        field: 'user-activity-template',
        parse: documents => {
          return Array.isArray(documents) && documents.length > 0 ? documents.map(doc => doc.name).join('\n') : null;
        },
        file: true
      },
      {
        step: '/security-features',
        field: 'security-features',
        parse: (list, req) => {
          return req.sessionModel.get('steps').includes('/security-features') ?
            parseCheckboxes(list, req) : null;
        }
      },
      {
        step: '/separate-room',
        field: 'cd-kept-in-separate-room'
      },
      {
        step: '/safe-or-cabinet',
        field: 'cd-kept-in-safe-or-cabinet'
      },
      {
        step: '/prefabricated-strong-room',
        field: 'kept-in-prefabricated-room'
      },
      {
        step: '/specification-details',
        field: 'specification-details',
        parse: (val, req) => {
          if(req.sessionModel.get('cd-kept-in-safe-or-cabinet') === 'yes' ||
            req.sessionModel.get('kept-in-prefabricated-room') === 'yes') {
            return val;
          }
          return null;
        }
      },
      {
        step: '/drugs-kept-at-site',
        field: 'drugs-kept-at-site'
      },
      {
        step: '/storage-details',
        field: 'storage-details'
      },
      {
        step: '/electronic-alarm-system',
        field: 'have-electronic-alarm-system'
      },
      {
        step: '/alarm-system-details',
        field: 'installing-company-name',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/alarm-system-details',
        field: 'installing-company-address',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/alarm-system-details',
        field: 'installing-company-registered-with',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/separate-zone-for-storage',
        field: 'separate-zone',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/offsite-receiving-centre',
        field: 'alarm-system-monitored',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/redcare-or-dual-path',
        field: 'is-alarm-system-connected',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/annual-service',
        field: 'is-alarm-serviced-annually',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/alarm-reference-number',
        field: 'alarm-system-reference-number',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/alarm-system-police-response',
        field: 'alarm-system-police-response',
        dependsOn: 'have-electronic-alarm-system'
      },
      {
        step: '/standard-operating-procedures',
        field: 'standard-operating-procedures'
      },
      {
        step: '/record-keeping-system-procedures',
        field: 'record-keeping-system-procedures'
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
          if ( !req.sessionModel.get('steps').includes('/invoicing-contact-details')) {
            return null;
          }
          return value ? value : req.translate('journey.not-provided');
        }
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
        step: '/extra-information',
        field: 'extra-information',
        parse: (value, req) => {
          if ( !req.sessionModel.get('steps').includes('/extra-information')) {
            return null;
          }
          return value ? value : req.translate('journey.not-provided');
        }
      }
    ]
  }
};
