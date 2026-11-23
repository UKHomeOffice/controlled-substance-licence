import { basePage } from '../base-page';
export class CdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the premises address the same as the licence holder address? – Controlled drugs application"
            : "Is the premises address the same as the licence holder address? – Controlled drugs application";
    }
    async completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }

    async completeAndSelectSaveAndExitIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndAndExit();
    }
}
