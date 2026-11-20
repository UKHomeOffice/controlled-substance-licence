import { basePage } from '../base-page';

export class PcaAddAnyExtraInformationYouThinkMightHelpYourApplicationPage extends basePage {
  readonly textAreaField = this.page.locator("[id=\"extra-information\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Add any extra information you think might help your application – Precursor chemicals application"
            : "Add any extra information you think might help your application – Precursor chemicals application";
  }

  async enterAddAnyExtraInformationYouThinkMightHelpYourApplication(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textAreaField, text);
  }
  async completeAddAnyExtraInformationYouThinkMightHelpYourApplicationPage(textAreaValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterAddAnyExtraInformationYouThinkMightHelpYourApplication(textAreaValue);
    await this.clickSaveAndContinue();
  }
}
