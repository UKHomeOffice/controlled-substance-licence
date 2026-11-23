import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccPerimeterDetailsPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#perimeter-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Perimeter details – Industrial hemp application');
    }

    async enterPerimeterDetails(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completePerimeterDetailsPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterPerimeterDetails(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
