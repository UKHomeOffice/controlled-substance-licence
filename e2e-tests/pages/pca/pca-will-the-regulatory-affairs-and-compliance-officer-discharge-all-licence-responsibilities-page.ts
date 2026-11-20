import { basePage } from '../base-page';

export class PcaWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage extends basePage {
  readonly textAreaField = this.page.locator("[id=\"explain-not-discharge-responsibilities\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Will the regulatory affairs and compliance officer discharge all licence responsibilities? – Precursor chemicals application"
            : "Will the regulatory affairs and compliance officer discharge all licence responsibilities? – Precursor chemicals application";
  }

  async enterWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilities(optText: string, text: string): Promise<void> {
    await this.selectYesOrNoRadioOption(optText);
    if (optText.toLowerCase() === "No".toLowerCase()) {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
  }
  async completeWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage(option: string, textAreaValue: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilities(option, textAreaValue);
    await this.clickSaveAndContinue();
  }
}
