import { expect } from '../../fixture/fixtures';
import { basePage } from '../base-page';
export class CdaUploadControlledDrugUserActivityTemplatePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Upload controlled drug user activity template – Controlled drugs application"
            : "Upload controlled drug user activity template – Controlled drugs application";
    }

    async completeUploadControlledDrugUserActivityTemplatePage(uploadFile: string): Promise<void> {
        await this.assertPageTitle();
        expect(await this.isLinkTextDisplayed("Download the template (XLSX, 15.4KB)")).toBe(true);
        await this.uploadFileFromUserUploadFolder(uploadFile);
        await this.selectContinueUploadBtn();
    }
}
