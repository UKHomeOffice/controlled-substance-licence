import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are there any businesses adjacent to your intended cultivation site? – Industrial hemp application');
    }
}
