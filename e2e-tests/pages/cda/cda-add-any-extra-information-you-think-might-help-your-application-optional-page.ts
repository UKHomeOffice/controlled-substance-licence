import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"extra-information\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Add any extra information to your application – Controlled drugs application"
            : "Add any extra information to your application – Controlled drugs application";
    }
    async enterAddAnyExtraInformationYouThinkMightHelpYourApplicationOptional(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterAddAnyExtraInformationYouThinkMightHelpYourApplicationOptional(textArea);
        await this.clickSaveAndContinue();
    }
}
