import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegDescribeYourBusinessModelPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#describe-business-model');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Describe your business model – Register for controlled substance licensing"
            : "Describe your business model – Register for controlled substance licensing";
    }

    async enterDescribeYourBusinessModel(textAreaValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textAreaValue);
    }
    async completeDescribeYourBusinessModelPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDescribeYourBusinessModel(textAreaValue);
        await this.clickContinue();
    }
}
