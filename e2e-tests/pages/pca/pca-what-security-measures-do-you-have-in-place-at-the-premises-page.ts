import { basePage } from '../base-page';

export class PcaWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: What security measures do you have in place at the premises? – Precursor chemicals application"
            : "What security measures do you have in place at the premises? – Precursor chemicals application";
  }

  async selectWhatSecurityMeasuresDoYouHaveInPlaceAtThePremises(optText: string): Promise<void> {
    await this.selectRadioOptionWithText(optText);
  }
  async completeWhatSecurityMeasuresDoYouHaveInPlaceAtThePremisesPage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectWhatSecurityMeasuresDoYouHaveInPlaceAtThePremises(optText);
    await this.clickSaveAndContinue();
  }
}
