import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhatTypeOfCompanyIsYourOrganisationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('What type of company is your organisation? – Industrial hemp application');
    }
}
