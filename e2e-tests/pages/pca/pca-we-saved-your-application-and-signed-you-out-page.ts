import { basePage } from '../base-page';

export class PcaWeSavedYourApplicationAndSignedYouOutPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: We saved your application and signed you out – Precursor chemicals application"
            : "We saved your application and signed you out – Precursor chemicals application";
  }
  async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
    await this.assertPageTitle();
    await this.clickSignInAgain();
  }
}
