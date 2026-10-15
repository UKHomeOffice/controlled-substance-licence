import { basePage } from '../base-page';

export class PcaDescribeHowYouSecureYourPremisesPage extends basePage {
  readonly textField = this.page.locator("[id=\"how-secure-premises\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Describe how you secure your premises – Precursor chemicals application"
            : "Describe how you secure your premises – Precursor chemicals application";
  }

  async enterDescribeHowYouSecureYourPremises(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
}
