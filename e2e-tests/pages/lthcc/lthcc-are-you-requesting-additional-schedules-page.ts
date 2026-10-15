import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreYouRequestingAdditionalSchedulesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are you requesting additional schedules? – Industrial hemp application');
    }
}
