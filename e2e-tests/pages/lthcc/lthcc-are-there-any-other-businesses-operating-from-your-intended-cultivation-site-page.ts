import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreThereAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are there any other businesses operating from your intended cultivation site? – Industrial hemp application');
    }
}
