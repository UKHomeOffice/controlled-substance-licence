import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccEnterYourApplicationReferenceNumberPage extends basePage {
    readonly ApplicationRefNoField: Locator;

    constructor(page: Page) {
        super(page);
        this.ApplicationRefNoField = page.locator('#amend-application-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Enter your application reference number – Industrial hemp application');
    }

    async enterApplicationReferenceNo(applicationRefNo: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.ApplicationRefNoField, applicationRefNo);
    }
}
