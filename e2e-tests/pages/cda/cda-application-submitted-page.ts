import { basePage } from '../base-page';
export class CdaApplicationSubmittedPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Application submitted – Controlled drugs application"
            : "Application submitted – Controlled drugs application";
    }
}
