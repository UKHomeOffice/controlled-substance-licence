import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccCheckYourAnswersPage extends basePage {
    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Check your answers – Industrial hemp application');
    }

    async completeCheckYourAnswersPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
