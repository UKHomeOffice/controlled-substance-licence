import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage extends basePage {
    readonly saveAndContinueToSchedule3Btn: Locator;
    constructor(page: Page) {
        super(page);
        this.saveAndContinueToSchedule3Btn = page.locator("input[value='Save and continue to schedule 3']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 2 activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 2 activities that will apply to your licence – Controlled drugs application";
    }
    async clickSaveAndContinueToSchedule3Btn(): Promise<void> {
        await this.saveAndContinueToSchedule3Btn.waitFor({ state: 'visible' });
        await this.saveAndContinueToSchedule3Btn.click();
    }
    async completeSelectAnySchedule2ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.clickSaveAndContinueToSchedule3Btn();
        }
        else {
            await this.selectRadioOptionWithText(option);
            await this.clickSaveAndContinueToSchedule3Btn();
        }
    }
}
