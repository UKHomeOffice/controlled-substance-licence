import { basePage } from '../base-page';

export class PcaIsTheNewSitePartOfAContractualAgreementPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Is the new site part of a contractual agreement? – Precursor chemicals application"
            : "Is the new site part of a contractual agreement? – Precursor chemicals application";
  }
}
