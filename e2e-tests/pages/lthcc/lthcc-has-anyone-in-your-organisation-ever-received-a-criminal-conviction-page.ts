import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has anyone in your organisation ever received a criminal conviction? – Industrial hemp application');
    }
}
