import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

const { When, Then } = createBdd(test);

// Scenario: Controlled Drugs tests
When('I fill out the answers to Controlled Drugs form pertaining to {string} happy path test', async ({ pages }, scenario: string) => {
    await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
    await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
    switch (scenario.toLowerCase()) {
        case "t1: a new application - a first time licensee - alarm system questions are included [full path]":

            // await new CdaStepLib(pages).completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);

            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
            await pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
            await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
            await pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
            await pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
            await pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
            await pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
            await pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
            await pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
            await pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
            await pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
            await pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage("1FULL HOF1", c.AGENT_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPage.completeDbsInformationForPage("1FULL DBS HOF1", c.DBS_REFERENCE, c.YESTERDAYS_DATE, c.RESPONSE_YES);
            await pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
            await pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage("2FULL HOF2", c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPage.completeDbsInformationForPage("2FULL DBS HOF2", c.DBS_REFERENCE, c.YESTERDAYS_DATE, c.RESPONSE_NO);
            await pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
            await pages.cdaUsingTheDbsUpdateServicePage.completeUsingTheDbsUpdateServicePage();
            await pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
            await pages.cdaSpecifyYourTradingReasonPage.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaSummaryOfTradingReasonsPage.clickAddAnother();
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
            await pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, "Lic123456", c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
            await pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("Reg123456", c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheServicePage.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage("Tomorrow's date");
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
            await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
            await pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfWhereTheyAreStoredPage.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
            await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
            await pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
            await pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
            await pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
            break;
        case "t2: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are included [full path]":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
            await pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
            await pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
            await pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
            await pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
            await pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
            await pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
            await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
            await pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
            await pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
            await pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
            await pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
            await pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
            await pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
            await pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_NO);
            await pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
            await pages.cdaSpecifyYourTradingReasonPage.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
            await pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
            await pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("RegTest", c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheServicePage.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage("tomorrow's date");
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
            await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
            await pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfWhereTheyAreStoredPage.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
            await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
            await pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
            await pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
            await pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
            break;
        case "t3: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are excluded":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
            await pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
            await pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
            await pages.cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
            await pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
            await pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
            await pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
            await pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
            await pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
            await pages.cdaUsingTheDbsUpdateServicePage.completeUsingTheDbsUpdateServicePage();
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Importer");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
            break;
        case "t4: a new application - existing licensee applying for a new site - alarm system questions are excluded":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("We are moving site");
            await pages.cdaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(c.TOMORROWS_DATE);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
            break;
        case "t5: a new application - existing licensee applying for a new site - alarm system questions are excluded [full path]":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
            await pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
            break;
        case "t6: a new application - existing licensee applying for a new site - alarm system questions are included":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
            await pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
            await pages.cdaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(c.TOMORROWS_DATE);
            await pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
            await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
            await pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_NO);
            await pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
            await pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
            await pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_NO);
            await pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
            break;
        case "t7: amend a pending application - alarm system questions are included [full path]":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.AMEND_PENDING_APPLICATION);
            await pages.cdaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage("12322");
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
            await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
            await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
            await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
            await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
            await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
            await pages.cdaUploadControlledDrugUserActivityTemplatePage.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
            break;
        default:
            throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
    await pages.cdaStandardOperatingProceduresPage.completeStandardOperatingProceduresPage(c.RESPONSE_YES);
    await pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(c.TEXT_AREA_FIELD_DATA);
    await pages.cdaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
    await pages.cdaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
    await pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
    await pages.cdaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(c.TEXT_AREA_FIELD_DATA);
    await pages.cdaCheckYourAnswersPage.completeCheckYourAnswersPage();
    await pages.cdaDeclarationPage.completeDeclarationPage("I understand and agree with these statements");
    await pages.cdaApplicationSubmittedPage.completeApplicationSubmittedPage();
});

When("I fill out the answers to Controlled drugs for a first time licensee form and no activity is selected", async ({ pages }) => {
    await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
    await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
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
    await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
    await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
    await pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
    await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
});

When("I choose to enter {string} as application reference number on {string} page and choose to continue for CDA", async ({ pages }, applicationRefNo: string, _page: string) => {
    await pages.cdaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
});

When("I choose to select {string} on {string} page and choose to continue for CDA", async ({ pages }, answer: string, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "what type of licence are you applying for?":
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
            break;
        case "how are you applying for your controlled drugs licence?":
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(answer);
            break;
        case "is the premises address the same as the licence holder address?":
            await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
            break;
        case "how are you funded?":
            await pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage(answer);
            break;
        case "has the managing director or person in charge subscribed to dbs updates?":
            await pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(answer);
            break;
        case "are they, or anyone named on this application, a member of a professional bodys?":
            await pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(answer);
            break;
        case "has anyone in your organisation ever received a criminal conviction?":
            await pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(answer);
            break;
        case "who is responsible for legal compliance and regulatory affairs?":
            await pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(answer);
            break;
        case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
            await pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(answer);
            break;
        case "is the person responsible for legal compliance and regulatory affairs an employee or consultant?":
            await pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(answer);
            break;
        case "what trading reasons does this site need a licence for?":
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage(answer);
            break;
        case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
            break;
        case "is your business registered with the care quality commission or scottish and welsh equivalents?":
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
            break;
        case "are you providing a service under a contract?":
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(answer);
            break;
        case "what date does the service expire on?":
            await pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage(answer);
            break;
        case "which of the following security features does the site have?":
            await pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage(answer);
            break;
        case "are controlled drugs kept in a separate room or zone?":
            await pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(answer);
            break;
        case "are the controlled drugs kept in a prefabricated strong room?":
            await pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(answer);
            break;
        case "are controlled drugs kept at this site?":
            await pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(answer);
            break;
        case "standard operating procedures":
            await pages.cdaStandardOperatingProceduresPage.completeStandardOperatingProceduresPage(answer);
            break;
        case "is there a separate zone for the controlled drug cabinet, safe or store?":
            await pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(answer);
            break;
        case "is the alarm system monitored by an offsite alarm receiving centre?":
            await pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(answer);
            break;
        case "is the alarm system connected to the alarm receiving centre either by redcare or by a dual-path communicator?":
            await pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(answer);
            break;
        case "is the alarm system serviced annually?":
            await pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(answer);
            break;
        case "does the alarm system have a police unique reference number (urn)?":
            await pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(answer);
            break;
        case "which email address should we send the licence to?":
            await pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(answer);
            break;
        case "has your companies house reference number changed since your last application?":
            await pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
            break;
        case "has your registered name at companies house changed since your last application?":
            await pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
            break;
        case "are you requesting a change in authorised witness for this site only?":
            await pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(answer);
            break;
        case "are you requesting additional schedules?":
            await pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(answer);
            break;
        case "are you requesting a change of activity?":
            await pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(answer);
            break;
        case "why are you requesting a new licence?":
            await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage(answer);
            break;
        case "is the new site part of a contractual agreement?":
            await pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
            break;
        case "who is responsible for the security of the premises?":
            await pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage(answer);
            break;
        case "has the person responsible for the security of the premises subscribed to dbs updates?":
            await pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(answer);
            break;
        case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
            await pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(answer);
            break;
        case "does your company have any authorised witnesses for the destruction of controlled drugs?":
            await pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(answer);
            break;
        case "are controlled drugs kept in a safe or cabinet?":
            await pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(answer);
            break;
        case "does the site have an electronic alarm system?":
            await pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(answer);
            break;
        case "does the alarm system have either a level 1 or ‘immediate’ police response?":
            await pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(answer);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I choose to navigate to {string} page for CDA", async ({ pages }, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "how would you like to apply?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            break;
        case "how are you applying for your controlled drugs licence?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            break;
        case "provide details of the legal business proceedings":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
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
            await pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
            break;
        case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
            await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
            await pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
            await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
            await pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
            await pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
            await pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
            await pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
            await pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            break;
        case "upload company registration certificate":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            break;
        case "site owner’s contact details":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
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
            await pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
            await pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
            await pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
            await pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
            await pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
            await pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Leased");
            break;
        case "has your companies house reference number changed since your last application?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
            break;
        case "why are you requesting a new licence?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            break;
        case "is the new site part of a contractual agreement?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.CDA_USER_NAME, c.CDA_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
            await pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.START_NEW_APPLICATION);
            await pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with Licence holder details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const companyName = data["Company name"];
    const companyNumber = data["Company number"];
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const websiteUrl = data["Website URL"];
    await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
});

When("I complete the fields below with {string} address details for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    switch (pageName.toLowerCase()) {
        case "licence":
            await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "premises":
            await pages.cdaPremisesAddressPage.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "invoicing":
            await pages.cdaInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with {string} holder address details for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    switch (pageName.toLowerCase()) {
        case "licence":
            await pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "premises":
            await pages.cdaPremisesAddressPage.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "invoicing":
            await pages.cdaInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with Invoicing contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK telephone number"];
    const purchaseOrderNo = data["Purchase order number"];
    await pages.cdaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
});

When("I complete the fields below with Who is completing the application for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK contact number"];
    await pages.cdaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(fullName, emailAddress, ukTelephoneNo);
});

When("I complete the fields below with Premises contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
});

When("I complete the fields below with {string} for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const checkBox = data["Confirm check box"];
    switch (pageName.toLowerCase()) {
        case "managing director or person in charge":
            await pages.cdaManagingDirectorOrPersonInChargePage.enterManagingDirectorOrPersonInChargeFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for the security of the premises":
            await pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.enterPersonResponsibleForTheSecurityOfThePremisesFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for legal compliance and regulatory affairs":
            await pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.enterPersonResponsibleForLegalComplianceAndRegulatoryAffairsFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for witnessing the destruction of controlled drugs":
            await pages.cdaAuthorisedWitnessInformationPage.enterFullNameAndEmailDetailsWithoutConfirmingDbs(fullName, emailAddress);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
    if (checkBox.toLowerCase() === "ticked".toLowerCase()) {
        await pages.basePage.selectRadioOptionWithText("I confirm this person has applied");
    }
    await pages.basePage.clickSaveAndContinue();
});

When("I complete the fields below with {string} information for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    switch (pageName.toLowerCase()) {
        case "dbs information for the person in charge":
            await pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for security of premises":
            await pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for compliance and regulatory affairs":
            await pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(fullName, dbsReference, dayMonthYear);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with DBS information for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    const dbsUpdateService = data["DBS Update Service"];
    await pages.cdaDbsInformationForPage.completeDbsInformationForPage(fullName, dbsReference, dayMonthYear, dbsUpdateService);
});

When("I complete the fields below with Licence details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const licenceNo = data["Licence number"];
    const licenceType = data["Licence type"];
    const dayMonthYear = data["Day month year"];
    await pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(licenceNo, licenceType, dayMonthYear);
});

When("I complete the fields below with Registration details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const registrationNumber = data["Registration number"];
    const dayMonthYear = data["Day month year"];
    await pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(registrationNumber, dayMonthYear);
});

When("I complete the fields below with Site owner’s contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const contactTelNo = data["Contact telephone number"];
    const address = data["Address"];
    if (address.toLowerCase() === "Enter 2001 characters".toLowerCase()) {
        const charSize = address.replace(/[^0-9]/g, "");
        const addressInput = pages.basePage.generateRandomAlphabetCharacters(charSize);
        await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, addressInput);
    }
    else {
        await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, address);
    }
});

When("I complete the fields below with Electronic alarm system details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const installingCompanyName = data["Installing company name"];
    const installingCompanyAddress = data["Installing company address"];
    const installingCompanyRegistered = data["Who is the installing company registered with"];
    if (installingCompanyAddress.toLowerCase() === "Enter 501 characters".toLowerCase()) {
        const charSize = installingCompanyAddress.replace(/[^0-9]/g, "");
        const addressInput = pages.basePage.generateRandomAlphabetCharacters(charSize);
        await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(installingCompanyName, addressInput, installingCompanyRegistered);
    }
    else {
        await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(installingCompanyName, installingCompanyAddress, installingCompanyRegistered);
    }
});

When("I enter {string} characters in the text area box field on {string} page for CDA", async ({ pages }, charSize: string, pageName: string) => {
    const textValue = pages.basePage.generateRandomAlphabetString(Number.parseInt(charSize, 10));
    switch (pageName.toLowerCase()) {
        case "provide details of the professional bodies and relevant reference numbers":
            await pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.textArea, textValue);
            break;
        case "provide details of the legal business proceedings":
            await pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.textArea, textValue);
            break;
        case "specify your trading reason":
            await pages.cdaSpecifyYourTradingReasonPage.clearAndEnterTextInElement(pages.cdaSpecifyYourTradingReasonPage.textAreaField, textValue);
            break;
        case "explain why you are applying for a licence, your business purposes and what you plan to use it for":
            await pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.clearAndEnterTextInElement(pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.textAreaField, textValue);
            break;
        case "provide details of your main customers":
            await pages.cdaProvideDetailsOfYourMainCustomersPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfYourMainCustomersPage.textAreaField, textValue);
            break;
        case "provide details of where you source the drugs from":
            await pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.textAreaField, textValue);
            break;
        case "provide details of any other regulatory bodies that you are registered with (optional)":
            await pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.textAreaField, textValue);
            break;
        case "provide details of the service":
            await pages.cdaProvideDetailsOfTheServicePage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfTheServicePage.textAreaField, textValue);
            break;
        case "give details of specifications, and any serial numbers that apply":
            await pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.clearAndEnterTextInElement(pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.textAreaField, textValue);
            break;
        case "provide details of where they are stored":
            await pages.cdaProvideDetailsOfWhereTheyAreStoredPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfWhereTheyAreStoredPage.textAreaField, textValue);
            break;
        case "provide details of your record keeping system and procedures":
            await pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.clearAndEnterTextInElement(pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.textAreaField, textValue);
            break;
        case "add any extra information you think might help your application (optional)":
            await pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clearAndEnterTextInElement(pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.textAreaField, textValue);
            break;
        case "tell us more about the contract and how it affects your licence application":
            await pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I choose to select link text {string}", async ({ pages }, linkText: string) => {
    await pages.basePage.clickLinkOrButtonWithText(linkText);
});

When("I choose to complete the first activities page with {string} value and leave the rest of the activities uncompleted", async ({ pages }, value: string) => {
    await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(value);
    await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
});

When("I select Confirm Submission on Check Your Answers Page CDA", async ({ pages }) => {
    await pages.cdaCheckYourAnswersPage.completeCheckYourAnswersPage();
});

When("I enter {string} into {string} field and page for CDA", async ({ pages }, value: string, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "when are you moving site?":
            await pages.cdaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(value);
            break;
        case "when does the contract start?":
            await pages.cdaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(value);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

Then("{string} link is displayed on the page for CDA", async ({ pages }, linkText: string) => {
    expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
});
