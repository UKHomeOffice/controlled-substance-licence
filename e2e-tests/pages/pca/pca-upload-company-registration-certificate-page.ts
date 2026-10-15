import { basePage } from '../base-page';

export class PcaUploadCompanyRegistrationCertificatePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Upload company registration certificate – Precursor chemicals application"
            : "Upload company registration certificate – Precursor chemicals application";
  }
}
