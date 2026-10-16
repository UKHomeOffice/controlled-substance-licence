import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDetailsOfWhyYouWereRefusedALicencePage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#refusal-reason');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Details of why you were refused a licence – Industrial hemp application');
    }

    async enterDetailsOfWhyYouWereRefusedALicence(textArea: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textArea);
    }
    async completeDetailsOfWhyYouWereRefusedALicencePage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDetailsOfWhyYouWereRefusedALicence(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
