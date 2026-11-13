import { basePage } from '../base-page';
export class CdaWeSavedYourApplicationAndSignedYouOutPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: We saved your application and signed you out – Controlled drugs application"
            : "We saved your application and signed you out – Controlled drugs application";
    }
    async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSignInAgain();
    }
}
