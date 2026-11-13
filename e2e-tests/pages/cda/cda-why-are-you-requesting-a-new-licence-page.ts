import { basePage } from '../base-page';
export class CdaWhyAreYouRequestingANewLicencePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Why are you requesting a new licence? – Controlled drugs application"
            : "Why are you requesting a new licence? – Controlled drugs application";
    }
    async completeWhyAreYouRequestingANewLicensePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndContinue();
    }
}
