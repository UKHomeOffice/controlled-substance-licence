import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhoIsCompletingTheApplicationPage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    readonly contactPhoneField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator('#who-is-completing-application-full-name');
        this.emailField = page.locator('#who-is-completing-application-email');
        this.contactPhoneField = page.locator('#who-is-completing-application-telephone');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Who is completing the application? – Industrial hemp application');
    }

    async enterWhoIsCompletingTheApplication(fullName: string, email: string, contactPhone: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.contactPhoneField, contactPhone);
    }
}
