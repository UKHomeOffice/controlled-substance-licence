import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has your Companies House reference number changed since your last application? – Industrial hemp application');
    }
}
