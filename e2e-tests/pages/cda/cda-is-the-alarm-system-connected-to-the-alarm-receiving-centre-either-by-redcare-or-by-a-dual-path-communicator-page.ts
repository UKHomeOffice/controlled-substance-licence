import { basePage } from '../base-page';
export class CdaIsTheAlarmSystemConnectedToTheAlarmReceivingCentreEitherByRedcareOrByADualPathCommunicatorPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the alarm system connected to the alarm receiving centre either by Redcare or by a dual-path communicator? – Controlled drugs application"
            : "Is the alarm system connected to the alarm receiving centre either by Redcare or by a dual-path communicator? – Controlled drugs application";
    }
}
