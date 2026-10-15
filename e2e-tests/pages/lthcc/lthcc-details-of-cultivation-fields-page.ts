import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDetailsOfCultivationFieldsPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#cultivation-field-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Details of cultivation fields – Industrial hemp application');
    }

    async enterDetailsOfCultivationFields(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
}
