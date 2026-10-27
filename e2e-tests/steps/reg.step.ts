import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

const { When, Then } = createBdd(test);

//Scenario: Registration tests
When('I fill out the answers to Registration form pertaining to {string} happy path test', async ({ pages }, scenario: string) => {
    switch (scenario.toLowerCase()) {
        case "t1: yes identity changes in the last 3yrs - other business type - other type of company - yes to mhra - yes to cqcsw":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
            await pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
            await pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
            await pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_YES);
            await pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(c.RESPONSE_YES);
            await pages.regPreviousLicenseDetailsPage.completePreviousLicenseDetailsPage(c.REF_NUMBER, c.NAME, c.DATE_IS_WITHIN_3_YEARS);
            await pages.regBusinessTypePage.completeBusinessTypePage("Other");
            await pages.regSpecifyYourBusinessTypePage.completeSpecifyYourBusinessTypePage(c.TEXT_AREA_FIELD_DATA);
            await pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
            await pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.regDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
            await pages.regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage.completesMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage("Lic123456", "licenceType", c.DATE_IS_WITHIN_3_YEARS);
            await pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
            await pages.regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage("12345677", c.DATE_IS_WITHIN_3_YEARS);
            break;
        case "t2: no identity changes in the last 3yrs - not other business type - public type of company - no to mhra - no to cqcsw":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
            await pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
            await pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
            await pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_NO);
            await pages.regBusinessTypePage.completeBusinessTypePage("Importer");
            await pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
            await pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
            await pages.regUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
            await pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            break;
        default:
            throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
    await pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(c.TEXT_AREA_FIELD_DATA);
    await pages.regInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, "112345DSD");
    await pages.regInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
    await pages.regCheckYourAnswersPage.completeCheckYourAnswersPage();
    await pages.regDeclarationPage.completeDeclarationPage("I have read and agree to this declaration");
    await pages.regRegistrationSubmittedPage.completeRegistrationSubmittedPage();
});


When('I choose to navigate to {string} page for REG', async ({ pages }, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "register for the controlled substance licensing system":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
            break;
        case "licence holder details":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
            await pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
            break;
        case "upload company registration certificate":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.navigateToRegistrationPage(c.REGISTER_FOR_THIS_SERVICE);
            await pages.regRegisterForTheControlledSubstanceLicensingSystemPage.selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem();
            await pages.regLicenceHolderDetailsPage.completeLicenseHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.regLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(c.RESPONSE_YES);
            await pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(c.RESPONSE_NO);
            await pages.regBusinessTypePage.completeBusinessTypePage("Broker");
            await pages.regWhatYourBusinessDoesPage.completeWhatYourBusinessDoesPage();
            await pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Private company");
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
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
    switch (pageName.toLowerCase()) {
        case "is the business a registered charity?":
            await pages.regIsTheBusinessARegisteredCharityPage.completeIsTheBusinessARegisteredCharityPage(answer);
            break;
        case "under your previous legally registered identity, did you hold a controlled drugs licence?":
            await pages.regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage.completeUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(answer);
            break;
        case "business type":
            await pages.regBusinessTypePage.completeBusinessTypePage(answer);
            break;
        case "specify your business type":
            await pages.regSpecifyYourBusinessTypePage.completeSpecifyYourBusinessTypePage(answer);
            break;
        case "what type of company is your organisation":
            await pages.regWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage(answer);
            break;
        case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
            await pages.regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
            break;
        case "is your business registered with the care quality commission or scottish and welsh equivalents?":
            await pages.regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
            break;
        case "has your legal identity changed at companies house in the last 3 years?":
            await pages.regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage.completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(answer);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When('I enter {string} characters in the text area box field on {string} page for REG', async ({ pages }, charSize: string, pageName: string) => {
    const textValue = pages.basePage.generateRandomStringOfLength(charSize);

    switch (pageName.toLowerCase()) {
        case "describe your business model":
            await pages.regDescribeYourBusinessModelPage.clearAndEnterTextInElement(pages.regDescribeYourBusinessModelPage.textAreaField, textValue);
            break;
        case "provide details of any other regulatory bodies you are registered with (optional)":
            await pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.clearAndEnterTextInElement(pages.regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage.textAreaField, textValue);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
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