import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfWhereYouSourceTheDrugsFromPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"source-drugs-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of where you source the drugs from – Controlled drugs application"
            : "Provide details of where you source the drugs from – Controlled drugs application";
    }
    async enterProvideDetailsOfWhereYouSourceTheDrugsFromPage(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeProvideDetailsOfWhereYouSourceTheDrugsFromPage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfWhereYouSourceTheDrugsFromPage(textArea);
        await this.clickSaveAndContinue();
    }
}
