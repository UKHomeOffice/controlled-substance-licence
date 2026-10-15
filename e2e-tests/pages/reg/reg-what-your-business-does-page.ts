import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegWhatYourBusinessDoesPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: What your business does – Register for controlled substance licensing"
            : "What your business does – Register for controlled substance licensing";
    }
}
