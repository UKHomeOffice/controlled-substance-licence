import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaPremisesContactDetailsPage extends basePage {
    readonly ukTelPhoneNoField: Locator;
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.ukTelPhoneNoField = page.locator("[id=\"premises-telephone\"]");
        this.emailField = page.locator("[id=\"premises-email\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Premises contact details – Controlled drugs application"
            : "Premises contact details – Controlled drugs application";
    }
    async enterPremisesContactDetails(ukTelPhoneNo: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async completePremisesContactDetailsPage(ukTelPhoneNo: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterPremisesContactDetails(ukTelPhoneNo, email);
        await this.clickSaveAndContinue();
    }
}
