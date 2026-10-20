import { expect } from '@playwright/test';
import { DataTable } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test, type Pages } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

const { When, Then } = createBdd(test);

// Scenario: Low THC Cannabis Drugs tests
When('I fill out the answers to Low THC Cannabis form pertaining to {string} happy path test', async ({ pages }, scenario: string) => {
    await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
    await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

    switch (scenario.toLowerCase()) {
        case "t1: a new application - a first time licensee - yes authorised destruction - no company own fields - yes businesses adjacent to site":
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
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
            await pages.lthccLicenceDetailsPage.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
            await pages.lthccDetailsOfWhyYouWereRefusedALicencePage.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
            await pages.lthccUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
            await pages.lthccWhoOwnsTheFieldsPage.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_YES);
            await pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF", c.BUSINESS_DETAILS, "SZ659856");
            //Add another BusinessesAdjacent
            await pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.clickLinkWithText("Add another business");
            await pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF2Test", c.BUSINESS_DETAILS, "12QW1234");
            await pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage();
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_YES);
            await pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(c.TEXT_AREA_FIELD_DATA);
            break;
        case "t2: a new application - existing licensee renewing or changing a currently licensed site - yes upload - no authorised destruction - yes company own fields - no businesses adjacent to site":
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
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            break;
        case "t3: a new application - existing licensee renewing or changing a currently licensed site - no upload - no authorised destruction - yes company own fields - no businesses adjacent to site":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
            await pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
            await pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(c.RESPONSE_NO);
            await pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(c.RESPONSE_NO);
            await pages.lthccAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(c.RESPONSE_NO);
            await pages.lthccAreYouRequestingAChangeOfActivityPage.completeAreYouRequestingAChangeOfActivityPage(c.RESPONSE_NO);
            //Existing licensee renewing or changing a currently licensed site
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            break;
        case "t4: a new application - existing licensee applying for a new site - we are moving site - no authorised destruction - yes company own fields - no businesses adjacent to site":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.lthccWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicencePage("We are moving site");
            await pages.lthccWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(c.TOMORROW_S_DATE);
            //Existing licensee applying for a new site
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            break;
        case "t5: a new application - existing licensee applying for a new site - for another site - agreement no - no authorised destruction - yes company own fields - no businesses adjacent to site":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.lthccWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicencePage("For another site");
            await pages.lthccIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_NO);
            //Existing licensee applying for a new site
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            break;
        case "t6: a new application - existing licensee applying for a new site - for another site - agreement yes - no authorised destruction - yes company own fields - no businesses adjacent to site":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            await pages.lthccWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicencePage("For another site");
            await pages.lthccIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(c.RESPONSE_YES);
            await pages.lthccWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(c.YESTERDAY_S_DATE);
            await pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(c.TEXT_AREA_FIELD_DATA);
            //Existing licensee applying for a new site
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_YES);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            break;
        case "t7: amend a pending application - yes authorised destruction - no company own fields - yes businesses adjacent to site":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.AMEND_PENDING_APPLICATION);
            await pages.lthccEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage("12345678");
            //Amend a pending application => A first time licensee
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
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
            await pages.lthccLicenceDetailsPage.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
            await pages.lthccDetailsOfWhyYouWereRefusedALicencePage.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
            await pages.lthccUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("20");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
            await pages.lthccWhoOwnsTheFieldsPage.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_YES);
            await pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, "HOF", c.BUSINESS_DETAILS, "SZ659856");
            await pages.lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage();
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_YES);
            await pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(c.TEXT_AREA_FIELD_DATA);
            break;
        default:
            throw new Error("Failed: Wrong radio value scenario name: " + scenario);
    }
    await pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccPerimeterDetailsPage.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccUploadImagesOfThePerimeterPage.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
    await pages.lthccProvideDetailsOfYourRecordKeepingPage.completeProvideDetailsOfYourRecordKeepingPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccUploadImagesOfYourRecordKeepingDocumentsPage.completeUploadImagesOfYourRecordKeepingDocumentsPage("cslCdat.pdf");
    await pages.lthccProvideDetailsOfYourSeedSuppliersPage.completeProvideDetailsOfYourSeedSuppliersPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccProvideDetailsOfYourCustomerBasePage.completeProvideDetailsOfYourCustomerBasePage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccProvideDetailsOfYourEndProductsPage.completeProvideDetailsOfYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.completeProvideDetailsOfHowYouProduceYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccProvideTheThcContentLevelPage.completeProvideTheThcContentLevelPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccInvoicingAddressPage.completeInvoicingAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
    await pages.lthccInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(c.CONTACT_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE, "123456789", c.TEXT_AREA_FIELD_DATA);
    await pages.lthccWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(c.SAS_HOF_EMAIL);
    await pages.lthccWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(c.FULL_NAME, c.SAS_HOF_EMAIL, c.TELEPHONE);
    await pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(c.RESPONSE_NO, c.TEXT_AREA_FIELD_DATA);
    await pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(c.TEXT_AREA_FIELD_DATA);
    await pages.lthccCheckYourAnswersPage.completeCheckYourAnswersPage();
    await pages.lthccDeclarationPage.completeDeclarationPage("I understand and agree with these statements");
    await pages.lthccApplicationSubmittedPage.completeApplicationSubmittedPage();
});


When("I choose to select {string} on {string} page and choose to continue for LTHCC", async ({ pages }, answer: string, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "what type of licence are you applying for?":
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(answer);
            break;
        case "how are you applying for your low thc cannabis license?":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(answer);
            break;
        case "has the responsible person subscribed to dbs updates?":
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(answer);
            break;
        case "do you require somebody within your company to be authorised to witness the destruction of the plant?":
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(answer);
            break;
        case "has the authorised witness subscribed to dbs updates?":
            await pages.lthccHasTheAuthorisedWitnessSubscribedToDbsPage.completeHasTheAuthorisedWitnessSubscribedToDbsPage(answer);
            break;
        case "why are you requesting a new licence?":
            await pages.lthccWhyAreYouRequestingANewLicencePage.completeWhyAreYouRequestingANewLicencePage(answer);
            break;
        case "is the new site part of a contractual agreement?":
            await pages.lthccIsTheNewSitePartOfAContractualAgreementPage.completeIsTheNewSitePartOfAContractualAgreementPage(answer);
            break;
        case "has anyone in your organisation ever been subject to legal business proceedings?":
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(answer);
            break;
        case "has your companies house reference number changed since your last application?":
            await pages.lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage.completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(answer);
            break;
        case "has your registered name at companies house changed since your last application?":
            await pages.lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage.completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(answer);
            break;
        case "do you hold any home office or other regulatory licenses?":
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(answer);
            break;
        case "has your organisation ever been refused a licence?":
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(answer);
            break;
        case "what type of company is your organisation":
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage(answer);
            break;
        case "are you requesting a change in authorised witness for this site only?":
            await pages.lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage.completeAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(answer);
            break;
        case "are you requesting additional schedules?":
            await pages.lthccAreYouRequestingAdditionalSchedulesPage.completeAreYouRequestingAdditionalSchedulesPage(answer);
            break;
        case "is the licence needed to cultivate and possess low thc cannabis (industrial hemp)?":
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(answer);
            break;
        case "where will you be cultivating the low thc cannabis?":
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage(answer);
            break;
        case "what is the total acreage of the fields?":
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage(answer);
            break;
        case "how many fields are you proposing to cultivate low thc cannabis in?":
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage(answer);
            break;
        case "does your company own all the fields?":
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(answer);
            break;
        case "do you have permission from the owner to carry out your intended activities?":
            await pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(answer);
            break;
        case "are there any other businesses operating from your intended cultivation site?":
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(answer);
            break;
        case "do you own any other businesses operating from your intended cultivation site?":
            await pages.lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(answer);
            break;
        case "are any of the fields in a different postcode to the site address?":
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(answer);
            break;
        case "are there any business adjacent to your intended cultivation site?":
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(answer);
            break;
        case "has anyone in your organisation ever received a criminal conviction?":
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(answer);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I choose to navigate to {string} page for LTHCC", async ({ pages }, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "what type of licence are you applying for?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            break;
        case "licence holder details":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.FIRST_TIME_LICENSEE);
            break;
        case "why are you requesting a new licence?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_APPLYING_FOR_NEW_SITE);
            break;
        case "has your companies house reference number changed since your last application?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.EXISTING_LICENSEE_RENEWAL_OR_CHANGE_LICENSEE);
            break;
        case "describe your business model":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            break;
        case "are there any business adjacent to your intended cultivation site?":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
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
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
            await pages.lthccLicenceDetailsPage.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
            await pages.lthccDetailsOfWhyYouWereRefusedALicencePage.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
            await pages.lthccUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
            await pages.lthccWhoOwnsTheFieldsPage.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            break;
        case "invoicing address":
            await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
            await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
            await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);
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
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_YES);
            await pages.lthccLicenceDetailsPage.completeLicenceDetailsPage("licenceType", "123456", "yesterday's date");
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_YES);
            await pages.lthccDetailsOfWhyYouWereRefusedALicencePage.completeDetailsOfWhyYouWereRefusedALicencePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Public limited company");
            await pages.lthccUploadCompanyRegistrationCertificatePage.completeUploadCompanyRegistrationCertificatePage("cslCdat.pdf");
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Outside");
            await pages.lthccWhatIsTheTotalAcreageOfTheFieldsPage.completeWhatIsTheTotalAcreageOfTheFieldsPage("100");
            await pages.lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage.completeHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage("1000");
            await pages.lthccDetailsOfCultivationFieldsPage.completeDetailsOfCultivationFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadAerialPhotosAndSiteMapsPage.completeUploadAerialPhotosAndSiteMapsPage("cslCdat.pdf");
            await pages.lthccDoesYourCompanyOwnAllTheFieldsPage.completeDoesYourCompanyOwnAllTheFieldsPage(c.RESPONSE_NO);
            await pages.lthccWhoOwnsTheFieldsPage.completeWhoOwnsTheFieldsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage.completeDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(c.RESPONSE_YES);
            await pages.lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage.completeAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage.completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(c.RESPONSE_NO);
            await pages.lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage.completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(c.RESPONSE_NO);
            await pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccPerimeterDetailsPage.completePerimeterDetailsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadImagesOfThePerimeterPage.completeUploadImagesOfThePerimeterPage("cslCdat.pdf");
            await pages.lthccProvideDetailsOfYourRecordKeepingPage.completeProvideDetailsOfYourRecordKeepingPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccUploadImagesOfYourRecordKeepingDocumentsPage.completeUploadImagesOfYourRecordKeepingDocumentsPage("cslCdat.pdf");
            await pages.lthccProvideDetailsOfYourSeedSuppliersPage.completeProvideDetailsOfYourSeedSuppliersPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccProvideDetailsOfYourCustomerBasePage.completeProvideDetailsOfYourCustomerBasePage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccProvideDetailsOfYourEndProductsPage.completeProvideDetailsOfYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.completeProvideDetailsOfHowYouProduceYourEndProductsPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccProvideTheThcContentLevelPage.completeProvideTheThcContentLevelPage(c.TEXT_AREA_FIELD_DATA);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I enter {string} into {string} field and page for LTHCC", async ({ pages }, value: string, pageName: string) => {
    switch (pageName.toLowerCase()) {
        case "when are you moving site?":
            await pages.lthccWhenAreYouMovingSitePage.completeWhenAreYouMovingSitePage(value);
            break;
        case "when does the contract start?":
            await pages.lthccWhenDoesTheContractStartPage.completeWhenDoesTheContractStartPage(value);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with Will the regulatory affairs and compliance officer discharge all licence responsibilities details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const radioOption = data["Radio Option"];
    const textArea = data["Text Area"];
    await pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(radioOption, textArea);
});

When("I complete the fields below with Licence holder details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const companyName = data["Company name"];
    const companyNumber = data["Company number"];
    const ukTelephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const websiteUrl = data["Website URL"];
    await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(companyName, companyNumber, ukTelephoneNo, emailAddress, websiteUrl);
});

async function completeHolderAddressDetailsForLthcc(pages: Pages, pageName: string, dataTable: DataTable): Promise<void> {
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    switch (pageName.toLowerCase()) {
        case "licence":
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(addressLine1, addressLine2, townOrCity, postcode);
            break;
        case "address of the growing location where the low thc cannabis will be cultivated":
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(addressLine1, addressLine2, townOrCity, postcode);
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
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const telephoneNo = data["UK telephone number"];
    const emailAddress = data["Email address"];
    const checkBox = data["Confirm check box"];
    switch (pageName.toLowerCase()) {
        case "details of the responsible person for the site":
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.enterDetailsOfTheResponsiblePersonForTheSiteFullNameTelephoneNoAndEmailDetails(fullName, telephoneNo, emailAddress);
            break;
        case "authorised witness details":
            await pages.lthccAuthorisedWitnessDetailsPage.completeAuthorisedWitnessDetailsWithoutConfirmingDbs(fullName, telephoneNo, emailAddress);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
    if (checkBox.toLowerCase() === "ticked") {
        await pages.basePage.selectRadioOptionWithText("I confirm this person has applied for or currently holds a DBS certificate");
    }
    await pages.basePage.clickSaveAndContinue();
});

When("I complete the fields below with DBS {string} for LTHCC:", async ({ pages }, pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const dbsReference = data["DBS reference"];
    const dayMonthYear = data["Day month year"];
    switch (pageName.toLowerCase()) {
        case "information for the responsible person":
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(fullName, dbsReference, dayMonthYear);
            break;
        case "information for authorised witness":
            await pages.lthccDbsInformationForAuthorisedWitnessPage.completeDbsInformationForAuthorisedWitnessPage(fullName, dbsReference, dayMonthYear);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

When("I complete the fields below with LGrowing location contact details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK telephone number"];
    await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(emailAddress, ukTelephoneNo);
});

When("I complete the fields below with Licence details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const licenceType = data["Licence type"];
    const licenceNo = data["Licence number"];
    const dayMonthYear = data["Day month year"];
    await pages.lthccLicenceDetailsPage.completeLicenceDetailsPage(licenceType, licenceNo, dayMonthYear);
});

When("I fill out the answers pertaining to {string} when you need to apply for controlled drugs licence", async ({ pages }, scenarios: string) => {
    await pages.cslApplyForADomesticLicenceForControlledSubstancesPage.completeApplyForADomesticLicenceForControlledSubstancesPage();
    await pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(c.LTHCC_USER_NAME, c.LTHCC_PASSWORD);
    await pages.cslWhatTypeOfLicenceAreYouApplyingForPage.completeIsWhatTypeOfLicenceAreYouApplyingForPage(c.LOW_THC_CANNABIS_INDUSTRIAL_HEMP);

    switch (scenarios.toLowerCase()) {
        case "t1: when no licence needed to cultivate and possess low thc cannabis (industrial hemp)":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_NO);
            await pages.lthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage.completeYouNeedToApplyForAControlledDrugLicencePage();
            break;

        case "t2: when inside is where you be cultivating the low thc cannabis":
            await pages.lthccHowAreYouApplyingForYourLowThcCannabisLicencePage.completeHowAreYouApplyingForYourLowThcCannabisLicencePage(c.START_NEW_APPLICATION);
            await pages.lthccWhatTypeOfLowThcCannabisLicenceAreYouPage.completeWhatTypeOfLowThcCannabisLicenceAreYouPage(c.FIRST_TIME_LICENSEE);
            await pages.lthccLicenceHolderDetailsPage.completeLicenceHolderDetailsPage(c.BUSINESS_OR_COMPANY_NAME, "", c.TELEPHONE, c.SAS_HOF_EMAIL, "");
            await pages.lthccLicenceHolderAddressPage.completeLicenceHolderAddressPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage.completeAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await pages.lthccGrowingLocationContactDetailsPage.completeGrowingLocationContactDetailsPagePage(c.SAS_HOF_EMAIL, c.TELEPHONE);
            await pages.lthccDetailsOfTheResponsiblePersonForTheSitePage.completeDetailsOfTheResponsiblePersonForTheSitePage(c.FULL_NAME, c.TELEPHONE, c.SAS_HOF_EMAIL, c.CONFIRM_DBS_CERTIFICATE);
            await pages.lthccDbsInformationForTheResponsiblePersonPage.completeDbsInformationForTheResponsiblePersonPage(c.FULL_NAME, c.DBS_REFERENCE, c.DATE_IS_WITHIN_3_YEARS);
            await pages.lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage.completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(c.RESPONSE_YES);
            await pages.lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage.completeDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(c.RESPONSE_NO);
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.completeHowWillTheLeavesAndFlowersBeDestroyedPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage.completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(c.RESPONSE_NO);
            await pages.lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage.completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(c.RESPONSE_NO);
            await pages.lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage.completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(c.RESPONSE_NO);
            await pages.lthccHasYourOrganisationEverBeenRefusedALicencePage.completeHasYourOrganisationEverBeenRefusedALicencePage(c.RESPONSE_NO);
            await pages.lthccWhatTypeOfCompanyIsYourOrganisationPage.completeWhatTypeOfCompanyIsYourOrganisationPage("Other");
            await pages.lthccDescribeYourBusinessModelPage.completeDescribeYourBusinessModelPage(c.TEXT_AREA_FIELD_DATA);
            await pages.lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage.completeIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(c.RESPONSE_YES);
            await pages.lthccWhereWillYouBeCultivatingTheLowThcCannabisPage.completeWhereWillYouBeCultivatingTheLowThcCannabisPage("Inside");
            await pages.lthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage.completeYouNeedToApplyForAControlledDrugsLicenceNoToHempPag();
            break;

        default:
            throw new Error("Failed: Wrong radio value scenario name: " + scenarios);
    }

});

When("I enter {string} characters in the text area box field on {string} page for LTHCC", async ({ pages }, charSize: string, pageName: string) => {
    const textValue = pages.basePage.generateRandomStringOfLength(charSize);

    switch (pageName.toLowerCase()) {
        case "how will the leaves and flowers be destroyed?":
            await pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.clearAndEnterTextInElement(pages.lthccHowWillTheLeavesAndFlowersBeDestroyedPage.textAreaField, textValue);
            break;
        case "provide details of the legal business proceedings":
            await pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfTheLegalBusinessProceedingsPage.textAreaField, textValue);
            break;
        case "details of why you were refused a licence":
            await pages.lthccDetailsOfWhyYouWereRefusedALicencePage.clearAndEnterTextInElement(pages.lthccDetailsOfWhyYouWereRefusedALicencePage.textAreaField, textValue);
            break;
        case "tell us more about the contract and how it affects your licence application":
            await pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.clearAndEnterTextInElement(pages.lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage.textAreaField, textValue);
            break;
        case "describe your business model":
            await pages.lthccDescribeYourBusinessModelPage.clearAndEnterTextInElement(pages.lthccDescribeYourBusinessModelPage.textAreaField, textValue);
            break;
        case "details of cultivation fields":
            await pages.lthccDetailsOfCultivationFieldsPage.clearAndEnterTextInElement(pages.lthccDetailsOfCultivationFieldsPage.textAreaField, textValue);
            break;
        case "who owns the fields?":
            await pages.lthccWhoOwnsTheFieldsPage.clearAndEnterTextInElement(pages.lthccWhoOwnsTheFieldsPage.textAreaField, textValue);
            break;
        case "provide details of your record keeping":
            await pages.lthccProvideDetailsOfYourRecordKeepingPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfYourRecordKeepingPage.textAreaField, textValue);
            break;
        case "provide details of your seed suppliers":
            await pages.lthccProvideDetailsOfYourSeedSuppliersPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfYourSeedSuppliersPage.textAreaField, textValue);
            break;
        case "provide details of your customer base":
            await pages.lthccProvideDetailsOfYourCustomerBasePage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfYourCustomerBasePage.textAreaField, textValue);
            break;
        case "provide details of your end products":
            await pages.lthccProvideDetailsOfYourEndProductsPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfYourEndProductsPage.textAreaField, textValue);
            break;
        case "provide details of how you produce your end products":
            await pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfHowYouProduceYourEndProductsPage.textAreaField, textValue);
            break;
        case "provide details of the seed types you will use to grow low thc cannabis":
            await pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.clearAndEnterTextInElement(pages.lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage.textAreaField, textValue);
            break;
        case "provide the thc content level":
            await pages.lthccProvideTheThcContentLevelPage.clearAndEnterTextInElement(pages.lthccProvideTheThcContentLevelPage.textAreaField, textValue);
            break;
        case "will the regulatory affairs and compliance officer discharge all licence responsibilities?":
            await pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.clearAndEnterTextInElement(pages.lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage.textAreaField, textValue);
            break;
        case "add any extra information you think might help your application (optional)":
            await pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.clearAndEnterTextInElement(pages.lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage.textAreaField, textValue);
            break;
        case "provide the addresses of the fields that are in a different postcode":
            await pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.clearAndEnterTextInElement(pages.lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage.textAreaField, textValue);
            break;
        case "what is adjacent to each of the fields you intend to cultivate?":
            await pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.clearAndEnterTextInElement(pages.lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage.textAreaField, textValue);
            break;
        case "perimeter details":
            await pages.lthccPerimeterDetailsPage.clearAndEnterTextInElement(pages.lthccPerimeterDetailsPage.textAreaField, textValue);
            break;
        default:
            throw new Error("Failed: Wrong page name: " + pageName);
    }
});

Then("{string} link is displayed on the page for LTHCC", async ({ pages }, linkText: string) => {
    expect(await pages.basePage.isLinkTextDisplayed(linkText)).toBe(true);
});

When("I choose to enter {string} as application reference number on {string} page and choose to continue for LTHCC", async ({ pages }, applicationRefNo: string, _page: string) => {
    await pages.lthccEnterYourApplicationReferenceNumberPage.completeEnterYourApplicationReferenceNumberPage(applicationRefNo);
});

When("{string} link is selected", async ({ pages }, linkText: string) => {
    await pages.basePage.clickLinkWithText(linkText);
});

When("I complete the fields below with {string} address details for LTHCC:", async ({ pages }, _pageName: string, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const addressLine1 = data["Address line 1"];
    const addressLine2 = data["Address line 2"];
    const townOrCity = data["Town or City"];
    const postcode = data["Postcode"];
    await pages.lthccInvoicingAddressPage.completeInvoicingAddressPage(addressLine1, addressLine2, townOrCity, postcode);
});

When("I complete the fields below with Invoicing contact details for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["Contact number"];
    const purchaseOrderNo = data["Purchase order number"];
    const refundAccDetails = data["Refund account details"];
    if (refundAccDetails.toLowerCase() === "Enter 501 characters".toLowerCase()) {
        const length = refundAccDetails.replace(/\D+/g, "");
        const textValues = await pages.basePage.generateRandomStringOfLength(length);
        await pages.lthccInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo, textValues);
    } else {
        await pages.lthccInvoicingContactDetailsPage.completeInvoicingContactDetailsPage(fullName, emailAddress, ukTelephoneNo, purchaseOrderNo, refundAccDetails);
    }
});

When("I complete the fields below with Who is completing the application for LTHCC:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const fullName = data["Full name"];
    const emailAddress = data["Email address"];
    const ukTelephoneNo = data["UK contact number"];
    await pages.lthccWhoIsCompletingTheApplicationPage.completeWhoIsCompletingTheApplicationPage(fullName, emailAddress, ukTelephoneNo);
});

When("I complete the fields below with Details of businesses adjacent to or operating from your cultivation site:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    const businessName = data["Business name"];
    const typeOfBusiness = data["Type of business"];
    const businessOwns = data["Who owns the business?"];
    const businessDescribe = data["Describe your involvement in this business"];
    const ordnanceRef = data["Ordnance survey grid reference"];
    if (businessDescribe.toLowerCase() === "Enter 2001 characters".toLowerCase()) {
        const length = businessDescribe.replace(/\D+/g, "");
        const textValues = await pages.basePage.generateRandomStringOfLength(length);
        await pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName, typeOfBusiness, businessOwns, textValues, ordnanceRef);
    } else {
        await pages.lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage.completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName, typeOfBusiness, businessOwns, businessDescribe, ordnanceRef);
    }
});

When("I enter {string} into the email field on {string} page for LTHCC", async ({ pages }, value: string, _pageName: string) => {
    await pages.lthccWhichEmailAddressShouldWeSendTheLicenceToPage.completeWhichEmailAddressShouldWeSendTheLicenceToPage(value);
});

When("I select Confirm Submission on Check Your Answers page for LTHCC", async ({ pages }) => {
    await pages.lthccCheckYourAnswersPage.completeCheckYourAnswersPage();
});

// Source step body is empty; kept as a no-op for parity.
When("I select confirm and submit on Declaration page for LTHCC", async () => { });
