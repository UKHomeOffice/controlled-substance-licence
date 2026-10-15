import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhyAreYouRequestingANewLicencePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Why are you requesting a new licence? – Industrial hemp application');
    }
}
