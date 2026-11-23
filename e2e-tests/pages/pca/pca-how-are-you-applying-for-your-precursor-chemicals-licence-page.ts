import { basePage } from '../base-page';

export class PcaHowAreYouApplyingForYourPrecursorChemicalsLicencePage extends basePage {
  readonly ApplicationRefNoField = this.page.locator("[id=\"amend-application-details\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: How are you applying for your precursor chemicals licence? – Precursor chemicals application"
            : "How are you applying for your precursor chemicals licence? – Precursor chemicals application";
  }
  async completeHowAreYouApplyingForYourPrecursorChemicalsLicencePage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectRadioOptionWithText(optText);
    await this.clickContinue();
  }
}
