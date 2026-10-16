import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccUploadAerialPhotosAndSiteMapsPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload aerial photos and site maps – Industrial hemp application');
    }
    async completeUploadAerialPhotosAndSiteMapsPage(fileName: string): Promise<void> {
        await this.assertPageTitle();
        await this.uploadFileFromUserUploadFolder(fileName);
        await this.selectContinueUploadBtn();
    }
}
