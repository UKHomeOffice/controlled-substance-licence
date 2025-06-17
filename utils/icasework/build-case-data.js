const { getLabel, joinNonEmptyLines, formatDate, findArrayItemByValue } = require('../../utils');
const businessTypeOptions = require('../../apps/registration/data/business-type.json');

/**
 * Builds the case data object for iCasework based on application type.
 *
 * @param {object} req - Express request object.
 * @param {object|null} applicationForm - The main application form file object (optional).
 * @param {Array} applicationFiles - Array of category objects, each with a label and an array of file objects.
 * @param {string} authToken - The authentication token to append to document URLs.
 * @returns {object} The case data object ready for iCasework API submission.
 */
function buildCaseData(req, applicationForm = null, applicationFiles = [], authToken) {
  if (!authToken) {
    throw new Error('authToken is required to build case data for iCasework with downloadable documents');
  }

  const type = req.sessionModel.get('licence-type');

  const parseAggregatedBusinessTypes = obj => {
    if (!obj?.aggregatedValues) { return null; }
    return obj.aggregatedValues.map(item => {
      const businessTypeValue = item.fields.find(field => field.field === 'business-type')?.value;
      const businessTypeLabel = findArrayItemByValue(businessTypeOptions, businessTypeValue)?.label
        ?? businessTypeValue;
      const otherBusinessType = item.fields.find(field => field.field === 'other-business-type')?.value;

      return otherBusinessType ? `${businessTypeLabel}: ${otherBusinessType}` : businessTypeLabel;
    }).join('\n');
  };

  /**
   * Returns a document URL with /file/ replaced by /vault/ and appends the token as a query parameter.
   *
   * @param {string} url - The original file URL.
   * @param {string} token - The authentication token to append.
   * @returns {string} - The updated URL for iCasework.
   */
  function buildVaultUrl(url, token) {
    if (!url || !token) {
      throw new Error('Both url and token are required to build a vault URL');
    }
    const vaultUrl = url.replace('/file/', '/vault/');
    return `${vaultUrl}?token=${token}`;
  }

  // Common fields
  const baseData = {
    Format: 'json',
    RequestDate: new Date().toISOString(), // Submission date
    RequestMethod: 'HOF'
  };

  // Prepare the documents to attach to the case
  const documents = {};
  let docNum = 1;

  // Add applicationForm as Document1 if present
  if (applicationForm) {
    documents[`Document${docNum}.URL`] = buildVaultUrl(applicationForm.url, authToken);
    documents[`Document${docNum}.Name`] = req.translate('journey.formName');
    documents[`Document${docNum}.MimeType`] = applicationForm.mimetype;
    documents[`Document${docNum}.URLLoadContent`] = true;
    documents[`Document${docNum}.InSummary`] = true;
    docNum++;
  }

  // Add applicationFiles as additional documents if present
  applicationFiles.forEach( category => {
    const categoryLabel = category.label;
    (category.urls || []).forEach(file => {
      documents[`Document${docNum}.URL`] = buildVaultUrl(file.url, authToken);
      documents[`Document${docNum}.Name`] = file.name;
      documents[`Document${docNum}.MimeType`] = file.mimetype;
      documents[`Document${docNum}.Category`] = categoryLabel;
      documents[`Document${docNum}.URLLoadContent`] = true;
      documents[`Document${docNum}.InSummary`] = true;
    });
    docNum++;
  });

  switch (type) {
    case 'industrial-hemp':
      return {
        ...baseData,
        ...documents,
        Type: 'Hemp', // Identifier code on iCasework system - 48705
        // @todo: add fields specific to THC...
      };
    case 'controlled-drugs':
      return {
        ...baseData,
        ...documents,
        Type: 'ControlledDrugs', // Identifier code on iCasework system - 48272
        // @todo: add fields specific to CD...
      };
    case 'precursor-chemicals':
      return {
        ...baseData,
        ...documents,
        Type: 'PrecursorChemicals', // Identifier code on iCasework system - 10000
        'Applicant.Id': req.sessionModel.get('applicant-id'),
        Renewal: getLabel(
          'licensee-type',
          req.sessionModel.get('licensee-type')),
        LegalIdentity: '',
        PreviousLicence: '',
        TimeRenewal: '',
        ChangePersonel: '',
        AdditionalSchedules: '',
        ChangeActivity: '',
        'Applicant.OrganisationName': req.sessionModel.get('company-name'),
        'Applicant.OrganisationRef': req.sessionModel.get('applicant-id'),
        'Applicant.OrganisationAddress': joinNonEmptyLines([
          req.sessionModel.get('licence-holder-address-line-1'),
          req.sessionModel.get('licence-holder-address-line-2'),
          req.sessionModel.get('licence-holder-town-or-city')]),
        'Applicant.OrganisationRegion': req.sessionModel.get('licence-holder-town-or-city'),
        'Applicant.OrganisationPostcode': req.sessionModel.get('licence-holder-postcode'),
        'Applicant.OrganisationEmail': req.sessionModel.get('email'),
        SiteAddress: joinNonEmptyLines([
          req.sessionModel.get('premises-address-line-1'),
          req.sessionModel.get('premises-address-line-2'),
          req.sessionModel.get('premises-town-or-city')]),
        SiteAddressRegion: '',
        SiteAddressPostcode: req.sessionModel.get('premises-postcode'),
        SitePhone: req.sessionModel.get('premises-telephone'),
        SiteEmailContactAddress: req.sessionModel.get('premises-email'),
        RespName: req.sessionModel.get('responsible-officer-fullname'),
        RespAddress: '',
        AddressPostcodeRp: '',
        EmailAddressRp: req.sessionModel.get('responsible-officer-email'),
        DbsCheck: 'Yes',
        DbsDisclosure: formatDate(req.sessionModel.get('responsible-officer-dbs-date-of-issue')),
        GuarName: req.sessionModel.get('guarantor-full-name'),
        GuarAddress: '',
        GuarAddressPostcode: req.sessionModel.get('email'),
        GuarEmailAddress: req.sessionModel.get('guarantor-email-address'),
        GuarDbsCheck: 'Yes',
        GuarDbsDisclosure: formatDate(req.sessionModel.get('guarantor-dbs-date-of-issue')),
        CriminalConvictions: getLabel(
          'has-anyone-received-criminal-conviction',
          req.sessionModel.get('has-anyone-received-criminal-conviction')),
        InvoicingPoNum: req.sessionModel.get('invoicing-purchase-order-number')
      };
    default:
      return {
        ...baseData,
        ...documents,
        Type: '47400', // Case type for Registration
        OrganisationUserId: req.sessionModel.get('applicant-id'),
        OrganisationRef: req.sessionModel.get('applicant-id'),
        OrganisationUserName: req.sessionModel.get('applicant-username'),
        ExternalId: req.sessionModel.get('applicant-username'),
        OrganisationName: req.sessionModel.get('company-name'),
        OrganisationAddress: joinNonEmptyLines([
          req.sessionModel.get('licence-holder-address-line-1'),
          req.sessionModel.get('licence-holder-address-line-2'),
          req.sessionModel.get('licence-holder-town-or-city')]),
        OrganisationRegion: req.sessionModel.get('licence-holder-town-or-city'),
        OrganisationPostcode: req.sessionModel.get('licence-holder-postcode'),
        OrganisationBusinessNumber: req.sessionModel.get('company-number'),
        OrganisationPhone: req.sessionModel.get('telephone'),
        OrganisationEmail: req.sessionModel.get('email'),
        OrganisationRegisteredCharity: getLabel(
          'registered-charity',
          req.sessionModel.get('registered-charity')),
        OrganisationBusinessType: parseAggregatedBusinessTypes(
          req.sessionModel.get('aggregated-business-type'))
      };
  }
}

module.exports = buildCaseData;
