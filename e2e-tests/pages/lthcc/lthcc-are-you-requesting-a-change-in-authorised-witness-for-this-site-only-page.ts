import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are you requesting a change in authorised witness for this site only? – Industrial hemp application');
    }
}
