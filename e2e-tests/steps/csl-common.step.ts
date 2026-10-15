import { expect, Page } from '@playwright/test';
import type { Pages } from '../fixture/fixture';

export class CommonCslStepLib {
  protected activePage: Page;

  constructor(protected readonly pages: Pages) {
    this.activePage = pages.basePage.page;
  }

  async openCls() {
    await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.openClsHomepage();
    await this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage.acceptCookies();
  }

  async selectSaveAndContinueButton() { await this.pages.basePage.clickSaveAndContinue(); }

  async getPageHeaderText() { return this.activePage.locator('h1').innerText(); }

  async isLinkTextIsDisplayedOnPage(text: string) { return this.pages.basePage.isLinkTextDisplayed(text); }

  async clickOnLinkOrButtonWithText(text: string) {
    await this.pages.basePage.page.getByRole('button', { name: text, exact: true })
      .or(this.pages.basePage.page.getByRole('link', { name: text, exact: true })).click();
  }

  generateRandomStringOfLength(length: string) {
    if (!/^\d+$/.test(length)) throw new Error(`Invalid random string length: ${length}`);
    return this.pages.basePage.generateRandomAlphabetString(Number(length));
  }

  async completeApplyForADomesticLicenceForControlledSubstancesPage() {
    const landingPage = this.pages.cslApplyForADomesticLicenceForControlledSubstancesPage;
    await landingPage.assertPageTitle();
    for (const text of ['Register for this service', 'domestic licensing application guidance', 'dflu.dom@homeoffice.gov.uk']) {
      await expect(landingPage.getLink(text)).toBeVisible();
    }
    await landingPage.selectStartNowButton();
  }

  async completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(username: string, password: string) {
    const signInPage = this.pages.cslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage;
    await signInPage.assertPageTitle();
    await expect(signInPage.getLink('dflu.dom@homeoffice.gov.uk')).toBeVisible();
    await signInPage.notRegisteredYet.click();
    await expect(signInPage.getLink('Register for your licence.')).toBeVisible();
    await signInPage.enterSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugs(username, password);
  }

  async completeIsWhatTypeOfLicenceAreYouApplyingForPage(option: string) {
    const licenceTypePage = this.pages.cslWhatTypeOfLicenceAreYouApplyingForPage;
    await licenceTypePage.assertPageTitle();
    await licenceTypePage.selectWhatTypeOfLicenceAreYouApplyingFor(option);
    await licenceTypePage.clickContinue();
  }

  async clickOnLinkWithText(text: string) { await this.pages.basePage.clickLinkWithText(text); }
  async switchToTab(index: number) {
    await expect.poll(() => this.pages.basePage.page.context().pages().length).toBeGreaterThan(index);
    this.activePage = this.pages.basePage.page.context().pages()[index];
    await this.activePage.waitForLoadState('domcontentloaded');
  }

  getOpenTabCount() { 
    return this.pages.basePage.page.context().pages().length; 
  }

  getCurrentUrl() {
     return this.activePage.url(); 
  }
}
