import { basePage } from '../base-page';
export class CdaUploadControlledDrugUserActivityTemplatePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Upload controlled drug user activity template – Controlled drugs application"
            : "Upload controlled drug user activity template – Controlled drugs application";
    }
}
