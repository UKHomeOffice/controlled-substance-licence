import { expect, Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class CslSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage extends basePage {
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly notRegisteredYet: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.notRegisteredYet = page.locator('.govuk-details__summary-text');
    this.signInBtn = page.getByRole('button', { name: 'Sign in', exact: true });
  }

  async expectedPageTitle(): Promise<string> {
    return this.withErrorPrefix('Sign in to apply for a domestic licence to produce, supply or possess controlled drugs – Controlled substance licence applications');
  }

  async enterSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugs(username: string, password: string) {
    if (!username || !password) {
      throw new Error('CSL sign-in credentials are missing. Set USER_NAME and PASSWORD (or the pending-user equivalents) in the environment.');
    }
    await this.clearAndEnterTextInElement(this.usernameField, username);
    await this.clearAndEnterTextInElement(this.passwordField, password);
    await this.signInBtn.click();
  }

  async completeSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugsPage(username: string, password: string) {
    await this.assertPageTitle();
    await expect(this.getLink('dflu.dom@homeoffice.gov.uk')).toBeVisible();
    await this.notRegisteredYet.click();
    await expect(this.getLink('Register for your licence.')).toBeVisible();
    await this.enterSignInToApplyForADomesticLicenceToProduceSupplyOrPossessControlledDrugs(username, password);
  }
}
