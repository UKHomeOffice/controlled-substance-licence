import { basePage } from '../base-page';
export class CdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 5 activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 5 activities that will apply to your licence – Controlled drugs application";
    }
    async completeSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage(option: string): Promise<void> {
        await this.assertPageTitle();
        if (option.toLowerCase() === "".toLowerCase()) {
            await this.clickSaveAndContinue();
        }
        else {
            await this.selectRadioOptionWithText(option);
            await this.clickSaveAndContinue();
        }
    }
}
