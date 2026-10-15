import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegDeclarationPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Declaration – Register for controlled substance licensing"
            : "Declaration – Register for controlled substance licensing";
    }
}
