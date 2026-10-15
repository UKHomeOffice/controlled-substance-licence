import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhenAreYouMovingSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('When are you moving site? – Industrial hemp application');
    }
}
