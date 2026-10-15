import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccUploadImagesOfYourRecordKeepingDocumentsPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload images of your record keeping documents – Industrial hemp application');
    }
}
