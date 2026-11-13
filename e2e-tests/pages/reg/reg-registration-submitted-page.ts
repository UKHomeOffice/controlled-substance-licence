import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegRegistrationSubmittedPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Registration submitted – Register for controlled substance licensing"
            : "Registration submitted – Register for controlled substance licensing";
    }
    async completeRegistrationSubmittedPage(): Promise<void> {
        await this.assertPageTitle();
    }
}
