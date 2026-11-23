import { basePage } from '../base-page';

export class PcaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Has your Companies House reference number changed since your last application? – Precursor chemicals application"
            : "Has your Companies House reference number changed since your last application? – Precursor chemicals application";
  }
  async completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(option: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }
}
