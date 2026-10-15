import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSelectAnySchedule4IIActivitiesThatWillApplyToYourLicencePage extends basePage {
    readonly saveAndContinueToSchedule5Btn: Locator;
    constructor(page: Page) {
        super(page);
        this.saveAndContinueToSchedule5Btn = page.locator("input[value='Save and continue to schedule 5']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 4 (II) activities that will apply to your licencee – Controlled drugs application"
            : "Select any schedule 4 (II) activities that will apply to your licencee – Controlled drugs application";
    }
    async clickSaveAndContinueToSchedule5Btn(): Promise<void> {
        await this.saveAndContinueToSchedule5Btn.waitFor({ state: 'visible' });
        await this.saveAndContinueToSchedule5Btn.click();
    }
}
