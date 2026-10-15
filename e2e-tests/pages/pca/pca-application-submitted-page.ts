import { basePage } from '../base-page';

export class PcaApplicationSubmittedPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Precursor chemicals application submitted – Precursor chemicals application"
            : "Precursor chemicals application submitted – Precursor chemicals application";
  }
}
