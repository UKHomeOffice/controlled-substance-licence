import { basePage } from '../base-page';

export class PcaWhatTypeOfLicenseeAreYouPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: What type of precursor chemicals licensee are you? – Precursor chemicals application"
            : "What type of precursor chemicals licensee are you? – Precursor chemicals application";
  }

  async selectWhatTypeOfLicenseeAreYou(optText: string): Promise<void> {
    await this.selectRadioOptionWithText(optText);
  }
  
  async completeWhatTypeOfLicenseeAreYouPage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectWhatTypeOfLicenseeAreYou(optText);
    await this.clickContinue();
  }
}
