import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhatTypeOfLowThcCannabisLicenceAreYouPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('What type of low THC cannabis licensee are you? – Industrial hemp application');
    }
    async completeWhatTypeOfLowThcCannabisLicenceAreYouPage(optionText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optionText);
        await this.clickSaveAndContinue();
    }
}
