import { basePage } from '../base-page';

export class PcaDbsInformationPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"responsible-officer-dbs-application-fullname\"]");
  readonly dbsReferenceField = this.page.locator("[id=\"responsible-officer-dbs-reference\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: DBS information for the responsible officer – Precursor chemicals application"
            : "DBS information for the responsible officer – Precursor chemicals application";
  }

  async enterDbsInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
    await this.enterDateOrDob(date);
  }
  async completeDbsInformationForTheResponsibleOfficePage(fullName: string, dbsReference: string, date: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterDbsInformationPage(fullName, dbsReference, date);
    await this.clickSaveAndContinue();
  }
}
