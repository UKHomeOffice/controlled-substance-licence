import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

const { Given, When, Then } = createBdd(test);

Given('I visit the Controlled substance licence application page', async ({ pages }) => {
  await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.openCls();
});

When('I partially completing {string} form, then save and exit on {string} page', async ({ pages }, application: string, scenario: string) => {
  switch (application.toLowerCase()) {

    case 'controlled drugs':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
      switch (scenario.toLowerCase()) {
        case "t1: a first time licensee - page: are you providing a service under a contract?":
          await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
          await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
          await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
          await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
          await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
          await pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
          await pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
          await pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
          await pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
          await pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
          await pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
          await pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
          await pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
          await pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
          await pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
          await pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
          await pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
          await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Exporter");
          await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
          await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
          await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
          await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
          await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
          await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
          await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
          await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAndSelectSaveAndExitAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
          break;
        case "t2: existing licensee renewing or changing a currently licensed site - page: is the premises address the same as the licence holder address?":
          await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
          await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
          await pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
          await pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
          await pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
          await pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
          await pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
          await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
          await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeAndSelectSaveAndExitIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
          break;
        case "t3: existing licensee applying for a new site - page: is the new site part of a contractual agreement?":
          await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
          await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
          await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
          await pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
          break;
        default:
          throw new Error("Failed: Wrong radio value scenario name: " + scenario);
      }
      break;
    case 'low thc cannabis':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

      switch (scenario.toLowerCase()) {
        //A first time licensee
        case "t1: a first time licensee - page: do you hold any home office or other regulatory licenses?":
          await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
          await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.FIRST_TIME_LICENSEE);
          await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
          await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
          await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
          await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
          await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
          await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
          await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
          await pages.lthccAuthorisedWitnessDetailsPage.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
          await pages.lthccDbsInformationForAuthorisedWitnessPage.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
          await pages.lthccHasTheAuthorisedWitnessSubscribedToDbsPage.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
          await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
          await pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
          await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
          await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeAndSelectSaveAndExitDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
          break;
        case "t2: existing licensee renewing or changing a currently licensed site - page: has the responsible person subscribed to dbs updates?":
          await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
          await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
          await pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
          await pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
          await pages.lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("cslCdat.pdf");
          await pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
          await pages.lthccAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_YES);
          await pages.lthccAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_YES);
          //Existing licensee renewing or changing a currently licensed site
          await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
          await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
          await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
          await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
          await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
          await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeAndSelectSaveAndExitHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
          break;
        case "t3: existing licensee applying for a new site - page: is the new site part of a contractual agreement?":
          await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
          await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
          await pages.lthccWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicencePage("For another site");
          await pages.lthccIsTheNewSitePartOfAContractualAgreementPage.completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
          break;
        default:
          throw new Error("Failed: Wrong radio value scenario name: " + scenario);
      }
      break;
    case 'precursor chemicals':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      switch (scenario.toLowerCase()) {
        case "t1: a first time licensee - page: which category is the substance?":
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
          await pages.pcaWhichCategoryIsTheNewSubstancePage.completeAndSelectSaveAndExitWhichCategoryIsTheSubstancePage("Category 1");
          break;
        case "t2: existing licensee renewing or changing a currently licensed site - page: has the guarantor subscribed to dbs updates?":
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
          await pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.completeAndSelectSaveAndExitHasTheGuarantorSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
          break;
        case "t3: existing licensee applying for a new site - page: when does the contract start?":
          await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
          await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
          await pages.pcaWhyAreYouRequestingANewLicensePage.completeWhyAreYouRequestingANewLicensePage("For another site");
          await pages.pcaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
          await pages.pcaWhenDoesTheContractStartPage.completeAndSelectSaveAndExitWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
          break;

        default:
          throw new Error("Failed: Wrong radio value scenario name: " + scenario);
      }
      break;
      
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I fill out the answers to {string} existing licensee renewing or changing a currently licensed site form pertaining to cannot continue with application form', async ({ pages }, application: string) => {
  switch (application.toLowerCase()) {
    case 'controlled drugs':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
      await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
      await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      await pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
      await pages.cdaYouCannotContinueThisApplicationPage.completeYouCannotContinueThisApplicationPage();
      break;
    case 'low thc cannabis':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
      await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
      await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      await pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
      await pages.lthccYouCannotContinueThisApplicationPage.completeYouCannotContinueThisApplicationPage();
      break;
    case 'precursor chemicals':
      await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.PRECURSOR_CHEMICALS);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(c.START_NEW_APPLICATION);
      await pages.pcaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
      await pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
      await pages.pcaYouCannotContinueThisApplicationPage.completeYouCannotContinueThisApplicationPage();
      break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I select save and continue for CDA', async ({ pages }) => {
  await pages.basePage.clickSaveAndContinue();
});

When('I choose to navigate to {string} page', async ({ pages }, _pageName: string) => {
  await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
});

Then(/^I (?:should (?:see|be returned to)(?= "[^"]*" page for )|am navigated to) "([^"]*)" page(?: for (?:LTHCC|CDA|PCA|Registration))?$/, async ({ page }, heading: string) => {
  await expect(page.locator('h1')).toHaveText(heading);
});

Then('{string} text is displayed as page header', async ({ page }, heading: string) => {
  await expect(page.locator('h1')).toHaveText(heading);
});

When('I select {string} link on page', async ({ pages }, text: string) => {
  await pages.basePage.clickLinkWithText(text);
});

When('I select the sign in again button on {string} form', async ({ pages }, application: string) => {
  switch (application.toLowerCase()) {
    case 'controlled drugs':
      await pages.cdaWeSavedYourApplicationAndSignedYouOutPage.SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut();
      break;
    case 'low thc cannabis':
      await pages.lthccWeSavedYourApplicationAndSignedYouOutPage.SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut();
      break;
    case 'precursor chemicals':
      await pages.pcaWeSavedYourApplicationAndSignedYouOutPage.SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut();
      break;
    default: throw new Error(`Wrong application form name: ${application}`);
  }
});

When('I choose to sign in, then select {string} form and then select {string} option', async ({ pages }, application: string, option: string) => {
  await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
  switch (application.toLowerCase()) {
    case 'controlled drugs':
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(option);
      break;
    case 'low thc cannabis':
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(option);
      break;
    case 'precursor chemicals':
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.PCA_USER_NAME, c.PCA_PASSWORD);
      await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(option);
      break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I choose to sign in as {string} user', async ({ pages }, userType: string) => {
  switch (userType.toLowerCase()) {
    case 'valid':
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
      break;
    case 'pending':
      await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME_PENDING, c.PASSWORD_PENDING);
      break;
    default: throw new Error(`Wrong user type: ${userType}`);
  }
});

When(/^I (?:choose to select the|select) "([^"]*)" (?:link|button)$/, async ({ pages }, text: string) => {
  await pages.basePage.clickLinkOrButtonWithText(text);
});


Then('the link opens in a new tab and URL is loaded', async ({ pages }) => {
  await pages.basePage.switchToTab(1);
  expect(pages.basePage.getOpenTabCount()).toBeGreaterThan(1);
  expect(pages.basePage.getCurrentUrl().trim()).not.toBe('');
  await pages.basePage.switchToTab(0);
});

When(/^I select (?:the continue button|continue(?: on the (?:What your business does page for REG|Licence details page for CDA|Summary of trading reason page for CDA))?)$/, async ({ pages }) => {
  await pages.basePage.clickContinue();
});

When(/^I select save and continue(?: on the (?:What your business does page for REG|Licence details page for CDA|Summary of trading reason page for CDA))?$/, async ({ pages }) => {
  await pages.basePage.clickSaveAndContinue();
});

When('I select confirm and submit button', async ({ pages }) => { await pages.basePage.clickConfirmAndSubmit(); });

When('I select submit registration button', async ({ pages }) => { await pages.basePage.clickSubmitRegistration(); });

When('I select the back button', async ({ pages }) => { await pages.basePage.navigateBackLink.click(); });

Then('I should see {string} error message displayed', async ({ pages }, text: string) => {
  await expect(pages.basePage.errorSummaryTitle).toHaveText(text);
});

Then('I should see {string} error summary', async ({ pages }, text: string) => {
  await expect(pages.basePage.errorSummaryList.locator('li')).toHaveText(text.split('¬'));
});

Then('I should see {string} count error message displayed on the text area field', async ({ pages }, text: string) => {
  await expect(pages.basePage.remainingCharactersError).toHaveText(text);
});

Then('I should see {string} count message displayed on the text area field', async ({ pages }, text: string) => {
  const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const countPattern = escaped.replace(
    /\d[\d,]*/g,
    count =>
      count.replaceAll(',', '').replace(/\B(?=(\d{3})+(?!\d))/g, ',?')
  );
  await expect(pages.basePage.remainingCharacters).toHaveText(new RegExp(`^${countPattern}$`));
});

When('I select (save and )continue on upload photo', async ({ pages }) => {
  await pages.basePage.selectContinueUploadBtn();
});

When('I choose to upload (another ){string} file', async ({ pages }, fileName: string) => {
  await pages.basePage.uploadFileFromUserUploadFolder(fileName);
});

Then('I should see {string} error for max upload file', async ({ pages }, text: string) => {
  expect((await pages.basePage.getFileUploadErrorMaxFileSizeMgs()).replace('Error:\n', '')).toBe(text);
});

Then('I should see {string} error for type of uploaded file', async ({ pages }, text: string) => {
  expect((await pages.basePage.getFileUploadErrorMaxFileTypeMgs()).replace('Error:\n', '')).toBe(text);
});

Then('I should see {string} page', async ({ page }, title: string) => { await expect(page).toHaveTitle(title); });

Then('I should see the {string} link', async ({ pages }, text: string) => {
    expect(await pages.basePage.isLinkTextDisplayed(text)).toBe(true);
});