import { basePage } from '../base-page';

export class PcaPremisesContactDetailsPage extends basePage {
  readonly ukTelPhoneNoField = this.page.locator("[id=\"premises-telephone\"]");
  readonly emailField = this.page.locator("[id=\"premises-email\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Premises contact details – Precursor chemicals application"
            : "Premises contact details – Precursor chemicals application";
  }

  async enterPremisesContactDetails(ukTelPhoneNo: string, email: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
    await this.clearAndEnterTextInElement(this.emailField, email);
  }
}
