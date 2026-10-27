import { basePage } from '../base-page';
export class CdaDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Does the alarm system have either a Level 1 or ‘immediate’ police response? – Controlled drugs application"
            : "Does the alarm system have either a Level 1 or ‘immediate’ police response? – Controlled drugs application";
    }
    async completeDoesTheAlarmSystemHaveEitherALevel1OrImmediatePoliceResponsePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
