import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccYouNeedToApplyForAControlledDrugsLicenceCultivatingInsidePage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('You need to apply for a controlled drugs licence – Industrial hemp application');
    }
    async completeYouNeedToApplyForAControlledDrugLicencePage(): Promise<void> {
        await this.assertPageTitle();
    }
}
