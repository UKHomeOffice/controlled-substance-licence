import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegUploadCompanyRegistrationCertificatePage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Upload company registration certificate – Register for controlled substance licensing"
            : "Upload company registration certificate – Register for controlled substance licensing";
    }
}
