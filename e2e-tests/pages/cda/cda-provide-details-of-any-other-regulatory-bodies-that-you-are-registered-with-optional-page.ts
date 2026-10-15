import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptionalPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"regulatory-body-registration-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of any other regulatory bodies that you are registered with (optional) – Controlled drugs application"
            : "Provide details of any other regulatory bodies that you are registered with (optional) – Controlled drugs application";
    }
    async enterProvideDetailsOfAnyOtherRegulatoryBodiesThatYouAreRegisteredWithOptional(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
}
