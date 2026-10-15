import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccIsTheNewSitePartOfAContractualAgreementPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Is the new site part of a contractual agreement? – Industrial hemp application');
    }
}
