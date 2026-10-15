import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfTheLegalBusinessProceedingsPage extends basePage {
    readonly textArea: Locator;
    constructor(page: Page) {
        super(page);
        this.textArea = page.locator("[id=\"legal-proceedings-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of the legal business proceedings – Controlled drugs application"
            : "Provide details of the legal business proceedings – Controlled drugs application";
    }
    async enterProvideDetailsOfTheLegalBusinessProceedings(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textArea, text);
    }
}
