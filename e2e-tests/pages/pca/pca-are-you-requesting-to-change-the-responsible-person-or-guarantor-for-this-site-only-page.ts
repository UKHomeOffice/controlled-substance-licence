import { basePage } from '../base-page';

export class PcaAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting to change the responsible person or guarantor for this site only? – Precursor chemicals application"
            : "Are you requesting to change the responsible person or guarantor for this site only? – Precursor chemicals application";
  }
  async completeAreYouRequestingToChangeTheResponsiblePersonOrGuarantorForThisSiteOnlyPage(option: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }
}
