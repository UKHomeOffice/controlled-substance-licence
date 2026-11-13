import { basePage } from '../base-page';

export class PcaTellUsAboutYourMainCustomersPage extends basePage {
  readonly textField = this.page.locator("[id=\"main-customers\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Tell us about your main customers – Precursor chemicals application"
            : "Tell us about your main customers – Precursor chemicals application";
  }

  async enterTellUsAboutYourMainCustomers(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
  async completeTellUsAboutYourMainCustomersPage(textAreaValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterTellUsAboutYourMainCustomers(textAreaValue);
    await this.clickSaveAndContinue();
  }
}
