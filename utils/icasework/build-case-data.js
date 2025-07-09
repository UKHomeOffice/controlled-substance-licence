const { joinNonEmptyLines, formatDate, findArrayItemByValue, translateOption } = require('../../utils');
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
  const amendment = req.sessionModel.get('application-form-type') === 'amend-application';
  const type = amendment ? 'amendment' : req.sessionModel.get('licence-type');

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
    case 'amendment':
      return {
        ...baseData,
        ...documents,
        Type: '47980', // Case type for Amendment for any Licence
        CaseId: req.sessionModel.get('amend-application-details')
      };
    case 'industrial-hemp':
      return {
        ...baseData,
        ...documents,
        Type: 'Hemp', // Identifier code on iCasework system - 48705
        'Applicant.Id': req.sessionModel.get('applicant-id'),
        Renewal: translateOption(
          req,
          'licensee-type',
          req.sessionModel.get('licensee-type')
        ),
        LegalIdentity: '',
        PreviousLicence: '',
        PreviousName: '',
        ChangePersonel: '',
        AdditionalSchedules: '',
        ChangeActivity: '',
        'Applicant.OrganisationName': req.sessionModel.get('company-name'),
        'Applicant.OrganisationAlternativeId1': req.sessionModel.get('applicant-id'), // Match the text
        'Applicant.OrganisationAddress': joinNonEmptyLines([
          req.sessionModel.get('licence-holder-address-line-1'),
          req.sessionModel.get('licence-holder-address-line-2'),
          req.sessionModel.get('licence-holder-town-or-city')]),
        'Applicant.OrganisationRegion': req.sessionModel.get('licence-holder-town-or-city'),
        'Applicant.OrganisationPostcode': req.sessionModel.get('licence-holder-postcode'),
        'Applicant.OrganisationEmail': req.sessionModel.get('email'),
        SiteAddress: joinNonEmptyLines([
          req.sessionModel.get('growing-location-address-line-1'),
          req.sessionModel.get('growing-location-address-line-2'),
          req.sessionModel.get('growing-location-town-or-city')]),
        SiteAddressRegion: '',
        SiteAddressPostcode: req.sessionModel.get('growing-location-postcode'),
        SitePhone: req.sessionModel.get('growing-location-uk-telephone'),
        SiteEmailContactAddress: req.sessionModel.get('growing-location-email'),
        RespName: req.sessionModel.get('site-responsible-person-full-name'),
        RespAddress: '',
        AddressPostcodeRp: '',
        EmailAddressRp: req.sessionModel.get('site-responsible-person-email'),
        DbsCheck: 'Yes',
        DbsDisclosure: formatDate(req.sessionModel.get('responsible-person-dbs-date-of-issue')),
        WitnessName: req.sessionModel.get('authorised-witness-full-name'),
        WitnessAddress: '',
        WitnessAddressPostcode: '',
        WitnessEmail: req.sessionModel.get('authorised-witness-email'),
        WitnessDbsCheck: 'Yes',
        WitnessDisclosure: formatDate(req.sessionModel.get('authorised-witness-dbs-date-of-issue')),
        HoLicencesAlreadyHeld: translateOption(
          req,
          'hold-other-regulatory-licences',
          req.sessionModel.get('hold-other-regulatory-licences')
        ),
        NumberHempFields: req.sessionModel.get('how-many-fields'),
        HempFieldsDetails: req.sessionModel.get('cultivation-field-details'),
        OwnFields: req.sessionModel.get('who-own-fields'),
        FieldsDifferentPostcode: req.sessionModel.get('different-postcode-details'),
        RecordsSeedSuppliers: req.sessionModel.get('seed-supplier-details'),
        RecordsCustomerBaseProduct: req.sessionModel.get('customer-base-details'),
        RecordsEndProduct: req.sessionModel.get('end-product-details'),
        InvoicingPoNum: req.sessionModel.get('invoicing-purchase-order-number')
      };
    case 'controlled-drugs':
      return {
        ...baseData,
        ...documents,
        Type: 'ControlledDrugs', // Identifier code on iCasework system - 48272
        'Applicant.Id': req.sessionModel.get('applicant-id'),
        Renewal: translateOption(
          req,
          'licensee-type',
          req.sessionModel.get('licensee-type')
        ),
        LegalIdentity: '',
        PreviousLicence: '',
        PreviousName: '',
        TimeRenewal: '',
        ChangePersonel: '', // Match the text
        AdditionalSchedules: '', // Match the text
        ChangeActivity: '', // Match the text
        'Applicant.OrganisationName': req.sessionModel.get('company-name'),
        'Applicant.OrganisationAlternativeId1': req.sessionModel.get('applicant-id'), // Match the text
        'Applicant.OrganisationAddress': joinNonEmptyLines([
          req.sessionModel.get('licence-holder-address-line-1'),
          req.sessionModel.get('licence-holder-address-line-2'),
          req.sessionModel.get('licence-holder-town-or-city')]),
        'Applicant.OrganisationRegion': req.sessionModel.get('licence-holder-town-or-city'),
        'Applicant.OrganisationPostcode': req.sessionModel.get('licence-holder-postcode'),
        'Applicant.OrganisationEmail': req.sessionModel.get('email'),
        SiteAddress: req.sessionModel.get('is-premises-address-same') === 'no' ?
          joinNonEmptyLines([
            req.sessionModel.get('premises-address-line-1'),
            req.sessionModel.get('premises-address-line-2'),
            req.sessionModel.get('premises-town-or-city')]) :
          joinNonEmptyLines([
            req.sessionModel.get('licence-holder-address-line-1'),
            req.sessionModel.get('licence-holder-address-line-2'),
            req.sessionModel.get('licence-holder-town-or-city')]),
        SiteAddressRegion: '',
        SiteAddressPostcode: req.sessionModel.get('is-premises-address-same') === 'no' ?
          req.sessionModel.get('premises-postcode') :
          req.sessionModel.get('licence-holder-postcode'),
        SitePhone: req.sessionModel.get('premises-telephone'),
        SiteEmailContactAddress: req.sessionModel.get('premises-email'),
        ManagingDirectorName: req.sessionModel.get('person-in-charge-full-name'), // Required
        ManagingDirectorAddress: '',
        AddressPostcodeMd: '',
        EmailMd: req.sessionModel.get('person-in-charge-email-address'),
        MdDbsCheck: 'Yes',
        MdDbsDisclosure: formatDate(req.sessionModel.get('person-in-charge-dbs-date-of-issue')),
        CriminalConvictions: req.sessionModel.get('has-anyone-received-criminal-conviction'),
        SecurityName: req.sessionModel.get('responsible-for-security') === 'someone-else' ?
          req.sessionModel.get('person-responsible-for-security-full-name') :
          req.sessionModel.get('person-in-charge-full-name'),
        SecurityAddress: '',
        SecurityAddressPostcode: '',
        SecDbsCheck: 'Yes',
        SecurityEmailAddress: req.sessionModel.get('responsible-for-security') === 'someone-else' ?
          req.sessionModel.get('person-responsible-for-security-email-address') :
          req.sessionModel.get('person-in-charge-email-address'),
        SecDbsDisclosure: req.sessionModel.get('responsible-for-security') === 'someone-else' ?
          formatDate(req.sessionModel.get('person-responsible-for-security-dbs-date-of-issue')) :
          formatDate(req.sessionModel.get('person-in-charge-dbs-date-of-issue')),
        RespName: req.sessionModel.get('responsible-for-compliance-regulatory') === 'someone-else' ?
          req.sessionModel.get('responsible-for-compliance-regulatory-full-name') :
          req.sessionModel.get('person-in-charge-full-name'),
        RespAddress: '',
        AddressPostcodeRp: '',
        EmailAddressRp: req.sessionModel.get('responsible-for-compliance-regulatory') === 'someone-else' ?
          req.sessionModel.get('responsible-for-compliance-regulatory-email-address') :
          req.sessionModel.get('person-in-charge-email-address'),
        DbsCheck: 'Yes',
        DbsDisclosure: req.sessionModel.get('responsible-for-compliance-regulatory') === 'someone-else' ?
          formatDate(req.sessionModel.get('responsible-for-compliance-regulatory-dbs-date-of-issue')) :
          formatDate(req.sessionModel.get('person-in-charge-dbs-date-of-issue')),
        WitnessName: req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'someone-else' ?
          req.sessionModel.get('responsible-for-witnessing-full-name') :
          req.sessionModel.get('person-in-charge-full-name'),
        WitnessAddress: '',
        WitnessEmailAddress: req.sessionModel.get('responsible-for-witnessing-the-destruction') === 'someone-else' ?
          req.sessionModel.get('responsible-for-witnessing-email-address') :
          req.sessionModel.get('person-in-charge-email-address'),
        WitnessAddressPostcode: '',
        WitnessDbsCheck: 'Yes',
        SiteBusinessType: req.sessionModel.get('tradingReasons'),
        OtherBusinessType: req.sessionModel.get('tradingCustomReasons') ?? '',
        InvoicingPoNum: req.sessionModel.get('invoicing-purchase-order-number')
      };
    case 'precursor-chemicals':
      return {
        ...baseData,
        ...documents,
        Type: 'PrecursorChemicals', // Identifier code on iCasework system - 10000
        'Applicant.Id': req.sessionModel.get('applicant-id'),
        Renewal: translateOption(
          req,
          'licensee-type',
          req.sessionModel.get('licensee-type')
        ),
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
        SiteAddress: req.sessionModel.get('is-premises-address-same') === 'no' ?
          joinNonEmptyLines([
            req.sessionModel.get('premises-address-line-1'),
            req.sessionModel.get('premises-address-line-2'),
            req.sessionModel.get('premises-town-or-city')]) :
          joinNonEmptyLines([
            req.sessionModel.get('licence-holder-address-line-1'),
            req.sessionModel.get('licence-holder-address-line-2'),
            req.sessionModel.get('licence-holder-town-or-city')]),
        SiteAddressRegion: '',
        SiteAddressPostcode: req.sessionModel.get('is-premises-address-same') === 'no' ?
          req.sessionModel.get('premises-postcode') : req.sessionModel.get('licence-holder-postcode'),
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
        CriminalConvictions: translateOption(
          req,
          'has-anyone-received-criminal-conviction',
          req.sessionModel.get('has-anyone-received-criminal-conviction')
        ),
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
        OrganisationRegisteredCharity: translateOption(
          req,
          'registered-charity',
          req.sessionModel.get('registered-charity')
        ),
        OrganisationBusinessType: parseAggregatedBusinessTypes(
          req.sessionModel.get('aggregated-business-type'))
      };
  }
}

module.exports = buildCaseData;
