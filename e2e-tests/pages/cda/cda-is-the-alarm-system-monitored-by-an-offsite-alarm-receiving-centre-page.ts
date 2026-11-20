import { basePage } from '../base-page';
export class CdaIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the alarm system monitored by an offsite alarm receiving centre? – Controlled drugs application"
            : "Is the alarm system monitored by an offsite alarm receiving centre? – Controlled drugs application";
    }
    async completeIsTheAlarmSystemMonitoredByAnOffsiteAlarmReceivingCentrePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
