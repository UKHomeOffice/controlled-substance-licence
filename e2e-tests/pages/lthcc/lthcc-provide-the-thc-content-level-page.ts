import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideTheThcContentLevelPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#thc-content-level');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide the THC content level – Industrial hemp application');
    }

    async enterProvideTheThcContentLevel(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
}
