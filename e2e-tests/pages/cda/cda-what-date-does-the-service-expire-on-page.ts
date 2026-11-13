import { basePage } from '../base-page';
export class CdaWhatDateDoesTheServiceExpireOnPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: What date does the service expire on? – Controlled drugs application"
            : "What date does the service expire on? – Controlled drugs application";
    }
    async enterWhatDateDoesTheServiceExpireOn(date: string): Promise<void> {
        await this.enterDateOrDob(date);
    }
    async completeWhatDateDoesTheServiceExpireOnPage(date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhatDateDoesTheServiceExpireOn(date);
        await this.clickSaveAndContinue();
    }
}
