import { basePage } from '../base-page';
export class CdaDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Does the alarm system have a police unique reference number (URN)? – Controlled drugs application"
            : "Does the alarm system have a police unique reference number (URN)? – Controlled drugs application";
    }
    async completeDoesTheAlarmSystemHaveAPoliceUniqueReferenceNumberUrnPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
