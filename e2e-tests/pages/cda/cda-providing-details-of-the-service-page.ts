import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvidingDetailsOfTheServicePage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"service-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of the service – Controlled drugs application"
            : "Provide details of the service – Controlled drugs application";
    }
    async enterProvidingDetailsOfTheService(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textValue);
    }
    async completeProvideDetailsOfTheServicePage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvidingDetailsOfTheService(textArea);
        await this.clickSaveAndContinue();
    }
}
