import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhyAreYouRequestingANewLicencePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Why are you requesting a new licence? – Industrial hemp application');
    }
    async completeWhyAreYouRequestingANewLicencePage(optionText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optionText);
        await this.clickSaveAndContinue();
    }
}
