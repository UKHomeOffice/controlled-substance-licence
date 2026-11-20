import { basePage } from '../base-page';
export class CdaIsTheAlarmSystemServicedAnnuallyPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the alarm system serviced annually? – Controlled drugs application"
            : "Is the alarm system serviced annually? – Controlled drugs application";
    }
    async completeIsTheAlarmSystemServicedAnnuallyPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
