import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSelectAnySchedule4IActivitiesThatWillApplyToYourLicencePage extends basePage {
    readonly saveAndContinueToSchedule4IIBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.saveAndContinueToSchedule4IIBtn = page.locator("input[value='Save and continue to schedule 4 (II)']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 4 (I) activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 4 (I) activities that will apply to your licence – Controlled drugs application";
    }
    async clickSaveAndContinueToSchedule4IIBtn(): Promise<void> {
        await this.saveAndContinueToSchedule4IIBtn.waitFor({ state: 'visible' });
        await this.saveAndContinueToSchedule4IIBtn.click();
    }
}
