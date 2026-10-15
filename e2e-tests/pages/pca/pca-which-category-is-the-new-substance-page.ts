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
}
