import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaWhichEmailAddressShouldWeSendTheLicenceToPage extends basePage {
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.emailField = page.locator("[id=\"licence-email-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Which email address should we send the licence to? – Controlled drugs application"
            : "Which email address should we send the licence to? – Controlled drugs application";
    }
    async enterWhichEmailAddressShouldWeSendTheLicenceToPage(email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async completeWhichEmailAddressShouldWeSendTheLicenceToPage(email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhichEmailAddressShouldWeSendTheLicenceToPage(email);
        await this.clickSaveAndContinue();
    }
}
