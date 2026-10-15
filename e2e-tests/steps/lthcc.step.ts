import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test, type Pages } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

export class LthccStepLib extends CommonCslStepLib {
    async selectLinkWithText(linkText: string): Promise<void> {
        await this.pages.basePage.clickLinkWithText(linkText);
    }

    async selectCheckboxContainText(optText: string): Promise<void> {
        await this.pages.basePage.selectRadioOptionWithText(optText);
    }

    async enterDetailsOfTheResponsiblePersonForTheSiteFullNameTelephoneNoAndEmailDetails(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.assertPageTitle();
        await this.pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.enterDetailsOfTheResponsiblePersonForTheSiteWithoutConfirmingDbs(fullName, telephoneNumber, email);
    }

    async enterAuthorisedWitnessDetails(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.pages.lthccAuthorisedWitnessDetailsPage.assertPageTitle();
        await this.pages.lthccAuthorisedWitnessDetailsPage.enterAuthorisedWitnessDetailsWithoutConfirmingDbs(fullName, telephoneNumber, email);
    }

    async completeHowAreYouApplyingForYourLowThcCannabisLicencePage(optionText: string): Promise<void> {
        await this.pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.assertPageTitle();
        await this.pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.selectRadioOptionWithText(optionText);
        await this.pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.clickContinue();
    }

    async completeEnterYourApplicationReferenceNumberPage(applicationRefNo: string): Promise<void> {
        await this.pages.lthccEnterYourApplicationReferenceNumberPage.assertPageTitle();
        await this.pages.lthccEnterYourApplicationReferenceNumberPage.enterApplicationReferenceNo(applicationRefNo);
        await this.pages.lthccEnterYourApplicationReferenceNumberPage.clickSaveAndContinue();
    }

    async completeWhatTypeOfLowThcCannabisLicenceAreYouPage(optionText: string): Promise<void> {
        await this.pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.assertPageTitle();
        await this.pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.selectRadioOptionWithText(optionText);
        await this.pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.clickSaveAndContinue();
    }

    async completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(optionText1: string, optionText2: string): Promise<void> {
        await this.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(optionText1);
        await this.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(optionText2);
    }

    async completeLicenceHolderAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.lthccLicenceHolderAddressPage.assertPageTitle();
        await this.pages.lthccLicenceHolderAddressPage.enterLicenceHolderAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.lthccLicenceHolderAddressPage.clickSaveAndContinue();
    }

    async completeLicenceHolderDetailsPage(companyName: string, companyNumber: string, ukTelPhoneNo: string, email: string, webSiteUrl: string): Promise<void> {
        await this.pages.lthccLicenceHolderDetailsPage.assertPageTitle();
        await this.pages.lthccLicenceHolderDetailsPage.enterLicenceHolderDetails(companyName, companyNumber, ukTelPhoneNo, email, webSiteUrl);
        await this.pages.lthccLicenceHolderDetailsPage.clickSaveAndContinue();
    }

    async completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.assertPageTitle();
        await this.pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.enterAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivated(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.clickSaveAndContinue();
    }

    async completeGrowingLocationContactDetailsPagePage(email: string, ukTelPhoneNo: string): Promise<void> {
        await this.pages.lthccGrowingLocationContactDetailsPage.assertPageTitle();
        await this.pages.lthccGrowingLocationContactDetailsPage.enterGrowingLocationContactDetails(email, ukTelPhoneNo);
        await this.pages.lthccGrowingLocationContactDetailsPage.clickSaveAndContinue();
    }

    async completeDetailsOfTheResponsiblePersonForTheSitePage(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.assertPageTitle();
        await this.pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.enterDetailsOfTheResponsiblePersonForTheSite(fullName, telephoneNumber, email, optValue);
        await this.pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.clickSaveAndContinue();
    }

    async completeDbsInformationForTheResponsiblePersonPage(fullName: string, dbsReference: string, dateValue: string): Promise<void> {
        await this.pages.lthccDbsInformationForTheResponsiblePersonPage.assertPageTitle();
        await this.pages.lthccDbsInformationForTheResponsiblePersonPage.enterDbsInformationForTheResponsiblePerson(fullName, dbsReference, dateValue);
        await this.pages.lthccDbsInformationForTheResponsiblePersonPage.clickSaveAndContinue();
    }

    async completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(optValue: string): Promise<void> {
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.assertPageTitle();
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(optValue);
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.clickSaveAndContinue();
    }

    async completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(option: string): Promise<void> {
        await this.pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.assertPageTitle();
        await this.pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.clickSaveAndContinue();
    }

    async completeHowWillTheLeavesAndFlowersBeDestroyedPage(value: string): Promise<void> {
        await this.pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.assertPageTitle();
        await this.pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.enterHowWillTheLeavesAndFlowersBeDestroyed(value);
        await this.pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.clickSaveAndContinue();
    }

    async completeAuthorisedWitnessDetailsPage(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.pages.lthccAuthorisedWitnessDetailsPage.assertPageTitle();
        await this.pages.lthccAuthorisedWitnessDetailsPage.enterAuthorisedWitnessDetails(fullName, telephoneNumber, email, optValue);
        await this.pages.lthccAuthorisedWitnessDetailsPage.clickSaveAndContinue();
    }

    async completeDbsInformationForAuthorisedWitnessPage(fullName: string, dbsReference: string, dateValue: string): Promise<void> {
        await this.pages.lthccDbsInformationForAuthorisedWitnessPage.assertPageTitle();
        await this.pages.lthccDbsInformationForAuthorisedWitnessPage.enterDbsInformationForAuthorisedWitness(fullName, dbsReference, dateValue);
        await this.pages.lthccDbsInformationForAuthorisedWitnessPage.clickSaveAndContinue();
    }

    async completeHasTheAuthorisedWitnessSubscribedToDbsPage(option: string): Promise<void> {
        await this.pages.lthccHasTheAuthorisedWitnessSubscribedToDbsPage.assertPageTitle();
        await this.pages.lthccHasTheAuthorisedWitnessSubscribedToDbsPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasTheAuthorisedWitnessSubscribedToDbsPage.clickSaveAndContinue();
    }

    async completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(option: string): Promise<void> {
        await this.pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.assertPageTitle();
        await this.pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.clickSaveAndContinue();
    }

    async completeProvideDetailsOfTheLegalBusinessProceedingsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.enterProvideDetailsOfTheLegalBusinessProceedings(textAreaValue);
        await this.pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.clickSaveAndContinue();
    }

    async completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(option: string): Promise<void> {
        await this.pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.assertPageTitle();
        expect(await this.pages.basePage.isLinkTextDisplayed("dflu.dom@homeoffice.gov.uk")).toBe(true);
        await this.pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.clickSaveAndContinue();
    }

    async completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(option: string): Promise<void> {
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.assertPageTitle();
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.clickSaveAndContinue();
    }

    async completeLicenceDetailsPage(licenceType: string, licenceNumber: string, date: string): Promise<void> {
        await this.pages.lthccLicenceDetailsPage.assertPageTitle();
        await this.pages.lthccLicenceDetailsPage.enterLicenceDetails(licenceType, licenceNumber, date);
        await this.pages.lthccLicenceDetailsPage.clickSaveAndContinue();
    }

    async completeHasYourOrganisationEverBeenRefusedALicencePage(option: string): Promise<void> {
        await this.pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.assertPageTitle();
        await this.pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.clickSaveAndContinue();
    }

    async completeDetailsOfWhyYouWereRefusedALicencePage(textAreaValue: string): Promise<void> {
        await this.pages.lthccDetailsOfWhyYouWereRefusedALicencePage.assertPageTitle();
        await this.pages.lthccDetailsOfWhyYouWereRefusedALicencePage.enterDetailsOfWhyYouWereRefusedALicence(textAreaValue);
        await this.pages.lthccDetailsOfWhyYouWereRefusedALicencePage.clickSaveAndContinue();
    }

    async completeWhatTypeOfCompanyIsYourOrganisationPage(optionText: string): Promise<void> {
        await this.pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.assertPageTitle();
        await this.pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.selectRadioOptionWithText(optionText);
        await this.pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.clickSaveAndContinue();
    }

    async completeDescribeYourBusinessModelPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccDescribeYourBusinessModelPage.assertPageTitle();
        await this.pages.lthccDescribeYourBusinessModelPage.enterDescribeYourBusinessModel(textAreaValue);
        await this.pages.lthccDescribeYourBusinessModelPage.clickSaveAndContinue();
    }

    async completeUploadCompanyRegistrationCertificatePage(fileName: string): Promise<void> {
        await this.pages.lthccUploadCompanyRegistrationCertificatePage.assertPageTitle();
        await this.pages.lthccUploadCompanyRegistrationCertificatePage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.lthccUploadCompanyRegistrationCertificatePage.selectContinueUploadBtn();
    }

    async completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(option: string): Promise<void> {
        await this.pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.assertPageTitle();
        await this.pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.clickSaveAndContinue();
    }

    async completeYouNeedToApplyForAControlledDrugLicencePage(): Promise<void> {
        await this.pages.lthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage.assertPageTitle();
    }

    async completeWhereWillYouBeCultivatingTheLowThcCannabisPage(optionText: string): Promise<void> {
        await this.pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.assertPageTitle();
        await this.pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.selectRadioOptionWithText(optionText);
        await this.pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.clickSaveAndContinue();
    }

    async completeYouNeedToApplyForAControlledDrugsLicenceNoToHempPag(): Promise<void> {
        await this.pages.lthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage.assertPageTitle();
    }

    async completeWhatIsTheTotalAcreageOfTheFieldsPage(textValue: string): Promise<void> {
        await this.pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.assertPageTitle();
        await this.pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.enterWhatIsTheTotalAcreageOfTheFields(textValue);
        await this.pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.clickSaveAndContinue();
    }

    async completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage(textValue: string): Promise<void> {
        await this.pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.assertPageTitle();
        await this.pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.enterHowManyFieldsAreYouProposingToCultivateLowThcCannabisIn(textValue);
        await this.pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.clickSaveAndContinue();
    }

    async completeDetailsOfCultivationFieldsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccDetailsOfCultivationFieldsPage.assertPageTitle();
        await this.pages.lthccDetailsOfCultivationFieldsPage.enterDetailsOfCultivationFields(textAreaValue);
        await this.pages.lthccDetailsOfCultivationFieldsPage.clickSaveAndContinue();
    }

    async completeUploadAerialPhotosAndSiteMapsPage(fileName: string): Promise<void> {
        await this.pages.lthccUploadAerialPhotosAndSiteMapsPage.assertPageTitle();
        await this.pages.lthccUploadAerialPhotosAndSiteMapsPage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.lthccUploadAerialPhotosAndSiteMapsPage.selectContinueUploadBtn();
    }

    async completeDoesYourCompanyOwnAllTheFieldsPage(option: string): Promise<void> {
        await this.pages.lthccDoesYourCompanyOwnAllTheFieldsPage.assertPageTitle();
        await this.pages.lthccDoesYourCompanyOwnAllTheFieldsPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoesYourCompanyOwnAllTheFieldsPage.clickSaveAndContinue();
    }

    async completeWhoOwnsTheFieldsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccWhoOwnsTheFieldsPage.assertPageTitle();
        await this.pages.lthccWhoOwnsTheFieldsPage.enterWhoOwnsTheFields(textAreaValue);
        await this.pages.lthccWhoOwnsTheFieldsPage.clickSaveAndContinue();
    }

    async completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(option: string): Promise<void> {
        await this.pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.assertPageTitle();
        await this.pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.clickSaveAndContinue();
    }

    async completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(option: string): Promise<void> {
        await this.pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.assertPageTitle();
        await this.pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.clickSaveAndContinue();
    }


    async completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(option: string): Promise<void> {
        await this.pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.assertPageTitle();
        await this.pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.clickSaveAndContinue();
    }

    async completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(option: string): Promise<void> {
        await this.pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.assertPageTitle();
        await this.pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.clickSaveAndContinue();
    }

    async completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName: string, typeOfBusiness: string, whoOwnOfBusiness: string, describeBusiness: string, reference: string): Promise<void> {
        await this.pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.assertPageTitle();
        await this.pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.enterDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSite(businessName, typeOfBusiness, whoOwnOfBusiness, describeBusiness, reference);
        await this.pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.clickSaveAndContinue();
    }

    async completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(): Promise<void> {
        await this.pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.assertPageTitle();
        await this.pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.clickSaveAndContinue();
    }

    async completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(option: string): Promise<void> {
        await this.pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.assertPageTitle();
        await this.pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.clickSaveAndContinue();
    }

    async completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.assertPageTitle();
        await this.pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.enterProvideTheAddressesOfTheFieldsThatAreInADifferentPostcode(textAreaValue);
        await this.pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.clickSaveAndContinue();
    }

    async completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(textAreaValue: string): Promise<void> {
        await this.pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.assertPageTitle();
        await this.pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.enterWhatIsAdjacentToEachOfTheFieldsYouIntendCultivate(textAreaValue);
        await this.pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.clickSaveAndContinue();
    }

    async completePerimeterDetailsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccPerimeterDetailsPage.assertPageTitle();
        await this.pages.lthccPerimeterDetailsPage.enterPerimeterDetails(textAreaValue);
        await this.pages.lthccPerimeterDetailsPage.clickSaveAndContinue();
    }

    async completeUploadImagesOfThePerimeterPage(fileName: string): Promise<void> {
        await this.pages.lthccUploadImagesOfThePerimeterPage.assertPageTitle();
        await this.pages.lthccUploadImagesOfThePerimeterPage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.lthccUploadImagesOfThePerimeterPage.selectContinueUploadBtn();
    }

    async completeProvideDetailsOfYourRecordKeepingPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfYourRecordKeepingPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfYourRecordKeepingPage.enterProvideDetailsOfYourRecordKeeping(textAreaValue);
        await this.pages.lthccProvideDetailsOfYourRecordKeepingPage.clickSaveAndContinue();
    }

    async completeUploadImagesOfYourRecordKeepingDocumentsPage(fileName: string): Promise<void> {
        await this.pages.lthccUploadImagesOfYourRecordKeepingDocumentsPage.assertPageTitle();
        await this.pages.lthccUploadImagesOfYourRecordKeepingDocumentsPage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.lthccUploadImagesOfYourRecordKeepingDocumentsPage.selectContinueUploadBtn();
    }


    async completeProvideDetailsOfYourSeedSuppliersPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfYourSeedSuppliersPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfYourSeedSuppliersPage.enterProvideDetailsOfYourSeedSuppliers(textAreaValue);
        await this.pages.lthccProvideDetailsOfYourSeedSuppliersPage.clickSaveAndContinue();
    }

    async completeProvideDetailsOfYourCustomerBasePage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfYourCustomerBasePage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfYourCustomerBasePage.enterProvideDetailsOfYourCustomerBase(textAreaValue);
        await this.pages.lthccProvideDetailsOfYourCustomerBasePage.clickSaveAndContinue();
    }

    async completeProvideDetailsOfYourEndProductsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfYourEndProductsPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfYourEndProductsPage.enterProvideDetailsOfYourEndProducts(textAreaValue);
        await this.pages.lthccProvideDetailsOfYourEndProductsPage.clickSaveAndContinue();
    }

    async completeProvideDetailsOfHowYouProduceYourEndProductsPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.enterProvideDetailsOfHowYouProduceYourEndProducts(textAreaValue);
        await this.pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.clickSaveAndContinue();
    }

    async completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.assertPageTitle();
        await this.pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.enterProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabis(textAreaValue);
        await this.pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.clickSaveAndContinue();
    }

    async completeProvideTheThcContentLevelPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccProvideTheThcContentLevelPage.assertPageTitle();
        await this.pages.lthccProvideTheThcContentLevelPage.enterProvideTheThcContentLevel(textAreaValue);
        await this.pages.lthccProvideTheThcContentLevelPage.clickSaveAndContinue();
    }

    async completeInvoicingAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.pages.lthccInvoicingAddressPage.assertPageTitle();
        await this.pages.lthccInvoicingAddressPage.enterInvoicingAddress(addressLine1, addressLine2, townOrCity, postCode);
        await this.pages.lthccInvoicingAddressPage.clickSaveAndContinue();
    }

    async completeInvoicingContactDetailsPage(contactName: string, email: string, contactNo: string, purchaseOrderNo: string, refundAccount: string): Promise<void> {
        await this.pages.lthccInvoicingContactDetailsPage.assertPageTitle();
        await this.pages.lthccInvoicingContactDetailsPage.enterInvoicingContactDetails(contactName, email, contactNo, purchaseOrderNo, refundAccount);
        await this.pages.lthccInvoicingContactDetailsPage.clickSaveAndContinue();
    }

    async completeWhichEmailAddressShouldWeSendTheLicenceToPage(email: string): Promise<void> {
        await this.pages.lthccWhichEmailAddressShouldWeSendTheLicenceToPage.assertPageTitle();
        await this.pages.lthccWhichEmailAddressShouldWeSendTheLicenceToPage.enterWhichEmailAddressShouldWeSendTheLicenceTo(email);
        await this.pages.lthccWhichEmailAddressShouldWeSendTheLicenceToPage.clickSaveAndContinue();
    }

    async completeWhoIsCompletingTheApplicationPage(fullName: string, email: string, contactPhone: string): Promise<void> {
        await this.pages.lthccWhoIsCompletingTheApplicationPage.assertPageTitle();
        await this.pages.lthccWhoIsCompletingTheApplicationPage.enterWhoIsCompletingTheApplication(fullName, email, contactPhone);
        await this.pages.lthccWhoIsCompletingTheApplicationPage.clickSaveAndContinue();
    }

    async completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(option: string, textAreaValue: string): Promise<void> {
        await this.pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.assertPageTitle();
        await this.pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.enterWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilities(option, textAreaValue);
        await this.pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clickSaveAndContinue();
    }

    async completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(textAreaValue: string): Promise<void> {
        await this.pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.assertPageTitle();
        await this.pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.enterAddAnyExtraInformationYouThinkMightHelpYourApplicationOptional(textAreaValue);
        await this.pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clickSaveAndContinue();
    }


    //Existing licensee applying for a new site
    async completeWhyAreYouRequestingANewLicencePage(optionText: string): Promise<void> {
        await this.pages.lthccWhyAreYouRequestingANewLicencePage.assertPageTitle();
        await this.pages.lthccWhyAreYouRequestingANewLicencePage.selectRadioOptionWithText(optionText);
        await this.pages.lthccWhyAreYouRequestingANewLicencePage.clickSaveAndContinue();
    }

    async completeWhenAreYouMovingSitePage(date: string): Promise<void> {
        await this.pages.lthccWhenAreYouMovingSitePage.assertPageTitle();
        await this.pages.lthccWhenAreYouMovingSitePage.enterDateOrDob(date);
        await this.pages.lthccWhenAreYouMovingSitePage.clickSaveAndContinue();
    }

    async completeIsTheNewSitePartOfAContractualAgreementPage(option: string): Promise<void> {
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.assertPageTitle();
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.clickSaveAndContinue();
    }

    async completeWhenDoesTheContractStartPage(date: string): Promise<void> {
        await this.pages.lthccWhenDoesTheContractStartPage.assertPageTitle();
        await this.pages.lthccWhenDoesTheContractStartPage.enterDateOrDob(date);
        await this.pages.lthccWhenDoesTheContractStartPage.clickSaveAndContinue();
    }

    async completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(textAreaText: string): Promise<void> {
        await this.pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.assertPageTitle();
        await this.pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(textAreaText);
        await this.pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clickSaveAndContinue();
    }

    //Existing licensee renewing or changing a currently licensed site

    async completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.assertPageTitle();
        await this.pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.clickSaveAndContinue();
    }

    async completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.assertPageTitle();
        await this.pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.clickSaveAndContinue();
    }

    async completeYouCannotContinueThisApplicationPage(): Promise<void> {
        await this.pages.lthccYouCannotContinueThisApplicationPage.assertPageTitle();
    }

    async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(fileName: string): Promise<void> {
        await this.pages.lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.assertPageTitle();
        await this.pages.lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.uploadFileFromUserUploadFolder(fileName);
        await this.pages.lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage.selectContinueUploadBtn();
    }

    async completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(option: string): Promise<void> {
        await this.pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.assertPageTitle();
        await this.pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.clickSaveAndContinue();
    }

    async completeAreYouRequestingAdditionalSchedulesPage(option: string): Promise<void> {
        await this.pages.lthccAreYouRequestingAdditionalSchedulesPage.assertPageTitle();
        await this.pages.lthccAreYouRequestingAdditionalSchedulesPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreYouRequestingAdditionalSchedulesPage.clickSaveAndContinue();
    }

    async completeAreYouRequestingAChangeOfActivityPage(option: string): Promise<void> {
        await this.pages.lthccAreYouRequestingAChangeOfActivityPage.assertPageTitle();
        await this.pages.lthccAreYouRequestingAChangeOfActivityPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccAreYouRequestingAChangeOfActivityPage.clickSaveAndContinue();
    }


    async completeCheckYourAnswersPage(): Promise<void> {
        await this.pages.lthccCheckYourAnswersPage.assertPageTitle();
        await this.pages.lthccCheckYourAnswersPage.clickSaveAndContinue();
    }

    async completeDeclarationPage(optionText: string): Promise<void> {
        await this.pages.lthccDeclarationPage.assertPageTitle();
        await this.pages.lthccDeclarationPage.selectRadioOptionWithText(optionText);
        await this.pages.lthccDeclarationPage.clickConfirmAndSubmit();
    }

    async completeApplicationSubmittedPage(): Promise<void> {
        await this.pages.lthccApplicationSubmittedPage.assertPageTitle();
    }

    async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
        await this.pages.lthccWeSavedYourApplicationAndSignedYouOutPage.assertPageTitle();
        await this.pages.lthccWeSavedYourApplicationAndSignedYouOutPage.clickSignInAgain();
    }

    async answersLowThcCannabisFormFor(scenario: string): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

        switch (scenario.toLowerCase()) {
            case "t1: a new application - a first time licensee - yes authorised destruction - no company own fields - yes businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_YES);
                await this.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF", c.BUSINESS_DETAILS, "SZ659856");
                //Add another BusinessesAdjacent
                await this.pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.clickLinkWithText("Add another business");
                await this.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF2Test", c.BUSINESS_DETAILS, "12QW1234");
                await this.completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage();
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_YES);
                await this.completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(c.TEXT_AREA_FIELD_DATA);
                break;

            case "t2: a new application - existing licensee renewing or changing a currently licensed site - yes upload - no authorised destruction - yes company own fields - no businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
                await this.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("cslCdat.pdf");
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_YES);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_YES);
                //Existing licensee renewing or changing a currently licensed site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                break;

            case "t3: a new application - existing licensee renewing or changing a currently licensed site - no upload - no authorised destruction - yes company own fields - no businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
                //Existing licensee renewing or changing a currently licensed site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                break;

            case "t4: a new application - existing licensee applying for a new site - we are moving site - no authorised destruction - yes company own fields - no businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicencePage("We are moving site");
                await this.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
                //Existing licensee applying for a new site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                break;

            case "t5: a new application - existing licensee applying for a new site - for another site - agreement no - no authorised destruction - yes company own fields - no businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicencePage("For another site");
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
                //Existing licensee applying for a new site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                break;

            case "t6: a new application - existing licensee applying for a new site - for another site - agreement yes - no authorised destruction - yes company own fields - no businesses adjacent to site":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicencePage("For another site");
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
                await this.completeWhenDoesTheContractStartPage(c.YESTERDAY_S_DATE);
                await this.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
                //Existing licensee applying for a new site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                break;

            case "t7: amend a pending application - yes authorised destruction - no company own fields - yes businesses adjacent to site":
                await this.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.AMEND_PENDING_APPLICATION);
                await this.completeEnterYourApplicationReferenceNumberPage("12345678");
                //Amend a pending application => A first time licensee
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_YES);
                await this.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF", c.BUSINESS_DETAILS, "SZ659856");
                await this.completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage();
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_YES);
                await this.completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(c.TEXT_AREA_FIELD_DATA);
                break;

            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
        await this.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
        await this.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
        await this.completeProvideDetailsOfYourRecordKeepingPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeUploadImagesOfYourRecordKeepingDocumentsPage("cslCdat.pdf");
        await this.completeProvideDetailsOfYourSeedSuppliersPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfYourCustomerBasePage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfHowYouProduceYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeProvideTheThcContentLevelPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
        await this.completeInvoicingContactDetailsPage(c.CONTACT_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, "123456789", c.TEXT_AREA_FIELD_DATA);
        await this.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
        await this.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE);
        await this.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(c.RESPONSE_NO, c.TEXT_AREA_FIELD_DATA);
        await this.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(c.TEXT_AREA_FIELD_DATA);
        await this.completeCheckYourAnswersPage();
        await this.completeDeclarationPage("I understand and agree with these statements");
        await this.completeApplicationSubmittedPage();
    }


    async answersLthccFormWhenYouNeedToApplyForControlledDrugsLicenceFor(scenario: string): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

        switch (scenario.toLowerCase()) {
            case "t1: when no licence needed to cultivate and possess low thc cannabis (industrial hemp)":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_NO);
                await this.completeYouNeedToApplyForAControlledDrugLicencePage();
                break;

            case "t2: when inside is where you be cultivating the low thc cannabis":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Inside");
                await this.completeYouNeedToApplyForAControlledDrugsLicenceNoToHempPag();
                break;

            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
    }


    async answerToExistingLicenseeRenewingOrChangingCannonContinue(): Promise<void> {
        //Existing licensee renewing or changing a currently licensed site
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
        await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
        await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
        await this.completeYouCannotContinueThisApplicationPage();
    }

    //************************************** Validation HOF Test Data ************************************************//

    async answerToPage(answer: string, pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {

            case "what type of licence are you applying for?":
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
                break;

            case "how are you applying for your low thc cannabis license?":
                await this.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(answer);
                break;

            case "has the responsible person subscribed to dbs updates?":
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(answer);
                break;

            case "do you require somebody within your company to be authorised to witness the destruction of the plant?":
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(answer);
                break;

            case "has the authorised witness subscribed to dbs updates?":
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(answer);
                break;

            case "why are you requesting a new licence?":
                await this.completeWhyAreYouRequestingANewLicencePage(answer);
                break;

            case "is the new site part of a contractual agreement?":
                await this.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
                break;

            case "has anyone in your organisation ever been subject to legal business proceedings?":
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(answer);
                break;

            case "has your companies house reference number changed since your last application?":
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
                break;

            case "has your registered name at companies house changed since your last application?":
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
                break;

            case "do you hold any home office or other regulatory licenses?":
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(answer);
                break;

            case "has your organisation ever been refused a licence?":
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(answer);
                break;

            case "what type of company is your organisation":
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage(answer);
                break;

            case "are you requesting a change in authorised witness for this site only?":
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(answer);
                break;

            case "are you requesting additional schedules?":
                await this.completeAreYouRequestingAdditionalSchedulesPage(answer);
                break;

            case "is the licence needed to cultivate and possess low thc cannabis (industrial hemp)?":
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(answer);
                break;

            case "where will you be cultivating the low thc cannabis?":
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage(answer);
                break;

            case "what is the total acreage of the fields?":
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage(answer);
                break;

            case "how many fields are you proposing to cultivate low thc cannabis in?":
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage(answer);
                break;

            case "does your company own all the fields?":
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(answer);
                break;

            case "do you have permission from the owner to carry out your intended activities?":
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(answer);
                break;

            case "are there any other businesses operating from your intended cultivation site?":
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(answer);
                break;

            case "do you own any other businesses operating from your intended cultivation site?":
                await this.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(answer);
                break;

            case "are any of the fields in a different postcode to the site address?":
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(answer);
                break;

            case "are there any business adjacent to your intended cultivation site?":
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(answer);
                break;
            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }

    async navigateToPage(pageName: string): Promise<void> {
        switch (pageName.toLowerCase()) {
            case "what type of licence are you applying for?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                break;

            case "licence holder details":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                break;

            case "details of the responsible person for the site":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                break;

            case "how will the leaves and flowers be destroyed?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                break;

            case "why are you requesting a new licence?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                break;

            case "has your companies house reference number changed since your last application?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                break;

            case "do you hold any home office or other regulatory licenses?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                break;

            case "describe your business model":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                break;

            case "upload aerial photos and site maps":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
                await this.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                break;


            case "are there any business adjacent to your intended cultivation site?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                break;

            case "provide details of your record keeping":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                await this.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
                await this.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
                break;

            case "invoicing address":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                await this.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
                await this.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
                await this.completeProvideDetailsOfYourRecordKeepingPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadImagesOfYourRecordKeepingDocumentsPage("cslCdat.pdf");
                await this.completeProvideDetailsOfYourSeedSuppliersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourCustomerBasePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfHowYouProduceYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideTheThcContentLevelPage(c.TEXT_AREA_FIELD_DATA);
                break;


            case "who is completing the application?":
                await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
                await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
                await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
                await this.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
                await this.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
                await this.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
                await this.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
                await this.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
                await this.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
                await this.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
                await this.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
                await this.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
                await this.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
                await this.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
                await this.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
                await this.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
                await this.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
                await this.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
                await this.completeProvideDetailsOfYourRecordKeepingPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeUploadImagesOfYourRecordKeepingDocumentsPage("cslCdat.pdf");
                await this.completeProvideDetailsOfYourSeedSuppliersPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourCustomerBasePage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfHowYouProduceYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeProvideTheThcContentLevelPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeInvoicingContactDetailsPage(c.CONTACT_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, "123456789", c.TEXT_AREA_FIELD_DATA);
                await this.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }


    async enterTextIntoTextArea(length: string, pageName: string): Promise<void> {
        const textValue = await this.generateRandomStringOfLength(length);

        switch (pageName.toLowerCase()) {
            case "how will the leaves and flowers be destroyed?":
                await this.pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.clearAndEnterTextInElement(this.pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.textAreaField, textValue);
                break;

            case "provide details of the legal business proceedings":
                await this.pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.textAreaField, textValue);
                break;

            case "details of why you were refused a licence":
                await this.pages.lthccDetailsOfWhyYouWereRefusedALicencePage.clearAndEnterTextInElement(this.pages.lthccDetailsOfWhyYouWereRefusedALicencePage.textAreaField, textValue);
                break;

            case "tell us more about the contract and how it affects your licence application":
                await this.pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(this.pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
                break;

            case "describe your business model":
                await this.pages.lthccDescribeYourBusinessModelPage.clearAndEnterTextInElement(this.pages.lthccDescribeYourBusinessModelPage.textAreaField, textValue);
                break;

            case "details of cultivation fields":
                await this.pages.lthccDetailsOfCultivationFieldsPage.clearAndEnterTextInElement(this.pages.lthccDetailsOfCultivationFieldsPage.textAreaField, textValue);
                break;

            case "who owns the fields?":
                await this.pages.lthccWhoOwnsTheFieldsPage.clearAndEnterTextInElement(this.pages.lthccWhoOwnsTheFieldsPage.textAreaField, textValue);
                break;

            case "provide details of your record keeping":
                await this.pages.lthccProvideDetailsOfYourRecordKeepingPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfYourRecordKeepingPage.textAreaField, textValue);
                break;

            case "provide details of your seed suppliers":
                await this.pages.lthccProvideDetailsOfYourSeedSuppliersPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfYourSeedSuppliersPage.textAreaField, textValue);
                break;

            case "provide details of your customer base":
                await this.pages.lthccProvideDetailsOfYourCustomerBasePage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfYourCustomerBasePage.textAreaField, textValue);
                break;

            case "provide details of your end products":
                await this.pages.lthccProvideDetailsOfYourEndProductsPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfYourEndProductsPage.textAreaField, textValue);
                break;

            case "provide details of how you produce your end products":
                await this.pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.textAreaField, textValue);
                break;

            case "provide details of the seed types you will use to grow low thc cannabis":
                await this.pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.clearAndEnterTextInElement(this.pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.textAreaField, textValue);
                break;

            case "provide the thc content level":
                await this.pages.lthccProvideTheThcContentLevelPage.clearAndEnterTextInElement(this.pages.lthccProvideTheThcContentLevelPage.textAreaField, textValue);
                break;

            case "will the regulatory affairs and compliance officer discharge all licence responsibilities?":
                await this.pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clearAndEnterTextInElement(this.pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.textAreaField, textValue);
                break;

            case "add any extra information you think might help your application (optional)":
                await this.pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clearAndEnterTextInElement(this.pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.textAreaField, textValue);
                break;

            case "provide the addresses of the fields that are in a different postcode":
                await this.pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.clearAndEnterTextInElement(this.pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.textAreaField, textValue);
                break;

            case "what is adjacent to each of the fields you intend to cultivate?":
                await this.pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.clearAndEnterTextInElement(this.pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.textAreaField, textValue);
                break;

            case "perimeter details":
                await this.pages.lthccPerimeterDetailsPage.clearAndEnterTextInElement(this.pages.lthccPerimeterDetailsPage.textAreaField, textValue);
                break;

            default:
                throw new Error("Failed: Wrong page name: " + pageName);
        }
    }


    //###################################################### SAVE AND EXIT #########################################################

    async completeAndSelectSaveAndExitDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(option: string): Promise<void> {
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.assertPageTitle();
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.clickSaveAndAndExit();
    }

    async completeAndSelectSaveAndExitHasTheResponsiblePersonSubscribedToDbsUpdatesPage(optValue: string): Promise<void> {
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.assertPageTitle();
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.selectYesOrNoRadioOption(optValue);
        await this.pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.clickSaveAndAndExit();
    }

    async completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(option: string): Promise<void> {
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.assertPageTitle();
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.selectYesOrNoRadioOption(option);
        await this.pages.lthccIsTheNewSitePartOfAContractualAgreementPage.clickSaveAndAndExit();
    }

    async answersLowThcCannabisFormForContinuingAnApplication(scenario: string): Promise<void> {
        await this.completeApplyForADomesticLicenceForControlledSubstancesPage();
        await this.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.USER_NAME, c.PASSWORD);
        await this.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

        switch (scenario.toLowerCase()) {
            //A first time licensee
            case "t1: a first time licensee - page: do you hold any home office or other regulatory licenses?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.FIRST_TIME_LICENSEE);
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, c.COMPANY_NO, c.TELEPHONE, c.SAS_HOF_EMAIL, "https://www.hof.com");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                await this.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_YES);
                await this.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeAuthorisedWitnessDetailsPage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForAuthorisedWitnessPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeHasTheAuthorisedWitnessSubscribedToDbsPage(c.RESPONSE_YES);
                await this.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_YES);
                await this.completeProvideDetailsOfTheLegalBusinessProceedingsPage(c.TEXT_AREA_FIELD_DATA);
                await this.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
                await this.completeAndSelectSaveAndExitDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
                break;

            case "t2: existing licensee renewing or changing a currently licensed site - page: has the responsible person subscribed to dbs updates?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_RENEWING_OR_CHANGING_CURRENTLY_LICENSED_SITE);
                await this.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
                await this.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_YES);
                await this.completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage("cslCdat.pdf");
                await this.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_YES);
                await this.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_YES);
                await this.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_YES);
                //Existing licensee renewing or changing a currently licensed site
                await this.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
                await this.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
                await this.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
                await this.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
                await this.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
                await this.completeAndSelectSaveAndExitHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
                break;

            case "t3: existing licensee applying for a new site - page: is the new site part of a contractual agreement?":
                await this.completeLicenceYouAreApplyingForAndWhatTypeOfLicenseeAreYouPages(c.START_NEW_APPLICATION, c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
                await this.completeWhyAreYouRequestingANewLicencePage("For another site");
                await this.completeAndSelectSaveAndExitIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
                break;

            default:
                throw new Error("Failed: Wrong radio value scenario name: " + scenario);
        }
    }
}

const { When, Then } = createBdd(test);

When("I choose to select {string} on {string} page and choose to continue for LTHCC", async ({ pages }, answer: string, pageName: string) => {
    await new LthccStepLib(pages).answerToPage(answer, pageName);
});

When("I choose to navigate to {string} page for LTHCC", async ({ pages }, pageName: string) => {
    await new LthccStepLib(pages).navigateToPage(pageName);
});

When("I enter {string} into {string} field and page for LTHCC", async ({ pages }, value: string, pageName: string) => {
    const lthccStepLib = new LthccStepLib(pages);
    switch (pageName.toLowerCase()) {
        case "when are you moving site?":
            await lthccStepLib.completeWhenAreYouMovingSitePage(value);
            break;
        case "when does the contract start?":
            await lthccStepLib.completeWhenDoesTheContractStartPage(value);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const radioOption = data["Radio Option"];
    const textArea = data["Text Area"];
    await new LthccStepLib(pages).completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(radioOption, textArea);
});

When("I complete the fields below with Licence holder details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const companyName = data["Company name"];
    const companyNumber = data["Company number"];
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const websiteUrl = data["Website URL"];
    await new LthccStepLib(pages).completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
});

async function completeHolderAddressDetailsForLthcc(pages: Pages, pageName: string, dataTable: DataTable): Promise<void> {
    const lthccStepLib = new LthccStepLib(pages);
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    switch (pageName.toLowerCase()) {
        case "licence":
            await lthccStepLib.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "address of the growing location where the low thc cannabis will be cultivated":
            await lthccStepLib.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
}

When("I complete the fields below with {string} details for LTHCC:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    await completeHolderAddressDetailsForLthcc(pages, pageName, dataTable);
});

When("I complete the fields below with {string} holder address details for LTHCC:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    await completeHolderAddressDetailsForLthcc(pages, pageName, dataTable);
});

When("I complete the fields below with {string} for LTHCC:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const lthccStepLib = new LthccStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const telephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const checkBox = data["Confirm check box"];
    switch (pageName.toLowerCase()) {
        case "details of the responsible person for the site":
            await lthccStepLib.enterDetailsOfTheResponsiblePersonForTheSiteFullNameTelephoneNoAndEmailDetails(fullName, telephoneNo, emailAddress);
            break;
        case "authorised witness details":
            await lthccStepLib.enterAuthorisedWitnessDetails(fullName, telephoneNo, emailAddress);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
    if (checkBox.toLowerCase() === "ticked") {
        await lthccStepLib.selectCheckboxContainText("I confirm this person has applied for or currently holds a DBS certificate");
    }
    await lthccStepLib.selectSaveAndContinueButton();
});

When("I complete the fields below with DBS {string} for LTHCC:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const lthccStepLib = new LthccStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    switch (pageName.toLowerCase()) {
        case "information for the responsible person":
            await lthccStepLib.completeDbsInformationForTheResponsiblePersonPage(fullName, dbsReference, dayMonthYear);
            break;
        case "information for authorised witness":
            await lthccStepLib.completeDbsInformationForAuthorisedWitnessPage(fullName, dbsReference, dayMonthYear);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with LGrowing location contact details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK telephone number"];
    await new LthccStepLib(pages).completeGrowingLocationContactDetailsPagePage(emailAddress, ukTelephoneNo);
});

When("I complete the fields below with Licence details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const licenceType = data["Licence type"];
    const licenceNo = data["Licence number"];
    const dayMonthYear = data["Day month year"];
    await new LthccStepLib(pages).completeLicenceDetailsPage(licenceType, licenceNo, dayMonthYear);
});

When("I fill out the answers pertaining to {string} when you need to apply for controlled drugs licence", async ({ pages }, scenarios: string) => {
    await new LthccStepLib(pages).answersLthccFormWhenYouNeedToApplyForControlledDrugsLicenceFor(scenarios);
});

When("I enter {string} characters in the text area box field on {string} page for LTHCC", async ({ pages }, charSize: string, pageName: string) => {
    await new LthccStepLib(pages).enterTextIntoTextArea(charSize, pageName);
});

Then("{string} link is displayed on the page for LTHCC", async ({ pages }, linkText: string) => {
    expect(await new LthccStepLib(pages).isLinkTextIsDisplayedOnPage(linkText)).toBe(true);
});

When("I choose to enter {string} as application reference number on {string} page and choose to continue for LTHCC", async ({ pages }, applicationRefNo: string, _page: string) => {
    await new LthccStepLib(pages).completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
});

When("{string} link is selected", async ({ pages }, linkText: string) => {
    await new LthccStepLib(pages).selectLinkWithText(linkText);
});

When("I complete the fields below with {string} address details for LTHCC:", async ({ pages }, _pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    await new LthccStepLib(pages).completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
});

When("I complete the fields below with Invoicing contact details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const lthccStepLib = new LthccStepLib(pages);
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["Contact number"];
    const purchaseOrderNo = data["Purchase order number"];
    const refundAccDetails = data["Refund account details"];
    if (refundAccDetails.toLowerCase() === "Enter 501 characters".toLowerCase()) {
        const length = refundAccDetails.replace(/\D+/g, "");
        const textValues = await lthccStepLib.generateRandomStringOfLength(length);
        await lthccStepLib.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo, textValues);
    } else {
        await lthccStepLib.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo, refundAccDetails);
    }
});

When("I complete the fields below with Who is completing the application for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK contact number"];
    await new LthccStepLib(pages).completeWhoIsCompletingTheApplicationPage(fullName, emailAddress, ukTelephoneNo);
});

When("I complete the fields below with Details of businesses adjacent to or operating from your cultivation site:", async ({ pages }, dataTable: DataTable) => {
    const lthccStepLib = new LthccStepLib(pages);
    const data = dataTable.rowsHash();
    const businessName = data["Business name"];
    const typeOfBusiness = data["Type of business"];
    const businessOwns = data["Who owns the business?"];
    const businessDescribe = data["Describe your involvement in this business"];
    const ordnanceRef = data["Ordnance survey grid reference"];
    if (businessDescribe.toLowerCase() === "Enter 2001 characters".toLowerCase()) {
        const length = businessDescribe.replace(/\D+/g, "");
        const textValues = await lthccStepLib.generateRandomStringOfLength(length);
        await lthccStepLib.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName, typeOfBusiness, businessOwns, textValues, ordnanceRef);
    } else {
        await lthccStepLib.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName, typeOfBusiness, businessOwns, businessDescribe, ordnanceRef);
    }
});

When("I enter {string} into the email field on {string} page for LTHCC", async ({ pages }, value: string, _pageName: string) => {
    await new LthccStepLib(pages).completeWhichEmailAddressShouldWeSendTheLicenceToPage(value);
});

When("I select Confirm Submission on Check Your Answers page for LTHCC", async ({ pages }) => {
    await new LthccStepLib(pages).completeCheckYourAnswersPage();
});

// Source step body is empty; kept as a no-op for parity.
When("I select confirm and submit on Declaration page for LTHCC", async () => { });
