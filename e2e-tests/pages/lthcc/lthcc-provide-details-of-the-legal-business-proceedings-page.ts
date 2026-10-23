import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfTheLegalBusinessProceedingsPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#legal-business-proceedings-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of the legal business proceedings – Industrial hemp application');
    }

    async enterProvideDetailsOfTheLegalBusinessProceedings(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideDetailsOfTheLegalBusinessProceedingsPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfTheLegalBusinessProceedings(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
