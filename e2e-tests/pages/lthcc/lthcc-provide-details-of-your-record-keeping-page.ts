import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfYourRecordKeepingPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#record-keeping-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of your record keeping – Industrial hemp application');
    }

    async enterProvideDetailsOfYourRecordKeeping(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideDetailsOfYourRecordKeepingPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfYourRecordKeeping(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
