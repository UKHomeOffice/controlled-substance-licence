import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccBusinessesAdjacentToOrOperatingFromYourCultivationSitePage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Businesses adjacent to or operating from your cultivation site – Industrial hemp application');
    }
    async completeBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
