import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaCheckYourAnswersPage extends basePage {
    readonly confirmSubmissionButton: Locator;
    constructor(page: Page) {
        super(page);
        this.confirmSubmissionButton = page.locator("xpath=//*[@value='Confirm submission'][@class='govuk-button']");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Check your answers – Controlled drugs application"
            : "Check your answers – Controlled drugs application";
    }
    async clickConfirmSubmission(): Promise<void> {
        await this.confirmSubmissionButton.waitFor({ state: 'visible' });
        await this.confirmSubmissionButton.click();
    }
    async completeCheckYourAnswersPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
