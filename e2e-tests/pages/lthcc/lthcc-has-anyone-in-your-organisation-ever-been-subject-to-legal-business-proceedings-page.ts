import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has anyone in your organisation ever been subject to legal business proceedings? – Industrial hemp application');
    }
}
