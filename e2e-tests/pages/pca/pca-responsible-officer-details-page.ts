import { basePage } from '../base-page';

export class PcaResponsibleOfficerDetailsPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"responsible-officer-fullname\"]");
  readonly emailField = this.page.locator("[id=\"responsible-officer-email\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Responsible officer details – Precursor chemicals application"
            : "Responsible officer details – Precursor chemicals application";
  }

  async enterResponsibleOfficerDetails(fullName: string, email: string, optText: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.emailField, email);
    await this.selectRadioOptionWithText(optText);
  }

  async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.emailField, email);
  }
  async enterResponsibleOfficerFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterFullNameAndEmailDetails(fullName, email);
  }

  async completeResponsibleOfficerDetailsPage(fullName: string, email: string, optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterResponsibleOfficerDetails(fullName, email, optText);
    await this.clickSaveAndContinue();
  }
}
