import { basePage } from '../base-page';

export class PcaWhichCategoryIsTheNewSubstancePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Which category is the substance? – Precursor chemicals application"
            : "Which category is the substance? – Precursor chemicals application";
  }

  async enterWhichCategoryIsTheNewSubstance(optText: string): Promise<void> {
    await this.selectRadioOptionWithText(optText);
  }
  async completeWhichCategoryIsTheSubstancePage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhichCategoryIsTheNewSubstance(optText);
    await this.clickSaveAndContinue();
  }

  async completeAndSelectSaveAndExitWhichCategoryIsTheSubstancePage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhichCategoryIsTheNewSubstance(optText);
    await this.clickSaveAndAndExit();
  }
}
