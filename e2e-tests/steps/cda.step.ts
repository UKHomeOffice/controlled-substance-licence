import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib as c} from '../utility-helper/constants-lib';
const { When } = createBdd(test);
export class CdaStepLib extends CommonCslStepLib {
    async enterManagingDirectorOrPersonInChargeFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.pages.cdaManagingDirectorOrPersonInChargePage.assertPageTitle();
        await this.pages.cdaManagingDirectorOrPersonInChargePage.enterFullNameAndEmailDetails(fullName, email);
    }
    async enterPersonResponsibleForTheSecurityOfThePremisesFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.assertPageTitle();
        await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.enterFullNameAndEmailDetails(fullName, email);
    }
    async enterPersonResponsibleForLegalComplianceAndRegulatoryAffairsFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.assertPageTitle();
        await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.enterFullNameAndEmailDetails(fullName, email);
    }
    async enterPersonResponsibleForWitnessingTheDestructionOfControlledDrugs(fullName: string, email: string): Promise<void> {
        await this.pages.cdaAuthorisedWitnessInformationPage.assertPageTitle();
        await this.pages.cdaAuthorisedWitnessInformationPage.enterFullNameAndEmailDetails(fullName, email);
    }
    async selectCheckboxContainText(optText: string): Promise<void> {
        await this.pages.basePage.selectRadioOptionWithText(optText);
    }
    async completeHowAreYouApplyingForYourControlledDrugsLicencePage(optText: string): Promise<void> {
        await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.assertPageTitle();
        await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.selectRadioOptionWithText(optText);
        await this.pages.cdaHowAreYouApplyingForYourControlledDrugsLicencePage.clickContinue();
    }
    async completeEnterYourApplicationReferenceNumberPage(applicationRefNo: string): Promise<void> {
        await this.pages.cdaEnterYourApplicationReferenceNumberPage.assertPageTitle();
        await this.pages.cdaEnterYourApplicationReferenceNumberPage.enterApplicationReferenceNo(applicationRefNo);
        await this.pages.cdaEnterYourApplicationReferenceNumberPage.clickSaveAndContinue();
    }
    async completeWhatTypeOfLicenseeAreYouPage(optText: string): Promise<void> {
        await this.pages.cdaWhatTypeOfLicenseeAreYouPage.assertPageTitle();
        await this.pages.cdaWhatTypeOfLicenseeAreYouPage.selectWhatTypeOfLicenseeAreYou(optText);
        await this.pages.cdaWhatTypeOfLicenseeAreYouPage.clickContinue();
    }
    async completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(option1: string, option2: string): Promise<void> {
        await this.completeHowAreYouApplyingForYourControlledDrugsLicencePage(option1);
        await this.completeWhatTypeOfLicenseeAreYouPage(option2);
    }
    async completeLicenceHolderDetailsPage(companyName: string, companyNumber: string, ukTelPhoneNo: string, email: string, webSiteUrl: string): Promise<void> {
        await this.pages.cdaLicenceHolderDetailsPage.assertPageTitle();
        await this.pages.cdaLicenceHolderDetailsPage.enterLicenceHolderDetails(companyName, companyNumber, ukTelPhoneNo, email, webSiteUrl);
        await this.pages.cdaLicenceHolderDetailsPage.clickSaveAndContinue();
    }
    async completeLicenceHolderAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.cdaLicenceHolderAddressPage.assertPageTitle();
        await this.pages.cdaLicenceHolderAddressPage.enterLicenceHolderAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.cdaLicenceHolderAddressPage.clickSaveAndContinue();
    }
    async completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.assertPageTitle();
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.clickSaveAndContinue();
    }
    async completePremisesAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.cdaPremisesAddressPage.assertPageTitle();
        await this.pages.cdaPremisesAddressPage.enterPremisesAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.cdaPremisesAddressPage.clickSaveAndContinue();
    }
    async completePremisesContactDetailsPage(ukTelPhoneNo: string, email: string): Promise<void> {
        await this.pages.cdaPremisesContactDetailsPage.assertPageTitle();
        await this.pages.cdaPremisesContactDetailsPage.enterPremisesContactDetails(ukTelPhoneNo, email);
        await this.pages.cdaPremisesContactDetailsPage.clickSaveAndContinue();
    }
    async completeHowAreYouFundedPage(option: string): Promise<void> {
        await this.pages.cdaHowAreYouFundedPage.assertPageTitle();
        await this.pages.cdaHowAreYouFundedPage.selectRadioOptionWithText(option);
        await this.pages.cdaHowAreYouFundedPage.clickSaveAndContinue();
    }
    async completeManagingDirectorOrPersonInChargePage(fullName: string, email: string, optText: string): Promise<void> {
        await this.pages.cdaManagingDirectorOrPersonInChargePage.assertPageTitle();
        await this.pages.cdaManagingDirectorOrPersonInChargePage.enterManagingDirectorOrPersonInCharge(fullName, email, optText);
        await this.pages.cdaManagingDirectorOrPersonInChargePage.clickSaveAndContinue();
    }
    async completeDbsInformationForThePersonInChargePagePage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.pages.cdaDbsInformationForThePersonInChargePage.assertPageTitle();
        await this.pages.cdaDbsInformationForThePersonInChargePage.enterDbsInformation(fullName, dbsReference, date);
        await this.pages.cdaDbsInformationForThePersonInChargePage.clickSaveAndContinue();
    }
    async completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(option: string): Promise<void> {
        await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.assertPageTitle();
        await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage.clickSaveAndContinue();
    }
    async completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(option: string): Promise<void> {
        await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.assertPageTitle();
        await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage.clickSaveAndContinue();
    }
    async completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(option: string): Promise<void> {
        await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.assertPageTitle();
        await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.enterProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbers(textArea);
        await this.pages.cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage.clickSaveAndContinue();
    }
    async completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(option: string): Promise<void> {
        await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.assertPageTitle();
        await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfTheLegalBusinessProceedingsPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.enterProvideDetailsOfTheLegalBusinessProceedings(textArea);
        await this.pages.cdaProvideDetailsOfTheLegalBusinessProceedingsPage.clickSaveAndContinue();
    }
    async completeWhoIsResponsibleForTheSecurityOfThePremisesPage(option: string): Promise<void> {
        await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.assertPageTitle();
        await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.selectRadioOptionWithText(option);
        await this.pages.cdaWhoIsResponsibleForTheSecurityOfThePremisesPage.clickSaveAndContinue();
    }
    async completePersonResponsibleForTheSecurityOfThePremisesPage(fullName: string, email: string, optText: string): Promise<void> {
        await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.assertPageTitle();
        await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.enterPersonResponsibleForTheSecurityOfThePremises(fullName, email, optText);
        await this.pages.cdaPersonResponsibleForTheSecurityOfThePremisesPage.clickSaveAndContinue();
    }
    async completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.assertPageTitle();
        await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.enterDbsInformationForPersonResponsibleForSecurityOfPremises(fullName, dbsReference, date);
        await this.pages.cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage.clickSaveAndContinue();
    }
    async completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(option: string): Promise<void> {
        await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.assertPageTitle();
        await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage.clickSaveAndContinue();
    }
    async completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(option: string): Promise<void> {
        await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.assertPageTitle();
        await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.selectRadioOptionWithText(option);
        await this.pages.cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage.clickSaveAndContinue();
    }
    async completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(fullName: string, email: string, optText: string): Promise<void> {
        await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.assertPageTitle();
        await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.enterPersonResponsibleForLegalComplianceAndRegulatoryAffairs(fullName, email, optText);
        await this.pages.cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage.clickSaveAndContinue();
    }
    async completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.assertPageTitle();
        await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.enterDbsInformationForThePersonResponsibleForComplianceAndRegulatoryAffairs(fullName, dbsReference, date);
        await this.pages.cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage.clickSaveAndContinue();
    }
    async completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(option: string): Promise<void> {
        await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.assertPageTitle();
        await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage.clickSaveAndContinue();
    }
    async completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(option: string): Promise<void> {
        await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.assertPageTitle();
        await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.selectRadioOptionWithText(option);
        await this.pages.cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage.clickSaveAndContinue();
    }
    async completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(option: string): Promise<void> {
        await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.assertPageTitle();
        await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage.clickSaveAndContinue();
    }
    async completeAuthorisedWitnessInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.pages.cdaAuthorisedWitnessInformationPage.assertPageTitle();
        await this.pages.cdaAuthorisedWitnessInformationPage.enterPersonResponsibleForWitnessingTheDestructionOfControlledDrugs(fullName, dbsReference, date);
        await this.pages.cdaAuthorisedWitnessInformationPage.clickSaveAndContinue();
    }
    async completeDbsInformationForPage(fullName: string, dbsReference: string, date: string, option: string): Promise<void> {
        await this.pages.cdaDbsInformationForPage.assertPageTitle();
        await this.pages.cdaDbsInformationForPage.enterDbsInformationFor(fullName, dbsReference, date, option);
        await this.pages.cdaDbsInformationForPage.clickSaveAndContinue();
    }
    async completeUsingTheDbsUpdateServicePagePage(): Promise<void> {
        await this.pages.cdaUsingTheDbsUpdateServicePage.assertPageTitle();
        expect(await this.isLinkTextIsDisplayedOnPage("DBS Update Service (opens in a new tab)")).toBe(true);
        expect(await this.isLinkTextIsDisplayedOnPage("dflu.dom@homeoffice.gov.uk")).toBe(true);
        await this.pages.cdaUsingTheDbsUpdateServicePage.clickSaveAndContinue();
    }
    async completeWitnessesYouHaveToldUsAboutPage(): Promise<void> {
        await this.pages.cdaWitnessesYouHaveToldUsAboutPage.assertPageTitle();
        await this.pages.cdaWitnessesYouHaveToldUsAboutPage.clickSaveAndContinue();
    }
    async completeUploadCompanyRegistrationCertificatePage(uploadFile: string): Promise<void> {
        await this.pages.cdaUploadCompanyRegistrationCertificatePage.assertPageTitle();
        await this.pages.cdaUploadCompanyRegistrationCertificatePage.uploadFileFromUserUploadFolder(uploadFile);
        await this.pages.cdaUploadCompanyRegistrationCertificatePage.selectContinueUploadBtn();
    }
    async completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage(dropTextValue: string): Promise<void> {
        await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.assertPageTitle();
        await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.selectTradingReasonsValueFromDropDownField(dropTextValue);
        await this.pages.cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage.clickSaveAndContinue();
    }
    async completeSpecifyYourTradingReasonPage(textArea: string): Promise<void> {
        await this.pages.cdaSpecifyYourTradingReasonPage.assertPageTitle();
        await this.pages.cdaSpecifyYourTradingReasonPage.enterSpecifyYourTradingReason(textArea);
        await this.pages.cdaSpecifyYourTradingReasonPage.clickSaveAndContinue();
    }
    async completeSummaryOfTradingReasonsPage(): Promise<void> {
        await this.pages.cdaSummaryOfTradingReasonsPage.assertPageTitle();
        await this.pages.cdaSummaryOfTradingReasonsPage.clickSaveAndContinue();
    }
    async completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(textArea: string): Promise<void> {
        await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.assertPageTitle();
        await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.enterExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItFor(textArea);
        await this.pages.cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfYourMainCustomersPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfYourMainCustomersPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfYourMainCustomersPage.enterProvideDetailsOfYourMainCustomers(textArea);
        await this.pages.cdaProvideDetailsOfYourMainCustomersPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.enterProvideDetailsOfWhereYouSourceTheDrugsFromPage(textArea);
        await this.pages.cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage.clickSaveAndContinue();
    }
    async completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(option: string): Promise<void> {
        await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.assertPageTitle();
        await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.selectRadioOptionWithText(option);
        await this.pages.cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage.clickSaveAndContinue();
    }
    async completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(licenceNumber: string, licenceType: string, date: string): Promise<void> {
        await this.pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.assertPageTitle();
        await this.pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.enterLicenceDetailsMhrc(licenceNumber, licenceType, date);
        await this.pages.cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage.clickSaveAndContinue();
    }
    async completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(option: string): Promise<void> {
        await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.assertPageTitle();
        await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage.clickSaveAndContinue();
    }
    async completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(registrationNumber: string, date: string): Promise<void> {
        await this.pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.assertPageTitle();
        await this.pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.enterRegistrationDetails(registrationNumber, date);
        await this.pages.cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.enterProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptional(textArea);
        await this.pages.cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage.clickSaveAndContinue();
    }
    async completeAreYouProvidingAServiceUnderAContractPage(option: string): Promise<void> {
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.assertPageTitle();
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.selectRadioOptionWithText(option);
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfTheServicePage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfTheServicePage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfTheServicePage.enterProvidingDetailsOfTheService(textArea);
        await this.pages.cdaProvideDetailsOfTheServicePage.clickSaveAndContinue();
    }
    async completeWhatDateDoesTheServiceExpireOnPage(date: string): Promise<void> {
        await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.assertPageTitle();
        await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.enterWhatDateDoesTheServiceExpireOn(date);
        await this.pages.cdaWhatDateDoesTheServiceExpireOnPage.clickSaveAndContinue();
    }
    async completeWhatIsTheStatusOfTheSiteToBeLicensedPage(option: string): Promise<void> {
        await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.assertPageTitle();
        await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.selectRadioOptionWithText(option);
        await this.pages.cdaWhatIsTheStatusOfTheSiteToBeLicensedPage.clickSaveAndContinue();
    }
    async completeSiteOwnersContactDetailsPage(fullName: string, email: string, contactPhone: string, address: string): Promise<void> {
        await this.pages.cdaSiteOwnersContactDetailsPage.assertPageTitle();
        await this.pages.cdaSiteOwnersContactDetailsPage.enterSiteOwnersContactDetails(fullName, email, contactPhone, address);
        await this.pages.cdaSiteOwnersContactDetailsPage.clickSaveAndContinue();
    }
    async completeLicenceDetailsPage(): Promise<void> {
        await this.pages.cdaLicenceDetailsPage.assertPageTitle();
        await this.pages.cdaLicenceDetailsPage.clickSaveAndContinue();
    }
    async completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule2Btn();
        }
        else {
            await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule2Btn();
        }
    }
    async completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule3Btn();
        }
        else {
            await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule3Btn();
        }
    }
    async completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule4IBtn();
        }
        else {
            await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule4IBtn();
        }
    }
    async completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule4IIBtn();
        }
        else {
            await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule4IIBtn();
        }
    }
    async completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule5Btn();
        }
        else {
            await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinueToSchedule5Btn();
        }
    }
    async completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinue();
        }
        else {
            await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.selectRadioOptionWithText(option);
            await this.pages.cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage.clickSaveAndContinue();
        }
    }
    async completeUploadControlledDrugUserActivityTemplatePage(uploadFile: string): Promise<void> {
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.assertPageTitle();
        expect(await this.isLinkTextIsDisplayedOnPage("Download the template (XLSX, 15.4KB)")).toBe(true);
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.uploadFileFromUserUploadFolder(uploadFile);
        await this.pages.cdaUploadControlledDrugUserActivityTemplatePage.selectContinueUploadBtn();
    }
    async completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage(option: string): Promise<void> {
        await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.assertPageTitle();
        await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.selectRadioOptionWithText(option);
        await this.pages.cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage.clickSaveAndContinue();
    }
    async completeAreControlledDrugsKeptInASeparateRoomOrZonePage(option: string): Promise<void> {
        await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.assertPageTitle();
        await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreControlledDrugsKeptInASeparateRoomOrZonePage.clickSaveAndContinue();
    }
    async completeAreControlledDrugsKeptInASafeOrCabinetPage(option: string): Promise<void> {
        await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.assertPageTitle();
        await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreControlledDrugsKeptInASafeOrCabinetPage.clickSaveAndContinue();
    }
    async completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(option: string): Promise<void> {
        await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.assertPageTitle();
        await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage.clickSaveAndContinue();
    }
    async completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(textArea: string): Promise<void> {
        await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.assertPageTitle();
        await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.enterGiveDetailsOfSpecificationsAndAnySerialNumbersThatApply(textArea);
        await this.pages.cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage.clickSaveAndContinue();
    }
    async completeAreControlledDrugsKeptAtThisSitePage(option: string): Promise<void> {
        await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.assertPageTitle();
        await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreControlledDrugsKeptAtThisSitePage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfWhereTheyAreStoredPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.enterProvideDetailsOfWhereTheyAreStored(textArea);
        await this.pages.cdaProvideDetailsOfWhereTheyAreStoredPage.clickSaveAndContinue();
    }
    async completeDoesTheSiteHaveAnElectronicAlarmSystemPage(option: string): Promise<void> {
        await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.assertPageTitle();
        await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaDoesTheSiteHaveAnElectronicAlarmSystemPage.clickSaveAndContinue();
    }
    async completeElectronicAlarmSystemDetailsPage(installingCompanyName: string, installingCompanyAddress: string, option: string): Promise<void> {
        await this.pages.cdaElectronicAlarmSystemDetailsPage.assertPageTitle();
        await this.pages.cdaElectronicAlarmSystemDetailsPage.enterElectronicAlarmSystemDetails(installingCompanyName, installingCompanyAddress, option);
        await this.pages.cdaElectronicAlarmSystemDetailsPage.clickSaveAndContinue();
    }
    async completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(option: string): Promise<void> {
        await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.assertPageTitle();
        await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage.clickSaveAndContinue();
    }
    async completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(option: string): Promise<void> {
        await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.assertPageTitle();
        await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage.clickSaveAndContinue();
    }
    async completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(option: string): Promise<void> {
        await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.assertPageTitle();
        await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage.clickSaveAndContinue();
    }
    async completeIsTheAlarmSystemServicedAnnuallyPage(option: string): Promise<void> {
        await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.assertPageTitle();
        await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsTheAlarmSystemServicedAnnuallyPage.clickSaveAndContinue();
    }
    async completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(option: string): Promise<void> {
        await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.assertPageTitle();
        await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage.clickSaveAndContinue();
    }
    async completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(option: string): Promise<void> {
        await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.assertPageTitle();
        await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.selectYesOrNoRadioOption(option);
        await this.pages.cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage.clickSaveAndContinue();
    }
    async completeStandardOperatingProceduresPage(option: string): Promise<void> {
        await this.pages.cdaStandardOperatingProceduresPage.assertPageTitle();
        await this.pages.cdaStandardOperatingProceduresPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaStandardOperatingProceduresPage.clickSaveAndContinue();
    }
    async completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(textArea: string): Promise<void> {
        await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.assertPageTitle();
        await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.enterProvideDetailsOfYourRecordKeepingSystemAndProcedures(textArea);
        await this.pages.cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage.clickSaveAndContinue();
    }
    async completeInvoicingAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.cdaInvoicingAddressPage.assertPageTitle();
        await this.pages.cdaInvoicingAddressPage.enterInvoicingAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.cdaInvoicingAddressPage.clickSaveAndContinue();
    }
    async completeInvoicingContactDetailsPage(contactName: string, email: string, contactNo: string, purchaseOrderNo: string): Promise<void> {
        await this.pages.cdaInvoicingContactDetailsPage.assertPageTitle();
        await this.pages.cdaInvoicingContactDetailsPage.enterInvoicingContactDetails(contactName, email, contactNo, purchaseOrderNo);
        await this.pages.cdaInvoicingContactDetailsPage.clickSaveAndContinue();
    }
    async completeWhichEmailAddressShouldWeSendTheLicenceToPage(email: string): Promise<void> {
        await this.pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.assertPageTitle();
        await this.pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.enterWhichEmailAddressShouldWeSendTheLicenceToPage(email);
        await this.pages.cdaWhichEmailAddressShouldWeSendTheLicenceToPage.clickSaveAndContinue();
    }
    async completeWhoIsCompletingTheApplicationPage(fullName: string, email: string, contactNo: string): Promise<void> {
        await this.pages.cdaWhoIsCompletingTheApplicationPage.assertPageTitle();
        await this.pages.cdaWhoIsCompletingTheApplicationPage.enterWhoIsCompletingTheApplication(fullName, email, contactNo);
        await this.pages.cdaWhoIsCompletingTheApplicationPage.clickSaveAndContinue();
    }
    async completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(textArea: string): Promise<void> {
        await this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.assertPageTitle();
        await this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.enterAddAnyExtraInformationYouThinkMightHelpYourApplicationOptional(textArea);
        await this.pages.cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clickSaveAndContinue();
    }
    async completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.assertPageTitle();
        await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.clickSaveAndContinue();
    }
    async completeYouCannotContinueThisApplicationPage(): Promise<void> {
        await this.pages.cdaYouCannotContinueThisApplicationPage.assertPageTitle();
    }
    async completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.assertPageTitle();
        await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.clickSaveAndContinue();
    }
    async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(uploadFile: string): Promise<void> {
        await this.pages.cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.assertPageTitle();
        await this.pages.cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.uploadFileFromUserUploadFolder(uploadFile);
        await this.pages.cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.selectContinueUploadBtn();
    }
    async completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(option: string): Promise<void> {
        await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.assertPageTitle();
        await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.clickSaveAndContinue();
    }
    async completeAreYouRequestingAdditionalSchedulesPage(option: string): Promise<void> {
        await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.assertPageTitle();
        await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreYouRequestingAdditionalSchedulesPage.clickSaveAndContinue();
    }
    async completeAreYouRequestingAChangeOfActivityPage(option: string): Promise<void> {
        await this.pages.cdaAreYouRequestingAChangeOfActivityPage.assertPageTitle();
        await this.pages.cdaAreYouRequestingAChangeOfActivityPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaAreYouRequestingAChangeOfActivityPage.clickSaveAndContinue();
    }
    async completeWhyAreYouRequestingANewLicensePage(option: string): Promise<void> {
        await this.pages.cdaWhyAreYouRequestingANewLicencePage.assertPageTitle();
        await this.pages.cdaWhyAreYouRequestingANewLicencePage.selectRadioOptionWithText(option);
        await this.pages.cdaWhyAreYouRequestingANewLicencePage.clickSaveAndContinue();
    }
    async completeWhenAreYouMovingSitePage(date: string): Promise<void> {
        await this.pages.cdaWhenAreYouMovingSitePage.assertPageTitle();
        await this.pages.cdaWhenAreYouMovingSitePage.enterWhenAreYouMovingSite(date);
        await this.pages.cdaWhenAreYouMovingSitePage.clickSaveAndContinue();
    }
    async completeIsTheNewSitePartOfAContractualAgreementPage(option: string): Promise<void> {
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.assertPageTitle();
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.clickSaveAndContinue();
    }
    async completeWhenDoesTheContractStartPage(date: string): Promise<void> {
        await this.pages.cdaWhenDoesTheContractStartPage.assertPageTitle();
        await this.pages.cdaWhenDoesTheContractStartPage.enterWhenDoesTheContractStart(date);
        await this.pages.cdaWhenDoesTheContractStartPage.clickSaveAndContinue();
    }
    async completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(textValue: string): Promise<void> {
        await this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.assertPageTitle();
        await this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(textValue);
        await this.pages.cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clickSaveAndContinue();
    }
    async completeCheckYourAnswersPage(): Promise<void> {
        await this.pages.cdaCheckYourAnswersPage.assertPageTitle();
        await this.pages.cdaCheckYourAnswersPage.clickSaveAndContinue();
    }
    async completeDeclarationPage(optText: string): Promise<void> {
        await this.pages.cdaDeclarationPage.assertPageTitle();
        await this.pages.cdaDeclarationPage.selectRadioOptionWithText(optText);
        await this.pages.cdaDeclarationPage.clickConfirmAndSubmit();
    }
    async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
        await this.pages.cdaWeSavedYourApplicationAndSignedYouOutPage.assertPageTitle();
        await this.pages.cdaWeSavedYourApplicationAndSignedYouOutPage.clickSignInAgain();
    }
    async completeApplicationSubmittedPage(): Promise<void> {
        await this.pages.cdaApplicationSubmittedPage.assertPageTitle();
    }
    async answersControlledDrugsFormFor(scenario: string): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        switch (scenario.toLowerCase()) {
            case "t1: a new application - a first time licensee - alarm system questions are included [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
                await this.completeAuthorisedWitnessInformationPage("1FULL HOF1", c.AGENT_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPage("1FULL DBS HOF1", c.DBS_REFERENCE, c.YESTERDAY_S_DATE, c.RESPONSE_YES);
                await this.pages.cdaWitnessesYouHaveToldUsAboutPage.clickAddAnother();
                await this.completeAuthorisedWitnessInformationPage("2FULL HOF2", c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPage("2FULL DBS HOF2", c.DBS_REFERENCE, c.YESTERDAY_S_DATE, c.RESPONSE_NO);
                await this.completeWitnessesYouHaveToldUsAboutPage();
                await this.completeUsingTheDbsUpdateServicePagePage();
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
                await this.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
                await this.pages.cdaSummaryOfTradingReasonsPage.clickAddAnother();
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
                await this.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, "Lic123456", c.DATE_IS_WITHIN_3_YEARS);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
                await this.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("Reg123456", c.DATE_IS_WITHIN_3_YEARS);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatDateDoesTheServiceExpireOnPage("Tomorrow's date");
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
                await this.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                await this.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
                await this.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t2: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are included [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(c.RESPONSE_NO);
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Employee");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_NO);
                await this.completeWitnessesYouHaveToldUsAboutPage();
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Other");
                await this.completeSpecifyYourTradingReasonPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_YES);
                await this.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_YES);
                await this.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage("RegTest", c.DATE_IS_WITHIN_3_YEARS);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheServicePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatDateDoesTheServiceExpireOnPage("tomorrow's date");
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Rented");
                await this.completeSiteOwnersContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.ADDRESS);
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                await this.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfWhereTheyAreStoredPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_YES);
                await this.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t3: a new application - existing licensee renewing or changing a currently licensed site - alarm system questions are excluded":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
                await this.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                await this.completeAuthorisedWitnessInformationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS, c.RESPONSE_YES);
                await this.completeWitnessesYouHaveToldUsAboutPage();
                await this.completeUsingTheDbsUpdateServicePagePage();
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Importer");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t4: a new application - existing licensee applying for a new site - alarm system questions are excluded":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicensePage("We are moving site");
                await this.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t5: a new application - existing licensee applying for a new site - alarm system questions are excluded [full path]":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "t6: a new application - existing licensee applying for a new site - alarm system questions are included":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
                await this.completeWhenDoesTheContractStartPage(c.TOMORROW_S_DATE);
                await this.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                await this.completeElectronicAlarmSystemDetailsPage(c.COMPANY_NAME, c.ADDRESS, "National Security Inspectorate");
                await this.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(c.RESPONSE_NO);
                await this.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(c.RESPONSE_YES);
                await this.completeIsTheAlarmSystemServicedAnnuallyPage(c.RESPONSE_YES);
                await this.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(c.RESPONSE_NO);
                await this.completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(c.RESPONSE_YES);
                break;
            case "t7: amend a pending application - alarm system questions are included [full path]":
                await this.completeHowAreYouApplyingForYourControlledDrugsLicencePage(c.AMEND_PENDING_APPLICATION);
                await this.completeEnterYourApplicationReferenceNumberPage("12322");
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
        await this.completeStandardOperatingProceduresPage(c.RESPONSE_YES);
        await this.completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
        await this.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
        await this.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE);
        await this.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeCheckYourAnswersPage();
        await this.completeDeclarationPage("I understand and agree with these statements");
        await this.completeApplicationSubmittedPage();
    }
    async answerForWhenYouHaveNotSelectedAnyActivities(): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
        await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
        await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
        await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
        await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
        await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
        await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
        await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
        await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
        await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
        await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
        await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
        await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
        await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
        await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
        await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
        await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Exporter");
        await this.completeSummaryOfTradingReasonsPage();
        await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
        await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
        await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
        await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
        await this.completeLicenceDetailsPage();
        await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("");
        await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
        await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
        await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
        await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
        await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
    }
    async answerToExistingLicenseeRenewingOrChangingCannonContinue(): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
        await this.completeYouCannotContinueThisApplicationPage();
    }
    async answerToPage(answer: string, pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "what type of licence are you applying for?":
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
                break;
            case "how are you applying for your controlled drugs licence?":
                await this.completeHowAreYouApplyingForYourControlledDrugsLicencePage(answer);
                break;
            case "is the premises address the same as the licence holder address?":
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
                break;
            case "how are you funded?":
                await this.completeHowAreYouFundedPage(answer);
                break;
            case "has the managing director or person in charge subscribed to dbs updates?":
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(answer);
                break;
            case "are they, or anyone named on this application, a member of a professional bodys?":
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(answer);
                break;
            case "has anyone in your organisation ever received a criminal conviction?":
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(answer);
                break;
            case "who is responsible for legal compliance and regulatory affairs?":
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(answer);
                break;
            case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
                await this.completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(answer);
                break;
            case "is the person responsible for legal compliance and regulatory affairs an employee or consultant?":
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(answer);
                break;
            case "what trading reasons does this site need a licence for?":
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage(answer);
                break;
            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(answer);
                break;
            case "is your business registered with the care quality commission or scottish and welsh equivalents?":
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(answer);
                break;
            case "are you providing a service under a contract?":
                await this.completeAreYouProvidingAServiceUnderAContractPage(answer);
                break;
            case "what date does the service expire on?":
                await this.completeWhatDateDoesTheServiceExpireOnPage(answer);
                break;
            case "which of the following security features does the site have?":
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage(answer);
                break;
            case "are controlled drugs kept in a separate room or zone?":
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(answer);
                break;
            case "are the controlled drugs kept in a prefabricated strong room?":
                await this.completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(answer);
                break;
            case "are controlled drugs kept at this site?":
                await this.completeAreControlledDrugsKeptAtThisSitePage(answer);
                break;
            case "standard operating procedures":
                await this.completeStandardOperatingProceduresPage(answer);
                break;
            case "is there a separate zone for the controlled drug cabinet, safe or store?":
                await this.completeIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(answer);
                break;
            case "is the alarm system monitored by an offsite alarm receiving centre?":
                await this.completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(answer);
                break;
            case "is the alarm system connected to the alarm receiving centre either by redcare or by a dual-path communicator?":
                await this.completeIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(answer);
                break;
            case "is the alarm system serviced annually?":
                await this.completeIsTheAlarmSystemServicedAnnuallyPage(answer);
                break;
            case "does the alarm system have a police unique reference number (urn)?":
                await this.completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(answer);
                break;
            case "which email address should we send the licence to?":
                await this.completeWhichEmailAddressShouldWeSendTheLicenceToPage(answer);
                break;
            case "has your companies house reference number changed since your last application?":
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
                break;
            case "has your registered name at companies house changed since your last application?":
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
                break;
            case "are you requesting a change in authorised witness for this site only?":
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(answer);
                break;
            case "are you requesting additional schedules?":
                await this.completeAreYouRequestingAdditionalSchedulesPage(answer);
                break;
            case "are you requesting a change of activity?":
                await this.completeAreYouRequestingAChangeOfActivityPage(answer);
                break;
            case "why are you requesting a new licence?":
                await this.completeWhyAreYouRequestingANewLicensePage(answer);
                break;
            case "is the new site part of a contractual agreement?":
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
                break;
            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }
    async navigateToPage(pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "how would you like to apply?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                break;
            case "how are you applying for your controlled drugs licence?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                break;
            case "licence holder details":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                break;
            case "is the premises address the same as the licence holder address?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                break;
            case "how are you funded?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                break;
            case "has the managing director or person in charge subscribed to dbs updates?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                break;
            case "provide details of the legal business proceedings":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                break;
            case "person responsible for the security of the premises":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                break;
            case "who is responsible for legal compliance and regulatory affairs?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                break;
            case "has the person responsible for compliance and regulatory affairs subscribed to dbs updates?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_NO);
                await this.completePremisesAddressPage(c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("Someone else");
                await this.completePersonResponsibleForTheSecurityOfThePremisesPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("Someone else");
                await this.completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                break;
            case "authorised witness information":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_YES);
                break;
            case "upload company registration certificate":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                break;
            case "does your business possess any licences issued by the medicines and healthcare products regulatory agency (mhra)?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                break;
            case "are you providing a service under a contract?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                break;
            case "site owner’s contact details":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Leased");
                break;
            case "are the controlled drugs kept in a prefabricated strong room?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_NO);
                break;
            case "electronic alarm system details":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_YES);
                break;
            case "standard operating procedures":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage("");
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                break;
            case "which email address should we send the licence to?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Broker");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                await this.completeWhatIsTheStatusOfTheSiteToBeLicensedPage("Owned or owner-occupied");
                await this.completeLicenceDetailsPage();
                await this.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage("Possess");
                await this.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("Manufacture");
                await this.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("Supply");
                await this.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("Produce");
                await this.completeUploadControlledDrugUserActivityTemplatePage("cslCdat.pdf");
                await this.completeWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage("Perimeter fencing");
                await this.completeAreControlledDrugsKeptInASeparateRoomOrZonePage(c.RESPONSE_YES);
                await this.completeAreControlledDrugsKeptInASafeOrCabinetPage(c.RESPONSE_YES);
                await this.completeGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAreControlledDrugsKeptAtThisSitePage(c.RESPONSE_YES);
                await this.completeDoesTheSiteHaveAnElectronicAlarmSystemPage(c.RESPONSE_NO);
                await this.completeStandardOperatingProceduresPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeInvoicingContactDetailsPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, c.DBS_REFERENCE);
                break;
            case "has your companies house reference number changed since your last application?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                break;
            case "why are you requesting a new licence?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                break;
            case "is the new site part of a contractual agreement?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicensePage("For another site");
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
    async completeAndSelectSaveAndExitAreYouProvidingAServiceUnderAContractPage(option: string): Promise<void> {
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.assertPageTitle();
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.selectRadioOptionWithText(option);
        await this.pages.cdaAreYouProvidingAServiceUnderAContractPage.clickSaveAndAndExit();
    }
    async completeAndSelectSaveAndExitIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.assertPageTitle();
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.clickSaveAndAndExit();
    }
    async completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(option: string): Promise<void> {
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.assertPageTitle();
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.selectYesOrNoRadioOption(option);
        await this.pages.cdaIsTheNewSitePartOfAContractualAgreementPage.clickSaveAndAndExit();
    }
    async answersControlledDrugsFormForContinuingAnApplication(scenario: string): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.CONTROLLED_DRUGS);
        switch (scenario.toLowerCase()) {
            case "t1: a first time licensee - page: are you providing a service under a contract?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                await this.completePremisesContactDetailsPage(c.TELEPHONE, c.SAS_HOF_EMAIL);
                await this.completeHowAreYouFundedPage("‘For profit’ enterprise");
                await this.completeManagingDirectorOrPersonInChargePage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForThePersonInChargePagePage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeWhoIsResponsibleForTheSecurityOfThePremisesPage("The same person as the managing director");
                await this.completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage("The same person as the managing director");
                await this.completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage("Consultant");
                await this.completeDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage(c.RESPONSE_NO);
                await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
                await this.completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage("Exporter");
                await this.completeSummaryOfTradingReasonsPage();
                await this.completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourMainCustomersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(c.RESPONSE_NO);
                await this.completeIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(c.RESPONSE_NO);
                await this.completeProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAndSelectSaveAndExitAreYouProvidingAServiceUnderAContractPage(c.RESPONSE_NO);
                break;
            case "t2: existing licensee renewing or changing a currently licensed site - page: is the premises address the same as the licence holder address?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAndSelectSaveAndExitIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(c.RESPONSE_YES);
                break;
            case "t3: existing licensee applying for a new site - page: is the new site part of a contractual agreement?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicensePage("For another site");
                await this.completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
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
    await cdaStepLib.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
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
    await cdaStepLib.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
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
            await cdaStepLib.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "premises":
            await cdaStepLib.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "invoicing":
            await cdaStepLib.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
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
            await cdaStepLib.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "premises":
            await cdaStepLib.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "invoicing":
            await cdaStepLib.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
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
    await cdaStepLib.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
});
When("I complete the fields below with Who is completing the application for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK contact number"];
    await cdaStepLib.completeWhoIsCompletingTheApplicationPage(fullName, emailAddress, ukTelephoneNo);
});
When("I complete the fields below with Premises contact details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    await cdaStepLib.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
});
When("I complete the fields below with {string} for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const checkBox = data["Confirm check box"];
    switch (pageName.toLowerCase()) {
        case "managing director or person in charge":
            await cdaStepLib.enterManagingDirectorOrPersonInChargeFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for the security of the premises":
            await cdaStepLib.enterPersonResponsibleForTheSecurityOfThePremisesFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for legal compliance and regulatory affairs":
            await cdaStepLib.enterPersonResponsibleForLegalComplianceAndRegulatoryAffairsFullNameAndEmailDetails(fullName, emailAddress);
            break;
        case "person responsible for witnessing the destruction of controlled drugs":
            await cdaStepLib.enterPersonResponsibleForWitnessingTheDestructionOfControlledDrugs(fullName, emailAddress);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
    if (checkBox.toLowerCase() === "ticked".toLowerCase()) {
        await cdaStepLib.selectCheckboxContainText("I confirm this person has applied");
    }
    await cdaStepLib.selectSaveAndContinueButton();
});
When("I complete the fields below with {string} information for CDA:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    switch (pageName.toLowerCase()) {
        case "dbs information for the person in charge":
            await cdaStepLib.completeDbsInformationForThePersonInChargePagePage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for security of premises":
            await cdaStepLib.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for compliance and regulatory affairs":
            await cdaStepLib.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(fullName, dbsReference, dayMonthYear);
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
            await cdaStepLib.completeDbsInformationForThePersonInChargePagePage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for security of premises":
            await cdaStepLib.completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(fullName, dbsReference, dayMonthYear);
            break;
        case "dbs information for person responsible for compliance and regulatory affairs":
            await cdaStepLib.completeDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(fullName, dbsReference, dayMonthYear);
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
    await cdaStepLib.completeDbsInformationForPage(fullName, dbsReference, dayMonthYear, dbsUpdateService);
});
When("I complete the fields below with Licence details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const licenceNo = data["Licence number"];
    const licenceType = data["Licence type"];
    const dayMonthYear = data["Day month year"];
    await cdaStepLib.completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(licenceNo, licenceType, dayMonthYear);
});
When("I complete the fields below with Registration details for CDA:", async ({ pages }, dataTable: DataTable) => {
    const cdaStepLib = new CdaStepLib(pages);
    const data = dataTable.rowsHash();
    const registrationNumber = data["Registration number"];
    const dayMonthYear = data["Day month year"];
    await cdaStepLib.completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(registrationNumber, dayMonthYear);
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
        await cdaStepLib.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, addressInput);
    }
    else {
        await cdaStepLib.completeSiteOwnersContactDetailsPage(fullName, emailAddress, contactTelNo, address);
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
        await cdaStepLib.completeElectronicAlarmSystemDetailsPage(installingCompanyName, addressInput, installingCompanyRegistered);
    }
    else {
        await cdaStepLib.completeElectronicAlarmSystemDetailsPage(installingCompanyName, installingCompanyAddress, installingCompanyRegistered);
    }
});
When("I enter {string} characters in the text area box field on {string} page for CDA", async ({ pages }, charSize: string, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.enterTextIntoTextArea(charSize, pageName);
});
When("I choose to select link text {string}", async ({ pages }, linkText: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.clickOnLinkOrButtonWithText(linkText);
});
When("I choose to complete the first activities page with {string} value and leave the rest of the activities uncompleted", async ({ pages }, value: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(value);
    await cdaStepLib.completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage("");
    await cdaStepLib.completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage("");
    await cdaStepLib.completeSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage("");
    await cdaStepLib.completeSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage("");
    await cdaStepLib.completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage("");
});
When("I select Confirm Submission on Check Your Answers Page CDA", async ({ pages }) => {
    const cdaStepLib = new CdaStepLib(pages);
    await cdaStepLib.completeCheckYourAnswersPage();
});
When("I enter {string} into {string} field and page for CDA", async ({ pages }, value: string, pageName: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    switch (pageName.toLowerCase()) {
        case "when are you moving site?":
            await cdaStepLib.completeWhenAreYouMovingSitePage(value);
            break;
        case "when does the contract start?":
            await cdaStepLib.completeWhenDoesTheContractStartPage(value);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});
When("{string} link is displayed on the page for CDA", async ({ pages }, linkText: string) => {
    const cdaStepLib = new CdaStepLib(pages);
    expect(await cdaStepLib.isLinkTextIsDisplayedOnPage(linkText)).toBe(true);
});
