import { basePage } from '../base-page';

export class LthccUploadCompanyRegistrationCertificatePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload company registration certificate – Industrial hemp application');
    }
    async completeUploadCompanyRegistrationCertificatePage(fileName: string): Promise<void> {
        await this.assertPageTitle();
        await this.uploadFileFromUserUploadFolder(fileName);
        await this.selectContinueUploadBtn();
    }
}
