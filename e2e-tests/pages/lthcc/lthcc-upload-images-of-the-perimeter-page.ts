import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccUploadImagesOfThePerimeterPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Upload images of the perimeters – Industrial hemp application');
    }
}
