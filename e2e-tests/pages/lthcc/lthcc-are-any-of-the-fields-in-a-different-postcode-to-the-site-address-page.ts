import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are any of the fields in a different postcode to the site address? – Industrial hemp application');
    }
}
