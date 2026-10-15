import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasYourOrganisationEverBeenRefusedALicencePage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has your organisation ever been refused a licence? – Industrial hemp application');
    }
}
