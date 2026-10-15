import { basePage } from '../base-page';

export class PcaAreYouRequestingAnAdditionalCategoryPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting an additional category? – Precursor chemicals application"
            : "Are you requesting an additional category? – Precursor chemicals application";
  }
}
