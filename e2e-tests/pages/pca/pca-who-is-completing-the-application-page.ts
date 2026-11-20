import { basePage } from '../base-page';

export class PcaWhoIsCompletingTheApplicationPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"who-is-completing-application-full-name\"]");
  readonly ukTelPhoneNoField = this.page.locator("[id=\"who-is-completing-application-telephone\"]");
  readonly emailField = this.page.locator("[id=\"who-is-completing-application-email\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Who is completing the application? – Precursor chemicals application"
            : "Who is completing the application? – Precursor chemicals application";
  }

  async enterWhoIsCompletingTheApplication(fullName: string, ukTelPhoneNo: string, email: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
    await this.clearAndEnterTextInElement(this.emailField, email);
  }
  async completeWhoIsCompletingTheApplicationPage(fullName: string, ukTelPhoneNo: string, email: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhoIsCompletingTheApplication(fullName, ukTelPhoneNo, email);
    await this.clickSaveAndContinue();
  }
}
