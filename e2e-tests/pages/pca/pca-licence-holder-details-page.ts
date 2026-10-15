import { basePage } from '../base-page';

export class PcaLicenceHolderDetailsPage extends basePage {
  readonly companyNameField = this.page.locator("[id=\"company-name\"]");
  readonly companyNumberField = this.page.locator("[id=\"company-number\"]");
  readonly ukTelPhoneNoField = this.page.locator("[id=\"telephone\"]");
  readonly emailField = this.page.locator("[id=\"email\"]");
  readonly webSiteUrlField = this.page.locator("[id=\"website-url\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Licence holder details – Precursor chemicals application"
            : "Licence holder details – Precursor chemicals application";
  }

  async enterLicenceHolderDetails(companyName: string, companyNumber: string, ukTelPhoneNo: string, email: string, webSiteUrl: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.companyNameField, companyName);
    await this.clearAndEnterTextInElement(this.companyNumberField, companyNumber);
    await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
    await this.clearAndEnterTextInElement(this.emailField, email);
    await this.clearAndEnterTextInElement(this.webSiteUrlField, webSiteUrl);
  }
}
