import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDescribeYourBusinessModelPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#describe-business-model');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Describe your business model – Industrial hemp application');
    }

    async enterDescribeYourBusinessModel(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeDescribeYourBusinessModelPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDescribeYourBusinessModel(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
