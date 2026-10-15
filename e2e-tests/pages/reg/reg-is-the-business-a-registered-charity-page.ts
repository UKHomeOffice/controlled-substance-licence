import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegIsTheBusinessARegisteredCharityPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Is the business a registered charity? – Register for controlled substance licensing"
            : "Is the business a registered charity? – Register for controlled substance licensing";
    }
}
