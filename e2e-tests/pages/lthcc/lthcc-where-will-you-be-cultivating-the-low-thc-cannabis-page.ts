import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhereWillYouBeCultivatingTheLowThcCannabisPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Where will you be cultivating the low THC cannabis? – Industrial hemp application');
    }
    async completeWhereWillYouBeCultivatingTheLowThcCannabisPage(optionText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optionText);
        await this.clickSaveAndContinue();
    }
}
