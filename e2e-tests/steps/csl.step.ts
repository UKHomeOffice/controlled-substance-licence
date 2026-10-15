import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixture';
import { CommonCslStepLib } from './csl-common.step';
import { RegStepLib } from './reg.step';
import { CdaStepLib } from './cda.step';
import { PcaStepLib } from './pca.step';
import { LthccStepLib } from './lthcc.step';
import { ConstantsLib } from '../utility-helper/constants-lib';

const { USER_NAME, PASSWORD, USER_NAME_PENDING, PASSWORD_PENDING } = ConstantsLib;

const { Given, When, Then } = createBdd(test);

Given('I visit the Controlled substance licence application page', async ({ pages }) => {
  await new CommonCslStepLib(pages).openCls();
});

When('I fill out the answers to {string} form pertaining to {string} happy path test', async ({ pages }, application: string, scenario: string) => {
  switch (application.toLowerCase()) {
    case 'registration': await new RegStepLib(pages).answersRegistrationFormFor(scenario); break;
    case 'precursor chemicals': await new PcaStepLib(pages).answersPrecursorChemicalsFormFor(scenario); break;
    case 'controlled drugs': await new CdaStepLib(pages).answersControlledDrugsFormFor(scenario); break;
    case 'low thc cannabis': await new LthccStepLib(pages).answersLowThcCannabisFormFor(scenario); break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I fill out the answers to {string} form pertaining to {string} happy path test by selecting {string} checkbox and entering own chemical name {string}', async ({ pages }, application: string, scenario: string, checkboxLabel: string, chemicalName: string) => {
  switch (application.toLowerCase()) {
    case 'precursor chemicals':
      await new PcaStepLib(pages).answersPrecursorChemicalsFormForUsingOwnChemicalName(scenario, checkboxLabel, chemicalName);
      break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I partially completing {string} form, then save and exit on {string} page', async ({ pages }, application: string, scenario: string) => {
  switch (application.toLowerCase()) {
    case 'precursor chemicals': await new PcaStepLib(pages).answersPrecursorChemicalsFormForContinuingAnApplication(scenario); break;
    case 'controlled drugs': await new CdaStepLib(pages).answersControlledDrugsFormForContinuingAnApplication(scenario); break;
    case 'low thc cannabis': await new LthccStepLib(pages).answersLowThcCannabisFormForContinuingAnApplication(scenario); break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I fill out the answers to {string} existing licensee renewing or changing a currently licensed site form pertaining to cannot continue with application form', async ({ pages }, application: string) => {
  switch (application.toLowerCase()) {
    case 'precursor chemicals': await new PcaStepLib(pages).answerToExistingLicenseeRenewingOrChangingCannonContinue(); break;
    case 'controlled drugs': await new CdaStepLib(pages).answerToExistingLicenseeRenewingOrChangingCannonContinue(); break;
    case 'low thc cannabis': await new LthccStepLib(pages).answerToExistingLicenseeRenewingOrChangingCannonContinue(); break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I select save and continue for CDA', async ({ pages }) => {
  await new CommonCslStepLib(pages).selectSaveAndContinueButton();
});

When('I choose to navigate to {string} page', async ({ pages }, _pageName: string) => {
  await new CommonCslStepLib(pages).completeApplyForADomesticLicenceForControlledSubstancesPage();
});

Then(/^I (?:should (?:see|be returned to)(?= "[^"]*" page for )|am navigated to) "([^"]*)" page(?: for (?:LTHCC|CDA|PCA|Registration))?$/, async ({ page }, heading: string) => {
  await expect(page.locator('h1')).toHaveText(heading);
});

Then('{string} text is displayed as page header', async ({ page }, heading: string) => {
  await expect(page.locator('h1')).toHaveText(heading);
});

When('I select {string} link on page', async ({ pages }, text: string) => {
  await new CommonCslStepLib(pages).clickOnLinkWithText(text);
});

When('I select the sign in again button on {string} form', async ({ pages }, application: string) => {
  switch (application.toLowerCase()) {
    case 'precursor chemicals': await new PcaStepLib(pages).SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(); break;
    case 'controlled drugs': await new CdaStepLib(pages).SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(); break;
    case 'low thc cannabis': await new LthccStepLib(pages).SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(); break;
    default: throw new Error(`Wrong application form name: ${application}`);
  }
});

When('I choose to sign in, then select {string} form and then select {string} option', async ({ pages }, application: string, option: string) => {
  const common = new CommonCslStepLib(pages);
  await common.completeApplyForADomesticLicenceForControlledSubstancesPage();
  await common.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD);
  switch (application.toLowerCase()) {
    case 'precursor chemicals':
      await common.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await new PcaStepLib(pages).completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(option);
      break;
    case 'controlled drugs':
      await common.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await new CdaStepLib(pages).completeHowAreYouApplyingForYourControlledDrugsLicencePage(option);
      break;
    case 'low thc cannabis':
      await common.completeIsWhatTypeOfLicenceAreYouApplyingForPage(application);
      await new LthccStepLib(pages).completeHowAreYouApplyingForYourLowThcCannabisLicencePage(option);
      break;
    default: throw new Error(`Wrong application name: ${application}`);
  }
});

When('I choose to sign in as {string} user', async ({ pages }, userType: string) => {
  const common = new CommonCslStepLib(pages);
  switch (userType.toLowerCase()) {
    case 'valid': await common.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME, PASSWORD); break;
    case 'pending': await common.completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(USER_NAME_PENDING, PASSWORD_PENDING); break;
    default: throw new Error(`Wrong user type: ${userType}`);
  }
});

When(/^I (?:choose to select the|select) "([^"]*)" (?:link|button)$/, async ({ pages }, text: string) => {
  await new CommonCslStepLib(pages).clickOnLinkOrButtonWithText(text);
});

Then('I am navigated to a new tab with {string} page displayed', async ({ pages }, heading: string) => {
  const common = new CommonCslStepLib(pages);
  await common.switchToTab(1);
  expect(await common.getPageHeaderText()).toBe(heading);
});

Then('the link opens in a new tab and URL is loaded', async ({ pages }) => {
  const common = new CommonCslStepLib(pages);
  await common.switchToTab(1);
  expect(common.getOpenTabCount()).toBeGreaterThan(1);
  expect(common.getCurrentUrl().trim()).not.toBe('');
  await common.switchToTab(0);
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
  const countPattern = escaped.replace(/\d[\d,]*/g, count =>
    count.replaceAll(',', '').replace(/\B(?=(\d{3})+(?!\d))/g, ',?'));
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
Then('link text {string} is displayed and is associated to url {string}', async ({ pages }, text: string, url: string) => {
  await expect(pages.basePage.getLink(text)).toBeVisible();
  await expect(pages.basePage.getLink(text)).toHaveAttribute('href', url);
});
