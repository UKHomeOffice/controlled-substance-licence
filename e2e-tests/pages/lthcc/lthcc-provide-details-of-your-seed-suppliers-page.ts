import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfYourSeedSuppliersPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#seed-supplier-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of your seed suppliers – Industrial hemp application');
    }

    async enterProvideDetailsOfYourSeedSuppliers(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideDetailsOfYourSeedSuppliersPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfYourSeedSuppliers(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
