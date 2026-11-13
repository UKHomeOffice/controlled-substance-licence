import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSiteOwnersContactDetailsPage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    readonly contactPhoneField: Locator;
    readonly addressField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"site-owner-full-name\"]");
        this.emailField = page.locator("[id=\"site-owner-email-address\"]");
        this.contactPhoneField = page.locator("[id=\"site-owner-telephone\"]");
        this.addressField = page.locator("[id=\"site-owner-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Site owner contact details – Controlled drugs application"
            : "Site owner contact details – Controlled drugs application";
    }
    async enterSiteOwnersContactDetails(fullName: string, email: string, contactPhone: string, address: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.contactPhoneField, contactPhone);
        await this.clearAndEnterTextInElement(this.addressField, address);
    }
    async completeSiteOwnersContactDetailsPage(fullName: string, email: string, contactPhone: string, address: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterSiteOwnersContactDetails(fullName, email, contactPhone, address);
        await this.clickSaveAndContinue();
    }
}
