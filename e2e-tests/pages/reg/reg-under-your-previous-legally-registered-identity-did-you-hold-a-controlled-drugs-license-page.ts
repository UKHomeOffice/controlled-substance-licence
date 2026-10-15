import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegUnderYourPreviousLegallyRegisteredIdentityDidYouHoldAControlledDrugsLicensePage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Did you previously hold a controlled drugs licence? – Register for controlled substance licensing"
            : "Did you previously hold a controlled drugs licence? – Register for controlled substance licensing";
    }
}
