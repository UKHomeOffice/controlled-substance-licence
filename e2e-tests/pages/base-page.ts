import { expect, Locator, Page } from '@playwright/test';
import path from 'node:path';

export class basePage {
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

  async click(locator: Locator) { await locator.click(); }
  async clickOnElement(locator: Locator) { await locator.click(); }
  async type(locator: Locator, text: string) { await this.clearAndEnterTextInElement(locator, text); }
  async clickContinue() { await this.continueButton.click(); }
  async clickContinueButton() { await this.clickContinue(); }
  async waitClickableAndClickContinueBtn() { await this.clickContinue(); }
  async clickContinueBtnToMoveToNextPage() { await this.clickContinue(); }
  async clickSaveAndContinue() { await this.saveAndContinueBtn.click(); }
  async clickSaveAndAndExit() { await this.saveAndExitButton.click(); }
  async clickSignInAgain() { await this.getSignInAgainButton().click(); }
  async clickConfirmAndSubmit() { await this.page.getByRole('button', { name: 'Confirm and submit', exact: true }).click(); }
  async clickSubmitRegistration() { await this.page.getByRole('button', { name: 'Submit registration', exact: true }).click(); }
  async clickConfirmSubmission() { await this.page.getByRole('button', { name: 'Confirm submission', exact: true }).click(); }
  async clickAddAnother() { await this.page.locator('a.govuk-button--secondary').click(); }
  async clickUploadFileButton() { await this.uploadFileBtn.click(); }
  async selectContinueUploadBtn() { await this.page.locator('[name="continueWithoutUpload"]').click(); }
  async refreshPage() { await this.page.reload(); }
  async openUrl(url: string) { await this.page.goto(url); }
  async waitForVisibilityOfElement(locator: Locator) { await expect(locator).toBeVisible(); }
  async isElementDisplayed(locator: Locator) { return locator.isVisible(); }
  async isVisible(locator: Locator) { return locator.isVisible(); }

  getContinueButton() { return this.continueButton; }
  getSaveAndContinueBtn() { return this.saveAndContinueBtn; }
  getSaveAndContinueButton() { return this.saveAndContinueBtn; }
  getSaveAndExitButton() { return this.saveAndExitButton; }
  getSignInAgainButton() { return this.page.getByRole('button', { name: 'Sign in again', exact: true }); }
  getDateDay() { return this.dateDay; }
  getDateMonth() { return this.dateMonth; }
  getDateYear() { return this.dateYear; }
  getAddressLine1() { return this.addressLine1; }
  getAddressLine2() { return this.addressLine2; }
  getTownOrCity() { return this.townOrCity; }
  getCounty() { return this.county; }
  getPostcode() { return this.postcode; }
  getFileUpload() { return this.fileUpload; }
  getYesButton() { return this.page.getByRole('radio', { name: 'Yes', exact: true }); }
  getNoButton() { return this.page.getByRole('radio', { name: 'No', exact: true }); }
  getButton(label: string) { return this.page.getByRole('button', { name: label }); }
  getButtonLink(label: string) { return this.page.getByRole('link', { name: label }); }
  getHeaderText(text: string) { return this.page.getByRole('heading', { name: text }); }
  getInputBox(label: string) { return this.page.getByLabel(label); }
  getTextArea(label: string) { return this.page.getByLabel(label); }
  getTextArea2(label: string) { return this.page.getByLabel(label); }
  getRadioOrCheckBox(label: string) { return this.page.getByLabel(label, { exact: false }); }
  getRadioOrCheckBox2(label: string) { return this.getRadioOrCheckBox(label); }
  getJavascriptCheckBox(label: string) { return this.getRadioOrCheckBox(label); }
  getInputTextForSelectedRadioBox(label: string) { return this.page.getByLabel(label); }
  getElementByPosition(before: string, position: number, after: string) { return this.page.locator(`xpath=${before}${position}${after}`); }

  getLink(text: string): Locator {
    if (!text.trim()) throw new Error('Link text value cannot be blank.');
    return this.page.getByRole('link', { name: text.trim(), exact: false }).first();
  }
  getPageLinkByText(text: string) { return this.page.getByRole('link', { name: text, exact: true }); }
  getPartialLink(text: string) { return this.getLink(text); }
  async clickLinkWithText(text: string) { await this.getLink(text).click(); }
  async clickLinkOrButtonWithText(text: string) {
    await this.page.getByRole('button', { name: text, exact: true })
      .or(this.page.getByRole('link', { name: text, exact: true })).click();
  }
  async isLinkTextDisplayed(text: string) { return this.getLink(text).isVisible(); }
  async getLinkUrl(text: string) { return this.getLink(text).getAttribute('href'); }
  async assertLinkUrl(text: string, url: string) { await expect(this.getLink(text)).toHaveAttribute('href', url); }
  async getPageHeaderText() { return this.headerText.innerText(); }
  async getCurrentPageTitle() { return this.page.title(); }
  async getPageLinkText(text: string) { return this.getPageLinkByText(text).innerText(); }
  async getErrorSummaryTitle() { return this.errorSummaryTitle.innerText(); }
  async getErrorMessageDetail() { return this.errorSummaryList.innerText(); }
  async getRemainingCharactersMsg() { return this.remainingCharacters.innerText(); }
  async getRemainingCharactersErrorMsg() { return this.remainingCharactersError.innerText(); }
  async getFileUploadErrorMaxFileSizeMgs() { return this.page.locator('#file-upload-error-maxFileSize').innerText(); }
  async getFileUploadErrorMaxFileTypeMgs() { return this.page.locator('#file-upload-error-fileType').innerText(); }
  async isTextOnPage(text: string) { return this.page.getByText(text, { exact: false }).first().isVisible(); }
  async verifyTextToAppear(text: string) { await expect(this.page.getByText(text, { exact: false }).first()).toBeVisible(); }

  async selectYesOrNoRadioOption(option: string) {
    if (!['yes', 'no'].includes(option.toLowerCase())) throw new Error(`Invalid yes/no radio option: ${option}`);
    await this.page.getByRole('radio', { name: option.toLowerCase() === 'yes' ? 'Yes' : 'No', exact: true }).check();
  }

  async selectRadioOptionWithText(text: string) {
    if (!text.trim()) throw new Error('Radio option text value cannot be blank.');
    await this.page.getByRole('radio', { name: text.trim(), exact: false })
      .or(this.page.getByRole('checkbox', { name: text.trim(), exact: false })).check();
  }

  async selectCheckboxOptionWithText(text: string) {
    if (!text.trim()) throw new Error('Checkbox option text value cannot be blank.');
    await this.page.getByRole('checkbox', { name: text.trim(), exact: false }).check();
  }

  async clearAndEnterTextInElement(locator: Locator, text: string | null) {
    await locator.fill('');
    if (text) await locator.pressSequentially(text);
    await locator.press('Tab');
  }

  async clearAndEnterAutocompleteTextInElement(locator: Locator, text: string | null) {
    await locator.fill('');
    if (text?.trim()) {
      await locator.pressSequentially(text);
      const option = this.page.getByRole('option', { name: text, exact: true });
      // Source permits an unlisted custom value as well as a matching suggestion.
      const id = await locator.getAttribute('id');
      if (id) {
        const suggestions = this.page.locator(`[id="${id}__listbox"]`);
        await expect(suggestions).toBeAttached();
        if (await option.count()) await option.click();
      }
    }
    await locator.press('Tab');
  }

  async autoSelectFromDropDownMenu(locator: Locator, option: string) {
    await this.clearAndEnterAutocompleteTextInElement(locator, option);
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
    const date = new Date();
    const normalized = value.trim().toLowerCase();
    switch (normalized) {
      case "yesterday's date": date.setDate(date.getDate() - 1); break;
      case "today's date": break;
      case "tomorrow's date": date.setDate(date.getDate() + 1); break;
      case 'more than one year in the future': date.setFullYear(date.getFullYear() + 1); date.setDate(date.getDate() + 1); break;
      case 'more than 100 years in the future': date.setFullYear(date.getFullYear() + 100); date.setDate(date.getDate() + 1); break;
      case 'more than one year in the past': date.setFullYear(date.getFullYear() - 1); date.setDate(date.getDate() - 1); break;
      case 'within the last 3 years': date.setFullYear(date.getFullYear() - 3); date.setDate(date.getDate() + 1); break;
      case 'more than 3 years ago': date.setFullYear(date.getFullYear() - 3); break;
      case 'less than 16 years ago': date.setFullYear(date.getFullYear() - 16); date.setDate(date.getDate() + 1); break;
      case 'less than 18 years ago': date.setFullYear(date.getFullYear() - 18); date.setDate(date.getDate() + 1); break;
      case '19 years ago': date.setFullYear(date.getFullYear() - 20); break;
      default: {
        const match = /^more than (50|100|120|127) years ago$/.exec(normalized);
        if (!match) return value;
        date.setFullYear(date.getFullYear() - Number(match[1]));
        date.setDate(date.getDate() - 1);
      }
    }
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

  getRelativeDate(years: number, months: number, days: number, format: string): string {
    const date = new Date();
    date.setFullYear(date.getFullYear() + years);
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() + days);
    return format.replace('yyyy', String(date.getFullYear()))
      .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
      .replace('dd', String(date.getDate()).padStart(2, '0'));
  }

  generateRandomAlphabetString(length: number): string {
    if (!Number.isSafeInteger(length) || length < 0) throw new Error(`Invalid random string length: ${length}`);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  }

  generatePcaAlphabetString(charSize: string): string {
    if (!/^[+-]?\d+$/.test(charSize)) {
      throw new Error(`Invalid character count: ${charSize}`);
    }
    const length = Number(charSize);
    if (!Number.isSafeInteger(length) || length < 0 || length > 2_147_483_647) {
      throw new Error(`Invalid character count: ${charSize}`);
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
  }
}
