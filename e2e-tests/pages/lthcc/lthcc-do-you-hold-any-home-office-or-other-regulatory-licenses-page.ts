import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Do you hold any Home Office or other regulatory licenses? – Industrial hemp application');
    }
}
