import { basePage } from '../base-page';
export class CdaWhenAreYouMovingSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: When are you moving site? – Controlled drugs application"
            : "When are you moving site? – Controlled drugs application";
    }
    async enterWhenAreYouMovingSite(date: string): Promise<void> {
        await this.enterDateOrDob(date);
    }
    async completeWhenAreYouMovingSitePage(date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhenAreYouMovingSite(date);
        await this.clickSaveAndContinue();
    }
}
