import { basePage } from '../base-page';

export class PcaEnterYourApplicationReferenceNumberPage extends basePage {
  readonly ApplicationRefNoField = this.page.locator("[id=\"amend-application-details\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Enter your application reference number – Precursor chemicals application"
            : "Enter your application reference number – Precursor chemicals application";
  }

  async enterApplicationReferenceNo(applicationRefNo: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.ApplicationRefNoField, applicationRefNo);
  }
}
