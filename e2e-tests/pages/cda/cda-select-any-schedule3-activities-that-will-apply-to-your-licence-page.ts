import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage extends basePage {
    readonly saveAndContinueToSchedule4IBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.saveAndContinueToSchedule4IBtn = page.locator("input[value='Save and continue to schedule 4 (I)']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 3 activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 3 activities that will apply to your licence – Controlled drugs application";
    }
    async clickSaveAndContinueToSchedule4IBtn(): Promise<void> {
        await this.saveAndContinueToSchedule4IBtn.waitFor({ state: 'visible' });
        await this.saveAndContinueToSchedule4IBtn.click();
    }
    async completeSelectAnySchedule3ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.clickSaveAndContinueToSchedule4IBtn();
        }
        else {
            await this.selectRadioOptionWithText(option);
            await this.clickSaveAndContinueToSchedule4IBtn();
        }
    }
}
