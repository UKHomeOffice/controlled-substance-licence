import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, type Pages } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

const { Given, When, Then } = createBdd(test);

// Scenario: Precursor Chemicals Drugs tests
When('I fill out the answers to Precursor Chemicals form pertaining to {string} happy path test by selecting {string} checkbox and entering own chemical name {string}', async ({ pages }, scenario: string, checkboxLabel: string, ownChemicalName: string) => {
  await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
  await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
  await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);

  switch (scenario.toLowerCase()) {
    case "t1: a new application - a first time licensee - premises address is the same as the licence holder address":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t2: a new application - existing licensee renewing or changing a currently licensed site - premises address is the same as the licence holder address":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      await pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
      await pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
      await pages.pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
      await pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(c.RESPONSE_YES);
      await pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(c.RESPONSE_NO);
      await pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(c.RESPONSE_YES);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t3: a new application - existing licensee renewing or changing a currently licensed site - premises address is not same as the licence holder address, operation applies is other licence":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      await pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
      await pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
      await pages.pcaUploadYourCompaniesHouseDetailsPage.completePcaUploadYourCompaniesHouseDetailsPage("yourself.png");
      await pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(c.RESPONSE_NO);
      await pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(c.RESPONSE_YES);
      await pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(c.RESPONSE_NO);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
      await pages.pcaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("I do not know");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Other");
      await pages.pcaWhatOtherOperationsAppliesToTheLicencePage.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t4: a new application - existing licensee applying for a new site - enter moving site date and premises address is not same as the licence holder address, operation applies is other licence":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
      await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("We are moving site");
      await pages.pcaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
      await pages.pcaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("I do not know");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Other");
      await pages.pcaWhatOtherOperationsAppliesToTheLicencePage.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t5: a new application - existing licensee applying for a new site - is not part of the contractual agreement and premises address is the same as the licence holder address":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
      await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
      await pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t6: a new application - existing licensee applying for a new site - is part of the contractual agreement and premises address is the same as the licence holder address":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
      await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
      await pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
      await pages.pcaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
      await pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    case "t7: amend a pending application - is part of the contractual agreement and premises address is the same as the licence holder address":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.AMEND_PENDING_APPLICATION);
      await pages.pcaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage("12345678");
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      break;
    default:
      throw new Error("Failed: Wrong radio value scenario name: " + scenario);
  }
  await pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
  await pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaDescribeHowYouManageChemicalStockControlPage.completeDescribeHowYouManageChemicalStockControlPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(c.TEXT_AREA_FIELD_DATA);
  await pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.completeWhichEmailAddressShouldTheLicenceBeSentToPage(c.SAS_HOF_EMAIL);
  await pages.pcaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL);
  await pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(c.RESPONSE_NO, "Text Area Value");
  await pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationPage("Text Area Value");
  await pages.pcaCheckYourAnswersPage.completeCheckYourAnswerPage();
  await pages.pcaDeclarationPage.completeDeclarationPage("I understand and accept this declaration");
  await pages.pcaApplicationSubmittedPage.completeApplicationSubmittedPage();
});


When("I choose to navigate to {string} page for PCA", async ({ pages }, pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "how would you like to apply?":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      break;
    case "guarantor details":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      break;
    case "which category is the substance":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      break;
    case "upload company registration certificate":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, c.WEBSITE_URL);
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      break;
    case "describe how you manage chemical stock control":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
      await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, c.WEBSITE_URL);
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
      await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
      await pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
      await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
      await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
      await pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
      await pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
      await pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
      await pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
      await pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
      await pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(c.TEXT_AREA_FIELD_DATA);
      break;
    case "has your companies house reference number changed since your last application?":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      break;
    case "why are you requesting a new license?":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
      break;
    case "is the new site part of a contractual agreement?":
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
      await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});


When(/^I (?:answer|choose to select) "([^"]*)" on "([^"]*)" page (?:for PCA and choose to continue|and choose to continue for PCA)$/, async ({ pages }, answer: string, pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "what type of licence are you applying for?":
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
      break;
    case "how are you applying for your precursor chemicals licence?":
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(answer);
      break;
    case "is the premises address the same as the licence holder address?":
      await pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
      break;
    case "has the responsible officer subscribed to dbs updates?":
      await pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(answer);
      break;
    case "which category is the substance?":
      await pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage(answer);
      break;
    case "what security measures do you have in place at the premises?":
      await pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(answer);
      break;
    case "which operation applies to this licence for x":
      await pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage(answer);
      break;
    case "has your companies house reference number changed since your last application?":
      await pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
      break;
    case "has your registered name at companies house changed since your last application?":
      await pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
      break;
    case "why are you requesting a new license?":
      await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage(answer);
      break;
    case "is the new site part of a contractual agreement?":
      await pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
      break;
    case "are you requesting to change the responsible person or guarantor for this site only?":
      await pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(answer);
      break;
    case "are you requesting an additional category?":
      await pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(answer);
      break;
    case "are you requesting a change of substance or operation?":
      await pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(answer);
      break;
    case "has the guarantor subscribed to dbs updates?":
      await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(answer);
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

export async function iChooseToSelectAndEnterAsApplicationReferenceNumberOnPageAndChooseToContinueForPCA(pages: Pages, applicationRefNo: string, page: string): Promise<void> {
  await pages.pcaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
}

When("I choose to enter {string} as application reference number on {string} page and choose to continue for PCA", async ({ pages }, applicationRefNo: string, page: string) => {
  await iChooseToSelectAndEnterAsApplicationReferenceNumberOnPageAndChooseToContinueForPCA(pages, applicationRefNo, page);
});

When("I complete the fields below with Licence holder details for PCA:", async ({ pages }, dataTable: DataTable) => {
  const data = dataTable.rowsHash();
  const companyName = data["Company name"];
  const companyNumber = data["Company number"];
  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];
  const websiteUrl = data["Website URL"];

  await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
});


When("I complete the fields below with {string} address details for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const addressLine1 = data["Address line 1"];
  const addressLine2 = data["Address line 2"];
  const townOrCity = data["Town or City"];
  const postcode = data["Postcode"];

  switch (pageName.toLowerCase()) {
    case "premises":
      await pages.pcaPremisesAddressPage.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
      break;
    case "invoicing":
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

When("I complete the fields below with {string} holder address details for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const addressLine1 = data["Address line 1"];
  const addressLine2 = data["Address line 2"];
  const townOrCity = data["Town or City"];
  const postcode = data["Postcode"];

  await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
});

When("I complete the fields below with Invoicing contact details for PCA:", async ({ pages }, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const fullName = data["Full name"];
  const emailAddress = data["Email address"];
  const ukTelephoneNo = data["UK telephone number"];
  const purchaseOrderNo = data["Purchase order number"];

  await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
});

When("I complete the fields below with Premises contact details for PCA:", async ({ pages }, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];

  await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
});

When("I complete the fields below with {string} for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const fullName = data["Full name"];
  const emailAddress = data["Email address"];
  const checkBox = data["Confirm check box"];

  switch (pageName.toLowerCase()) {
    case "responsible officer details":
      await pages.pcaResponsibleOfficerDetailsPage.enterResponsibleOfficerFullNameAndEmailDetails(fullName, emailAddress);
      break;

    case "guarantor details":
      await pages.pcaGuarantorDetailsPage.enterGuarantorDetailsFullNameAndEmailDetails(fullName, emailAddress);
      break;

    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }

  if (checkBox.toLowerCase() === "ticked".toLowerCase()) {
    await pages.basePage.selectRadioOptionWithText("I confirm this person has applied");
  }

  await pages.basePage.clickSaveAndContinue();
});

When("I complete the fields below with {string} information for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  const data = dataTable.rowsHash();
  const fullName = data["Full name"];
  const dbsReference = data["DBS reference"];
  const dayMonthYear = data["Day month year"];

  await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(fullName, dbsReference, dayMonthYear);
});

When("I complete the fields below with {string} for the responsible officer for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  const data = dataTable.rowsHash();
  const fullName = data["Full name"];
  const dbsReference = data["DBS reference"];
  const dayMonthYear = data["Day month year"];

  await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(fullName, dbsReference, dayMonthYear);
});

When("I enter {string} characters in the text area box field on {string} page for PCA", async ({ pages }, charSize: string, pageName: string) => {
  const textValue = pages.basePage.generateRandomAlphabetString(Number.parseInt(charSize, 10));

  switch (pageName.toLowerCase()) {
    case "tell us about your main customers":
      await pages.pcaTellUsAboutYourMainCustomersPage.clearAndEnterTextInElement(pages.pcaTellUsAboutYourMainCustomersPage.textField, textValue);
      break;
    case "tell us about your main suppliers":
      await pages.pcaTellUsAboutYourMainSuppliersPage.clearAndEnterTextInElement(pages.pcaTellUsAboutYourMainSuppliersPage.textField, textValue);
      break;
    case "describe how you secure your premises":
      await pages.pcaDescribeHowYouSecureYourPremisesPage.clearAndEnterTextInElement(pages.pcaDescribeHowYouSecureYourPremisesPage.textField, textValue);
      break;
    case "describe how you make sure chemicals are stored and handled securely":
      await pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.clearAndEnterTextInElement(pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.textField, textValue);
      break;
    case "describe how you manage chemical stock control":
      await pages.pcaDescribeHowYouManageChemicalStockControlPage.clearAndEnterTextInElement(pages.pcaDescribeHowYouManageChemicalStockControlPage.textField, textValue);
      break;
    case "describe how you work to make sure end products are used legitimately":
      await pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.clearAndEnterTextInElement(pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.textField, textValue);
      break;
    case "summarise your standard operating procedures and auditing practices for the use or disposal of chemicals":
      await pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.clearAndEnterTextInElement(pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.textField, textValue);
      break;
    case "will the regulatory affairs and compliance officer discharge all licence responsibilities?":
      await pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clearAndEnterTextInElement(pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.textAreaField, textValue);
      break;
    case "add any extra information you think might help your application (optional)":
      await pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.clearAndEnterTextInElement(pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.textAreaField, textValue);
      break;
    case "tell us more about the contract and how it affects your licence application":
      await pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

When("I choose to select {string} option on the {string} page for PCA", async ({ pages }, option: string, pageName: string) => {
  await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(option);
});

When("I enter {string} into {string} field and page for PCA", async ({ pages }, value: string, pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "which chemical are you applying for?":
      await pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage(value);
      break;
    case "when are you moving site?":
      await pages.pcaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(value);
      break;
    case "when does the contract start?":
      await pages.pcaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(value);
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

When("I enter {string} into the email field on {string} page for PCA", async ({ pages }, value: string, pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "which email address should the licence be sent to?":
      await pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.completeWhichEmailAddressShouldTheLicenceBeSentToPage(value);
      break;
    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

When("I select {string} checkbox on {string} page for PCA", async ({ pages }, checkboxLabel: string, pageName: string) => {
  switch (pageName.toLowerCase()) {
    case "which chemical are you applying for?":
      await pages.pcaWhichChemicalAreYouApplyingForPage.selectOwnChemicalCheckboxOnWhichChemicalAreYouApplyingForPage(checkboxLabel);
      break;

    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
});

When("I complete the fields below with Who is completing the application details for PCA:", async ({ pages }, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const fullName = data["Full name"];
  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];

  await pages.pcaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(fullName, ukTelephoneNo, emailAddress);
});

When("I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for PCA:", async ({ pages }, dataTable: DataTable) => {
  const data = dataTable.rowsHash();

  const radioOption = data["Radio Option"];
  const textArea = data["Text Area"];

  await pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(radioOption, textArea);
});

export async function linkIsDisplayedOnThePageForPCA(pages: Pages, linkText: string): Promise<void> {
  expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
}

Then("{string} link is displayed on the page for PCA", async ({ pages }, linkText: string) => {
  await linkIsDisplayedOnThePageForPCA(pages, linkText);
});