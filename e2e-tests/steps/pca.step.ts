import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test, type Pages } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib } from '../utility-helper/constants-lib';

const { ADDRESS_LINE_1, ADDRESS_LINE_2, AMEND_PENDING_APPLICATION, BUSINESS_OR_COMPANY_NAME, B_ADDRESS_LINE_1, B_ADDRESS_LINE_2, B_POSTCODE, B_TOWN_OR_CITY, COMPANY_NO, CONFIRM_DBS_CERTIFICATE, DATE_IS_WITHIN_3_YEARS, DBS_REFERENCE, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE, EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE, FIRST_TIME_LICENSEE, FULL_NAME, PASSWORD, POSTCODE, PRECURSOR_CHEMICALS, RESPONSE_NO, RESPONSE_YES, SAS_HOF_EMAIL, START_NEW_APPLICATION, TELEPHONE, TEXT_AREA_FIELD_DATA, TOMORROW_S_DATE, TOWN_OR_CITY, USER_NAME, WEBSITE_URL } = ConstantsLib;
import { PCA_WARNING_TEXT_FOR_DBS, PCA_WARNING_TEXT_FOR_CONVICTION, generatePcaAlphabetString } from '../test-data/pca-data';

export class PcaStepLib extends CommonCslStepLib {
  async enterResponsibleOfficerFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.pages.pcaResponsibleOfficerDetailsPage.assertPageTitle();
    await this.pages.pcaResponsibleOfficerDetailsPage.enterFullNameAndEmailDetails(fullName, email);
  }

  async enterGuarantorDetailsFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.pages.pcaGuarantorDetailsPage.assertPageTitle();
    await this.pages.pcaGuarantorDetailsPage.enterFullNameAndEmailDetails(fullName, email);
    await this.pages.pcaGuarantorDetailsPage.clickSaveAndContinue();
  }

  async selectCheckboxContainText(optText: string): Promise<void> {
    await this.pages.basePage.selectRadioOptionWithText(optText);
  }

  async completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(optText: string): Promise<void> {
    await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.assertPageTitle();
    await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.selectRadioOptionWithText(optText);
    await this.pages.pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage.clickContinue();
  }

  async completeEnterYourApplicationReferenceNumberPage(applicationRefNo: string): Promise<void> {
    await this.pages.pcaEnterYourApplicationReferenceNumberPage.assertPageTitle();
    await this.pages.pcaEnterYourApplicationReferenceNumberPage.enterApplicationReferenceNo(applicationRefNo);
    await this.pages.pcaEnterYourApplicationReferenceNumberPage.clickSaveAndContinue();
  }

  async completeWhatTypeOfLicenseeAreYouPage(optText: string): Promise<void> {
    await this.pages.pcaWhatTypeOfLicenseeAreYouPage.assertPageTitle();
    await this.pages.pcaWhatTypeOfLicenseeAreYouPage.selectWhatTypeOfLicenseeAreYou(optText);
    await this.pages.pcaWhatTypeOfLicenseeAreYouPage.clickContinue();
  }

  async completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(option1: string, option2: string): Promise<void> {
    await this.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(option1);
    await this.completeWhatTypeOfLicenseeAreYouPage(option2);
  }

  async completeLicenceHolderDetailsPage(companyName: string, companyNumber: string, ukTelPhoneNo: string, email: string, webSiteUrl: string): Promise<void> {
    await this.pages.pcaLicenceHolderDetailsPage.assertPageTitle();
    await this.pages.pcaLicenceHolderDetailsPage.enterLicenceHolderDetails(companyName, companyNumber, ukTelPhoneNo, email, webSiteUrl);
    await this.pages.pcaLicenceHolderDetailsPage.clickSaveAndContinue();
  }

  async completeLicenceHolderAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.pages.pcaLicenceHolderAddressPage.assertPageTitle();
    await this.pages.pcaLicenceHolderAddressPage.enterLicenceHolderAddress(addressLine1, addressLine2, townOrCity, postCode);
    await this.pages.pcaLicenceHolderAddressPage.clickSaveAndContinue();
  }

  async completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
    await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.assertPageTitle();
    await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage.clickSaveAndContinue();
  }

  async completePremisesContactDetailsPage(ukTelPhoneNo: string, email: string): Promise<void> {
    await this.pages.pcaPremisesContactDetailsPage.assertPageTitle();
    await this.pages.pcaPremisesContactDetailsPage.enterPremisesContactDetails(ukTelPhoneNo, email);
    await this.pages.pcaPremisesContactDetailsPage.clickSaveAndContinue();
  }

  async completePremisesAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.pages.pcaPremisesAddressPage.assertPageTitle();
    await this.pages.pcaPremisesAddressPage.enterPremisesAddress(addressLine1, addressLine2, townOrCity, postCode);
    await this.pages.pcaPremisesAddressPage.clickSaveAndContinue();
  }

  async completeResponsibleOfficerDetailsPage(fullName: string, email: string, optText: string): Promise<void> {
    await this.pages.pcaResponsibleOfficerDetailsPage.assertPageTitle();
    await this.pages.pcaResponsibleOfficerDetailsPage.enterResponsibleOfficerDetails(fullName, email, optText);
    await this.pages.pcaResponsibleOfficerDetailsPage.clickSaveAndContinue();
  }

  async completeDbsInformationForTheResponsibleOfficePage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.pages.pcaDbsInformationPage.assertPageTitle();
    await this.pages.pcaDbsInformationPage.enterDbsInformationPage(fullName, dbsReference, date);
    await this.pages.pcaDbsInformationPage.clickSaveAndContinue();
  }

  async completeGuarantorDetailsPage(fullName: string, email: string, optText: string): Promise<void> {
    await this.pages.pcaGuarantorDetailsPage.assertPageTitle();
    await this.pages.pcaGuarantorDetailsPage.enterGuarantorDetails(fullName, email, optText);
    await this.pages.pcaGuarantorDetailsPage.clickSaveAndContinue();
  }

  async completeGuarantorDbsInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.pages.pcaGuarantorDbsInformationPage.assertPageTitle();
    await this.pages.pcaGuarantorDbsInformationPage.enterGuarantorDbsInformationPage(fullName, dbsReference, date);
    await this.pages.pcaGuarantorDbsInformationPage.clickSaveAndContinue();
  }

  async completeHasTheGuarantorSubscribedToDbsUpdatesPage(option: string): Promise<void> {
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.assertPageTitle();
    const actualWarningText = await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.getWarningText();
    expect(actualWarningText).toBe(PCA_WARNING_TEXT_FOR_DBS);
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.clickSaveAndContinue();
  }

  async completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(option: string): Promise<void> {
    await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.assertPageTitle();
    const actualWarningText = await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.getWarningText();
    expect(actualWarningText).toBe(PCA_WARNING_TEXT_FOR_DBS);
    await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage.clickSaveAndContinue();
  }

  async completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(option: string): Promise<void> {
    await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.assertPageTitle();
    const actualWarningText = await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.getWarningText();
    expect(actualWarningText).toBe(PCA_WARNING_TEXT_FOR_CONVICTION);
    await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage.clickSaveAndContinue();
  }

  async completeInvoicingAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.pages.pcaInvoicingAddressPage.assertPageTitle();
    await this.pages.pcaInvoicingAddressPage.enterInvoicingAddress(addressLine1, addressLine2, townOrCity, postCode);
    await this.pages.pcaInvoicingAddressPage.clickSaveAndContinue();
  }

  async completeInvoicingContactDetailsPage(fullName: string, email: string, ukTelPhoneNo: string, purchaseOrderNo: string): Promise<void> {
    await this.pages.pcaInvoicingContactDetailsPage.assertPageTitle();
    await this.pages.pcaInvoicingContactDetailsPage.enterInvoicingContactDetails(fullName, email, ukTelPhoneNo, purchaseOrderNo);
    await this.pages.pcaInvoicingContactDetailsPage.clickSaveAndContinue();
  }

  async completeWhichCategoryIsTheSubstancePage(optText: string): Promise<void> {
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.assertPageTitle();
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.enterWhichCategoryIsTheNewSubstance(optText);
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.clickSaveAndContinue();
  }

  async completeWhichChemicalAreYouApplyingForPage(value: string): Promise<void> {
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.assertPageTitle();
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.enterWhichChemicalAreYouApplyingFor(value);
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.clickSaveAndContinue();
  }

  async selectOwnChemicalCheckboxOnWhichChemicalAreYouApplyingForPage(checkboxLabel: string): Promise<void> {
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.assertPageTitle();
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.selectOwnChemicalCheckbox(checkboxLabel);
  }

  async completeWhichChemicalAreYouApplyingForPageUsingOwnChemicalName(checkboxLabel: string, ownChemicalName: string): Promise<void> {
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.assertPageTitle();
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.selectCheckboxAndEnterOwnChemicalName(checkboxLabel, ownChemicalName);
    await this.pages.pcaWhichChemicalAreYouApplyingForPage.clickSaveAndContinue();
  }

  async completeWhichOperationAppliesToThisLicenceForXPage(optText: string): Promise<void> {
    await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.assertPageTitle();
    await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.selectWhichOperationAppliesToThisLicenceForX(optText);
    await this.pages.pcaWhichOperationAppliesToThisLicenceForXPage.clickSaveAndContinue();
  }

  async completeWhatOtherOperationsAppliesToTheLicencePage(value: string): Promise<void> {
    await this.pages.pcaWhatOtherOperationsAppliesToTheLicencePage.assertPageTitle();
    await this.pages.pcaWhatOtherOperationsAppliesToTheLicencePage.enterWhatOtherOperationsAppliesToTheLicence(value);
    await this.pages.pcaWhatOtherOperationsAppliesToTheLicencePage.clickSaveAndContinue();
  }

  async completeSubstancesInYourLicencePage(): Promise<void> {
    await this.pages.pcaSubstancesInYourLicencePage.assertPageTitle();
    await this.pages.pcaSubstancesInYourLicencePage.clickSaveAndContinue();
  }

  async completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.assertPageTitle();
    await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.enterTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedFor(textAreaValue);
    await this.pages.pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage.clickSaveAndContinue();
  }

  async completeUploadCompanyRegistrationCertificatePage(textAreaValue: string): Promise<void> {
    await this.pages.pcaUploadCompanyRegistrationCertificatePage.assertPageTitle();
    await this.pages.pcaUploadCompanyRegistrationCertificatePage.uploadFileFromUserUploadFolder(textAreaValue);
    await this.pages.pcaUploadCompanyRegistrationCertificatePage.selectContinueUploadBtn();
  }

  async completeUploadCertificateOfGoodConductPage(uploadFile: string): Promise<void> {
    await this.pages.pcaUploadCertificateOfGoodConductPage.assertPageTitle();
    await this.pages.pcaUploadCertificateOfGoodConductPage.uploadFileFromUserUploadFolder(uploadFile);
    await this.pages.pcaUploadCertificateOfGoodConductPage.selectContinueUploadBtn();
  }

  async completeTellUsAboutYourMainCustomersPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaTellUsAboutYourMainCustomersPage.assertPageTitle();
    await this.pages.pcaTellUsAboutYourMainCustomersPage.enterTellUsAboutYourMainCustomers(textAreaValue);
    await this.pages.pcaTellUsAboutYourMainCustomersPage.clickSaveAndContinue();
  }

  async completeTellUsAboutYourMainSuppliersPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaTellUsAboutYourMainSuppliersPage.assertPageTitle();
    await this.pages.pcaTellUsAboutYourMainSuppliersPage.enterTellUsAboutYourMainSuppliers(textAreaValue);
    await this.pages.pcaTellUsAboutYourMainSuppliersPage.clickSaveAndContinue();
  }

  async completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(optText: string): Promise<void> {
    await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.assertPageTitle();
    await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.selectWhatSecurityMeasuresDoYouHaveInPlaceAtThePremises(optText);
    await this.pages.pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage.clickSaveAndContinue();
  }

  async completeDescribeHowYouSecureYourPremisesPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaDescribeHowYouSecureYourPremisesPage.assertPageTitle();
    await this.pages.pcaDescribeHowYouSecureYourPremisesPage.enterDescribeHowYouSecureYourPremises(textAreaValue);
    await this.pages.pcaDescribeHowYouSecureYourPremisesPage.clickSaveAndContinue();
  }

  async completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.assertPageTitle();
    await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.enterDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurely(textAreaValue);
    await this.pages.pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage.clickSaveAndContinue();
  }

  async completeDescribeHowYouManageChemicalStockControlPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.assertPageTitle();
    await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.enterDescribeHowYouManageChemicalStockControl(textAreaValue);
    await this.pages.pcaDescribeHowYouManageChemicalStockControlPage.clickSaveAndContinue();
  }

  async completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.assertPageTitle();
    await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.enterDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimately(textAreaValue);
    await this.pages.pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage.clickSaveAndContinue();
  }

  async completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.assertPageTitle();
    await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.enterSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicals(textAreaValue);
    await this.pages.pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage.clickSaveAndContinue();
  }

  async completeWhichEmailAddressShouldTheLicenceBeSentToPage(emailValue: string): Promise<void> {
    await this.pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.assertPageTitle();
    await this.pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.enterWhichEmailAddressShouldTheLicenceBeSentTo(emailValue);
    await this.pages.pcaWhichEmailAddressShouldTheLicenceBeSentToPage.clickSaveAndContinue();
  }

  async completeWhoIsCompletingTheApplicationPage(fullName: string, ukTelPhoneNo: string, email: string): Promise<void> {
    await this.pages.pcaWhoIsCompletingTheApplicationPage.assertPageTitle();
    await this.pages.pcaWhoIsCompletingTheApplicationPage.enterWhoIsCompletingTheApplication(fullName, ukTelPhoneNo, email);
    await this.pages.pcaWhoIsCompletingTheApplicationPage.clickSaveAndContinue();
  }

  async completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(option: string, textAreaValue: string): Promise<void> {
    await this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.assertPageTitle();
    await this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.enterWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilities(option, textAreaValue);
    await this.pages.pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clickSaveAndContinue();
  }

  async completeAddAnyExtraInformationYouThinkMightHelpYourApplicationPage(textAreaValue: string): Promise<void> {
    await this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.assertPageTitle();
    await this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.enterAddAnyExtraInformationYouThinkMightHelpYourApplication(textAreaValue);
    await this.pages.pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage.clickSaveAndContinue();
  }

  async completeCheckYourAnswerPage(): Promise<void> {
    await this.pages.pcaCheckYourAnswersPage.assertPageTitle();
    await this.pages.pcaCheckYourAnswersPage.clickSaveAndContinue();
  }

  async completeDeclarationPage(optText: string): Promise<void> {
    await this.pages.pcaDeclarationPage.assertPageTitle();
    await this.pages.pcaDeclarationPage.selectRadioOptionWithText(optText);
    await this.pages.pcaDeclarationPage.clickConfirmAndSubmit();
  }

  async completeApplicationSubmittedPage(): Promise<void> {
    await this.pages.pcaApplicationSubmittedPage.assertPageTitle();
  }

  async completeWhyAreYouRequestingANewLicensePage(option: string): Promise<void> {
    await this.pages.pcaWhyAreYouRequestingANewLicensePage.assertPageTitle();
    await this.pages.pcaWhyAreYouRequestingANewLicensePage.selectRadioOptionWithText(option);
    await this.pages.pcaWhyAreYouRequestingANewLicensePage.clickSaveAndContinue();
  }

  async completeWhenAreYouMovingSitePage(date: string): Promise<void> {
    await this.pages.pcaWhenAreYouMovingSitePage.assertPageTitle();
    await this.pages.pcaWhenAreYouMovingSitePage.enterWhenAreYouMovingSite(date);
    await this.pages.pcaWhenAreYouMovingSitePage.clickSaveAndContinue();
  }

  async completeIsTheNewSitePartOfAContractualAgreementPage(option: string): Promise<void> {
    await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.assertPageTitle();
    await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaIsTheNewSitePartOfAContractualAgreementPage.clickSaveAndContinue();
  }

  async completeWhenDoesTheContractStartPage(date: string): Promise<void> {
    await this.pages.pcaWhenDoesTheContractStartPage.assertPageTitle();
    await this.pages.pcaWhenDoesTheContractStartPage.enterWhenDoesTheContractStart(date);
    await this.pages.pcaWhenDoesTheContractStartPage.clickSaveAndContinue();
  }

  async completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(textValue: string): Promise<void> {
    await this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.assertPageTitle();
    await this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(textValue);
    await this.pages.pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clickSaveAndContinue();
  }

  async completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(option: string): Promise<void> {
    await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.assertPageTitle();
    await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.clickSaveAndContinue();
  }

  async completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(option: string): Promise<void> {
    await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.assertPageTitle();
    await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.clickSaveAndContinue();
  }

  async completeYouCannotContinueThisApplicationPage(): Promise<void> {
    await this.pages.pcaYouCannotContinueThisApplicationPage.assertPageTitle();
  }

  async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(uploadFileName: string): Promise<void> {
    await this.pages.pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.assertPageTitle();
    await this.pages.pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.uploadFileFromUserUploadFolder(uploadFileName);
    await this.pages.pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.selectContinueUploadBtn();
  }

  async completePcaUploadYourCompaniesHouseDetailsPage(uploadFileName: string): Promise<void> {
    await this.pages.pcaUploadYourCompaniesHouseDetailsPage.assertPageTitle();
    await this.pages.pcaUploadYourCompaniesHouseDetailsPage.uploadFileFromUserUploadFolder(uploadFileName);
    await this.pages.pcaUploadYourCompaniesHouseDetailsPage.selectContinueUploadBtn();
  }

  async completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(option: string): Promise<void> {
    await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.assertPageTitle();
    await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage.clickSaveAndContinue();
  }

  async completeAreYouRequestingAnAdditionalCategoryPage(option: string): Promise<void> {
    await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.assertPageTitle();
    await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaAreYouRequestingAnAdditionalCategoryPage.clickSaveAndContinue();
  }

  async completeAreYouRequestingAChangeOfSubstanceOrOperationPage(option: string): Promise<void> {
    await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.assertPageTitle();
    await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaAreYouRequestingAChangeOfSubstanceOrOperationPage.clickSaveAndContinue();
  }

  async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
    await this.pages.pcaWeSavedYourApplicationAndSignedYouOutPage.assertPageTitle();
    await this.pages.pcaWeSavedYourApplicationAndSignedYouOutPage.clickSignInAgain();
  }

  async answersPrecursorChemicalsFormFor(scenario: string): Promise<void> {
    await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
    await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);

    await this.completePrecursorChemicalsHappyPathJourney(scenario, null, null);
  }

  async answersPrecursorChemicalsFormForUsingOwnChemicalName(scenario: string, checkboxLabel: string, ownChemicalName: string): Promise<void> {
    await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
    await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);

    await this.completePrecursorChemicalsHappyPathJourney(scenario, checkboxLabel, ownChemicalName);
  }

  private async completeSelectedChemicalStep(checkboxLabel: string | null, ownChemicalName: string | null, defaultChemical: string): Promise<void> {
    if (checkboxLabel != null && !(checkboxLabel.trim().length === 0) && ownChemicalName != null && !(ownChemicalName.trim().length === 0)) {
        await this.completeWhichChemicalAreYouApplyingForPageUsingOwnChemicalName(checkboxLabel, ownChemicalName);
        return;
    }

    await this.completeWhichChemicalAreYouApplyingForPage(defaultChemical);
  }

  private async completePrecursorChemicalsHappyPathJourney(scenario: string, checkboxLabel: string | null, ownChemicalName: string | null): Promise<void> {
    switch (scenario.toLowerCase()) {
        case "t1: a new application - a first time licensee - premises address is the same as the licence holder address":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;
        case "t2: a new application - existing licensee renewing or changing a currently licensed site - premises address is the same as the licence holder address":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
            await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(RESPONSE_NO);
            await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(RESPONSE_YES);
            await this.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("yourself.png");
            await this.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(RESPONSE_YES);
            await this.completeAreYouRequestingAnAdditionalCategoryPage(RESPONSE_NO);
            await this.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(RESPONSE_YES);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;
        case "t3: a new application - existing licensee renewing or changing a currently licensed site - premises address is not same as the licence holder address, operation applies is other licence":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
            await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(RESPONSE_NO);
            await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(RESPONSE_NO);
            await this.completePcaUploadYourCompaniesHouseDetailsPage("yourself.png");
            await this.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(RESPONSE_NO);
            await this.completeAreYouRequestingAnAdditionalCategoryPage(RESPONSE_YES);
            await this.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(RESPONSE_NO);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_NO);
            await this.completePremisesAddressPage(B_ADDRESS_LINE_1, B_ADDRESS_LINE_2, B_TOWN_OR_CITY, B_POSTCODE);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("I do not know");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Other");
            await this.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;
        case "t4: a new application - existing licensee applying for a new site - enter moving site date and premises address is not same as the licence holder address, operation applies is other licence":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await this.completeWhyAreYouRequestingANewLicensePage("We are moving site");
            await this.completeWhenAreYouMovingSitePage(TOMORROW_S_DATE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_NO);
            await this.completePremisesAddressPage(B_ADDRESS_LINE_1, B_ADDRESS_LINE_2, B_TOWN_OR_CITY, B_POSTCODE);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("I do not know");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Other");
            await this.completeWhatOtherOperationsAppliesToTheLicencePage("Licence name");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;
        case "t5: a new application - existing licensee applying for a new site - is not part of the contractual agreement and premises address is the same as the licence holder address":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await this.completeWhyAreYouRequestingANewLicensePage("For another site");
            await this.completeIsTheNewSitePartOfAContractualAgreementPage(RESPONSE_NO);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;
        case "t6: a new application - existing licensee applying for a new site - is part of the contractual agreement and premises address is the same as the licence holder address":
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await this.completeWhyAreYouRequestingANewLicensePage("For another site");
            await this.completeIsTheNewSitePartOfAContractualAgreementPage(RESPONSE_YES);
            await this.completeWhenDoesTheContractStartPage(TOMORROW_S_DATE);
            await this.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(TEXT_AREA_FIELD_DATA);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;

        case "t7: amend a pending application - is part of the contractual agreement and premises address is the same as the licence holder address":
            await this.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(AMEND_PENDING_APPLICATION);
            await this.completeEnterYourApplicationReferenceNumberPage("12345678");
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeSelectedChemicalStep(checkboxLabel, ownChemicalName, "Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;

        default:
            throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
    await this.completeTellUsAboutYourMainCustomersPage(TEXT_AREA_FIELD_DATA);
    await this.completeTellUsAboutYourMainSuppliersPage(TEXT_AREA_FIELD_DATA);
    await this.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
    await this.completeDescribeHowYouSecureYourPremisesPage(TEXT_AREA_FIELD_DATA);
    await this.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(TEXT_AREA_FIELD_DATA);
    await this.completeDescribeHowYouManageChemicalStockControlPage(TEXT_AREA_FIELD_DATA);
    await this.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(TEXT_AREA_FIELD_DATA);
    await this.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(TEXT_AREA_FIELD_DATA);
    await this.completeWhichEmailAddressShouldTheLicenceBeSentToPage(SAS_HOF_EMAIL);
    await this.completeWhoIsCompletingTheApplicationPage(FULL_NAME, TELEPHONE, SAS_HOF_EMAIL);
    await this.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(RESPONSE_NO, "Text Area Value");
    await this.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationPage("Text Area Value");
    await this.completeCheckYourAnswerPage();
    await this.completeDeclarationPage("I understand and accept this declaration");
    await this.completeApplicationSubmittedPage();
  }

  async answerToExistingLicenseeRenewingOrChangingCannonContinue(): Promise<void> {
    await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
    await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
    await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
    await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(RESPONSE_YES);
    await this.completeYouCannotContinueThisApplicationPage();
  }

  async answerToPage(answer: string, pageName: string): Promise<void> {
    switch (pageName.toLowerCase()) {

        case "what type of licence are you applying for?":
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
            break;

        case "how are you applying for your precursor chemicals licence?":
            await this.completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(answer);
            break;

        case "is the premises address the same as the licence holder address?":
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(answer);
            break;

        case "has the responsible officer subscribed to dbs updates?":
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(answer);
            break;

        case "which category is the substance?":
            await this.completeWhichCategoryIsTheSubstancePage(answer);
            break;

        case "what security measures do you have in place at the premises?":
            await this.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(answer);
            break;

        case "which operation applies to this licence for x":
            await this.completeWhichOperationAppliesToThisLicenceForXPage(answer);
            break;

        case "has your companies house reference number changed since your last application?":
            await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
            break;

        case "has your registered name at companies house changed since your last application?":
            await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
            break;

        case "why are you requesting a new license?":
            await this.completeWhyAreYouRequestingANewLicensePage(answer);
            break;

        case "is the new site part of a contractual agreement?":
            await this.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
            break;

        case "are you requesting to change the responsible person or guarantor for this site only?":
            await this.completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(answer);
            break;

        case "are you requesting an additional category?":
            await this.completeAreYouRequestingAnAdditionalCategoryPage(answer);
            break;

        case "are you requesting a change of substance or operation?":
            await this.completeAreYouRequestingAChangeOfSubstanceOrOperationPage(answer);
            break;

        case "has the guarantor subscribed to dbs updates?":
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(answer);
            break;

        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
  }

  async navigateToPage(pageName: string): Promise<void> {
    switch (pageName.toLowerCase()) {
        case "how would you like to apply?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            break;

        case "licence holder details":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            break;

        case "is the premises address the same as the licence holder address?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, WEBSITE_URL);
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            break;

        case "responsible officer details":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            break;

        case "guarantor details":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            break;

        case "has anyone employed by your company ever received criminal convictions":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            break;

        case "which category is the substance":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            break;

        case "upload company registration certificate":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, WEBSITE_URL);
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            break;

        case "tell us about your main customers":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            break;

        case "describe how you make sure chemicals are stored and handled securely":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            await this.completeTellUsAboutYourMainCustomersPage(TEXT_AREA_FIELD_DATA);
            await this.completeTellUsAboutYourMainSuppliersPage(TEXT_AREA_FIELD_DATA);
            await this.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
            await this.completeDescribeHowYouSecureYourPremisesPage(TEXT_AREA_FIELD_DATA);
            break;

        case "which email address should the licence be sent to":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, "", TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            await this.completeTellUsAboutYourMainCustomersPage(TEXT_AREA_FIELD_DATA);
            await this.completeTellUsAboutYourMainSuppliersPage(TEXT_AREA_FIELD_DATA);
            await this.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
            await this.completeDescribeHowYouSecureYourPremisesPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouManageChemicalStockControlPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(TEXT_AREA_FIELD_DATA);
            await this.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(TEXT_AREA_FIELD_DATA);
            break;

        case "will the regulatory affairs and compliance officer discharge all licence responsibilities":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, "", TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeWhichCategoryIsTheSubstancePage("Category 1");
            await this.completeWhichChemicalAreYouApplyingForPage("Safrole (2932 9400)");
            await this.completeWhichOperationAppliesToThisLicenceForXPage("Storage");
            await this.completeSubstancesInYourLicencePage();
            await this.completeTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(TEXT_AREA_FIELD_DATA);
            await this.completeUploadCompanyRegistrationCertificatePage("yourself.png");
            await this.completeUploadCertificateOfGoodConductPage("yourself.png");
            await this.completeTellUsAboutYourMainCustomersPage(TEXT_AREA_FIELD_DATA);
            await this.completeTellUsAboutYourMainSuppliersPage(TEXT_AREA_FIELD_DATA);
            await this.completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage("Perimeter fencing");
            await this.completeDescribeHowYouSecureYourPremisesPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouManageChemicalStockControlPage(TEXT_AREA_FIELD_DATA);
            await this.completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(TEXT_AREA_FIELD_DATA);
            await this.completeSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(TEXT_AREA_FIELD_DATA);
            await this.completeWhichEmailAddressShouldTheLicenceBeSentToPage(SAS_HOF_EMAIL);
            await this.completeWhoIsCompletingTheApplicationPage(FULL_NAME, TELEPHONE, SAS_HOF_EMAIL);
            break;

        case "has your companies house reference number changed since your last application?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
            break;

        case "why are you requesting a new license?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            break;

        case "is the new site part of a contractual agreement?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await this.completeWhyAreYouRequestingANewLicensePage("For another site");
            break;

        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
  }

  async enterTextIntoTextArea(charSize: string, pageName: string): Promise<void> {
    const textValue = generatePcaAlphabetString(charSize);

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

  async completeAndSelectSaveAndExitHasTheGuarantorSubscribedToDbsUpdatesPage(option: string): Promise<void> {
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.assertPageTitle();
    const actualWarningText = await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.getWarningText();
    expect(actualWarningText).toBe(PCA_WARNING_TEXT_FOR_DBS);
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(option);
    await this.pages.pcaHasTheGuarantorSubscribedToDbsUpdatesPage.clickSaveAndAndExit();
  }

  async completeAndSelectSaveAndExitWhichCategoryIsTheSubstancePage(optText: string): Promise<void> {
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.assertPageTitle();
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.enterWhichCategoryIsTheNewSubstance(optText);
    await this.pages.pcaWhichCategoryIsTheNewSubstancePage.clickSaveAndAndExit();
  }

  async completeAndSelectSaveAndExitWhenDoesTheContractStartPage(date: string): Promise<void> {
    await this.pages.pcaWhenDoesTheContractStartPage.assertPageTitle();
    await this.pages.pcaWhenDoesTheContractStartPage.enterWhenDoesTheContractStart(date);
    await this.pages.pcaWhenDoesTheContractStartPage.clickSaveAndAndExit();
  }

  async answersPrecursorChemicalsFormForContinuingAnApplication(scenario: string): Promise<void> {
    switch (scenario.toLowerCase()) {
        case "t1: a first time licensee - page: which category is the substance?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "https://www.hof.com");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(RESPONSE_YES);
            await this.completeInvoicingAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeInvoicingContactDetailsPage(FULL_NAME, SAS_HOF_EMAIL, TELEPHONE, DBS_REFERENCE);
            await this.completeAndSelectSaveAndExitWhichCategoryIsTheSubstancePage("Category 1");
            break;

        case "t2: existing licensee renewing or changing a currently licensed site - page: has the guarantor subscribed to dbs updates?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, FIRST_TIME_LICENSEE);
            await this.completeLicenceHolderDetailsPage(BUSINESS_OR_COMPANY_NAME, COMPANY_NO, TELEPHONE, SAS_HOF_EMAIL, "");
            await this.completeLicenceHolderAddressPage(ADDRESS_LINE_1, ADDRESS_LINE_2, TOWN_OR_CITY, POSTCODE);
            await this.completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(RESPONSE_YES);
            await this.completePremisesContactDetailsPage(TELEPHONE, SAS_HOF_EMAIL);
            await this.completeResponsibleOfficerDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeDbsInformationForTheResponsibleOfficePage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(RESPONSE_YES);
            await this.completeGuarantorDetailsPage(FULL_NAME, SAS_HOF_EMAIL, CONFIRM_DBS_CERTIFICATE);
            await this.completeGuarantorDbsInformationPage(FULL_NAME, DBS_REFERENCE, DATE_IS_WITHIN_3_YEARS);
            await this.completeAndSelectSaveAndExitHasTheGuarantorSubscribedToDbsUpdatesPage(RESPONSE_YES);
            break;

        case "t3: existing licensee applying for a new site - page: when does the contract start?":
            await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
            await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(PRECURSOR_CHEMICALS);
            await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(START_NEW_APPLICATION, EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await this.completeWhyAreYouRequestingANewLicensePage("For another site");
            await this.completeIsTheNewSitePartOfAContractualAgreementPage(RESPONSE_YES);
            await this.completeAndSelectSaveAndExitWhenDoesTheContractStartPage(TOMORROW_S_DATE);
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
  await pcaStepLib.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
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

  await pcaStepLib.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
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
          await pcaStepLib.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
          break;

      case "premises":
          await pcaStepLib.completePremisesAddressPage(addressLine1, addressLine2, townOrCity, postcode);
          break;

      case "invoicing":
          await pcaStepLib.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
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

  await pcaStepLib.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo);
}

When("I complete the fields below with Invoicing contact details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_invoicing_contact_details(pages, dataTable);
});

export async function i_complete_the_fields_below_with_premises_contact_details_for_pca(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const ukTelephoneNo = data["UK telephone number"];
  const emailAddress = data["Email address"];

  await pcaStepLib.completePremisesContactDetailsPage(ukTelephoneNo, emailAddress);
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
          await pcaStepLib.enterResponsibleOfficerFullNameAndEmailDetails(fullName, emailAddress);
          break;

      case "guarantor details":
          await pcaStepLib.enterGuarantorDetailsFullNameAndEmailDetails(fullName, emailAddress);
          break;

      default:
          throw new Error("Failed: Wrong page name: " + pageName);
  }

  if (checkBox.toLowerCase() === "ticked".toLowerCase()) {
      await pcaStepLib.selectCheckboxContainText("I confirm this person has applied");
  }

  await pcaStepLib.selectSaveAndContinueButton();
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
          await pcaStepLib.completeDbsInformationForTheResponsibleOfficePage(fullName, dbsReference, dayMonthYear);
          break;

      case "guarantor dbs":
          await pcaStepLib.completeGuarantorDbsInformationPage(fullName, dbsReference, dayMonthYear);
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
  await pcaStepLib.completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(option);
}

When("I choose to select {string} option on the {string} page for PCA", async ({ pages }, option: string, pageName: string) => {
  await i_choose_to_select_option_on_the_page_for_pca(pages, option, pageName);
});

export async function i_enter_into_the_email_field_on_page_for_pca(pages: Pages, value: string, pageName: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  switch (pageName.toLowerCase()) {
      case "which email address should the licence be sent to?":
          await pcaStepLib.completeWhichEmailAddressShouldTheLicenceBeSentToPage(value);
          break;

      case "which chemical are you applying for?":
          await pcaStepLib.completeWhichChemicalAreYouApplyingForPage(value);
          break;

      case "when are you moving site?":
          await pcaStepLib.completeWhenAreYouMovingSitePage(value);
          break;

      case "when does the contract start?":
          await pcaStepLib.completeWhenDoesTheContractStartPage(value);
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
          await pcaStepLib.selectOwnChemicalCheckboxOnWhichChemicalAreYouApplyingForPage(checkboxLabel);
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

  await pcaStepLib.completeWhoIsCompletingTheApplicationPage(fullName, ukTelephoneNo, emailAddress);
}

When("I complete the fields below with Who is completing the application details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_who_is_completing_the_application_details_for_pca(pages, dataTable);
});

export async function i_complete_the_fields_below_with_will_the_regulatory_affairs_and_compliance_officer_discharge_all_licence_responsibilities_details_details_for_pca(pages: Pages, dataTable: DataTable): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  const data = dataTable.rowsHash();

  const radioOption = data["Radio Option"];
  const textArea = data["Text Area"];

  await pcaStepLib.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(radioOption, textArea);
}

When("I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for PCA:", async ({ pages }, dataTable: DataTable) => {
  await i_complete_the_fields_below_with_will_the_regulatory_affairs_and_compliance_officer_discharge_all_licence_responsibilities_details_details_for_pca(pages, dataTable);
});

export async function linkIsDisplayedOnThePageForPCA(pages: Pages, linkText: string): Promise<void> {
  const pcaStepLib = new PcaStepLib(pages);
  expect(await pcaStepLib.isLinkTextIsDisplayedOnPage(linkText)).toBe(true);
}

Then("{string} link is displayed on the page for PCA", async ({ pages }, linkText: string) => {
  await linkIsDisplayedOnThePageForPCA(pages, linkText);
});
