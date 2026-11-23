import { basePage } from '../base-page';

export class PcaWhatOtherOperationsAppliesToTheLicencePage extends basePage {
  readonly chemicalNameField = this.page.locator("[id=\"what-operation\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: What other operation applies to the licence? – Precursor chemicals application"
            : "What other operation applies to the licence? – Precursor chemicals application";
  }

  async enterWhatOtherOperationsAppliesToTheLicence(chemicalName: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.chemicalNameField, chemicalName);
  }
  async completeWhatOtherOperationsAppliesToTheLicencePage(value: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhatOtherOperationsAppliesToTheLicence(value);
    await this.clickSaveAndContinue();
  }
}
