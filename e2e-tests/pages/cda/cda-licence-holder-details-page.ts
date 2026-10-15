import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaLicenceHolderDetailsPage extends basePage {
    readonly companyNameField: Locator;
    readonly companyNumberField: Locator;
    readonly ukTelPhoneNoField: Locator;
    readonly emailField: Locator;
    readonly webSiteUrlField: Locator;
    constructor(page: Page) {
        super(page);
        this.companyNameField = page.locator("[id=\"company-name\"]");
        this.companyNumberField = page.locator("[id=\"company-number\"]");
        this.ukTelPhoneNoField = page.locator("[id=\"telephone\"]");
        this.emailField = page.locator("[id=\"email\"]");
        this.webSiteUrlField = page.locator("[id=\"website-url\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Licence holder details – Controlled drugs application"
            : "Licence holder details – Controlled drugs application";
    }
    async enterLicenceHolderDetails(companyName: string, companyNumber: string, ukTelPhoneNo: string, email: string, webSiteUrl: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.companyNameField, companyName);
        await this.clearAndEnterTextInElement(this.companyNumberField, companyNumber);
        await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.webSiteUrlField, webSiteUrl);
    }
}
