import { basePage } from '../base-page';

export class PcaSubstancesInYourLicencePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Substances in your licence – Precursor chemicals application"
            : "Substances in your licence – Precursor chemicals application";
  }
  async completeSubstancesInYourLicencePage(): Promise<void> {
    await this.assertPageTitle();
    await this.clickSaveAndContinue();
  }
}
