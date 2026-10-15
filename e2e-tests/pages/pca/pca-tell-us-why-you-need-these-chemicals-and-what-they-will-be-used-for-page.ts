import { basePage } from '../base-page';

export class PcaTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedForPage extends basePage {
  readonly chemicalNameField = this.page.locator("[id=\"chemicals-used-for\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Tell us why you need these chemicals and what they’ll be used for – Precursor chemicals application"
            : "Tell us why you need these chemicals and what they’ll be used for – Precursor chemicals application";
  }

  async enterTellUsWhyYouNeedTheseChemicalsAndWhatTheyWillBeUsedFor(chemicalName: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.chemicalNameField, chemicalName);
  }
}
