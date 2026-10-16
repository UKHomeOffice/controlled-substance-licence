import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, type Pages } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

export class PcaStepLib extends CommonCslStepLib {

  async completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(option1: string, option2: string): Promise<void> {
    await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(option1);
    await this.pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(option2);
  }

  async completeSelectedChemicalStep(checkboxLabel: string | null, ownChemicalName: string | null, defaultChemical: string): Promise<void> {
    if (checkboxLabel != null && !(checkboxLabel.trim().length === 0) && ownChemicalName != null && !(ownChemicalName.trim().length === 0)) {
      await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPageUsingOwnChemicalName(checkboxLabel, ownChemicalName);
      return;
    }

    await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage(defaultChemical);
  }

  async answersPrecursorChemicalsFormFor(scenario: string): Promise<void> {
    await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
    await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);

    await this.completePrecursorChemicalsHappyPathJourney(scenario, null, null);
  }

  async answersPrecursorChemicalsFormForUsingOwnChemicalName(scenario: string, checkboxLabel: string, ownChemicalName: string): Promise<void> {
    await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
    await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);

    await this.completePrecursorChemicalsHappyPathJourney(scenario, checkboxLabel, ownChemicalName);
  }

  private async completePrecursorChemicalsHappyPathJourney(scenario: string, checkboxLabel: string | null, ownChemicalName: string | null): Promise<void> {
    switch (scenario.toLowerCase()) {
      case "t1: a new application - a first time licensee - premises address is the same as the licence holder address":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;
      case "t2: a new application - existing licensee renewing or changing a currently licensed site - premises address is the same as the licence holder address":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
        await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
        await this.pages.pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
        await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(c.RESPONSE_YES);
        await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(c.RESPONSE_NO);
        await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(c.RESPONSE_YES);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;
      case "t3: a new application - existing licensee renewing or changing a currently licensed site - premises address is not same as the licence holder address, operation applies is other licence":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
        await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
        await this.pages.pcaUploadYourCompaniesHouseDetailsPage.completePcaUploadYourCompaniesHouseDetailsPage("yourself.png");
        await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(c.RESPONSE_NO);
        await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(c.RESPONSE_YES);
        await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(c.RESPONSE_NO);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
        await this.pages.pcaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("I do not know");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Other");
        await this.pages.pcaWhatOtherOperationsAppliesToTheLicencePage.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;
      case "t4: a new application - existing licensee applying for a new site - enter moving site date and premises address is not same as the licence holder address, operation applies is other licence":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("We are moving site");
        await this.pages.pcaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
        await this.pages.pcaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("I do not know");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Other");
        await this.pages.pcaWhatOtherOperationsAppliesToTheLicencePage.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;
      case "t5: a new application - existing licensee applying for a new site - is not part of the contractual agreement and premises address is the same as the licence holder address":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
        await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;
      case "t6: a new application - existing licensee applying for a new site - is part of the contractual agreement and premises address is the same as the licence holder address":
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
        await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
        await this.pages.pcaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
        await this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;

      case "t7: amend a pending application - is part of the contractual agreement and premises address is the same as the licence holder address":
        await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.AMEND_PENDING_APPLICATION);
        await this.pages.pcaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage("12345678");
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;

      default:
        throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
    await this.pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
    await this.pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.completeDescribeHowYouManageChemicalStockControlPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(c.TEXT_AREA_FIELD_DATA);
    await this.pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.completeWhichEmailAddressShouldTheLicenceBeSentToPage(c.SAS_HOF_EMAIL);
    await this.pages.pcaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL);
    await this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(c.RESPONSE_NO, "Text Area Value");
    await this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationPage("Text Area Value");
    await this.pages.pcaCheckYourAnswersPage.completeCheckYourAnswerPage();
    await this.pages.pcaDeclarationPage.completeDeclarationPage("I understand and accept this declaration");
    await this.pages.pcaApplicationSubmittedPage.completeApplicationSubmittedPage();
  }

  async answerToExistingLicenseeRenewingOrChangingCannonContinue(): Promise<void> {
    await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
    await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
    await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
    await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
    await this.pages.pcaYouCannotContinueThisApplicationPage.completeYouCannotContinueThisApplicationPage();
  }

  async answerToPage(answer: string, pageName: string): Promise<void> {
    switch (pageName.toLowerCase()) {

      case "what type of licence are you applying for?":
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
        break;

      case "how are you applying for your precursor chemicals licence?":
        await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(answer);
        break;

      case "is the premises address the same as the licence holder address?":
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
        break;

      case "has the responsible officer subscribed to dbs updates?":
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(answer);
        break;

      case "which category is the substance?":
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage(answer);
        break;

      case "what security measures do you have in place at the premises?":
        await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(answer);
        break;

      case "which operation applies to this licence for x":
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage(answer);
        break;

      case "has your companies house reference number changed since your last application?":
        await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
        break;

      case "has your registered name at companies house changed since your last application?":
        await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
        break;

      case "why are you requesting a new license?":
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage(answer);
        break;

      case "is the new site part of a contractual agreement?":
        await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
        break;

      case "are you requesting to change the responsible person or guarantor for this site only?":
        await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(answer);
        break;

      case "are you requesting an additional category?":
        await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.completeAreYouRequestingAnAdditionalCategoryPage(answer);
        break;

      case "are you requesting a change of substance or operation?":
        await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(answer);
        break;

      case "has the guarantor subscribed to dbs updates?":
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(answer);
        break;

      default:
        throw new Error("Failed: Wrong page name: " + pageName);
    }
  }

  async navigateToPage(pageName: string): Promise<void> {
    switch (pageName.toLowerCase()) {
      case "how would you like to apply?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        break;

      case "licence holder details":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        break;

      case "is the premises address the same as the licence holder address?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, c.WEBSITE_URL);
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        break;

      case "responsible officer details":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        break;

      case "guarantor details":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        break;

      case "has anyone employed by your company ever received criminal convictions":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        break;

      case "which category is the substance":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        break;

      case "upload company registration certificate":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, c.WEBSITE_URL);
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        break;

      case "tell us about your main customers":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        break;

      case "describe how you make sure chemicals are stored and handled securely":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        await this.pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
        await this.pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
        break;

      case "which email address should the licence be sent to":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        await this.pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
        await this.pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.completeDescribeHowYouManageChemicalStockControlPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(c.TEXT_AREA_FIELD_DATA);
        break;

      case "will the regulatory affairs and compliance officer discharge all licence responsibilities":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeWhichCategoryIsTheSubstancePage("Category 1");
        await this.pages.pcaWhichChemicalAreYouApplyingForPage.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
        await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
        await this.pages.pcaSubstancesInYourLicencePage.completeSubstancesInYourLicencePage();
        await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.pcaUploadCertificateOfGoodConductPage.completeUploadCertificateOfGoodConductPage("yourself.png");
        await this.pages.pcaTellUsAboutYourMainCustomersPage.completeTellUsAboutYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaTellUsAboutYourMainSuppliersPage.completeTellUsAboutYourMainSuppliersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
        await this.pages.pcaDescribeHowYouSecureYourPremisesPage.completeDescribeHowYouSecureYourPremisesPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.completeDescribeHowYouManageChemicalStockControlPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.completeWhichEmailAddressShouldTheLicenceBeSentToPage(c.SAS_HOF_EMAIL);
        await this.pages.pcaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL);
        break;

      case "has your companies house reference number changed since your last application?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        break;

      case "why are you requesting a new license?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        break;

      case "is the new site part of a contractual agreement?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
        break;

      default:
        throw new Error("Failed: Wrong page name: " + pageName);
    }
  }

  async enterTextIntoTextArea(charSize: string, pageName: string): Promise<void> {
    const textValue = this.pages.basePage.generateRandomAlphabetString(Number.parseInt(charSize, 10));

    switch (pageName.toLowerCase()) {
      case "tell us about your main customers":
        await this.pages.pcaTellUsAboutYourMainCustomersPage.clearAndEnterTextInElement(this.pages.pcaTellUsAboutYourMainCustomersPage.textField, textValue);
        break;

      case "tell us about your main suppliers":
        await this.pages.pcaTellUsAboutYourMainSuppliersPage.clearAndEnterTextInElement(this.pages.pcaTellUsAboutYourMainSuppliersPage.textField, textValue);
        break;

      case "describe how you secure your premises":
        await this.pages.pcaDescribeHowYouSecureYourPremisesPage.clearAndEnterTextInElement(this.pages.pcaDescribeHowYouSecureYourPremisesPage.textField, textValue);
        break;

      case "describe how you make sure chemicals are stored and handled securely":
        await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.clearAndEnterTextInElement(this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.textField, textValue);
        break;

      case "describe how you manage chemical stock control":
        await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.clearAndEnterTextInElement(this.pages.pcaDescribeHowYouManageChemicalStockControlPage.textField, textValue);
        break;

      case "describe how you work to make sure end products are used legitimately":
        await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.clearAndEnterTextInElement(this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.textField, textValue);
        break;

      case "summarise your standard operating procedures and auditing practices for the use or disposal of chemicals":
        await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.clearAndEnterTextInElement(this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.textField, textValue);
        break;

      case "will the regulatory affairs and compliance officer discharge all licence responsibilities?":
        await this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clearAndEnterTextInElement(this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.textAreaField, textValue);
        break;

      case "add any extra information you think might help your application (optional)":
        await this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.clearAndEnterTextInElement(this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.textAreaField, textValue);
        break;

      case "tell us more about the contract and how it affects your licence application":
        await this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
        break;

      default:
        throw new Error("Failed: Wrong page name: " + pageName);
    }
  }




  async answersPrecursorChemicalsFormForContinuingAnApplication(scenario: string): Promise<void> {
    switch (scenario.toLowerCase()) {
      case "t1: a first time licensee - page: which category is the substance?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(c.RESPONSE_YES);
        await this.pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.pcaWhichCategoryIsTheNewSubstancePage.completeAndSelectSaveAndExitWhichCategoryIsTheSubstancePage("Category 1");
        break;

      case "t2: existing licensee renewing or changing a currently licensed site - page: has the guarantor subscribed to dbs updates?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.pcaResponsibleOfficerDetailsPage.completeResponsibleOfficerDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.pcaGuarantorDetailsPage.completeGuarantorDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeAndSelectSaveAndExitHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        break;

      case "t3: existing licensee applying for a new site - page: when does the contract start?":
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
        await this.pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
        await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
        await this.pages.pcaWhenDoesTheContractStartPage.completeAndSelectSaveAndExitWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
        break;

      default:
        throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
  }
}

const { When, Then } = createBdd(test);

export async function i_choose_to_navigate_to_page_for_pca(pages: Pages, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pcaStepLib.navigateToPage(pageName);
}

When("I choose to navigate to {string} page for PCA", async ({ pages }, pageName: string) => {
  await i_choose_to_navigate_to_page_for_pca(pages, pageName);
});

export async function i_answer_on_page_for_pca_and_choose_to_continue(pages: Pages, answer: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pcaStepLib.answerToPage(answer, pageName);
}

When("I answer {string} on {string} page for PCA and choose to continue", async ({ pages }, answer: string, pageName: string) => {
  await i_answer_on_page_for_pca_and_choose_to_continue(pages, answer, pageName);
});

export async function i_choose_to_select_on_page_and_choose_to_continue_for_pca(pages: Pages, answer: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pcaStepLib.answerToPage(answer, pageName);
}

When("I choose to select {string} on {string} page and choose to continue for PCA", async ({ pages }, answer: string, pageName: string) => {
  await i_choose_to_select_on_page_and_choose_to_continue_for_pca(pages, answer, pageName);
});

export async function iChooseToSelectAndEnterAsApplicationReferenceNumberOnPageAndChooseToContinueForPCA(pages: Pages, applicationRefNo: string, page: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pages.pcaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
}

When("I choose to enter {string} as application reference number on {string} page and choose to continue for PCA", async ({ pages }, applicationRefNo: string, page: string) => {
  await iChooseToSelectAndEnterAsApplicationReferenceNumberOnPageAndChooseToContinueForPCA(pages, applicationRefNo, page);
});

export async function i_complete_the_fields_below_with_licence_holder_details(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const companyName = data["Company name"];
  const companyNumber = data["Company number"];
  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];
  const websiteUrl = data["Website URL"];

  await pages.pcaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
}

When("I complete the fields below with Licence holder details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_licence_holder_details(pages, dataTable);
});

export async function i_complete_the_fields_below_with_licence_holder_address_details(pages: Pages, pageName: string, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const addressLine1 = data["Address line 1"];
  const addressLine2 = data["Address line 2"];
  const townOrCity = data["Town or City"];
  const postcode = data["Postcode"];

  switch (pageName.toLowerCase()) {
    case "licence":
      await pages.pcaLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
      break;

    case "premises":
      await pages.pcaPremisesAddressPage.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
      break;

    case "invoicing":
      await pages.pcaInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
      break;

    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
}

When("I complete the fields below with {string} address details for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_licence_holder_address_details(pages, pageName, dataTable);
});

When("I complete the fields below with {string} holder address details for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_licence_holder_address_details(pages, pageName, dataTable);
});

export async function i_complete_the_fields_below_with_invoicing_contact_details(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const fullName = data["Full name"];
  const emailAddress = data["Email address"];
  const ukTelephoneNo = data["UK telephone number"];
  const purchaseOrderNo = data["Purchase order number"];

  await pages.pcaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
}

When("I complete the fields below with Invoicing contact details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_invoicing_contact_details(pages, dataTable);
});

export async function i_complete_the_fields_below_with_premises_contact_details_for_pca(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];

  await pages.pcaPremisesContactDetailsPage.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
}

When("I complete the fields below with Premises contact details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_premises_contact_details_for_pca(pages, dataTable);
});

export async function i_complete_the_fields_below_with_for_pca(pages: Pages, pageName: string, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
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
}

When("I complete the fields below with {string} for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_for_pca(pages, pageName, dataTable);
});

export async function i_complete_the_fields_below_with_dbs_information_for_the_responsible_officer_for_pac(pages: Pages, pageName: string, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();
  const fullName = data["Full name"];
  const dbsReference = data["DBS reference"];
  const dayMonthYear = data["Day month year"];

  switch (pageName.toLowerCase()) {
    case "dbs information":
      await pages.pcaDbsInformationPage.completeDbsInformationForTheResponsibleOfficePage(fullName, dbsReference, dayMonthYear);
      break;

    case "guarantor dbs":
      await pages.pcaGuarantorDbsInformationPage.completeGuarantorDbsInformationPage(fullName, dbsReference, dayMonthYear);
      break;

    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
}

When("I complete the fields below with {string} information for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_dbs_information_for_the_responsible_officer_for_pac(pages, pageName, dataTable);
});

When("I complete the fields below with {string} for the responsible officer for PCA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_dbs_information_for_the_responsible_officer_for_pac(pages, pageName, dataTable);
});

export async function i_enter_characters_in_the_text_area_box_field_on_page_for_pca(pages: Pages, charSize: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pcaStepLib.enterTextIntoTextArea(charSize, pageName);
}

When("I enter {string} characters in the text area box field on {string} page for PCA", async ({ pages }, charSize: string, pageName: string) => {
  await i_enter_characters_in_the_text_area_box_field_on_page_for_pca(pages, charSize, pageName);
});

export async function i_choose_to_select_option_on_the_page_for_pca(pages: Pages, option: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  await pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(option);
}

When("I choose to select {string} option on the {string} page for PCA", async ({ pages }, option: string, pageName: string) => {
  await i_choose_to_select_option_on_the_page_for_pca(pages, option, pageName);
});

export async function i_enter_into_the_email_field_on_page_for_pca(pages: Pages, value: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  switch (pageName.toLowerCase()) {
    case "which email address should the licence be sent to?":
      await pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.completeWhichEmailAddressShouldTheLicenceBeSentToPage(value);
      break;

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
}

When("I enter {string} into {string} field and page for PCA", async ({ pages }, value: string, pageName: string) => {
  await i_enter_into_the_email_field_on_page_for_pca(pages, value, pageName);
});

When("I enter {string} into the email field on {string} page for PCA", async ({ pages }, value: string, pageName: string) => {
  await i_enter_into_the_email_field_on_page_for_pca(pages, value, pageName);
});

export async function iSelectCheckboxOnPageForPCA(pages: Pages, checkboxLabel: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  switch (pageName.toLowerCase()) {
    case "which chemical are you applying for?":
      await pages.pcaWhichChemicalAreYouApplyingForPage.selectOwnChemicalCheckboxOnWhichChemicalAreYouApplyingForPage(checkboxLabel);
      break;

    default:
      throw new Error("Failed: Wrong page name: " + pageName);
  }
}

When("I select {string} checkbox on {string} page for PCA", async ({ pages }, checkboxLabel: string, pageName: string) => {
  await iSelectCheckboxOnPageForPCA(pages, checkboxLabel, pageName);
});

export async function i_complete_the_fields_below_with_who_is_completing_the_application_details_for_pca(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const fullName = data["Full name"];
  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];

  await pages.pcaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(fullName, ukTelephoneNo, emailAddress);
}

When("I complete the fields below with Who is completing the application details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_who_is_completing_the_application_details_for_pca(pages, dataTable);
});

export async function i_complete_the_fields_below_with_will_the_regulatory_affairs_and_compliance_officer_discharge_all_licence_responsibilities_details_details_for_pca(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const radioOption = data["Radio Option"];
  const textArea = data["Text Area"];

  await pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(radioOption, textArea);
}

When("I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_will_the_regulatory_affairs_and_compliance_officer_discharge_all_licence_responsibilities_details_details_for_pca(pages, dataTable);
});

export async function linkIsDisplayedOnThePageForPCA(pages: Pages, linkText: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
}

Then("{string} link is displayed on the page for PCA", async ({ pages }, linkText: string) => {
  await linkIsDisplayedOnThePageForPCA(pages, linkText);
});
