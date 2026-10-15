import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#contract-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Tell us more about the contract and how it affects your licence application – Industrial hemp application');
    }

    async enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
}
