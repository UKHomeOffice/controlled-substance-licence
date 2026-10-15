import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccUploadCompanyRegistrationCertificatePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload company registration certificate – Industrial hemp application');
    }
}
