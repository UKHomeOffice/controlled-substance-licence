import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhichEmailAddressShouldWeSendTheLicenceToPage extends basePage {
    readonly emailField: Locator;

    constructor(page: Page) {
        super(page);
        this.emailField = page.locator('#licence-email-address');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Which email address should we send the licence to? – Industrial hemp application');
    }

    async enterWhichEmailAddressShouldWeSendTheLicenceTo(email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
}
