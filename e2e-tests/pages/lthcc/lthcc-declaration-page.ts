import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDeclarationPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Declaration – Industrial hemp application');
    }
}
