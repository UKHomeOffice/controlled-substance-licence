import { basePage } from '../base-page';

export class PcaAreYouRequestingAChangeOfSubstanceOrOperationPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting a change of substance or operation? – Precursor chemicals application"
            : "Are you requesting a change of substance or operation? – Precursor chemicals application";
  }
  async completeAreYouRequestingAChangeOfSubstanceOrOperationPage(option: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }
}
