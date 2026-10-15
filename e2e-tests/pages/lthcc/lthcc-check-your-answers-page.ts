import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccCheckYourAnswersPage extends basePage {
    readonly confirmSubmissionButton: Locator;

    constructor(page: Page) {
        super(page);
        this.confirmSubmissionButton = page.locator("input[value='Confirm submission']");
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Check your answers – Industrial hemp application');
    }

    async clickConfirmSubmission(): Promise<void> {
        await this.confirmSubmissionButton.waitFor();
        await this.confirmSubmissionButton.click();
    }
}
