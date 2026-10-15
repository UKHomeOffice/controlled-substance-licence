import { test as base } from 'playwright-bdd';
import { basePage } from '../pages/base-page';
import { CdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage } from '../pages/cda/cda-add-any-extra-information-you-think-might-help-your-application-optional-page';
import { CdaApplicationSubmittedPage } from '../pages/cda/cda-application-submitted-page';
import { CdaAreControlledDrugsKeptAtThisSitePage } from '../pages/cda/cda-are-controlled-drugs-kept-at-this-site-page';
import { CdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage } from '../pages/cda/cda-are-controlled-drugs-kept-in-a-prefabricated-strong-room-page';
import { CdaAreControlledDrugsKeptInASafeOrCabinetPage } from '../pages/cda/cda-are-controlled-drugs-kept-in-a-safe-or-cabinet-page';
import { CdaAreControlledDrugsKeptInASeparateRoomOrZonePage } from '../pages/cda/cda-are-controlled-drugs-kept-in-a-separate-room-or-zone-page';
import { CdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage } from '../pages/cda/cda-are-they-or-anyone-named-on-this-application-member-of-professional-body-page';
import { CdaAreYouProvidingAServiceUnderAContractPage } from '../pages/cda/cda-are-you-providing-a-service-under-a-contract-page';
import { CdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage } from '../pages/cda/cda-are-you-requesting-a-change-in-authorised-witness-for-this-site-only-page';
import { CdaAreYouRequestingAChangeOfActivityPage } from '../pages/cda/cda-are-you-requesting-a-change-of-activity-page';
import { CdaAreYouRequestingAdditionalSchedulesPage } from '../pages/cda/cda-are-you-requesting-additional-schedules-page';
import { CdaCheckYourAnswersPage } from '../pages/cda/cda-check-your-answers-page';
import { CdaDbsInformationForPage } from '../pages/cda/cda-dbs-information-for-page';
import { CdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage } from '../pages/cda/cda-dbs-information-for-person-responsible-for-compliance-and-regulatory-affairs-page';
import { CdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage } from '../pages/cda/cda-dbs-information-for-person-responsible-for-security-of-premises-page';
import { CdaDbsInformationForThePersonInChargePage } from '../pages/cda/cda-dbs-information-for-the-person-in-charge-page';
import { CdaDeclarationPage } from '../pages/cda/cda-declaration-page';
import { CdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage } from '../pages/cda/cda-does-the-alarm-system-have-a-police-unique-reference-number-urn-page';
import { CdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage } from '../pages/cda/cda-does-the-alarm-system-have-either-a-level1-or-immediate-police-response-page';
import { CdaDoesTheSiteHaveAnElectronicAlarmSystemPage } from '../pages/cda/cda-does-the-site-have-an-electronic-alarm-system-page';
import { CdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage } from '../pages/cda/cda-does-your-business-possess-any-licences-issued-by-the-medicines-and-healthcare-products-regulatory-agency-mhra-page';
import { CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage } from '../pages/cda/cda-do-you-require-somebody-within-your-company-to-be-authorised-to-witness-the-destruction-of-controlled-drugs-page';
import { CdaElectronicAlarmSystemDetailsPage } from '../pages/cda/cda-electronic-alarm-system-details-page';
import { CdaEnterYourApplicationReferenceNumberPage } from '../pages/cda/cda-enter-your-application-reference-number-page';
import { CdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage } from '../pages/cda/cda-explain-why-you-are-applying-for-a-licence-your-business-purposes-and-what-you-plan-to-use-it-for-page';
import { CdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage } from '../pages/cda/cda-give-details-of-specifications-and-any-serial-numbers-that-apply-page';
import { CdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage } from '../pages/cda/cda-has-anyone-in-your-organisation-ever-been-subject-to-legal-business-proceedings-page';
import { CdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage } from '../pages/cda/cda-has-anyone-in-your-organisation-ever-received-a-criminal-conviction-page';
import { CdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage } from '../pages/cda/cda-has-the-managing-director-or-person-in-charge-subscribed-to-dbs-updates-page';
import { CdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage } from '../pages/cda/cda-has-the-person-responsible-for-compliance-and-regulatory-affairs-subscribed-to-dbs-updates-page';
import { CdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage } from '../pages/cda/cda-has-the-person-responsible-for-the-security-of-the-premises-subscribed-to-dbs-updates-page';
import { CdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage } from '../pages/cda/cda-has-your-companies-house-referred-number-changed-since-your-last-application-page';
import { CdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage } from '../pages/cda/cda-has-your-registered-name-at-companies-house-changed-since-your-last-application-page';
import { CdaHowAreYouApplyingForYourControlledDrugsLicencePage } from '../pages/cda/cda-how-are-you-applying-for-your-controlled-drugs-licence-page';
import { CdaHowAreYouFundedPage } from '../pages/cda/cda-how-are-you-funded-page';
import { CdaInvoicingAddressPage } from '../pages/cda/cda-invoicing-address-page';
import { CdaInvoicingContactDetailsPage } from '../pages/cda/cda-invoicing-contact-details-page';
import { CdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage } from '../pages/cda/cda-is-the-alarm-system-connected-to-the-alarm-receiving-centre-either-by-redcare-or-by-a-dual-path-communicator-page';
import { CdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage } from '../pages/cda/cda-is-the-alarm-system-monitored-by-an-offsite-alarm-receiving-centre-page';
import { CdaIsTheAlarmSystemServicedAnnuallyPage } from '../pages/cda/cda-is-the-alarm-system-serviced-annually-page';
import { CdaIsTheNewSitePartOfAContractualAgreementPage } from '../pages/cda/cda-is-the-new-site-part-of-a-contractual-agreement-page';
import { CdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage } from '../pages/cda/cda-is-the-person-responsible-for-legal-compliance-and-regulatory-affairs-an-employee-or-consultant-page';
import { CdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage } from '../pages/cda/cda-is-the-premises-address-the-same-as-the-licence-holder-address-page';
import { CdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage } from '../pages/cda/cda-is-there-a-separate-zone-for-the-controlled-drug-cabinet-safe-or-store-page';
import { CdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage } from '../pages/cda/cda-is-your-business-registered-with-the-care-quality-commission-or-scottish-and-welsh-equivalents-page';
import { CdaLicenceDetailsPage } from '../pages/cda/cda-licence-details-page';
import { CdaLicenceHolderAddressPage } from '../pages/cda/cda-licence-holder-address-page';
import { CdaLicenceHolderDetailsPage } from '../pages/cda/cda-licence-holder-details-page';
import { CdaManagingDirectorOrPersonInChargePage } from '../pages/cda/cda-managing-director-or-person-in-charge-page';
import { CdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage } from '../pages/cda/cda-medicines-and-healthcare-products-regulatory-agency-mhra-licence-details-page';
import { CdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage } from '../pages/cda/cda-person-responsible-for-legal-compliance-and-regulatory-affairs-page';
import { CdaPersonResponsibleForTheSecurityOfThePremisesPage } from '../pages/cda/cda-person-responsible-for-the-security-of-the-premises-page';
import { CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage } from '../pages/cda/cda-person-responsible-for-witnessing-the-destruction-of-controlled-drugs-page';
import { CdaPremisesAddressPage } from '../pages/cda/cda-premises-address-page';
import { CdaPremisesContactDetailsPage } from '../pages/cda/cda-premises-contact-details-page';
import { CdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage } from '../pages/cda/cda-provide-details-of-any-other-regulatory-bodies-that-you-are-registered-with-optional-page';
import { CdaProvideDetailsOfTheLegalBusinessProceedingsPage } from '../pages/cda/cda-provide-details-of-the-legal-business-proceedings-page';
import { CdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage } from '../pages/cda/cda-provide-details-of-the-professional-bodies-and-relevant-reference-numbers-page';
import { CdaProvideDetailsOfWhereTheyAreStoredPage } from '../pages/cda/cda-provide-details-of-where-they-are-stored-page';
import { CdaProvideDetailsOfWhereYouSourceTheDrugsFromPage } from '../pages/cda/cda-provide-details-of-where-you-source-the-drugs-from-page';
import { CdaProvideDetailsOfYourMainCustomersPage } from '../pages/cda/cda-provide-details-of-your-main-customers-page';
import { CdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage } from '../pages/cda/cda-provide-details-of-your-record-keeping-system-and-procedures-page';
import { CdaProvidingDetailsOfTheServicePage } from '../pages/cda/cda-providing-details-of-the-service-page';
import { CdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage } from '../pages/cda/cda-registration-details-for-the-care-quality-commission-cqc-or-scottish-and-welsh-equivalents-page';
import { CdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule1-activities-that-will-apply-to-your-licence-page';
import { CdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule2-activities-that-will-apply-to-your-licence-page';
import { CdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule3-activities-that-will-apply-to-your-licence-page';
import { CdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule4-i-activities-that-will-apply-to-your-licence-page';
import { CdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule4-ii-activities-that-will-apply-to-your-licence-page';
import { CdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage } from '../pages/cda/cda-select-any-schedule5-activities-that-will-apply-to-your-licence-page';
import { CdaSiteOwnersContactDetailsPage } from '../pages/cda/cda-site-owners-contact-details-page';
import { CdaSpecifyYourTradingReasonPage } from '../pages/cda/cda-specify-your-trading-reason-page';
import { CdaStandardOperatingProceduresPage } from '../pages/cda/cda-standard-operating-procedures-page';
import { CdaSummaryOfTradingReasonsPage } from '../pages/cda/cda-summary-of-trading-reasons-page';
import { CdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage } from '../pages/cda/cda-tell-us-more-about-the-contract-and-how-it-affects-your-licence-application-page';
import { CdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage } from '../pages/cda/cda-upload-company-registration-certificate-as-evidence-of-name-change-page';
import { CdaUploadCompanyRegistrationCertificatePage } from '../pages/cda/cda-upload-company-registration-certificate-page';
import { CdaUploadControlledDrugUserActivityTemplatePage } from '../pages/cda/cda-upload-controlled-drug-user-activity-template-page';
import { CdaUsingTheDbsUpdateServicePage } from '../pages/cda/cda-using-the-dbs-update-service-page';
import { CdaWeSavedYourApplicationAndSignedYouOutPage } from '../pages/cda/cda-we-saved-your-application-and-signed-you-out-page';
import { CdaWhatDateDoesTheServiceExpireOnPage } from '../pages/cda/cda-what-date-does-the-service-expire-on-page';
import { CdaWhatIsTheStatusOfTheSiteToBeLicensedPage } from '../pages/cda/cda-what-is-the-status-of-the-site-to-be-licensed-page';
import { CdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage } from '../pages/cda/cda-what-trading-reasons-does-this-site-need-a-licence-for-page';
import { CdaWhatTypeOfLicenseeAreYouPage } from '../pages/cda/cda-what-type-of-licensee-are-you-page';
import { CdaWhenAreYouMovingSitePage } from '../pages/cda/cda-when-are-you-moving-site-page';
import { CdaWhenDoesTheContractStartPage } from '../pages/cda/cda-when-does-the-contract-start-page';
import { CdaWhichEmailAddressShouldWeSendTheLicenceToPage } from '../pages/cda/cda-which-email-address-should-we-send-the-licence-to-page';
import { CdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage } from '../pages/cda/cda-which-of-the-following-security-features-does-the-site-have-page';
import { CdaWhoIsCompletingTheApplicationPage } from '../pages/cda/cda-who-is-completing-the-application-page';
import { CdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage } from '../pages/cda/cda-who-is-responsible-for-legal-compliance-and-regulatory-affairs-page';
import { CdaWhoIsResponsibleForTheSecurityOfThePremisesPage } from '../pages/cda/cda-who-is-responsible-for-the-security-of-the-premises-page';
import { CdaWhyAreYouRequestingANewLicencePage } from '../pages/cda/cda-why-are-you-requesting-a-new-licence-page';
import { CdaWitnessesYouHaveToldUsAboutPage } from '../pages/cda/cda-witnesses-you-have-told-us-about-page';
import { CdaYouCannotContinueThisApplicationPage } from '../pages/cda/cda-you-cannot-continue-this-application-page';
import { CdaYouHaveNotSelectedAnyActivitiesPage } from '../pages/cda/cda-you-have-not-selected-any-activities-page';
import { CslApplyForADomesticLicenceForControlledSubstancesPage } from '../pages/csl-apply-for-a-domestic-licence-for-controlled-substances-page';
import { CslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage } from '../pages/csl-sign-in-to-apply-for-a-domestic-licence-to-produce-supply-or-possess-controlled-drugs-page';
import { CslWhatTypeOfLicenceAreYouApplyingForPage } from '../pages/csl-what-type-of-licence-are-you-applying-for-page';
import { LthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage } from '../pages/lthcc/lthcc-add-any-extra-information-you-think-might-help-your-application-optional-page';
import { LthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage } from '../pages/lthcc/lthcc-address-of-the-growing-location-where-the-low-thc-cannabis-will-be-cultivated-page';
import { LthccApplicationSubmittedPage } from '../pages/lthcc/lthcc-application-submitted-page';
import { LthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage } from '../pages/lthcc/lthcc-are-any-of-the-fields-in-a-different-postcode-to-the-site-address-page';
import { LthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage } from '../pages/lthcc/lthcc-are-there-any-businesses-adjacent-to-your-intended-cultivation-site-page';
import { LthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage } from '../pages/lthcc/lthcc-are-there-any-other-businesses-operating-from-your-intended-cultivation-site-page';
import { LthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage } from '../pages/lthcc/lthcc-are-you-requesting-a-change-in-authorised-witness-for-this-site-only-page';
import { LthccAreYouRequestingAChangeOfActivityPage } from '../pages/lthcc/lthcc-are-you-requesting-a-change-of-activity-page';
import { LthccAreYouRequestingAdditionalSchedulesPage } from '../pages/lthcc/lthcc-are-you-requesting-additional-schedules-page';
import { LthccAuthorisedWitnessDetailsPage } from '../pages/lthcc/lthcc-authorised-witness-details-page';
import { LthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage } from '../pages/lthcc/lthcc-businesses-adjacent-to-or-operating-from-your-cultivation-site-page';
import { LthccCheckYourAnswersPage } from '../pages/lthcc/lthcc-check-your-answers-page';
import { LthccDbsInformationForAuthorisedWitnessPage } from '../pages/lthcc/lthcc-dbs-information-for-authorised-witness-page';
import { LthccDbsInformationForTheResponsiblePersonPage } from '../pages/lthcc/lthcc-dbs-information-for-the-responsible-person-page';
import { LthccDeclarationPage } from '../pages/lthcc/lthcc-declaration-page';
import { LthccDescribeYourBusinessModelPage } from '../pages/lthcc/lthcc-describe-your-business-model-page';
import { LthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage } from '../pages/lthcc/lthcc-details-of-businesses-adjacent-to-or-operating-from-your-cultivation-site-page';
import { LthccDetailsOfCultivationFieldsPage } from '../pages/lthcc/lthcc-details-of-cultivation-fields-page';
import { LthccDetailsOfTheResponsiblePersonForTheSitePage } from '../pages/lthcc/lthcc-details-of-the-responsible-person-for-the-site-page';
import { LthccDetailsOfWhyYouWereRefusedALicencePage } from '../pages/lthcc/lthcc-details-of-why-you-were-refused-a-licence-page';
import { LthccDoesYourCompanyOwnAllTheFieldsPage } from '../pages/lthcc/lthcc-does-your-company-own-all-the-fields-page';
import { LthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage } from '../pages/lthcc/lthcc-do-you-have-permission-from-the-owner-to-carry-out-your-intended-activities-page';
import { LthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage } from '../pages/lthcc/lthcc-do-you-hold-any-home-office-or-other-regulatory-licenses-page';
import { LthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage } from '../pages/lthcc/lthcc-do-you-own-any-other-businesses-operating-from-your-intended-cultivation-site-page';
import { LthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage } from '../pages/lthcc/lthcc-do-you-require-somebody-within-your-company-to-be-authorised-to-witness-the-destruction-of-the-plants-page';
import { LthccEnterYourApplicationReferenceNumberPage } from '../pages/lthcc/lthcc-enter-your-application-reference-number-page';
import { LthccGrowingLocationContactDetailsPage } from '../pages/lthcc/lthcc-growing-location-contact-details-page';
import { LthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage } from '../pages/lthcc/lthcc-has-anyone-in-your-organisation-ever-been-subject-to-legal-business-proceedings-page';
import { LthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage } from '../pages/lthcc/lthcc-has-anyone-in-your-organisation-ever-received-a-criminal-conviction-page';
import { LthccHasTheAuthorisedWitnessSubscribedToDbsPage } from '../pages/lthcc/lthcc-has-the-authorised-witness-subscribed-to-dbs-page';
import { LthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage } from '../pages/lthcc/lthcc-has-the-responsible-person-subscribed-to-dbs-updates-page';
import { LthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage } from '../pages/lthcc/lthcc-has-your-companies-house-referred-number-changed-since-your-last-application-page';
import { LthccHasYourOrganisationEverBeenRefusedALicencePage } from '../pages/lthcc/lthcc-has-your-organisation-ever-been-refused-a-licence-page';
import { LthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage } from '../pages/lthcc/lthcc-has-your-registered-name-at-companies-house-changed-since-your-last-application-page';
import { LthccHowAreYouApplyingForYourLowThcCannabisLicencePage } from '../pages/lthcc/lthcc-how-are-you-applying-for-your-low-thc-cannabis-licence-page';
import { LthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage } from '../pages/lthcc/lthcc-how-many-fields-are-you-proposing-to-cultivate-low-thc-cannabis-in-page';
import { LthccHowWillTheLeavesAndFlowersBeDestroyedPage } from '../pages/lthcc/lthcc-how-will-the-leaves-and-flowers-be-destroyed-page';
import { LthccInvoicingAddressPage } from '../pages/lthcc/lthcc-invoicing-address-page';
import { LthccInvoicingContactDetailsPage } from '../pages/lthcc/lthcc-invoicing-contact-details-page';
import { LthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage } from '../pages/lthcc/lthcc-is-the-licence-needed-to-cultivate-and-possess-low-thc-cannabis-industrial-hemp-page';
import { LthccIsTheNewSitePartOfAContractualAgreementPage } from '../pages/lthcc/lthcc-is-the-new-site-part-of-a-contractual-agreement-page';
import { LthccLicenceDetailsPage } from '../pages/lthcc/lthcc-licence-details-page';
import { LthccLicenceHolderAddressPage } from '../pages/lthcc/lthcc-licence-holder-address-page';
import { LthccLicenceHolderDetailsPage } from '../pages/lthcc/lthcc-licence-holder-details-page';
import { LthccPerimeterDetailsPage } from '../pages/lthcc/lthcc-perimeter-details-page';
import { LthccProvideDetailsOfHowYouProduceYourEndProductsPage } from '../pages/lthcc/lthcc-provide-details-of-how-you-produce-your-end-products-page';
import { LthccProvideDetailsOfTheLegalBusinessProceedingsPage } from '../pages/lthcc/lthcc-provide-details-of-the-legal-business-proceedings-page';
import { LthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage } from '../pages/lthcc/lthcc-provide-details-of-the-seed-types-you-will-use-to-grow-low-thc-cannabis-page';
import { LthccProvideDetailsOfYourCustomerBasePage } from '../pages/lthcc/lthcc-provide-details-of-your-customer-base-page';
import { LthccProvideDetailsOfYourEndProductsPage } from '../pages/lthcc/lthcc-provide-details-of-your-end-products-page';
import { LthccProvideDetailsOfYourRecordKeepingPage } from '../pages/lthcc/lthcc-provide-details-of-your-record-keeping-page';
import { LthccProvideDetailsOfYourSeedSuppliersPage } from '../pages/lthcc/lthcc-provide-details-of-your-seed-suppliers-page';
import { LthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage } from '../pages/lthcc/lthcc-provide-the-addresses-of-the-fields-that-are-in-a-different-postcode-page';
import { LthccProvideTheThcContentLevelPage } from '../pages/lthcc/lthcc-provide-the-thc-content-level-page';
import { LthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage } from '../pages/lthcc/lthcc-tell-us-more-about-the-contract-and-how-it-affects-your-licence-application-page';
import { LthccUploadAerialPhotosAndSiteMapsPage } from '../pages/lthcc/lthcc-upload-aerial-photos-and-site-maps-page';
import { LthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage } from '../pages/lthcc/lthcc-upload-company-registration-certificate-as-evidence-of-name-change-page';
import { LthccUploadCompanyRegistrationCertificatePage } from '../pages/lthcc/lthcc-upload-company-registration-certificate-page';
import { LthccUploadImagesOfThePerimeterPage } from '../pages/lthcc/lthcc-upload-images-of-the-perimeter-page';
import { LthccUploadImagesOfYourRecordKeepingDocumentsPage } from '../pages/lthcc/lthcc-upload-images-of-your-record-keeping-documents-page';
import { LthccWeSavedYourApplicationAndSignedYouOutPage } from '../pages/lthcc/lthcc-we-saved-your-application-and-signed-you-out-page';
import { LthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage } from '../pages/lthcc/lthcc-what-is-adjacent-to-each-of-the-fields-you-intend-cultivate-page';
import { LthccWhatIsTheTotalAcreageOfTheFieldsPage } from '../pages/lthcc/lthcc-what-is-the-total-acreage-of-the-fields-page';
import { LthccWhatTypeOfCompanyIsYourOrganisationPage } from '../pages/lthcc/lthcc-what-type-of-company-is-your-organisation-page';
import { LthccWhatTypeOfLowThcCannabisLicenceAreYouPage } from '../pages/lthcc/lthcc-what-type-of-low-thc-cannabis-licence-are-you-page';
import { LthccWhenAreYouMovingSitePage } from '../pages/lthcc/lthcc-when-are-you-moving-site-page';
import { LthccWhenDoesTheContractStartPage } from '../pages/lthcc/lthcc-when-does-the-contract-start-page';
import { LthccWhereWillYouBeCultivatingTheLowThcCannabisPage } from '../pages/lthcc/lthcc-where-will-you-be-cultivating-the-low-thc-cannabis-page';
import { LthccWhichEmailAddressShouldWeSendTheLicenceToPage } from '../pages/lthcc/lthcc-which-email-address-should-we-send-the-licence-to-page';
import { LthccWhoIsCompletingTheApplicationPage } from '../pages/lthcc/lthcc-who-is-completing-the-application-page';
import { LthccWhoOwnsTheFieldsPage } from '../pages/lthcc/lthcc-who-owns-the-fields-page';
import { LthccWhyAreYouRequestingANewLicencePage } from '../pages/lthcc/lthcc-why-are-you-requesting-a-new-licence-page';
import { LthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage } from '../pages/lthcc/lthcc-will-the-regulatory-affairs-and-compliance-officer-discharge-all-licence-responsibilities-page';
import { LthccYouCannotContinueThisApplicationPage } from '../pages/lthcc/lthcc-you-cannot-continue-this-application-page';
import { LthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage } from '../pages/lthcc/lthcc-you-need-to-apply-for-a-controlled-drugs-licence-cultivating-inside-page';
import { LthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage } from '../pages/lthcc/lthcc-you-need-to-apply-for-a-controlled-drugs-licence-no-to-hemp-page';
import { PcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage } from '../pages/pca/pca-add-any-extra-information-you-think-might-help-your-application-page';
import { PcaApplicationSubmittedPage } from '../pages/pca/pca-application-submitted-page';
import { PcaAreYouRequestingAChangeOfSubstanceOrOperationPage } from '../pages/pca/pca-are-you-requesting-a-change-of-substance-or-operation-page';
import { PcaAreYouRequestingAnAdditionalCategoryPage } from '../pages/pca/pca-are-you-requesting-an-additional-category-page';
import { PcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage } from '../pages/pca/pca-are-you-requesting-to-change-the-responsible-person-or-guarantor-for-this-site-only-page';
import { PcaCheckYourAnswersPage } from '../pages/pca/pca-check-your-answers-page';
import { PcaDbsInformationPage } from '../pages/pca/pca-dbs-information-page';
import { PcaDeclarationPage } from '../pages/pca/pca-declaration-page';
import { PcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage } from '../pages/pca/pca-describe-how-you-make-sure-chemicals-are-stored-and-handled-securely-page';
import { PcaDescribeHowYouManageChemicalStockControlPage } from '../pages/pca/pca-describe-how-you-manage-chemical-stock-control-page';
import { PcaDescribeHowYouSecureYourPremisesPage } from '../pages/pca/pca-describe-how-you-secure-your-premises-page';
import { PcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage } from '../pages/pca/pca-describe-how-you-work-to-make-sure-end-products-are-used-legitimately-page';
import { PcaEnterYourApplicationReferenceNumberPage } from '../pages/pca/pca-enter-your-application-reference-number-page';
import { PcaGuarantorDbsInformationPage } from '../pages/pca/pca-guarantor-dbs-information-page';
import { PcaGuarantorDetailsPage } from '../pages/pca/pca-guarantor-details-page';
import { PcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage } from '../pages/pca/pca-has-anyone-employed-by-your-company-ever-received-criminal-convictions-page';
import { PcaHasTheGuarantorSubscribedToDbsUpdatesPage } from '../pages/pca/pca-has-the-guarantor-subscribed-to-dbs-updates-page';
import { PcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage } from '../pages/pca/pca-has-the-responsible-officer-subscribed-to-dbs-updates-page';
import { PcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage } from '../pages/pca/pca-has-your-companies-house-referred-number-changed-since-your-last-application-page';
import { PcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage } from '../pages/pca/pca-has-your-registered-name-at-companies-house-changed-since-your-last-application-page';
import { PcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage } from '../pages/pca/pca-how-are-you-applying-for-your-precursor-chemicals-licence-page';
import { PcaInvoicingAddressPage } from '../pages/pca/pca-invoicing-address-page';
import { PcaInvoicingContactDetailsPage } from '../pages/pca/pca-invoicing-contact-details-page';
import { PcaIsTheNewSitePartOfAContractualAgreementPage } from '../pages/pca/pca-is-the-new-site-part-of-a-contractual-agreement-page';
import { PcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage } from '../pages/pca/pca-is-the-premises-address-the-same-as-the-licence-holder-address-page';
import { PcaLicenceHolderAddressPage } from '../pages/pca/pca-licence-holder-address-page';
import { PcaLicenceHolderDetailsPage } from '../pages/pca/pca-licence-holder-details-page';
import { PcaPremisesAddressPage } from '../pages/pca/pca-premises-address-page';
import { PcaPremisesContactDetailsPage } from '../pages/pca/pca-premises-contact-details-page';
import { PcaResponsibleOfficerDetailsPage } from '../pages/pca/pca-responsible-officer-details-page';
import { PcaSubstancesInYourLicencePage } from '../pages/pca/pca-substances-in-your-licence-page';
import { PcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage } from '../pages/pca/pca-summarise-your-standard-operating-procedures-and-auditing-practices-for-the-use-or-disposal-of-chemicals-page';
import { PcaTellUsAboutYourMainCustomersPage } from '../pages/pca/pca-tell-us-about-your-main-customers-page';
import { PcaTellUsAboutYourMainSuppliersPage } from '../pages/pca/pca-tell-us-about-your-main-suppliers-page';
import { PcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage } from '../pages/pca/pca-tell-us-more-about-the-contract-and-how-it-affects-your-licence-application-page';
import { PcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage } from '../pages/pca/pca-tell-us-why-you-need-these-chemicals-and-what-they-will-be-used-for-page';
import { PcaUploadCertificateOfGoodConductPage } from '../pages/pca/pca-upload-certificate-of-good-conduct-page';
import { PcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage } from '../pages/pca/pca-upload-company-registration-certificate-as-evidence-of-name-change-page';
import { PcaUploadCompanyRegistrationCertificatePage } from '../pages/pca/pca-upload-company-registration-certificate-page';
import { PcaUploadYourCompaniesHouseDetailsPage } from '../pages/pca/pca-upload-your-companies-house-details-page';
import { PcaWeSavedYourApplicationAndSignedYouOutPage } from '../pages/pca/pca-we-saved-your-application-and-signed-you-out-page';
import { PcaWhatOtherOperationsAppliesToTheLicencePage } from '../pages/pca/pca-what-other-operations-applies-to-the-licence-page';
import { PcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage } from '../pages/pca/pca-what-security-measures-do-you-have-in-place-at-the-premises-page';
import { PcaWhatTypeOfLicenseeAreYouPage } from '../pages/pca/pca-what-type-of-licensee-are-you-page';
import { PcaWhenAreYouMovingSitePage } from '../pages/pca/pca-when-are-you-moving-site-page';
import { PcaWhenDoesTheContractStartPage } from '../pages/pca/pca-when-does-the-contract-start-page';
import { PcaWhichCategoryIsTheNewSubstancePage } from '../pages/pca/pca-which-category-is-the-new-substance-page';
import { PcaWhichChemicalAreYouApplyingForPage } from '../pages/pca/pca-which-chemical-are-you-applying-for-page';
import { PcaWhichEmailAddressShouldTheLicenceBeSentToPage } from '../pages/pca/pca-which-email-address-should-the-licence-be-sent-to-page';
import { PcaWhichOperationAppliesToThisLicenceForXPage } from '../pages/pca/pca-which-operation-applies-to-this-licence-for-x-page';
import { PcaWhoIsCompletingTheApplicationPage } from '../pages/pca/pca-who-is-completing-the-application-page';
import { PcaWhyAreYouRequestingANewLicensePage } from '../pages/pca/pca-why-are-you-requesting-a-new-license-page';
import { PcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage } from '../pages/pca/pca-will-the-regulatory-affairs-and-compliance-officer-discharge-all-licence-responsibilities-page';
import { PcaYouCannotContinueThisApplicationPage } from '../pages/pca/pca-you-cannot-continue-this-application-page';
import { RegBusinessTypePage } from '../pages/reg/reg-business-type-page';
import { RegCheckYourAnswersPage } from '../pages/reg/reg-check-your-answers-page';
import { RegDeclarationPage } from '../pages/reg/reg-declaration-page';
import { RegDescribeYourBusinessModelPage } from '../pages/reg/reg-describe-your-business-model-page';
import { RegDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage } from '../pages/reg/reg-does-your-business-possess-any-licenses-issued-by-the-medicines-and-healthcare-products-regulatory-agency-mhra-page';
import { RegHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage } from '../pages/reg/reg-has-your-legal-identity-changed-at-companies-house-in-the-last-three-years-page';
import { RegInvoicingAddressPage } from '../pages/reg/reg-invoicing-address-page';
import { RegInvoicingContactDetailsPage } from '../pages/reg/reg-invoicing-contact-details-page';
import { RegIsTheBusinessARegisteredCharityPage } from '../pages/reg/reg-is-the-business-a-registered-charity-page';
import { RegIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage } from '../pages/reg/reg-is-your-business-registered-with-the-care-quality-commission-or-scottish-and-welsh-equivalents-page';
import { RegLicenceHolderAddressPage } from '../pages/reg/reg-licence-holder-address-page';
import { RegLicenceHolderDetailsPage } from '../pages/reg/reg-licence-holder-details-page';
import { RegMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage } from '../pages/reg/reg-medicines-and-healthcare-products-regulatory-agency-license-details-page';
import { RegPreviousLicenseDetailsPage } from '../pages/reg/reg-previous-license-details-page';
import { RegProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage } from '../pages/reg/reg-provide-details-of-any-other-regulatory-bodies-you-are-registered-with-page';
import { RegRegisterForTheControlledSubstanceLicensingSystemPage } from '../pages/reg/reg-register-for-the-controlled-substance-licensing-system-page';
import { RegRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage } from '../pages/reg/reg-registration-details-for-the-care-quality-commission-or-scottish-and-welsh-equivalents-page';
import { RegRegistrationSubmittedPage } from '../pages/reg/reg-registration-submitted-page';
import { RegSpecifyYourBusinessTypePage } from '../pages/reg/reg-specify-your-business-type-page';
import { RegUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage } from '../pages/reg/reg-under-your-previous-legally-registered-identity-did-you-hold-a-controlled-drugs-license-page';
import { RegUploadCompanyRegistrationCertificatePage } from '../pages/reg/reg-upload-company-registration-certificate-page';
import { RegWhatTypeOfCompanyIsYourOrganisationPage } from '../pages/reg/reg-what-type-of-company-is-your-organisation-page';
import { RegWhatYourBusinessDoesPage } from '../pages/reg/reg-what-your-business-does-page';

export type Pages = {
  basePage: basePage;
  cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage: CdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage;
  cdaApplicationSubmittedPage: CdaApplicationSubmittedPage;
  cdaAreControlledDrugsKeptAtThisSitePage: CdaAreControlledDrugsKeptAtThisSitePage;
  cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage: CdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage;
  cdaAreControlledDrugsKeptInASafeOrCabinetPage: CdaAreControlledDrugsKeptInASafeOrCabinetPage;
  cdaAreControlledDrugsKeptInASeparateRoomOrZonePage: CdaAreControlledDrugsKeptInASeparateRoomOrZonePage;
  cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage: CdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage;
  cdaAreYouProvidingAServiceUnderAContractPage: CdaAreYouProvidingAServiceUnderAContractPage;
  cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage: CdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage;
  cdaAreYouRequestingAChangeOfActivityPage: CdaAreYouRequestingAChangeOfActivityPage;
  cdaAreYouRequestingAdditionalSchedulesPage: CdaAreYouRequestingAdditionalSchedulesPage;
  cdaCheckYourAnswersPage: CdaCheckYourAnswersPage;
  cdaDbsInformationForPage: CdaDbsInformationForPage;
  cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage: CdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage;
  cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage: CdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage;
  cdaDbsInformationForThePersonInChargePage: CdaDbsInformationForThePersonInChargePage;
  cdaDeclarationPage: CdaDeclarationPage;
  cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage: CdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage;
  cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage: CdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage;
  cdaDoesTheSiteHaveAnElectronicAlarmSystemPage: CdaDoesTheSiteHaveAnElectronicAlarmSystemPage;
  cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage: CdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage;
  cdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage: CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage;
  cdaElectronicAlarmSystemDetailsPage: CdaElectronicAlarmSystemDetailsPage;
  cdaEnterYourApplicationReferenceNumberPage: CdaEnterYourApplicationReferenceNumberPage;
  cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage: CdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage;
  cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage: CdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage;
  cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage: CdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage;
  cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage: CdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage;
  cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage: CdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage;
  cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage: CdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage;
  cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage: CdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage;
  cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: CdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage;
  cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: CdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage;
  cdaHowAreYouApplyingForYourControlledDrugsLicencePage: CdaHowAreYouApplyingForYourControlledDrugsLicencePage;
  cdaHowAreYouFundedPage: CdaHowAreYouFundedPage;
  cdaInvoicingAddressPage: CdaInvoicingAddressPage;
  cdaInvoicingContactDetailsPage: CdaInvoicingContactDetailsPage;
  cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage: CdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage;
  cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage: CdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage;
  cdaIsTheAlarmSystemServicedAnnuallyPage: CdaIsTheAlarmSystemServicedAnnuallyPage;
  cdaIsTheNewSitePartOfAContractualAgreementPage: CdaIsTheNewSitePartOfAContractualAgreementPage;
  cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage: CdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage;
  cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage: CdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage;
  cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage: CdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage;
  cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: CdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage;
  cdaLicenceDetailsPage: CdaLicenceDetailsPage;
  cdaLicenceHolderAddressPage: CdaLicenceHolderAddressPage;
  cdaLicenceHolderDetailsPage: CdaLicenceHolderDetailsPage;
  cdaManagingDirectorOrPersonInChargePage: CdaManagingDirectorOrPersonInChargePage;
  cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage: CdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage;
  cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage: CdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage;
  cdaPersonResponsibleForTheSecurityOfThePremisesPage: CdaPersonResponsibleForTheSecurityOfThePremisesPage;
  cdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage: CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage;
  cdaPremisesAddressPage: CdaPremisesAddressPage;
  cdaPremisesContactDetailsPage: CdaPremisesContactDetailsPage;
  cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage: CdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage;
  cdaProvideDetailsOfTheLegalBusinessProceedingsPage: CdaProvideDetailsOfTheLegalBusinessProceedingsPage;
  cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage: CdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage;
  cdaProvideDetailsOfWhereTheyAreStoredPage: CdaProvideDetailsOfWhereTheyAreStoredPage;
  cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage: CdaProvideDetailsOfWhereYouSourceTheDrugsFromPage;
  cdaProvideDetailsOfYourMainCustomersPage: CdaProvideDetailsOfYourMainCustomersPage;
  cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage: CdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage;
  cdaProvidingDetailsOfTheServicePage: CdaProvidingDetailsOfTheServicePage;
  cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage: CdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage;
  cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage;
  cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage;
  cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage;
  cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage;
  cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage;
  cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage: CdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage;
  cdaSiteOwnersContactDetailsPage: CdaSiteOwnersContactDetailsPage;
  cdaSpecifyYourTradingReasonPage: CdaSpecifyYourTradingReasonPage;
  cdaStandardOperatingProceduresPage: CdaStandardOperatingProceduresPage;
  cdaSummaryOfTradingReasonsPage: CdaSummaryOfTradingReasonsPage;
  cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: CdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage;
  cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: CdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage;
  cdaUploadCompanyRegistrationCertificatePage: CdaUploadCompanyRegistrationCertificatePage;
  cdaUploadControlledDrugUserActivityTemplatePage: CdaUploadControlledDrugUserActivityTemplatePage;
  cdaUsingTheDbsUpdateServicePage: CdaUsingTheDbsUpdateServicePage;
  cdaWeSavedYourApplicationAndSignedYouOutPage: CdaWeSavedYourApplicationAndSignedYouOutPage;
  cdaWhatDateDoesTheServiceExpireOnPage: CdaWhatDateDoesTheServiceExpireOnPage;
  cdaWhatIsTheStatusOfTheSiteToBeLicensedPage: CdaWhatIsTheStatusOfTheSiteToBeLicensedPage;
  cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage: CdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage;
  cdaWhatTypeOfLicenseeAreYouPage: CdaWhatTypeOfLicenseeAreYouPage;
  cdaWhenAreYouMovingSitePage: CdaWhenAreYouMovingSitePage;
  cdaWhenDoesTheContractStartPage: CdaWhenDoesTheContractStartPage;
  cdaWhichEmailAddressShouldWeSendTheLicenceToPage: CdaWhichEmailAddressShouldWeSendTheLicenceToPage;
  cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage: CdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage;
  cdaWhoIsCompletingTheApplicationPage: CdaWhoIsCompletingTheApplicationPage;
  cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage: CdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage;
  cdaWhoIsResponsibleForTheSecurityOfThePremisesPage: CdaWhoIsResponsibleForTheSecurityOfThePremisesPage;
  cdaWhyAreYouRequestingANewLicencePage: CdaWhyAreYouRequestingANewLicencePage;
  cdaWitnessesYouHaveToldUsAboutPage: CdaWitnessesYouHaveToldUsAboutPage;
  cdaYouCannotContinueThisApplicationPage: CdaYouCannotContinueThisApplicationPage;
  cdaYouHaveNotSelectedAnyActivitiesPage: CdaYouHaveNotSelectedAnyActivitiesPage;
  cslApplyForADomesticLicenceForControlledSubstancesPage: CslApplyForADomesticLicenceForControlledSubstancesPage;
  cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage: CslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage;
  cslWhatTypeOfLicenceAreYouApplyingForPage: CslWhatTypeOfLicenceAreYouApplyingForPage;
  lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage: LthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage;
  lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage: LthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage;
  lthccApplicationSubmittedPage: LthccApplicationSubmittedPage;
  lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage: LthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage;
  lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage: LthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage;
  lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage: LthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage;
  lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage: LthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage;
  lthccAreYouRequestingAChangeOfActivityPage: LthccAreYouRequestingAChangeOfActivityPage;
  lthccAreYouRequestingAdditionalSchedulesPage: LthccAreYouRequestingAdditionalSchedulesPage;
  lthccAuthorisedWitnessDetailsPage: LthccAuthorisedWitnessDetailsPage;
  lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage: LthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage;
  lthccCheckYourAnswersPage: LthccCheckYourAnswersPage;
  lthccDbsInformationForAuthorisedWitnessPage: LthccDbsInformationForAuthorisedWitnessPage;
  lthccDbsInformationForTheResponsiblePersonPage: LthccDbsInformationForTheResponsiblePersonPage;
  lthccDeclarationPage: LthccDeclarationPage;
  lthccDescribeYourBusinessModelPage: LthccDescribeYourBusinessModelPage;
  lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage: LthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage;
  lthccDetailsOfCultivationFieldsPage: LthccDetailsOfCultivationFieldsPage;
  lthccDetailsOfTheResponsiblePersonForTheSitePage: LthccDetailsOfTheResponsiblePersonForTheSitePage;
  lthccDetailsOfWhyYouWereRefusedALicencePage: LthccDetailsOfWhyYouWereRefusedALicencePage;
  lthccDoesYourCompanyOwnAllTheFieldsPage: LthccDoesYourCompanyOwnAllTheFieldsPage;
  lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage: LthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage;
  lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage: LthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage;
  lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage: LthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage;
  lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage: LthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage;
  lthccEnterYourApplicationReferenceNumberPage: LthccEnterYourApplicationReferenceNumberPage;
  lthccGrowingLocationContactDetailsPage: LthccGrowingLocationContactDetailsPage;
  lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage: LthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage;
  lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage: LthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage;
  lthccHasTheAuthorisedWitnessSubscribedToDbsPage: LthccHasTheAuthorisedWitnessSubscribedToDbsPage;
  lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage: LthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage;
  lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: LthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage;
  lthccHasYourOrganisationEverBeenRefusedALicencePage: LthccHasYourOrganisationEverBeenRefusedALicencePage;
  lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: LthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage;
  lthccHowAreYouApplyingForYourLowThcCannabisLicencePage: LthccHowAreYouApplyingForYourLowThcCannabisLicencePage;
  lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage: LthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage;
  lthccHowWillTheLeavesAndFlowersBeDestroyedPage: LthccHowWillTheLeavesAndFlowersBeDestroyedPage;
  lthccInvoicingAddressPage: LthccInvoicingAddressPage;
  lthccInvoicingContactDetailsPage: LthccInvoicingContactDetailsPage;
  lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage: LthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage;
  lthccIsTheNewSitePartOfAContractualAgreementPage: LthccIsTheNewSitePartOfAContractualAgreementPage;
  lthccLicenceDetailsPage: LthccLicenceDetailsPage;
  lthccLicenceHolderAddressPage: LthccLicenceHolderAddressPage;
  lthccLicenceHolderDetailsPage: LthccLicenceHolderDetailsPage;
  lthccPerimeterDetailsPage: LthccPerimeterDetailsPage;
  lthccProvideDetailsOfHowYouProduceYourEndProductsPage: LthccProvideDetailsOfHowYouProduceYourEndProductsPage;
  lthccProvideDetailsOfTheLegalBusinessProceedingsPage: LthccProvideDetailsOfTheLegalBusinessProceedingsPage;
  lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage: LthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage;
  lthccProvideDetailsOfYourCustomerBasePage: LthccProvideDetailsOfYourCustomerBasePage;
  lthccProvideDetailsOfYourEndProductsPage: LthccProvideDetailsOfYourEndProductsPage;
  lthccProvideDetailsOfYourRecordKeepingPage: LthccProvideDetailsOfYourRecordKeepingPage;
  lthccProvideDetailsOfYourSeedSuppliersPage: LthccProvideDetailsOfYourSeedSuppliersPage;
  lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage: LthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage;
  lthccProvideTheThcContentLevelPage: LthccProvideTheThcContentLevelPage;
  lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: LthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage;
  lthccUploadAerialPhotosAndSiteMapsPage: LthccUploadAerialPhotosAndSiteMapsPage;
  lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: LthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage;
  lthccUploadCompanyRegistrationCertificatePage: LthccUploadCompanyRegistrationCertificatePage;
  lthccUploadImagesOfThePerimeterPage: LthccUploadImagesOfThePerimeterPage;
  lthccUploadImagesOfYourRecordKeepingDocumentsPage: LthccUploadImagesOfYourRecordKeepingDocumentsPage;
  lthccWeSavedYourApplicationAndSignedYouOutPage: LthccWeSavedYourApplicationAndSignedYouOutPage;
  lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage: LthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage;
  lthccWhatIsTheTotalAcreageOfTheFieldsPage: LthccWhatIsTheTotalAcreageOfTheFieldsPage;
  lthccWhatTypeOfCompanyIsYourOrganisationPage: LthccWhatTypeOfCompanyIsYourOrganisationPage;
  lthccWhatTypeOfLowThcCannabisLicenceAreYouPage: LthccWhatTypeOfLowThcCannabisLicenceAreYouPage;
  lthccWhenAreYouMovingSitePage: LthccWhenAreYouMovingSitePage;
  lthccWhenDoesTheContractStartPage: LthccWhenDoesTheContractStartPage;
  lthccWhereWillYouBeCultivatingTheLowThcCannabisPage: LthccWhereWillYouBeCultivatingTheLowThcCannabisPage;
  lthccWhichEmailAddressShouldWeSendTheLicenceToPage: LthccWhichEmailAddressShouldWeSendTheLicenceToPage;
  lthccWhoIsCompletingTheApplicationPage: LthccWhoIsCompletingTheApplicationPage;
  lthccWhoOwnsTheFieldsPage: LthccWhoOwnsTheFieldsPage;
  lthccWhyAreYouRequestingANewLicencePage: LthccWhyAreYouRequestingANewLicencePage;
  lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage: LthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage;
  lthccYouCannotContinueThisApplicationPage: LthccYouCannotContinueThisApplicationPage;
  lthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage: LthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage;
  lthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage: LthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage;
  pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage: PcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage;
  pcaApplicationSubmittedPage: PcaApplicationSubmittedPage;
  pcaAreYouRequestingAChangeOfSubstanceOrOperationPage: PcaAreYouRequestingAChangeOfSubstanceOrOperationPage;
  pcaAreYouRequestingAnAdditionalCategoryPage: PcaAreYouRequestingAnAdditionalCategoryPage;
  pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage: PcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage;
  pcaCheckYourAnswersPage: PcaCheckYourAnswersPage;
  pcaDbsInformationPage: PcaDbsInformationPage;
  pcaDeclarationPage: PcaDeclarationPage;
  pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage: PcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage;
  pcaDescribeHowYouManageChemicalStockControlPage: PcaDescribeHowYouManageChemicalStockControlPage;
  pcaDescribeHowYouSecureYourPremisesPage: PcaDescribeHowYouSecureYourPremisesPage;
  pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage: PcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage;
  pcaEnterYourApplicationReferenceNumberPage: PcaEnterYourApplicationReferenceNumberPage;
  pcaGuarantorDbsInformationPage: PcaGuarantorDbsInformationPage;
  pcaGuarantorDetailsPage: PcaGuarantorDetailsPage;
  pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage: PcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage;
  pcaHasTheGuarantorSubscribedToDbsUpdatesPage: PcaHasTheGuarantorSubscribedToDbsUpdatesPage;
  pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage: PcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage;
  pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: PcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage;
  pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: PcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage;
  pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage: PcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage;
  pcaInvoicingAddressPage: PcaInvoicingAddressPage;
  pcaInvoicingContactDetailsPage: PcaInvoicingContactDetailsPage;
  pcaIsTheNewSitePartOfAContractualAgreementPage: PcaIsTheNewSitePartOfAContractualAgreementPage;
  pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage: PcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage;
  pcaLicenceHolderAddressPage: PcaLicenceHolderAddressPage;
  pcaLicenceHolderDetailsPage: PcaLicenceHolderDetailsPage;
  pcaPremisesAddressPage: PcaPremisesAddressPage;
  pcaPremisesContactDetailsPage: PcaPremisesContactDetailsPage;
  pcaResponsibleOfficerDetailsPage: PcaResponsibleOfficerDetailsPage;
  pcaSubstancesInYourLicencePage: PcaSubstancesInYourLicencePage;
  pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage: PcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage;
  pcaTellUsAboutYourMainCustomersPage: PcaTellUsAboutYourMainCustomersPage;
  pcaTellUsAboutYourMainSuppliersPage: PcaTellUsAboutYourMainSuppliersPage;
  pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: PcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage;
  pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage: PcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage;
  pcaUploadCertificateOfGoodConductPage: PcaUploadCertificateOfGoodConductPage;
  pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: PcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage;
  pcaUploadCompanyRegistrationCertificatePage: PcaUploadCompanyRegistrationCertificatePage;
  pcaUploadYourCompaniesHouseDetailsPage: PcaUploadYourCompaniesHouseDetailsPage;
  pcaWeSavedYourApplicationAndSignedYouOutPage: PcaWeSavedYourApplicationAndSignedYouOutPage;
  pcaWhatOtherOperationsAppliesToTheLicencePage: PcaWhatOtherOperationsAppliesToTheLicencePage;
  pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage: PcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage;
  pcaWhatTypeOfLicenseeAreYouPage: PcaWhatTypeOfLicenseeAreYouPage;
  pcaWhenAreYouMovingSitePage: PcaWhenAreYouMovingSitePage;
  pcaWhenDoesTheContractStartPage: PcaWhenDoesTheContractStartPage;
  pcaWhichCategoryIsTheNewSubstancePage: PcaWhichCategoryIsTheNewSubstancePage;
  pcaWhichChemicalAreYouApplyingForPage: PcaWhichChemicalAreYouApplyingForPage;
  pcaWhichEmailAddressShouldTheLicenceBeSentToPage: PcaWhichEmailAddressShouldTheLicenceBeSentToPage;
  pcaWhichOperationAppliesToThisLicenceForXPage: PcaWhichOperationAppliesToThisLicenceForXPage;
  pcaWhoIsCompletingTheApplicationPage: PcaWhoIsCompletingTheApplicationPage;
  pcaWhyAreYouRequestingANewLicensePage: PcaWhyAreYouRequestingANewLicensePage;
  pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage: PcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage;
  pcaYouCannotContinueThisApplicationPage: PcaYouCannotContinueThisApplicationPage;
  regBusinessTypePage: RegBusinessTypePage;
  regCheckYourAnswersPage: RegCheckYourAnswersPage;
  regDeclarationPage: RegDeclarationPage;
  regDescribeYourBusinessModelPage: RegDescribeYourBusinessModelPage;
  regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage: RegDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage;
  regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage: RegHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage;
  regInvoicingAddressPage: RegInvoicingAddressPage;
  regInvoicingContactDetailsPage: RegInvoicingContactDetailsPage;
  regIsTheBusinessARegisteredCharityPage: RegIsTheBusinessARegisteredCharityPage;
  regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: RegIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage;
  regLicenceHolderAddressPage: RegLicenceHolderAddressPage;
  regLicenceHolderDetailsPage: RegLicenceHolderDetailsPage;
  regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage: RegMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage;
  regPreviousLicenseDetailsPage: RegPreviousLicenseDetailsPage;
  regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage: RegProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage;
  regRegisterForTheControlledSubstanceLicensingSystemPage: RegRegisterForTheControlledSubstanceLicensingSystemPage;
  regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: RegRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage;
  regRegistrationSubmittedPage: RegRegistrationSubmittedPage;
  regSpecifyYourBusinessTypePage: RegSpecifyYourBusinessTypePage;
  regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage: RegUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage;
  regUploadCompanyRegistrationCertificatePage: RegUploadCompanyRegistrationCertificatePage;
  regWhatTypeOfCompanyIsYourOrganisationPage: RegWhatTypeOfCompanyIsYourOrganisationPage;
  regWhatYourBusinessDoesPage: RegWhatYourBusinessDoesPage;
  cdaAuthorisedWitnessInformationPage: CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage;
  cdaProvideDetailsOfTheServicePage: CdaProvidingDetailsOfTheServicePage;
  cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage: CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage;
};

export const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    await use({
      basePage: new basePage(page),
      cdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage: new CdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(page),
      cdaApplicationSubmittedPage: new CdaApplicationSubmittedPage(page),
      cdaAreControlledDrugsKeptAtThisSitePage: new CdaAreControlledDrugsKeptAtThisSitePage(page),
      cdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage: new CdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(page),
      cdaAreControlledDrugsKeptInASafeOrCabinetPage: new CdaAreControlledDrugsKeptInASafeOrCabinetPage(page),
      cdaAreControlledDrugsKeptInASeparateRoomOrZonePage: new CdaAreControlledDrugsKeptInASeparateRoomOrZonePage(page),
      cdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage: new CdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage(page),
      cdaAreYouProvidingAServiceUnderAContractPage: new CdaAreYouProvidingAServiceUnderAContractPage(page),
      cdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage: new CdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(page),
      cdaAreYouRequestingAChangeOfActivityPage: new CdaAreYouRequestingAChangeOfActivityPage(page),
      cdaAreYouRequestingAdditionalSchedulesPage: new CdaAreYouRequestingAdditionalSchedulesPage(page),
      cdaCheckYourAnswersPage: new CdaCheckYourAnswersPage(page),
      cdaDbsInformationForPage: new CdaDbsInformationForPage(page),
      cdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage: new CdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage(page),
      cdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage: new CdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage(page),
      cdaDbsInformationForThePersonInChargePage: new CdaDbsInformationForThePersonInChargePage(page),
      cdaDeclarationPage: new CdaDeclarationPage(page),
      cdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage: new CdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(page),
      cdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage: new CdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(page),
      cdaDoesTheSiteHaveAnElectronicAlarmSystemPage: new CdaDoesTheSiteHaveAnElectronicAlarmSystemPage(page),
      cdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage: new CdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(page),
      cdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage: new CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage(page),
      cdaElectronicAlarmSystemDetailsPage: new CdaElectronicAlarmSystemDetailsPage(page),
      cdaEnterYourApplicationReferenceNumberPage: new CdaEnterYourApplicationReferenceNumberPage(page),
      cdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage: new CdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(page),
      cdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage: new CdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage(page),
      cdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage: new CdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(page),
      cdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage: new CdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(page),
      cdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage: new CdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage(page),
      cdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage: new CdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(page),
      cdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage: new CdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(page),
      cdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: new CdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(page),
      cdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: new CdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(page),
      cdaHowAreYouApplyingForYourControlledDrugsLicencePage: new CdaHowAreYouApplyingForYourControlledDrugsLicencePage(page),
      cdaHowAreYouFundedPage: new CdaHowAreYouFundedPage(page),
      cdaInvoicingAddressPage: new CdaInvoicingAddressPage(page),
      cdaInvoicingContactDetailsPage: new CdaInvoicingContactDetailsPage(page),
      cdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage: new CdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage(page),
      cdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage: new CdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(page),
      cdaIsTheAlarmSystemServicedAnnuallyPage: new CdaIsTheAlarmSystemServicedAnnuallyPage(page),
      cdaIsTheNewSitePartOfAContractualAgreementPage: new CdaIsTheNewSitePartOfAContractualAgreementPage(page),
      cdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage: new CdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(page),
      cdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage: new CdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(page),
      cdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage: new CdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage(page),
      cdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: new CdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(page),
      cdaLicenceDetailsPage: new CdaLicenceDetailsPage(page),
      cdaLicenceHolderAddressPage: new CdaLicenceHolderAddressPage(page),
      cdaLicenceHolderDetailsPage: new CdaLicenceHolderDetailsPage(page),
      cdaManagingDirectorOrPersonInChargePage: new CdaManagingDirectorOrPersonInChargePage(page),
      cdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage: new CdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(page),
      cdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage: new CdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(page),
      cdaPersonResponsibleForTheSecurityOfThePremisesPage: new CdaPersonResponsibleForTheSecurityOfThePremisesPage(page),
      cdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage: new CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage(page),
      cdaPremisesAddressPage: new CdaPremisesAddressPage(page),
      cdaPremisesContactDetailsPage: new CdaPremisesContactDetailsPage(page),
      cdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage: new CdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage(page),
      cdaProvideDetailsOfTheLegalBusinessProceedingsPage: new CdaProvideDetailsOfTheLegalBusinessProceedingsPage(page),
      cdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage: new CdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage(page),
      cdaProvideDetailsOfWhereTheyAreStoredPage: new CdaProvideDetailsOfWhereTheyAreStoredPage(page),
      cdaProvideDetailsOfWhereYouSourceTheDrugsFromPage: new CdaProvideDetailsOfWhereYouSourceTheDrugsFromPage(page),
      cdaProvideDetailsOfYourMainCustomersPage: new CdaProvideDetailsOfYourMainCustomersPage(page),
      cdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage: new CdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(page),
      cdaProvidingDetailsOfTheServicePage: new CdaProvidingDetailsOfTheServicePage(page),
      cdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage: new CdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(page),
      cdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(page),
      cdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage(page),
      cdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage(page),
      cdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage(page),
      cdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage(page),
      cdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage: new CdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage(page),
      cdaSiteOwnersContactDetailsPage: new CdaSiteOwnersContactDetailsPage(page),
      cdaSpecifyYourTradingReasonPage: new CdaSpecifyYourTradingReasonPage(page),
      cdaStandardOperatingProceduresPage: new CdaStandardOperatingProceduresPage(page),
      cdaSummaryOfTradingReasonsPage: new CdaSummaryOfTradingReasonsPage(page),
      cdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: new CdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(page),
      cdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: new CdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(page),
      cdaUploadCompanyRegistrationCertificatePage: new CdaUploadCompanyRegistrationCertificatePage(page),
      cdaUploadControlledDrugUserActivityTemplatePage: new CdaUploadControlledDrugUserActivityTemplatePage(page),
      cdaUsingTheDbsUpdateServicePage: new CdaUsingTheDbsUpdateServicePage(page),
      cdaWeSavedYourApplicationAndSignedYouOutPage: new CdaWeSavedYourApplicationAndSignedYouOutPage(page),
      cdaWhatDateDoesTheServiceExpireOnPage: new CdaWhatDateDoesTheServiceExpireOnPage(page),
      cdaWhatIsTheStatusOfTheSiteToBeLicensedPage: new CdaWhatIsTheStatusOfTheSiteToBeLicensedPage(page),
      cdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage: new CdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage(page),
      cdaWhatTypeOfLicenseeAreYouPage: new CdaWhatTypeOfLicenseeAreYouPage(page),
      cdaWhenAreYouMovingSitePage: new CdaWhenAreYouMovingSitePage(page),
      cdaWhenDoesTheContractStartPage: new CdaWhenDoesTheContractStartPage(page),
      cdaWhichEmailAddressShouldWeSendTheLicenceToPage: new CdaWhichEmailAddressShouldWeSendTheLicenceToPage(page),
      cdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage: new CdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage(page),
      cdaWhoIsCompletingTheApplicationPage: new CdaWhoIsCompletingTheApplicationPage(page),
      cdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage: new CdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(page),
      cdaWhoIsResponsibleForTheSecurityOfThePremisesPage: new CdaWhoIsResponsibleForTheSecurityOfThePremisesPage(page),
      cdaWhyAreYouRequestingANewLicencePage: new CdaWhyAreYouRequestingANewLicencePage(page),
      cdaWitnessesYouHaveToldUsAboutPage: new CdaWitnessesYouHaveToldUsAboutPage(page),
      cdaYouCannotContinueThisApplicationPage: new CdaYouCannotContinueThisApplicationPage(page),
      cdaYouHaveNotSelectedAnyActivitiesPage: new CdaYouHaveNotSelectedAnyActivitiesPage(page),
      cslApplyForADomesticLicenceForControlledSubstancesPage: new CslApplyForADomesticLicenceForControlledSubstancesPage(page),
      cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage: new CslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(page),
      cslWhatTypeOfLicenceAreYouApplyingForPage: new CslWhatTypeOfLicenceAreYouApplyingForPage(page),
      lthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage: new LthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(page),
      lthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage: new LthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage(page),
      lthccApplicationSubmittedPage: new LthccApplicationSubmittedPage(page),
      lthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage: new LthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(page),
      lthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage: new LthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(page),
      lthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage: new LthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(page),
      lthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage: new LthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage(page),
      lthccAreYouRequestingAChangeOfActivityPage: new LthccAreYouRequestingAChangeOfActivityPage(page),
      lthccAreYouRequestingAdditionalSchedulesPage: new LthccAreYouRequestingAdditionalSchedulesPage(page),
      lthccAuthorisedWitnessDetailsPage: new LthccAuthorisedWitnessDetailsPage(page),
      lthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage: new LthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(page),
      lthccCheckYourAnswersPage: new LthccCheckYourAnswersPage(page),
      lthccDbsInformationForAuthorisedWitnessPage: new LthccDbsInformationForAuthorisedWitnessPage(page),
      lthccDbsInformationForTheResponsiblePersonPage: new LthccDbsInformationForTheResponsiblePersonPage(page),
      lthccDeclarationPage: new LthccDeclarationPage(page),
      lthccDescribeYourBusinessModelPage: new LthccDescribeYourBusinessModelPage(page),
      lthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage: new LthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(page),
      lthccDetailsOfCultivationFieldsPage: new LthccDetailsOfCultivationFieldsPage(page),
      lthccDetailsOfTheResponsiblePersonForTheSitePage: new LthccDetailsOfTheResponsiblePersonForTheSitePage(page),
      lthccDetailsOfWhyYouWereRefusedALicencePage: new LthccDetailsOfWhyYouWereRefusedALicencePage(page),
      lthccDoesYourCompanyOwnAllTheFieldsPage: new LthccDoesYourCompanyOwnAllTheFieldsPage(page),
      lthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage: new LthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage(page),
      lthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage: new LthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(page),
      lthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage: new LthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(page),
      lthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage: new LthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage(page),
      lthccEnterYourApplicationReferenceNumberPage: new LthccEnterYourApplicationReferenceNumberPage(page),
      lthccGrowingLocationContactDetailsPage: new LthccGrowingLocationContactDetailsPage(page),
      lthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage: new LthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(page),
      lthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage: new LthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(page),
      lthccHasTheAuthorisedWitnessSubscribedToDbsPage: new LthccHasTheAuthorisedWitnessSubscribedToDbsPage(page),
      lthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage: new LthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage(page),
      lthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: new LthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(page),
      lthccHasYourOrganisationEverBeenRefusedALicencePage: new LthccHasYourOrganisationEverBeenRefusedALicencePage(page),
      lthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: new LthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(page),
      lthccHowAreYouApplyingForYourLowThcCannabisLicencePage: new LthccHowAreYouApplyingForYourLowThcCannabisLicencePage(page),
      lthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage: new LthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage(page),
      lthccHowWillTheLeavesAndFlowersBeDestroyedPage: new LthccHowWillTheLeavesAndFlowersBeDestroyedPage(page),
      lthccInvoicingAddressPage: new LthccInvoicingAddressPage(page),
      lthccInvoicingContactDetailsPage: new LthccInvoicingContactDetailsPage(page),
      lthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage: new LthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage(page),
      lthccIsTheNewSitePartOfAContractualAgreementPage: new LthccIsTheNewSitePartOfAContractualAgreementPage(page),
      lthccLicenceDetailsPage: new LthccLicenceDetailsPage(page),
      lthccLicenceHolderAddressPage: new LthccLicenceHolderAddressPage(page),
      lthccLicenceHolderDetailsPage: new LthccLicenceHolderDetailsPage(page),
      lthccPerimeterDetailsPage: new LthccPerimeterDetailsPage(page),
      lthccProvideDetailsOfHowYouProduceYourEndProductsPage: new LthccProvideDetailsOfHowYouProduceYourEndProductsPage(page),
      lthccProvideDetailsOfTheLegalBusinessProceedingsPage: new LthccProvideDetailsOfTheLegalBusinessProceedingsPage(page),
      lthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage: new LthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(page),
      lthccProvideDetailsOfYourCustomerBasePage: new LthccProvideDetailsOfYourCustomerBasePage(page),
      lthccProvideDetailsOfYourEndProductsPage: new LthccProvideDetailsOfYourEndProductsPage(page),
      lthccProvideDetailsOfYourRecordKeepingPage: new LthccProvideDetailsOfYourRecordKeepingPage(page),
      lthccProvideDetailsOfYourSeedSuppliersPage: new LthccProvideDetailsOfYourSeedSuppliersPage(page),
      lthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage: new LthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(page),
      lthccProvideTheThcContentLevelPage: new LthccProvideTheThcContentLevelPage(page),
      lthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: new LthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(page),
      lthccUploadAerialPhotosAndSiteMapsPage: new LthccUploadAerialPhotosAndSiteMapsPage(page),
      lthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: new LthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(page),
      lthccUploadCompanyRegistrationCertificatePage: new LthccUploadCompanyRegistrationCertificatePage(page),
      lthccUploadImagesOfThePerimeterPage: new LthccUploadImagesOfThePerimeterPage(page),
      lthccUploadImagesOfYourRecordKeepingDocumentsPage: new LthccUploadImagesOfYourRecordKeepingDocumentsPage(page),
      lthccWeSavedYourApplicationAndSignedYouOutPage: new LthccWeSavedYourApplicationAndSignedYouOutPage(page),
      lthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage: new LthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(page),
      lthccWhatIsTheTotalAcreageOfTheFieldsPage: new LthccWhatIsTheTotalAcreageOfTheFieldsPage(page),
      lthccWhatTypeOfCompanyIsYourOrganisationPage: new LthccWhatTypeOfCompanyIsYourOrganisationPage(page),
      lthccWhatTypeOfLowThcCannabisLicenceAreYouPage: new LthccWhatTypeOfLowThcCannabisLicenceAreYouPage(page),
      lthccWhenAreYouMovingSitePage: new LthccWhenAreYouMovingSitePage(page),
      lthccWhenDoesTheContractStartPage: new LthccWhenDoesTheContractStartPage(page),
      lthccWhereWillYouBeCultivatingTheLowThcCannabisPage: new LthccWhereWillYouBeCultivatingTheLowThcCannabisPage(page),
      lthccWhichEmailAddressShouldWeSendTheLicenceToPage: new LthccWhichEmailAddressShouldWeSendTheLicenceToPage(page),
      lthccWhoIsCompletingTheApplicationPage: new LthccWhoIsCompletingTheApplicationPage(page),
      lthccWhoOwnsTheFieldsPage: new LthccWhoOwnsTheFieldsPage(page),
      lthccWhyAreYouRequestingANewLicencePage: new LthccWhyAreYouRequestingANewLicencePage(page),
      lthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage: new LthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(page),
      lthccYouCannotContinueThisApplicationPage: new LthccYouCannotContinueThisApplicationPage(page),
      lthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage: new LthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage(page),
      lthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage: new LthccYouNeedToApplyForAControlledDrugsLicenceNoToHempPage(page),
      pcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage: new PcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage(page),
      pcaApplicationSubmittedPage: new PcaApplicationSubmittedPage(page),
      pcaAreYouRequestingAChangeOfSubstanceOrOperationPage: new PcaAreYouRequestingAChangeOfSubstanceOrOperationPage(page),
      pcaAreYouRequestingAnAdditionalCategoryPage: new PcaAreYouRequestingAnAdditionalCategoryPage(page),
      pcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage: new PcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(page),
      pcaCheckYourAnswersPage: new PcaCheckYourAnswersPage(page),
      pcaDbsInformationPage: new PcaDbsInformationPage(page),
      pcaDeclarationPage: new PcaDeclarationPage(page),
      pcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage: new PcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage(page),
      pcaDescribeHowYouManageChemicalStockControlPage: new PcaDescribeHowYouManageChemicalStockControlPage(page),
      pcaDescribeHowYouSecureYourPremisesPage: new PcaDescribeHowYouSecureYourPremisesPage(page),
      pcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage: new PcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(page),
      pcaEnterYourApplicationReferenceNumberPage: new PcaEnterYourApplicationReferenceNumberPage(page),
      pcaGuarantorDbsInformationPage: new PcaGuarantorDbsInformationPage(page),
      pcaGuarantorDetailsPage: new PcaGuarantorDetailsPage(page),
      pcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage: new PcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(page),
      pcaHasTheGuarantorSubscribedToDbsUpdatesPage: new PcaHasTheGuarantorSubscribedToDbsUpdatesPage(page),
      pcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage: new PcaHasTheResponsibleOfficerSubscribedToDbsUpdatesPage(page),
      pcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage: new PcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(page),
      pcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage: new PcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(page),
      pcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage: new PcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage(page),
      pcaInvoicingAddressPage: new PcaInvoicingAddressPage(page),
      pcaInvoicingContactDetailsPage: new PcaInvoicingContactDetailsPage(page),
      pcaIsTheNewSitePartOfAContractualAgreementPage: new PcaIsTheNewSitePartOfAContractualAgreementPage(page),
      pcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage: new PcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(page),
      pcaLicenceHolderAddressPage: new PcaLicenceHolderAddressPage(page),
      pcaLicenceHolderDetailsPage: new PcaLicenceHolderDetailsPage(page),
      pcaPremisesAddressPage: new PcaPremisesAddressPage(page),
      pcaPremisesContactDetailsPage: new PcaPremisesContactDetailsPage(page),
      pcaResponsibleOfficerDetailsPage: new PcaResponsibleOfficerDetailsPage(page),
      pcaSubstancesInYourLicencePage: new PcaSubstancesInYourLicencePage(page),
      pcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage: new PcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage(page),
      pcaTellUsAboutYourMainCustomersPage: new PcaTellUsAboutYourMainCustomersPage(page),
      pcaTellUsAboutYourMainSuppliersPage: new PcaTellUsAboutYourMainSuppliersPage(page),
      pcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage: new PcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(page),
      pcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage: new PcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage(page),
      pcaUploadCertificateOfGoodConductPage: new PcaUploadCertificateOfGoodConductPage(page),
      pcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage: new PcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(page),
      pcaUploadCompanyRegistrationCertificatePage: new PcaUploadCompanyRegistrationCertificatePage(page),
      pcaUploadYourCompaniesHouseDetailsPage: new PcaUploadYourCompaniesHouseDetailsPage(page),
      pcaWeSavedYourApplicationAndSignedYouOutPage: new PcaWeSavedYourApplicationAndSignedYouOutPage(page),
      pcaWhatOtherOperationsAppliesToTheLicencePage: new PcaWhatOtherOperationsAppliesToTheLicencePage(page),
      pcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage: new PcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(page),
      pcaWhatTypeOfLicenseeAreYouPage: new PcaWhatTypeOfLicenseeAreYouPage(page),
      pcaWhenAreYouMovingSitePage: new PcaWhenAreYouMovingSitePage(page),
      pcaWhenDoesTheContractStartPage: new PcaWhenDoesTheContractStartPage(page),
      pcaWhichCategoryIsTheNewSubstancePage: new PcaWhichCategoryIsTheNewSubstancePage(page),
      pcaWhichChemicalAreYouApplyingForPage: new PcaWhichChemicalAreYouApplyingForPage(page),
      pcaWhichEmailAddressShouldTheLicenceBeSentToPage: new PcaWhichEmailAddressShouldTheLicenceBeSentToPage(page),
      pcaWhichOperationAppliesToThisLicenceForXPage: new PcaWhichOperationAppliesToThisLicenceForXPage(page),
      pcaWhoIsCompletingTheApplicationPage: new PcaWhoIsCompletingTheApplicationPage(page),
      pcaWhyAreYouRequestingANewLicensePage: new PcaWhyAreYouRequestingANewLicensePage(page),
      pcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage: new PcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(page),
      pcaYouCannotContinueThisApplicationPage: new PcaYouCannotContinueThisApplicationPage(page),
      regBusinessTypePage: new RegBusinessTypePage(page),
      regCheckYourAnswersPage: new RegCheckYourAnswersPage(page),
      regDeclarationPage: new RegDeclarationPage(page),
      regDescribeYourBusinessModelPage: new RegDescribeYourBusinessModelPage(page),
      regDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage: new RegDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(page),
      regHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage: new RegHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(page),
      regInvoicingAddressPage: new RegInvoicingAddressPage(page),
      regInvoicingContactDetailsPage: new RegInvoicingContactDetailsPage(page),
      regIsTheBusinessARegisteredCharityPage: new RegIsTheBusinessARegisteredCharityPage(page),
      regIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: new RegIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(page),
      regLicenceHolderAddressPage: new RegLicenceHolderAddressPage(page),
      regLicenceHolderDetailsPage: new RegLicenceHolderDetailsPage(page),
      regMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage: new RegMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage(page),
      regPreviousLicenseDetailsPage: new RegPreviousLicenseDetailsPage(page),
      regProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage: new RegProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(page),
      regRegisterForTheControlledSubstanceLicensingSystemPage: new RegRegisterForTheControlledSubstanceLicensingSystemPage(page),
      regRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage: new RegRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(page),
      regRegistrationSubmittedPage: new RegRegistrationSubmittedPage(page),
      regSpecifyYourBusinessTypePage: new RegSpecifyYourBusinessTypePage(page),
      regUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage: new RegUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage(page),
      regUploadCompanyRegistrationCertificatePage: new RegUploadCompanyRegistrationCertificatePage(page),
      regWhatTypeOfCompanyIsYourOrganisationPage: new RegWhatTypeOfCompanyIsYourOrganisationPage(page),
      regWhatYourBusinessDoesPage: new RegWhatYourBusinessDoesPage(page),
      cdaAuthorisedWitnessInformationPage: new CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage(page),
      cdaProvideDetailsOfTheServicePage: new CdaProvidingDetailsOfTheServicePage(page),
      cdaDoesYourCompanyHaveAnyAuthorisedWitnessesForTheDestructionOfControlledDrugsPage: new CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage(page),
    });
  }
});

export const expect = test.expect;
