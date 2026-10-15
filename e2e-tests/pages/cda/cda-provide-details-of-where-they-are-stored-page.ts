import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfWhereTheyAreStoredPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"storage-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of where they are stored – Controlled drugs application"
            : "Provide details of where they are stored – Controlled drugs application";
    }
    async enterProvideDetailsOfWhereTheyAreStored(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textValue);
    }
}
