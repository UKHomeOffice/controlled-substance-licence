import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegCheckYourAnswersPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Check your answers before submitting your registration – Register for controlled substance licensing"
            : "Check your answers before submitting your registration – Register for controlled substance licensing";
    }
    async completeCheckYourAnswersPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickContinue();
    }
}
