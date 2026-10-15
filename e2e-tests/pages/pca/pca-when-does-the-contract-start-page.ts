import { basePage } from '../base-page';

export class PcaWhenDoesTheContractStartPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: When does the contract start? – Precursor chemicals application"
            : "When does the contract start? – Precursor chemicals application";
  }

  async enterWhenDoesTheContractStart(date: string): Promise<void> {
    await this.enterDateOrDob(date);
  }
}
