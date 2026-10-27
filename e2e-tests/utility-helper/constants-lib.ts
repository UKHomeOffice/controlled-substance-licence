export class ConstantsLib {
  static readonly CDA_USER_NAME = 'HOFLTM11790';
  static readonly CDA_PASSWORD = requiredEnv('PASSWORD_CDA');
  static readonly LTHCC_USER_NAME = 'test-approved';
  static readonly LTHCC_PASSWORD = requiredEnv('PASSWORD_LTHCC');
  static readonly PCA_USER_NAME = 'test2-approved';
  static readonly PCA_PASSWORD = requiredEnv('PASSWORD_PCA');
  static readonly USER_NAME_PENDING = 'test-external-user';
  static readonly PASSWORD_PENDING = requiredEnv('PASSWORD_PENDING');
  static readonly SAS_HOF_EMAIL = requiredEnv('SAS_HOF_EMAIL');
  static readonly FULL_NAME = 'HOF TEST';
  static readonly NAME = 'AUTO TESTER';
  static readonly REF_NUMBER = 'ZW9005196';
  static readonly ADDRESS = '49, Sydenham road, Croydon, Surrey, CR0 2EU';
  static readonly AGENT_EMAIL = 'Agents.TestEmail@digital.homeoffice.gov.uk';
  static readonly DOB_11_11_1988 = '11/11/1988';
  static readonly ADDRESS_LINE_1 = '100';
  static readonly ADDRESS_LINE_2 = 'Tenth St';
  static readonly TOWN_OR_CITY = 'HULL';
  static readonly POSTCODE = 'M11 1HH';
  static readonly B_ADDRESS_LINE_1 = '89';
  static readonly B_ADDRESS_LINE_2 = 'HOF St';
  static readonly B_TOWN_OR_CITY = 'Leeds';
  static readonly B_POSTCODE = 'L22 2LL';
  static readonly B_COUNTY = 'Salford';
  static readonly COUNTY = 'Surrey';
  static readonly COUNTRY_UK = 'United Kingdom';
  static readonly BUSINESS_OR_COMPANY_NAME = 'HOF LTD';
  static readonly BUSINESS_DETAILS = 'Business details';
  static readonly TYPE_BUSINESS = 'TECH';
  static readonly CONTACT_NAME = 'TLT HOF';
  static readonly CONTACT_JOB_TITLE = 'Business Tester';
  static readonly TELEPHONE = '01616699548';
  static readonly CONTACT_TELEPHONE = '01616699548';
  static readonly CONTACT_EMAIL_ADDRESS = 'sas-hof-test@digital.homeoffice.gov.uk';
  static readonly COMPANY_NAME = 'Test UK Ltd';
  static readonly COMPANY_HOUSE_NUMBER = '45';
  static readonly RESPONSE_YES = 'Yes';
  static readonly RESPONSE_NO = 'No';
  static readonly CONFIRM_DBS_CERTIFICATE = 'I confirm this person has applied for or currently holds a DBS certificate';
  static readonly TEXT_AREA_FIELD_DATA = 'HOF Test Data Test!! Checking the text area field';
  static readonly DBS_REFERENCE = '123456';
  static readonly PCA_WARNING_TEXT_FOR_DBS = "If yes, they must email dflu.dom@homeoffice.gov.uk with their date of birth, DBS reference number, issue date and explicit consent for the Drugs and Firearms Licensing Unit to access this service";
  static readonly PCA_WARNING_TEXT_FOR_CONVICTION = "If you answer ‘Yes’, you must email dflu.dom@homeoffice.gov.uk with details of the employee and their conviction after submitting this form";
  static readonly DATE_IS_WITHIN_3_YEARS = 'Within the last 3 years';
  static readonly TODAY_S_DATE = "today's date";
  static readonly TOMORROW_S_DATE = "tomorrow's date";
  static readonly YESTERDAY_S_DATE = "yesterday's date";
  static readonly WEBSITE_URL = 'https://www.hof.com';
  static readonly COMPANY_NO = '12345678';
  static readonly purchaseOrderNo = '1111222333';
  static readonly REGISTER_FOR_THIS_SERVICE = 'Register for this service';
  static readonly PRECURSOR_CHEMICALS = 'Precursor chemicals';
  static readonly CONTROLLED_DRUGS = 'Controlled drugs';
  static readonly LOW_THC_CANNABIS_INDUSTRIAL_HEMP = 'Low THC cannabis (industrial hemp)';
  static readonly START_NEW_APPLICATION = 'Start a new application';
  static readonly CONTINUE_DRAFT_APPLICATION = 'Continue a draft application';
  static readonly AMEND_PENDING_APPLICATION = 'Amend a pending application';
  static readonly FIRST_TIME_LICENSEE = 'A first time licensee';
  static readonly EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE = 'Existing licensee renewing or changing a currently licensed site';
  static readonly EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE = 'Existing licensee applying for a new site';
}

function requiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is not configured`);
    }
    return value;
}