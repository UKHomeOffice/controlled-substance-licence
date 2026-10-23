import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWeSavedYourApplicationAndSignedYouOutPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        // Source error title intentionally lacks the space after "Error:".
        return (await this.page.title()).startsWith('Error')
            ? 'Error:We saved your application and signed you out – Industrial hemp application'
            : 'We saved your application and signed you out – Industrial hemp application';
    }
    async SelectSignInAgainButtonOnWeSavedYourApplicationAndSignedYouOut(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSignInAgain();
    }
}
