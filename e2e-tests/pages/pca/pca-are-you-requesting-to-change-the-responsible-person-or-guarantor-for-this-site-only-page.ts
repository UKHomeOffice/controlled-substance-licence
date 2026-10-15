import { basePage } from '../base-page';

export class PcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting to change the responsible person or guarantor for this site only? – Precursor chemicals application"
            : "Are you requesting to change the responsible person or guarantor for this site only? – Precursor chemicals application";
  }
}
