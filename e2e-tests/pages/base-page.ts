import { expect, Locator, Page } from '@playwright/test';
import { addDays, addYears } from 'date-fns';
import path from 'node:path';

export class basePage {
  private activePage: Page;
  readonly headerText: Locator;
  readonly continueButton: Locator;
  readonly continueBtn: Locator;
  readonly saveAndContinueBtn: Locator;
  readonly saveAndExitButton: Locator;
  readonly navigateBackLink: Locator;
  readonly uploadFileBtn: Locator;
  readonly deleteBtn: Locator;
  readonly fileUpload: Locator;
  readonly name: Locator;
  readonly errorSummaryTitle: Locator;
  readonly errorSummaryList: Locator;
  readonly remainingCharacters: Locator;
  readonly remainingCharactersError: Locator;
  readonly dateDay: Locator;
  readonly dateMonth: Locator;
  readonly dateYear: Locator;
  readonly addressLine1: Locator;
  readonly addressLine2: Locator;
  readonly townOrCity: Locator;
  readonly county: Locator;
  readonly postcode: Locator;

  constructor(readonly page: Page) {
    this.activePage = page;
    this.headerText = page.locator('h1');
    this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
    this.continueBtn = this.continueButton;
    this.saveAndContinueBtn = page.getByRole('button', { name: 'Save and continue', exact: true });
    this.saveAndExitButton = page.getByRole('button', { name: 'Save and exit', exact: true });
    this.navigateBackLink = page.getByRole('link', { name: 'Back', exact: true });
    this.uploadFileBtn = page.getByRole('button', { name: 'Upload file', exact: true });
    this.deleteBtn = page.getByRole('link', { name: 'Delete', exact: true });
    this.fileUpload = page.locator('input[type="file"]');
    this.name = page.locator('input[id$="name"]');
    this.errorSummaryTitle = page.locator('#error-summary-title');
    this.errorSummaryList = page.locator('.govuk-error-summary__list');
    this.remainingCharacters = page.locator('.govuk-character-count__status:visible');
    this.remainingCharactersError = page.locator('.govuk-character-count__status.govuk-error-message:visible');
    this.dateDay = page.locator('input[id*="day"]');
    this.dateMonth = page.locator('input[id*="month"]');
    this.dateYear = page.locator('input[id*="year"]');
    this.addressLine1 = page.locator('input[id*="house-number"]');
    this.addressLine2 = page.locator('input[id*="street"]');
    this.townOrCity = page.locator('input[id*="town"]');
    this.county = page.locator('input[id*="county"]');
    this.postcode = page.locator('input[id*="postcode"]');
  }

  async expectedPageTitle(..._fields: (string | string[])[]): Promise<string> {
    throw new Error('Use a concrete page object to assert its expected title.');
  }

  async withErrorPrefix(title: string): Promise<string> {
    return (await this.page.title()).startsWith('Error') ? `Error: ${title}` : title;
  }

  async assertPageTitle(...fields: (string | string[])[]) {
    const title = await this.expectedPageTitle(...fields);
    await expect(this.page).toHaveTitle(title.endsWith(' – GOV.UK') ? title : `${title} – GOV.UK`);
  }

  async clickContinue() { await this.continueButton.click(); }

  async clickSaveAndContinue() { await this.saveAndContinueBtn.click(); }

  async clickSaveAndAndExit() { await this.saveAndExitButton.click(); }

  async clickSignInAgain() { await this.getSignInAgainButton().click(); }

  async clickConfirmAndSubmit() { await this.page.getByRole('button', { name: 'Confirm and submit', exact: true }).click(); }

  async clickSubmitRegistration() { await this.page.getByRole('button', { name: 'Submit registration', exact: true }).click(); }

  async clickConfirmSubmission() { await this.page.getByRole('button', { name: 'Confirm submission', exact: true }).click(); }

  async clickAddAnother() { await this.page.locator('a.govuk-button--secondary').click(); }

  async selectContinueUploadBtn() { await this.page.locator('[name="continueWithoutUpload"]').click(); }

  getSignInAgainButton() { return this.page.getByRole('button', { name: 'Sign in again', exact: true }); }

  getLink(text: string): Locator {
    if (!text.trim()) throw new Error('Link text value cannot be blank.');
    return this.page.getByRole('link', { name: text.trim(), exact: false }).first();
  }

  async clickLinkWithText(text: string) { await this.getLink(text).click(); }

  async clickLinkOrButtonWithText(text: string) {
    await this.page.getByRole('button', { name: text, exact: true })
      .or(this.page.getByRole('link', { name: text, exact: true })).click();
  }

  async isLinkTextDisplayed(text: string) { return this.getLink(text).isVisible(); }

  async switchToTab(index: number) {
    await expect.poll(() => this.page.context().pages().length).toBeGreaterThan(index);
    this.activePage = this.page.context().pages()[index];
    await this.activePage.waitForLoadState('domcontentloaded');
  }

  getOpenTabCount() { return this.page.context().pages().length; }

  getCurrentUrl() { return this.activePage.url(); }

  async getFileUploadErrorMaxFileSizeMgs() { return this.page.locator('#file-upload-error-maxFileSize').innerText(); }

  async getFileUploadErrorMaxFileTypeMgs() { return this.page.locator('#file-upload-error-fileType').innerText(); }

  async selectYesOrNoRadioOption(option: string) {
    if (!['yes', 'no'].includes(option.toLowerCase())) throw new Error(`Invalid yes/no radio option: ${option}`);
    await this.page.getByRole('radio', { name: option.toLowerCase() === 'yes' ? 'Yes' : 'No', exact: true }).check();
  }

  async selectRadioOptionWithText(text: string) {
    if (!text.trim()) throw new Error('Radio option text value cannot be blank.');
    await this.page.getByRole('radio', { name: text.trim(), exact: false })
      .or(this.page.getByRole('checkbox', { name: text.trim(), exact: false })).check();
  }

  async clearAndEnterTextInElement(locator: Locator, text: string | null) {
    await locator.fill('');
    if (text) await locator.pressSequentially(text);
    await locator.press('Tab');
  }

  async selectValueFromDropDownField(locator: Locator, value: string) {
    await locator.selectOption({ label: value });
  }

  async uploadFileFromUserUploadFolder(fileName: string) {
    if (path.basename(fileName) !== fileName) throw new Error(`Invalid upload filename: ${fileName}`);
    await this.fileUpload.setInputFiles(path.resolve(__dirname, '..', 'test-data', 'user-upload-files', fileName));
  }

  async acceptCookies() {
    const accept = this.page.getByRole('button', { name: 'Accept additional cookies', exact: true });
    if (!await accept.isVisible()) {
      await this.page.context().clearCookies();
      await this.page.reload();
    }
    await accept.click();
    await this.page.getByRole('button', { name: /^Hide / }).click();
  }

  convertTextToDate(value: string): string {
    const normalized = value.trim().toLowerCase();
    const now = new Date();
    const dateMappings: Record<string, () => Date> = {
      "yesterday's date": () => addDays(now, -1),
      "today's date": () => now,
      "tomorrow's date": () => addDays(now, 1),
      'less than 3 years ago': () => addDays(addYears(now, -3), 1),
      'less than 16 years ago': () => addDays(addYears(now, -16), 1),
      'less than 18 years ago': () => addDays(addYears(now, -18), 1),
      '19 years ago': () => addYears(now, -19),
      'within the last 3 years': () => addDays(addYears(now, -3), 1),
      'more than 1 year in the future': () => addDays(addYears(now, 1), 1),
      'more than 100 years in the future': () => addDays(addYears(now, 100), 1),
      'more than 1 year ago': () => addDays(addYears(now, -1), -1),
      'more than 1 year in the past': () => addDays(addYears(now, -1), -1),
      'more than 3 years ago': () => addDays(addYears(now, -3), -1),
      'more than 50 years ago': () => addDays(addYears(now, -50), -1),
      'more than 100 years ago': () => addDays(addYears(now, -100), -1),
      'more than 120 years ago': () => addDays(addYears(now, -120), -1),
      'more than 126 years ago': () => addDays(addYears(now, -126), -1),
      'more than 127 years ago': () => addDays(addYears(now, -127), -1),
    };
    const dateMapping = dateMappings[normalized];
    if (!dateMapping) return value;
    const date = dateMapping();
    return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
  }

  async enterDateOrDob(value: string | null) {
    if (!value?.trim()) return;
    const parts = this.convertTextToDate(value).split('/');
    if (parts.length !== 3) throw new Error('Invalid date format. Expected dd/MM/yyyy.');
    await this.clearAndEnterTextInElement(this.dateDay, parts[0]);
    await this.clearAndEnterTextInElement(this.dateMonth, parts[1]);
    await this.clearAndEnterTextInElement(this.dateYear, parts[2]);
  }

  generateRandomAlphabetString(length: number): string {
    if (!Number.isSafeInteger(length) || length < 0) throw new Error(`Invalid random string length: ${length}`);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  }

  generateRandomStringOfLength(length: string) {
    if (!/^\d+$/.test(length)) throw new Error(`Invalid random string length: ${length}`);
    return this.generateRandomAlphabetString(Number(length));
  }

  generateRandomAlphabetCharacters(charSize: string): string {
    return this.generateRandomAlphabetString(Number.parseInt(charSize, 10));
  }
}
