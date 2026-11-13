import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHowAreYouApplyingForYourLowThcCannabisLicencePage extends basePage {
    readonly ApplicationRefNoField: Locator;

    constructor(page: Page) {
        super(page);
        this.ApplicationRefNoField = page.locator('#amend-application-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('How are you applying for your low THC cannabis license? – Industrial hemp application');
    }
    async completeHowAreYouApplyingForYourLowThcCannabisLicencePage(optionText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optionText);
        await this.clickContinue();
    }
}
