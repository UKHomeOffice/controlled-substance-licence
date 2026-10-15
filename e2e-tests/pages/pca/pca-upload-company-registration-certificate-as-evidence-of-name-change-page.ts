import { basePage } from '../base-page';

export class PcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Upload company registration certificate as evidence of name change – Precursor chemicals application"
            : "Upload company registration certificate as evidence of name change – Precursor chemicals application";
  }
}
