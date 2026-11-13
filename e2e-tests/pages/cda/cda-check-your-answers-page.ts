import { Page } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaCheckYourAnswersPage extends basePage {
    constructor(page: Page) {
        super(page);
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Check your answers – Controlled drugs application"
            : "Check your answers – Controlled drugs application";
    }
    async completeCheckYourAnswersPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
