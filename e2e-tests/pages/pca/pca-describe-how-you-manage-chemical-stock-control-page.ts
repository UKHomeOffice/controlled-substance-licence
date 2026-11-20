import { basePage } from '../base-page';

export class PcaDescribeHowYouManageChemicalStockControlPage extends basePage {
  readonly textField = this.page.locator("[id=\"chemical-stock-control\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Describe how you manage chemical stock control – Precursor chemicals application"
            : "Describe how you manage chemical stock control – Precursor chemicals application";
  }

  async enterDescribeHowYouManageChemicalStockControl(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
  async completeDescribeHowYouManageChemicalStockControlPage(textAreaValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterDescribeHowYouManageChemicalStockControl(textAreaValue);
    await this.clickSaveAndContinue();
  }
}
