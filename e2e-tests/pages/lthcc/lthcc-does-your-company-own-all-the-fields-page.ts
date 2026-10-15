import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDoesYourCompanyOwnAllTheFieldsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Does your company own all the fields? – Industrial hemp application');
    }
}
