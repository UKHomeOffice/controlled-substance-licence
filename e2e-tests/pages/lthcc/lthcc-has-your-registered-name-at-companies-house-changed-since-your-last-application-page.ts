import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has your registered name at Companies House changed since your last application? – Industrial hemp application');
    }
}
