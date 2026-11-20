import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaWhoIsCompletingTheApplicationPage extends basePage {
    readonly contactNameField: Locator;
    readonly emailField: Locator;
    readonly contactNoField: Locator;
    constructor(page: Page) {
        super(page);
        this.contactNameField = page.locator("[id=\"who-is-completing-application-full-name\"]");
        this.emailField = page.locator("[id=\"who-is-completing-application-email\"]");
        this.contactNoField = page.locator("[id=\"who-is-completing-application-telephone\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Who is completing the application? – Controlled drugs application"
            : "Who is completing the application? – Controlled drugs application";
    }
    async enterWhoIsCompletingTheApplication(fullName: string, email: string, contactNo: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.contactNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.contactNoField, contactNo);
    }
    async completeWhoIsCompletingTheApplicationPage(fullName: string, email: string, contactNo: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhoIsCompletingTheApplication(fullName, email, contactNo);
        await this.clickSaveAndContinue();
    }
}
