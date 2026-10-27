import { basePage } from '../base-page';

export class PcaCheckYourAnswersPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Summary – Precursor chemicals application"
            : "Summary – Precursor chemicals application";
  }
  async completeCheckYourAnswerPage(): Promise<void> {
    await this.assertPageTitle();
    await this.clickSaveAndContinue();
  }
}
