import { basePage } from '../base-page';

export class PcaGuarantorDbsInformationPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"guarantor-dbs-full-name\"]");
  readonly dbsReferenceField = this.page.locator("[id=\"guarantor-dbs-reference\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Guarantor DBS information – Precursor chemicals application"
            : "Guarantor DBS information – Precursor chemicals application";
  }

  async enterGuarantorDbsInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
    await this.enterDateOrDob(date);
  }
  async completeGuarantorDbsInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterGuarantorDbsInformationPage(fullName, dbsReference, date);
    await this.clickSaveAndContinue();
  }
}
