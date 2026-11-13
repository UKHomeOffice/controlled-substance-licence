import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage extends basePage {
    readonly saveAndContinueToSchedule2Btn: Locator;
    constructor(page: Page) {
        super(page);
        this.saveAndContinueToSchedule2Btn = page.locator("input[value='Save and continue to schedule 2']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 1 activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 1 activities that will apply to your licence – Controlled drugs application";
    }
    async clickSaveAndContinueToSchedule2Btn(): Promise<void> {
        await this.saveAndContinueToSchedule2Btn.waitFor({ state: 'visible' });
        await this.saveAndContinueToSchedule2Btn.click();
    }
    async completeSelectAnySchedule1ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.clickSaveAndContinueToSchedule2Btn();
        }
        else {
            await this.selectRadioOptionWithText(option);
            await this.clickSaveAndContinueToSchedule2Btn();
        }
    }
}
