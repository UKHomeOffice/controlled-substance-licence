import { basePage } from '../base-page';
export class CdaAreControlledDrugsKeptInAPrefabricatedStrongRoomPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are controlled drugs kept in a prefabricated strong room? – Controlled drugs application"
            : "Are controlled drugs kept in a prefabricated strong room? – Controlled drugs application";
    }
    async completeAreControlledDrugsKeptInAPrefabricatedStrongRoomPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
