import { basePage } from '../base-page';
export class CdaStandardOperatingProceduresPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Standard operating procedures – Controlled drugs application"
            : "Standard operating procedures – Controlled drugs application";
    }
    async completeStandardOperatingProceduresPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
