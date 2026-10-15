import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhenDoesTheContractStartPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('When does the contract start? – Industrial hemp application');
    }

    async enterWhenDoesTheContractStart(date: string): Promise<void> {
        await this.enterDateOrDob(date);
    }
}
