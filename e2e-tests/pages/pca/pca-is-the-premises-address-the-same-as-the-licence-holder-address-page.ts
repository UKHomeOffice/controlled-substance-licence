import { basePage } from '../base-page';

export class PcaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Is the premises address the same as the licence holder address? – Precursor chemicals application"
            : "Is the premises address the same as the licence holder address? – Precursor chemicals application";
  }
  async completeIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage(option: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }
}
