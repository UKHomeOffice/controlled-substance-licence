import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccYouCannotContinueThisApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('You cannot continue this application – Industrial hemp application');
    }
}
