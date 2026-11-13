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
  async enterGuarantorDetailsFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterFullNameAndEmailDetails(fullName, email);
    await this.clickSaveAndContinue();
  }

  async completeGuarantorDetailsPage(fullName: string, email: string, optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterGuarantorDetails(fullName, email, optText);
    await this.clickSaveAndContinue();
  }
}
