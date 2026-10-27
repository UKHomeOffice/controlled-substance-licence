import { basePage } from '../base-page';
export class CdaAreControlledDrugsKeptInASeparateRoomOrZonePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are controlled drugs kept in a separate room or zone? – Controlled drugs application"
            : "Are controlled drugs kept in a separate room or zone? – Controlled drugs application";
    }
    async completeAreControlledDrugsKeptInASeparateRoomOrZonePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
