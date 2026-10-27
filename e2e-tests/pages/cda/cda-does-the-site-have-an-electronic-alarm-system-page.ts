import { basePage } from '../base-page';
export class CdaDoesTheSiteHaveAnElectronicAlarmSystemPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Does the site have an electronic alarm system? – Controlled drugs application"
            : "Does the site have an electronic alarm system? – Controlled drugs application";
    }
    async completeDoesTheSiteHaveAnElectronicAlarmSystemPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
