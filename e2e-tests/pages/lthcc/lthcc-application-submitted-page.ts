import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccApplicationSubmittedPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Application submitted – Industrial hemp application');
    }
    async completeApplicationSubmittedPage(): Promise<void> {
        await this.assertPageTitle();
    }
}
