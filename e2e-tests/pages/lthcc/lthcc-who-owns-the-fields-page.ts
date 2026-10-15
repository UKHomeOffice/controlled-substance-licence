import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhoOwnsTheFieldsPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#who-own-fields');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Who owns the fields? – Industrial hemp application');
    }

    async enterWhoOwnsTheFields(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
}
