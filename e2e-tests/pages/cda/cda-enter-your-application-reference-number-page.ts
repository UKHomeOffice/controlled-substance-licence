import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaEnterYourApplicationReferenceNumberPage extends basePage {
    readonly ApplicationRefNoField: Locator;
    constructor(page: Page) {
        super(page);
        this.ApplicationRefNoField = page.locator("[id=\"amend-application-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Enter your application reference number – Controlled drugs application"
            : "Enter your application reference number – Controlled drugs application";
    }
    async enterApplicationReferenceNo(applicationRefNo: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.ApplicationRefNoField, applicationRefNo);
    }
}
