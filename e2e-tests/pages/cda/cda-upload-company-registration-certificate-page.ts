import { basePage } from '../base-page';
export class CdaUploadCompanyRegistrationCertificatePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Upload company registration certificate – Controlled drugs application"
            : "Upload company registration certificate – Controlled drugs application";
    }
    async completeUploadCompanyRegistrationCertificatePage(uploadFile: string): Promise<void> {
        await this.assertPageTitle();
        await this.uploadFileFromUserUploadFolder(uploadFile);
        await this.selectContinueUploadBtn();
    }
}
