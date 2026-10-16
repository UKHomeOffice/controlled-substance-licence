import { basePage } from '../base-page';
export class CdaUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Upload company registration certificate as evidence of name change – Controlled drugs application"
            : "Upload company registration certificate as evidence of name change – Controlled drugs application";
    }
    async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(uploadFile: string): Promise<void> {
        await this.assertPageTitle();
        await this.uploadFileFromUserUploadFolder(uploadFile);
        await this.selectContinueUploadBtn();
    }
}
