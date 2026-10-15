import { basePage } from '../base-page';

export class PcaUploadYourCompaniesHouseDetailsPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Upload your Companies House details – Precursor chemicals application"
            : "Upload your Companies House details – Precursor chemicals application";
  }
}
