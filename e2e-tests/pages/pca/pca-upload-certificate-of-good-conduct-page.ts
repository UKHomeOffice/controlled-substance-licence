import { basePage } from '../base-page';

export class PcaUploadCertificateOfGoodConductPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Upload a certificate of good conduct – Precursor chemicals application"
            : "Upload a certificate of good conduct – Precursor chemicals application";
  }
}
