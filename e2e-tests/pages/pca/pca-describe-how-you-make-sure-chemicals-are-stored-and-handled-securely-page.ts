import { basePage } from '../base-page';

export class PcaDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurelyPage extends basePage {
  readonly textField = this.page.locator("[id=\"storage-and-handling\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Describe how you make sure chemicals are stored and handled securely – Precursor chemicals application"
            : "Describe how you make sure chemicals are stored and handled securely – Precursor chemicals application";
  }

  async enterDescribeHowYouMakeSureChemicalsAreStoredAndHandledSecurely(text: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.textField, text);
  }
}
