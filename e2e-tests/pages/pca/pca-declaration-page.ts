import { basePage } from '../base-page';

export class PcaDeclarationPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Declaration – Precursor chemicals application"
            : "Declaration – Precursor chemicals application";
  }
  async completeDeclarationPage(optText: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectRadioOptionWithText(optText);
    await this.clickConfirmAndSubmit();
  }
}
