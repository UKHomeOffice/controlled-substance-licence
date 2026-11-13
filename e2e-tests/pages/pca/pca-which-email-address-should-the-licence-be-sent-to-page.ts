import { basePage } from '../base-page';

export class PcaWhichEmailAddressShouldTheLicenceBeSentToPage extends basePage {
  readonly emailField = this.page.locator("[id=\"licence-email\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Which email address should the licence be sent to? – Precursor chemicals application"
            : "Which email address should the licence be sent to? – Precursor chemicals application";
  }

  async enterWhichEmailAddressShouldTheLicenceBeSentTo(email: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.emailField, email);
  }
  async completeWhichEmailAddressShouldTheLicenceBeSentToPage(emailValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhichEmailAddressShouldTheLicenceBeSentTo(emailValue);
    await this.clickSaveAndContinue();
  }
}
