import { basePage } from '../base-page';

export class PcaSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicalsPage extends basePage {
  readonly textField = this.page.locator("[id=\"operating-procedures-and-auditing\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals – Precursor chemicals application"
            : "Summarise your standard operating procedures and auditing practices for the use or disposal of chemicals – Precursor chemicals application";
  }

  async enterSummariseYourStandardOperatingProceduresAndAuditingPracticesForTheUseOrDisposalOfChemicals(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
}
