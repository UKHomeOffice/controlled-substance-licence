import { basePage } from '../base-page';

export class PcaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage extends basePage {
  readonly textAreaField = this.page.locator("[id=\"contract-details\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Tell us more about the contract and how it affects your licence application – Precursor chemicals application"
            : "Tell us more about the contract and how it affects your licence application – Precursor chemicals application";
  }

  async enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textAreaField, text);
  }
}
