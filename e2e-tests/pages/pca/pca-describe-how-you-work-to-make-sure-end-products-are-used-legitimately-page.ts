import { basePage } from '../base-page';

export class PcaDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage extends basePage {
  readonly textField = this.page.locator("[id=\"legitimate-use\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Describe how you work to make sure end products are used legitimately – Precursor chemicals application"
            : "Describe how you work to make sure end products are used legitimately – Precursor chemicals application";
  }

  async enterDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimately(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
  async completeDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimatelyPage(textAreaValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterDescribeHowYouWorkToMakeSureEndProductsAreUsedLegitimately(textAreaValue);
    await this.clickSaveAndContinue();
  }
}
