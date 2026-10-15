import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test, type Pages } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib } from '../utility-helper/constants-lib';

const {
    ADDRESS_LINE_1,
    ADDRESS_LINE_2,
    BUSINESS_OR_COMPANY_NAME,
    COMPANY_NO,
    DATE_IS_WITHIN_3_YEARS,
    FULL_NAME,
    NAME,
    POSTCODE,
    REF_NUMBER,
    REGISTER_FOR_THIS_SERVICE,
    RESPONSE_NO,
    RESPONSE_YES,
    SAS_HOF_EMAIL,
    TELEPHONE,
    TEXT_AREA_FIELD_DATA,
    TOWN_OR_CITY
} = ConstantsLib;

export class RegStepLib extends CommonCslStepLib {
    async navigateToRegistrationPage(linkText: string): Promise<void> {
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.assertPageTitle();
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.selectRegisterForThisServiceLink(linkText);
    }

    async selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem(): Promise<void> {
        await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.assertPageTitle();
        await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowToRegisterForControlledSubstanceLicensing();
    }
    async completeLicenseHolderDetailsPage(licenseHolderName: string, nameOfResponsiblePerson: string, companyNumber: string, contactPhoneNumber: string, email: string, webSiteUrl: string): Promise<void> {
        await this.pages.regLicenceHolderDetailsPage.assertPageTitle();
        await this.pages.regLicenceHolderDetailsPage.enterLicenceHolderDetails(licenseHolderName, nameOfResponsiblePerson, companyNumber, contactPhoneNumber, email, webSiteUrl);
        await this.pages.regLicenceHolderDetailsPage.clickContinue();
    }
    async completeLicenceHolderAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.regLicenceHolderAddressPage.assertPageTitle();
        await this.pages.regLicenceHolderAddressPage.enterLicenceHolderAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.regLicenceHolderAddressPage.clickContinue();
    }

    async completeIsTheBusinessARegisteredCharityPage(option: string): Promise<void> {
        await this.pages.regIsTheBusinessARegisteredCharityPage.assertPageTitle();
        await this.pages.regIsTheBusinessARegisteredCharityPage.selectYesOrNoRadioOption(option);
        await this.pages.regIsTheBusinessARegisteredCharityPage.clickContinue();
    }

    async completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(option: string): Promise<void> {
        await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.assertPageTitle();
        await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.selectYesOrNoRadioOption(option);
        await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.clickContinue();
    }

    async completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(option: string): Promise<void> {
        await this.pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.assertPageTitle();
        await this.pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.selectYesOrNoRadioOption(option);
        await this.pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.clickContinue();
    }

    async completePreviousLicenseDetailsPage(previousLicenseNumber: string, licenseHolderName: string, date: string): Promise<void> {
        await this.pages.regPreviousLicenseDetailsPage.assertPageTitle();
        await this.pages.regPreviousLicenseDetailsPage.enterRegPreviousLicenseDetailsPage(previousLicenseNumber, licenseHolderName, date);
        await this.pages.regPreviousLicenseDetailsPage.clickContinue();
    }

    async completeBusinessTypePage(businessTypeValue: string): Promise<void> {
        await this.pages.regBusinessTypePage.assertPageTitle();
        await this.pages.regBusinessTypePage.selectBusinessTypeFromDropDownField(businessTypeValue);
        await this.pages.regBusinessTypePage.clickContinue();
    }


    async completeSpecifyYourBusinessTypePage(textValue: string): Promise<void> {
        await this.pages.regSpecifyYourBusinessTypePage.assertPageTitle();
        await this.pages.regSpecifyYourBusinessTypePage.enterSpecifyYourBusinessType(textValue);
        await this.pages.regSpecifyYourBusinessTypePage.clickContinue();
    }

    async completeWhatYourBusinessDoesPage(): Promise<void> {
        await this.pages.regWhatYourBusinessDoesPage.assertPageTitle();
        await this.pages.regWhatYourBusinessDoesPage.clickContinue();
    }

    async completeWhatTypeOfCompanyIsYourOrganisationPage(optValue: string): Promise<void> {
        await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.assertPageTitle();
        await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.selectRadioOptionWithText(optValue);
        await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.clickContinue();
    }

    async completeDescribeYourBusinessModelPage(textAreaValue: string): Promise<void> {
        await this.pages.regDescribeYourBusinessModelPage.assertPageTitle();
        await this.pages.regDescribeYourBusinessModelPage.enterDescribeYourBusinessModel(textAreaValue);
        await this.pages.regDescribeYourBusinessModelPage.clickContinue();
    }

    async completeUploadCompanyRegistrationCertificatePage(fileName: string): Promise<void> {
        await this.pages.regUploadCompanyRegistrationCertificatePage.assertPageTitle();
        await this.pages.regUploadCompanyRegistrationCertificatePage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.regUploadCompanyRegistrationCertificatePage.selectContinueUploadBtn();
    }

    async completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(optValue: string): Promise<void> {
        await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.assertPageTitle();
        await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.selectRadioOptionWithText(optValue);
        await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.clickContinue();
    }

    async completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage(licenceNumber: string, licenceType: string, date: string): Promise<void> {
        await this.pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.assertPageTitle();
        await this.pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.enterMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetails(licenceNumber, licenceType, date);
        await this.pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.clickContinue();
    }

    async completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(optValue: string): Promise<void> {
        await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.assertPageTitle();
        await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.selectRadioOptionWithText(optValue);
        await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.clickContinue();
    }


    async completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(registrationNumber: string, date: string): Promise<void> {
        await this.pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.assertPageTitle();
        await this.pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.enterRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalents(registrationNumber, date);
        await this.pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.clickContinue();
    }

    async completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(textAreaValue: string): Promise<void> {
        await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.assertPageTitle();
        await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.enterProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWith(textAreaValue);
        await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.clickContinue();
    }
    async completeInvoicingContactDetailsPage(contactName: string, email: string, contactNo: string, purchaseOrderNo: string): Promise<void> {
        await this.pages.regInvoicingContactDetailsPage.assertPageTitle();
        await this.pages.regInvoicingContactDetailsPage.enterLicenceDetails(contactName, email, contactNo, purchaseOrderNo);
        await this.pages.regInvoicingContactDetailsPage.clickContinue();
    }
    async completeInvoicingAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.regInvoicingAddressPage.assertPageTitle();
        await this.pages.regInvoicingAddressPage.enterInvoicingAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.regInvoicingAddressPage.clickContinue();
    }
    async completeCheckYourAnswersPage(): Promise<void> {
        await this.pages.regCheckYourAnswersPage.assertPageTitle();
        await this.pages.regCheckYourAnswersPage.clickContinue();
    }
    async completeDeclarationPage(optText: string): Promise<void> {
        await this.pages.regDeclarationPage.assertPageTitle();
        await this.pages.regDeclarationPage.selectRadioOptionWithText(optText);
        await this.pages.regDeclarationPage.clickSubmitRegistration();
    }
    async completeRegistrationSubmittedPage(): Promise<void> {
        await this.pages.regRegistrationSubmittedPage.assertPageTitle();
    }
    async answersRegistrationFormFor(scenario: string): Promise<void> {
        switch (scenario.toLowerCase()) {
            case "t1: yes identity changes in the last 3yrs - other business type - other type of company - yes to mhra - yes to cqcsw":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.completeLicenseHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
                await this.completeIsTheBusinessARegisteredCharityPage(RESPONSE_YES);
                await this.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(RESPONSE_YES);
                await this.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(RESPONSE_YES);
                await this.completePreviousLicenseDetailsPage(REF_NUMBER, NAME, DATE_IS_WITHIN_3_YEARS);
                await this.completeBusinessTypePage("Other");
                await this.completeSpecifyYourBusinessTypePage(TEXT_AREA_FIELD_DATA);
                await this.completeWhatYourBusinessDoesPage();
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(RESPONSE_YES);
                await this.completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage("Lic123456", "licenceType", DATE_IS_WITHIN_3_YEARS);
                await this.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(RESPONSE_YES);
                await this.completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage("12345677", DATE_IS_WITHIN_3_YEARS);
                break;

            case "t2: no identity changes in the last 3yrs - not other business type - public type of company - no to mhra - no to cqcsw":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.completeLicenseHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
                await this.completeIsTheBusinessARegisteredCharityPage(RESPONSE_YES);
                await this.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(RESPONSE_NO);
                await this.completeBusinessTypePage("Importer");
                await this.completeWhatYourBusinessDoesPage();
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(RESPONSE_NO);
                await this.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(RESPONSE_NO);
                break;

            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
        await this.completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(TEXT_AREA_FIELD_DATA);
        await this.completeInvoicingContactDetailsPage(FULL_NAME, TELEPHONE, SAS_HOF_EMAIL, "112345DSD");
        await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
        await this.completeCheckYourAnswersPage();
        await this.completeDeclarationPage("I have read and agree to this declaration");
        await this.completeRegistrationSubmittedPage();
    }


    async answerToPage(answer: string, pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "is the business a registered charity?":
                await this.completeIsTheBusinessARegisteredCharityPage(answer);
                break;

            case "under your previous legally registered identity, did you hold a controlled drugs licence?":
                await this.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(answer);
                break;

            case "business type":
                await this.completeBusinessTypePage(answer);
                break;

            case "specify your business type":
                await this.completeSpecifyYourBusinessTypePage(answer);
                break;

            case "what type of company is your organisation":
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage(answer);
                break;

            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
                break;

            case "is your business registered with the care quality commission or scottish and welsh equivalents?":
                await this.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    async navigateToPage(pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "register for the controlled substance licensing system":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                break;

            case "licence holder details":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                break;

            case "under your previous legally registered identity, did you hold a controlled drugs licence?":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.completeLicenseHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
                await this.completeIsTheBusinessARegisteredCharityPage(RESPONSE_YES);
                await this.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(RESPONSE_YES);
                break;

            case "upload company registration certificate":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.completeLicenseHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
                await this.completeIsTheBusinessARegisteredCharityPage(RESPONSE_YES);
                await this.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(RESPONSE_NO);
                await this.completeBusinessTypePage("Broker");
                await this.completeWhatYourBusinessDoesPage();
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Private company");
                break;

            case "invoicing contact details":
                await this.navigateToRegistrationPage(REGISTER_FOR_THIS_SERVICE);
                await this.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.completeLicenseHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
                await this.completeIsTheBusinessARegisteredCharityPage(RESPONSE_YES);
                await this.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(RESPONSE_NO);
                await this.completeBusinessTypePage("Importer");
                await this.completeWhatYourBusinessDoesPage();
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Private company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(RESPONSE_NO);
                await this.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(RESPONSE_NO);
                await this.completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(TEXT_AREA_FIELD_DATA);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    async enterTextIntoTextArea(length: string, pageName: string): Promise<void> {
        const textValue = await this.generateRandomStringOfLength(length);

        switch (pageName.toLowerCase()) {
            case "describe your business model":
                await this.pages.regDescribeYourBusinessModelPage.clearAndEnterTextInElement(this.pages.regDescribeYourBusinessModelPage.textAreaField, textValue);
                break;

            case "provide details of any other regulatory bodies you are registered with (optional)":
                await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.clearAndEnterTextInElement(this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.textAreaField, textValue);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }

}

const { When, Then } = createBdd(test);

When('I choose to navigate to {string} page for REG', async ({ pages }, pageName: string) => {
    await new RegStepLib(pages).navigateToPage(pageName);
});

When('I complete the fields below with Licence holder details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await new RegStepLib(pages).completeLicenseHolderDetailsPage(
        data['Company name'],
        data['Name of responsible person'],
        data['Company number'],
        data['UK telephone number'],
        data['Email address'],
        data['Website URL'],
    );
});

When('I complete the fields below with Previous licence details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await new RegStepLib(pages).completePreviousLicenseDetailsPage(
        data['Previous licence number'],
        data['Licence holder name'],
        data['Day month year'],
    );
});

async function completeAddressDetails(
    { pages }: { pages: Pages },
    pageName: string,
    dataTable: DataTable,
): Promise<void> {
    const data = dataTable.rowsHash();
    const regStepLib = new RegStepLib(pages);
    const addressLine1 = data['Address line 1'];
    const addressLine2 = data['Address line 2'];
    const townOrCity = data['Town or City'];
    const postcode = data['Postcode'];

    switch (pageName.toLowerCase()) {
        case 'licence':
            await regStepLib.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case 'invoicing':
            await regStepLib.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        default:
            throw new Error('Failed: Wrong page name: ' + pageName);
    }
}

When('I complete the fields below with {string} address details for REG:', completeAddressDetails);
When('I complete the fields below with {string} holder address details for REG:', completeAddressDetails);

When('I complete the fields below with Licence details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await new RegStepLib(pages).completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage(
        data['Licence number'],
        data['Licence type'],
        data['Day month year'],
    );
});

When('I choose to select {string} on {string} page and choose to continue for REG', async ({ pages }, answer: string, pageName: string) => {
    await new RegStepLib(pages).answerToPage(answer, pageName);
});

When('I enter {string} characters in the text area box field on {string} page for REG', async ({ pages }, charSize: string, pageName: string) => {
    await new RegStepLib(pages).enterTextIntoTextArea(charSize, pageName);
});

When('I complete the fields below with Registration details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await new RegStepLib(pages).completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(
        data['Registration number'],
        data['Day month year'],
    );
});

When('I complete the fields below with Invoicing contact details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await new RegStepLib(pages).completeInvoicingContactDetailsPage(
        data['Contact name'],
        data['Contact phone number'],
        data['Invoice email address'],
        data['Purchase order number'],
    );
});

Then('{string} link is displayed on Registration page', async ({ pages }, linkText: string) => {
    expect(await new RegStepLib(pages).isLinkTextIsDisplayedOnPage(linkText)).toBe(true);
});
