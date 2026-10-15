import { basePage } from '../base-page';

export class PcaTellUsAboutYourMainSuppliersPage extends basePage {
  readonly textField = this.page.locator("[id=\"main-suppliers\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Tell us about your main suppliers – Precursor chemicals application"
            : "Tell us about your main suppliers – Precursor chemicals application";
  }

  async enterTellUsAboutYourMainSuppliers(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
}
