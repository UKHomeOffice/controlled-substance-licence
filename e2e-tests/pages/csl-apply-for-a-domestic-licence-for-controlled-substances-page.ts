import { Locator, Page } from '@playwright/test';
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

  async selectStartNowButton() {
    await this.startNowBtn.click();
  }

  async selectRegisterForThisServiceLink(linkText: string) {
    await this.clickLinkWithText(linkText);
  }
}
