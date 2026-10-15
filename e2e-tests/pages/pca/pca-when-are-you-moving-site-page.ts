import { basePage } from '../base-page';

export class PcaWhenAreYouMovingSitePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: When are you moving site? – Precursor chemicals application"
            : "When are you moving site? – Precursor chemicals application";
  }

  async enterWhenAreYouMovingSite(date: string): Promise<void> {
    await this.enterDateOrDob(date);
  }
}
