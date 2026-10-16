import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib as c} from '../utility-helper/constants-lib';
const { When } = createBdd(test);
export class CdaStepLib extends CommonCslStepLib {
    async completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(option1: string, option2: string): Promise<void> {
        await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(option1);
        await this.pages.cdaWhatTypeOfLicenseeAreYouPage.completeWhatTypeOfLicenseeAreYouPage(option2);
    }
    async completeUsingTheDbsUpdateServicePagePage(): Promise<void> {
        await this.pages.cdaUsingTheDbsUpdateServicePage.assertPageTitle();
        expect(await this.pages.basePage.isLinkTextDisplayed("DBS Update Service (opens in a new tab)")).toBe(true);
        expect(await this.pages.basePage.isLinkTextDisplayed("dflu.dom@homeoffice.gov.uk")).toBe(true);
        await this.pages.cdaUsingTheDbsUpdateServicePage.clickSaveAndContinue();
    }
    async completeUploadControlledDrugUserActivityTemplatePage(uploadFile: string): Promise<void> {
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.assertPageTitle();
        expect(await this.pages.basePage.isLinkTextDisplayed("Download the template (XLSX, 15.4KB)")).toBe(true);
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.uploadFileFromUserUploadFolder(uploadFile);
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.selectContinueUploadBtn();
    }
    async answersControlledDrugsFormFor(scenario: string): Promise<void> {
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        switch (scenario.toLowerCase()) {
            case "t1: a new application - a first time licensee - alarm system questions are included [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
                await this.pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage("1FULL HOF1", c.AGENT_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPage.completeDbsInformationForPage("1FULL DBS HOF1", c.DBS_REFERENCE, c.YESTERDAY_S_DATE, c.RESPONSE_YES);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
                await this.pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage("2FULL HOF2", c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPage.completeDbsInformationForPage("2FULL DBS HOF2", c.DBS_REFERENCE, c.YESTERDAY_S_DATE, c.RESPONSE_NO);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
                await this.completeUsingTheDbsUpdateServicePagePage();
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
                await this.pages.cdaSpecifyYourTradingReasonPage.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaSummaryOfTradingReasonsPage.clickAddAnother();
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
                await this.pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, "Lic123456", c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
                await this.pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("Reg123456", c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheServicePage.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage("Tomorrow's date");
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
                await this.pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t2: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are included [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_NO);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
                await this.pages.cdaSpecifyYourTradingReasonPage.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
                await this.pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
                await this.pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("RegTest", c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheServicePage.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage("tomorrow's date");
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
                await this.pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t3: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are excluded":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
                await this.pages.cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
                await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
                await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.pages.cdaAuthorisedWitnessInformationPage.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPage.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.completeWitnessesYouHaveToldUsAboutPage();
                await this.completeUsingTheDbsUpdateServicePagePage();
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Importer");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t4: a new application - existing licensee applying for a new site - alarm system questions are excluded":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("We are moving site");
                await this.pages.cdaWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t5: a new application - existing licensee applying for a new site - alarm system questions are excluded [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t6: a new application - existing licensee applying for a new site - alarm system questions are included":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
                await this.pages.cdaWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
                await this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_NO);
                await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_NO);
                await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t7: amend a pending application - alarm system questions are included [full path]":
                await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.AMEND_PENDING_APPLICATION);
                await this.pages.cdaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage("12322");
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
        await this.pages.cdaStandardOperatingProceduresPage.completeStandardOperatingProceduresPage(c.RESPONSE_YES);
        await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.cdaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
        await this.pages.cdaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE);
        await this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaCheckYourAnswersPage.completeCheckYourAnswersPage();
        await this.pages.cdaDeclarationPage.completeDeclarationPage("I understand and agree with these statements");
        await this.pages.cdaApplicationSubmittedPage.completeApplicationSubmittedPage();
    }
    async answerForWhenYouHaveNotSelectedAnyActivities(): Promise<void> {
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
        await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
        await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
        await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
        await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
        await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
        await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
        await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
        await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Exporter");
        await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
        await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
        await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
        await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
        await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
        await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
        await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("");
        await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
        await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
        await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
        await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
        await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
    }
    async answerToExistingLicenseeRenewingOrChangingCannonContinue(): Promise<void> {
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
        await this.pages.cdaYouCannotContinueThisApplicationPage.completeYouCannotContinueThisApplicationPage();
    }
    async answerToPage(answer: string, pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "what type of licence are you applying for?":
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
                break;
            case "how are you applying for your controlled drugs licence?":
                await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.completeHowAreYouApplyingForYourControlledDrugsLicencePage(answer);
                break;
            case "is the premises address the same as the licence holder address?":
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
                break;
            case "how are you funded?":
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage(answer);
                break;
            case "has the managing director or person in charge subscribed to dbs updates?":
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(answer);
                break;
            case "are they, or anyone named on this application, a member of a professional bodys?":
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(answer);
                break;
            case "has anyone in your organisation ever received a criminal conviction?":
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(answer);
                break;
            case "who is responsible for legal compliance and regulatory affairs?":
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(answer);
                break;
            case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
                await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(answer);
                break;
            case "is the person responsible for legal compliance and regulatory affairs an employee or consultant?":
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(answer);
                break;
            case "what trading reasons does this site need a licence for?":
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage(answer);
                break;
            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
                break;
            case "is your business registered with the care quality commission or scottish and welsh equivalents?":
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
                break;
            case "are you providing a service under a contract?":
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(answer);
                break;
            case "what date does the service expire on?":
                await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.completeWhatDateDoesTheServiceExpireOnPage(answer);
                break;
            case "which of the following security features does the site have?":
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage(answer);
                break;
            case "are controlled drugs kept in a separate room or zone?":
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(answer);
                break;
            case "are the controlled drugs kept in a prefabricated strong room?":
                await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(answer);
                break;
            case "are controlled drugs kept at this site?":
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(answer);
                break;
            case "standard operating procedures":
                await this.pages.cdaStandardOperatingProceduresPage.completeStandardOperatingProceduresPage(answer);
                break;
            case "is there a separate zone for the controlled drug cabinet, safe or store?":
                await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(answer);
                break;
            case "is the alarm system monitored by an offsite alarm receiving centre?":
                await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(answer);
                break;
            case "is the alarm system connected to the alarm receiving centre either by redcare or by a dual-path communicator?":
                await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(answer);
                break;
            case "is the alarm system serviced annually?":
                await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.completeIsTheAlarmSystemServicedAnnuallyPage(answer);
                break;
            case "does the alarm system have a police unique reference number (urn)?":
                await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(answer);
                break;
            case "which email address should we send the licence to?":
                await this.pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(answer);
                break;
            case "has your companies house reference number changed since your last application?":
                await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
                break;
            case "has your registered name at companies house changed since your last application?":
                await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
                break;
            case "are you requesting a change in authorised witness for this site only?":
                await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(answer);
                break;
            case "are you requesting additional schedules?":
                await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(answer);
                break;
            case "are you requesting a change of activity?":
                await this.pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(answer);
                break;
            case "why are you requesting a new licence?":
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage(answer);
                break;
            case "is the new site part of a contractual agreement?":
                await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
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
            case "how are you applying for your controlled drugs licence?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                break;
            case "licence holder details":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                break;
            case "is the premises address the same as the licence holder address?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                break;
            case "how are you funded?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                break;
            case "has the managing director or person in charge subscribed to dbs updates?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                break;
            case "provide details of the legal business proceedings":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                break;
            case "person responsible for the security of the premises":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                break;
            case "who is responsible for legal compliance and regulatory affairs?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                break;
            case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.pages.cdaPremisesAddressPage.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                break;
            case "authorised witness information":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                break;
            case "upload company registration certificate":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                break;
            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                break;
            case "are you providing a service under a contract?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                break;
            case "site owner’s contact details":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Leased");
                break;
            case "are the controlled drugs kept in a prefabricated strong room?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                break;
            case "electronic alarm system details":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                break;
            case "standard operating procedures":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "which email address should we send the licence to?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.pages.cdaLicenceDetailsPage.completeLicenceDetailsPage();
                await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                await this.pages.cdaStandardOperatingProceduresPage.completeStandardOperatingProceduresPage(c.RESPONSE_YES);
                await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
                break;
            case "has your companies house reference number changed since your last application?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                break;
            case "why are you requesting a new licence?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                break;
            case "is the new site part of a contractual agreement?":
                await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
                break;
            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    async enterTextIntoTextArea(charSize: string, pageName: string): Promise<void> {
        const textValue = this.pages.basePage.generateRandomAlphabetString(Number.parseInt(charSize, 10));
        switch (pageName.toLowerCase()) {
            case "provide details of the professional bodies and relevant reference numbers":
                await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.textArea, textValue);
                break;
            case "provide details of the legal business proceedings":
                await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.textArea, textValue);
                break;
            case "specify your trading reason":
                await this.pages.cdaSpecifyYourTradingReasonPage.clearAndEnterTextInElement(this.pages.cdaSpecifyYourTradingReasonPage.textAreaField, textValue);
                break;
            case "explain why you are applying for a licence, your business purposes and what you plan to use it for":
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.clearAndEnterTextInElement(this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.textAreaField, textValue);
                break;
            case "provide details of your main customers":
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfYourMainCustomersPage.textAreaField, textValue);
                break;
            case "provide details of where you source the drugs from":
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.textAreaField, textValue);
                break;
            case "provide details of any other regulatory bodies that you are registered with (optional)":
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.textAreaField, textValue);
                break;
            case "provide details of the service":
                await this.pages.cdaProvideDetailsOfTheServicePage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfTheServicePage.textAreaField, textValue);
                break;
            case "give details of specifications, and any serial numbers that apply":
                await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.clearAndEnterTextInElement(this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.textAreaField, textValue);
                break;
            case "provide details of where they are stored":
                await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.textAreaField, textValue);
                break;
            case "provide details of your record keeping system and procedures":
                await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.clearAndEnterTextInElement(this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.textAreaField, textValue);
                break;
            case "add any extra information you think might help your application (optional)":
                await this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clearAndEnterTextInElement(this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.textAreaField, textValue);
                break;
            case "tell us more about the contract and how it affects your licence application":
                await this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
                break;
            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    generateRandomAlphabetCharacters(charSize: string): string {
        return this.pages.basePage.generateRandomAlphabetString(Number.parseInt(charSize, 10));
    }
    async answersControlledDrugsFormForContinuingAnApplication(scenario: string): Promise<void> {
        await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        switch (scenario.toLowerCase()) {
            case "t1: a first time licensee - page: are you providing a service under a contract?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.pages.cdaHowAreYouFundedPage.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.pages.cdaManagingDirectorOrPersonInChargePage.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.pages.cdaDbsInformationForThePersonInChargePage.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.pages.cdaUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Exporter");
                await this.pages.cdaSummaryOfTradingReasonsPage.completeSummaryOfTradingReasonsPage();
                await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfYourMainCustomersPage.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.completeAndSelectSaveAndExitAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                break;
            case "t2: existing licensee renewing or changing a currently licensed site - page: is the premises address the same as the licence holder address?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.pages.cdaAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.pages.cdaLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.completeAndSelectSaveAndExitIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                break;
            case "t3: existing licensee applying for a new site - page: is the new site part of a contractual agreement?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.pages.cdaWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
                break;
            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
    }
}
When("I fill out the answers to Controlled drugs for a first time licensee form and no activity is selected", async ({ pages }) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.answerForWhenYouHaveNotSelectedAnyActivities();
});
When("I choose to enter {string} as application reference number on {string} page and choose to continue for CDA", async ({ pages }, applicationRefNo: string, _page: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await pages.cdaEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
});
When("I choose to select {string} on {string} page and choose to continue for CDA", async ({ pages }, answer: string, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.answerToPage(answer, pageName);
});
When("I choose to navigate to {string} page for CDA", async ({ pages }, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.navigateToPage(pageName);
});
When("I complete the fields below with Licence holder details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const companyName = data["Company name"];
    const companyNumber = data["Company number"];
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const websiteUrl = data["Website URL"];
    await pages.cdaLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
});
When("I complete the fields below with {string} address details for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
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
    const cdaStepLib = new CdaStepLib(pages);
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
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK telephone number"];
    const purchaseOrderNo = data["Purchase order number"];
    await pages.cdaInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
});
When("I complete the fields below with Who is completing the application for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK contact number"];
    await pages.cdaWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(fullName, emailAddress, ukTelephoneNo);
});
When("I complete the fields below with Premises contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    await pages.cdaPremisesContactDetailsPage.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
});
When("I complete the fields below with {string} for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
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
    const cdaStepLib = new CdaStepLib(pages);
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
When("I complete the fields below with {string} for the responsible officer for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
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
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    const dbsUpdateService = data["DBS Update Service"];
    await pages.cdaDbsInformationForPage.completeDbsInformationForPage(fullName, dbsReference, dayMonthYear, dbsUpdateService);
});
When("I complete the fields below with Licence details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const licenceNo = data["Licence number"];
    const licenceType = data["Licence type"];
    const dayMonthYear = data["Day month year"];
    await pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(licenceNo, licenceType, dayMonthYear);
});
When("I complete the fields below with Registration details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const registrationNumber = data["Registration number"];
    const dayMonthYear = data["Day month year"];
    await pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(registrationNumber, dayMonthYear);
});
When("I complete the fields below with Site owner’s contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const contactTelNo = data["Contact telephone number"];
    const address = data["Address"];
    if (address.toLowerCase() === "Enter 2001 characters".toLowerCase()) {
        const charSize = address.replace(/[^0-9]/g, "");
        const addressInput = cdaStepLib.generateRandomAlphabetCharacters(charSize);
        await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, addressInput);
    }
    else {
        await pages.cdaSiteOwnersContactDetailsPage.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, address);
    }
});
When("I complete the fields below with Electronic alarm system details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const installingCompanyName = data["Installing company name"];
    const installingCompanyAddress = data["Installing company address"];
    const installingCompanyRegistered = data["Who is the installing company registered with"];
    if (installingCompanyAddress.toLowerCase() === "Enter 501 characters".toLowerCase()) {
        const charSize = installingCompanyAddress.replace(/[^0-9]/g, "");
        const addressInput = cdaStepLib.generateRandomAlphabetCharacters(charSize);
        await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(installingCompanyName, addressInput, installingCompanyRegistered);
    }
    else {
        await pages.cdaElectronicAlarmSystemDetailsPage.completeElectronicAlarmSystemDetailsPage(installingCompanyName, installingCompanyAddress, installingCompanyRegistered);
    }
});
When("I enter {string} characters in the text area box field on {string} page for CDA", async ({ pages }, charSize: string, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.enterTextIntoTextArea(charSize, pageName);
});
When("I choose to select link text {string}", async ({ pages }, linkText: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await pages.basePage.clickLinkOrButtonWithText(linkText);
});
When("I choose to complete the first activities page with {string} value and leave the rest of the activities uncompleted", async ({ pages }, value: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(value);
    await pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
    await pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
});
When("I select Confirm Submission on Check Your Answers Page CDA", async ({ pages }) => {
    const cdaStepLib = new CdaStepLib(pages);
    await pages.cdaCheckYourAnswersPage.completeCheckYourAnswersPage();
});
When("I enter {string} into {string} field and page for CDA", async ({ pages }, value: string, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
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
When("{string} link is displayed on the page for CDA", async ({ pages }, linkText: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
});
