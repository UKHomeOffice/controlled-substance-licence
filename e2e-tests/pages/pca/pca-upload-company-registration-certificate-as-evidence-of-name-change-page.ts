import { basePage } from '../base-page';

export class PcaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Upload company registration certificate as evidence of name change – Precursor chemicals application"
            : "Upload company registration certificate as evidence of name change – Precursor chemicals application";
  }
  async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(uploadFileName: string): Promise<void> {
    await this.assertPageTitle();
    await this.uploadFileFromUserUploadFolder(uploadFileName);
    await this.selectContinueUploadBtn();
  }
}
