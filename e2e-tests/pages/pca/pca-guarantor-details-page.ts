import { basePage } from '../base-page';

export class PcaGuarantorDetailsPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"guarantor-full-name\"]");
  readonly emailField = this.page.locator("[id=\"guarantor-email-address\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Guarantor details – Precursor chemicals application"
            : "Guarantor details – Precursor chemicals application";
  }

  async enterGuarantorDetails(fullName: string, email: string, optText: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.emailField, email);
    await this.selectRadioOptionWithText(optText);
  }

  async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.emailField, email);
  }
}
