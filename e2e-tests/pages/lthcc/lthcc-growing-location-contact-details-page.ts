import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccGrowingLocationContactDetailsPage extends basePage {
    readonly emailField: Locator;
    readonly ukTelPhoneNoField: Locator;

    constructor(page: Page) {
        super(page);
        this.emailField = page.locator('#growing-location-email');
        this.ukTelPhoneNoField = page.locator('#growing-location-uk-telephone');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Growing location contact details – Industrial hemp application');
    }

    async enterGrowingLocationContactDetails(email: string, ukTelPhoneNo: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
    }
    async completeGrowingLocationContactDetailsPagePage(email: string, ukTelPhoneNo: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterGrowingLocationContactDetails(email, ukTelPhoneNo);
        await this.clickSaveAndContinue();
    }
}
