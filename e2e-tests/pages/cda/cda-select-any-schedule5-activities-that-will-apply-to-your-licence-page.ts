import { basePage } from '../base-page';
export class CdaSelectAnySchedule5ActivitiesThatWillApplyToYourLicencePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Select any schedule 5 activities that will apply to your licence – Controlled drugs application"
            : "Select any schedule 5 activities that will apply to your licence – Controlled drugs application";
    }
}
