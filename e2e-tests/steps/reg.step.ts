import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test, type Pages } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

export class RegStepLib extends CommonCslStepLib {
    async answersRegistrationFormFor(scenario: string): Promise<void> {
        switch (scenario.toLowerCase()) {
            case "t1: yes identity changes in the last 3yrs - other business type - other type of company - yes to mhra - yes to cqcsw":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
                await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_YES);
                await this.pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(c.RESPONSE_YES);
                await this.pages.regPreviousLicenseDetailsPage.completePreviousLicenseDetailsPage(c.REF_NUMBER, c.NAME, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.regBusinessTypePage.completeBusinessTypePage("Other");
                await this.pages.regSpecifyYourBusinessTypePage.completeSpecifyYourBusinessTypePage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
                await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.pages.regDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
                await this.pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage("Lic123456", "licenceType", c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
                await this.pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage("12345677", c.DATE_IS_WITHIN_3_YEARS);
                break;

            case "t2: no identity changes in the last 3yrs - not other business type - public type of company - no to mhra - no to cqcsw":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
                await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_NO);
                await this.pages.regBusinessTypePage.completeBusinessTypePage("Importer");
                await this.pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
                await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.pages.regUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                break;

            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
        await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.regInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, "112345DSD");
        await this.pages.regInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.regCheckYourAnswersPage.completeCheckYourAnswersPage();
        await this.pages.regDeclarationPage.completeDeclarationPage("I have read and agree to this declaration");
        await this.pages.regRegistrationSubmittedPage.completeRegistrationSubmittedPage();
    }


    async answerToPage(answer: string, pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "is the business a registered charity?":
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(answer);
                break;

            case "under your previous legally registered identity, did you hold a controlled drugs licence?":
                await this.pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(answer);
                break;

            case "business type":
                await this.pages.regBusinessTypePage.completeBusinessTypePage(answer);
                break;

            case "specify your business type":
                await this.pages.regSpecifyYourBusinessTypePage.completeSpecifyYourBusinessTypePage(answer);
                break;

            case "what type of company is your organisation":
                await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage(answer);
                break;

            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
                break;

            case "is your business registered with the care quality commission or scottish and welsh equivalents?":
                await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    async navigateToPage(pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "register for the controlled substance licensing system":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                break;

            case "licence holder details":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                break;

            case "under your previous legally registered identity, did you hold a controlled drugs licence?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
                await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_YES);
                break;

            case "upload company registration certificate":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
                await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_NO);
                await this.pages.regBusinessTypePage.completeBusinessTypePage("Broker");
                await this.pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
                await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Private company");
                break;

            case "invoicing contact details":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
                await this.pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
                await this.pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
                await this.pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_NO);
                await this.pages.regBusinessTypePage.completeBusinessTypePage("Importer");
                await this.pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
                await this.pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Private company");
                await this.pages.regUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(c.TEXT_AREA_FIELD_DATA);
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


//***************************************************************************************************  */
// BDD Step Definitions for REG pages
//***************************************************************************************************  */

const { When, Then } = createBdd(test);

When('I choose to navigate to {string} page for REG', async ({ pages }, pageName: string) => {
    await new RegStepLib(pages).navigateToPage(pageName);
});

When('I complete the fields below with Licence holder details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(data['Company name'], data['Name of responsible person'], data['Company number'], data['UK telephone number'], data['Email address'], data['Website URL'],);
});

When('I complete the fields below with Previous licence details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await pages.regPreviousLicenseDetailsPage.completePreviousLicenseDetailsPage(data['Previous licence number'], data['Licence holder name'], data['Day month year'],);
});

When('I complete the fields below with {string} (holder )address details for REG:', async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const regStepLib = new RegStepLib(pages);
    const addressLine1 = data['Address line 1'];
    const addressLine2 = data['Address line 2'];
    const townOrCity = data['Town or City'];
    const postcode = data['Postcode'];

    switch (pageName.toLowerCase()) {
        case 'licence':
            await pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case 'invoicing':
            await pages.regInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        default:
            throw new Error('Failed: Wrong page name: ' + pageName);
    }
});

When('I complete the fields below with Licence details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage(data['Licence number'], data['Licence type'], data['Day month year'],);
});

When('I choose to select {string} on {string} page and choose to continue for REG', async ({ pages }, answer: string, pageName: string) => {
    await new RegStepLib(pages).answerToPage(answer, pageName);
});

When('I enter {string} characters in the text area box field on {string} page for REG', async ({ pages }, charSize: string, pageName: string) => {
    await new RegStepLib(pages).enterTextIntoTextArea(charSize, pageName);
});

When('I complete the fields below with Registration details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(data['Registration number'], data['Day month year'],);
});

When('I complete the fields below with Invoicing contact details for REG:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await pages.regInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(data['Contact name'], data['Contact phone number'], data['Invoice email address'], data['Purchase order number'],);
});

Then('{string} link is displayed on Registration page', async ({ pages }, linkText: string) => {
    expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
});
