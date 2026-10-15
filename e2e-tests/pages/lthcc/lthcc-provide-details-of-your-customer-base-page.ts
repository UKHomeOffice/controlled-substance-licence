import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfYourCustomerBasePage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#customer-base-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of your customer base – Industrial hemp application');
    }

    async enterProvideDetailsOfYourCustomerBase(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
}
