import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfYourMainCustomersPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"main-customer-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of your main customers – Controlled drugs application"
            : "Provide details of your main customers – Controlled drugs application";
    }
    async enterProvideDetailsOfYourMainCustomers(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
}
