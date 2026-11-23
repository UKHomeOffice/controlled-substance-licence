import { expect, Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class CslApplyForADomesticLicenceForControlledSubstancesPage extends basePage {
  readonly startNowBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.startNowBtn = page.getByRole('button', { name: 'Start now', exact: true });
  }

  async expectedPageTitle(): Promise<string> {
    return this.withErrorPrefix('Apply for a domestic licence for controlled substances – Controlled substance licence applications');
  }

  async openClsHomepage() {
    await this.page.goto('/');
  }

  async openCls() {
    await this.openClsHomepage();
    await this.acceptCookies();
  }

  async completeApplyForADomesticLicenceForControlledSubstancesPage() {
    await this.assertPageTitle();
    for (const text of ['Register for this service', 'domestic licensing application guidance', 'dflu.dom@homeoffice.gov.uk']) {
      await expect(this.getLink(text)).toBeVisible();
    }
    await this.selectStartNowButton();
  }

  async selectStartNowButton() {
    await this.startNowBtn.click();
  }

  async selectRegisterForThisServiceLink(linkText: string) {
    await this.clickLinkWithText(linkText);
  }
  async navigateToRegistrationPage(linkText: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectRegisterForThisServiceLink(linkText);
  }
}
