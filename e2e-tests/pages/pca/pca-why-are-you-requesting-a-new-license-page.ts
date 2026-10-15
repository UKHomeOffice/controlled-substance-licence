import { basePage } from '../base-page';

export class PcaWhyAreYouRequestingANewLicensePage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Why are you requesting a new license? – Precursor chemicals application"
            : "Why are you requesting a new license? – Precursor chemicals application";
  }
}
