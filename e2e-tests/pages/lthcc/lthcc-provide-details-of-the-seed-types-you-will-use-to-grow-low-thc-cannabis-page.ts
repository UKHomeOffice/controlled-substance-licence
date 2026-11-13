import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#seed-type-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide details of the seed types you will use to grow low THC cannabis – Industrial hemp application');
    }

    async enterProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabis(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabisPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfTheSeedTypesYouWillUseToGrowLowThcCannabis(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
