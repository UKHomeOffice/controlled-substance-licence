import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfHowYouProduceYourEndProductsPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#end-product-production-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of how you produce your end products – Industrial hemp application');
    }

    async enterProvideDetailsOfHowYouProduceYourEndProducts(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideDetailsOfHowYouProduceYourEndProductsPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfHowYouProduceYourEndProducts(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
