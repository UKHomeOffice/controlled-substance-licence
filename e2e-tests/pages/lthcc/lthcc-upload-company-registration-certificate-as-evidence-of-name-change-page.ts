import { basePage } from '../base-page';

export class LthccUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload company registration certificate as evidence of name change – Industrial hemp application');
    }
    async completeUploadCompanyRegistrationCertificateAsEvidenceOfNameChangePage(fileName: string): Promise<void> {
        await this.assertPageTitle();
        await this.uploadFileFromUserUploadFolder(fileName);
        await this.selectContinueUploadBtn();
    }
}
