import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegWhatTypeOfCompanyIsYourOrganisationPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Are you a private or public limited company? – Register for controlled substance licensing"
            : "Are you a private or public limited company? – Register for controlled substance licensing";
    }
}
