import { basePage } from '../base-page';

export class PcaYouCannotContinueThisApplicationPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: You cannot continue this application – Precursor chemicals application"
            : "You cannot continue this application – Precursor chemicals application";
  }
  async completeYouCannotContinueThisApplicationPage(): Promise<void> {
    await this.assertPageTitle();
  }
}
