import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHowManyFieldsAreYouProposingToCultivateLowThcCannabisInPage extends basePage {
    readonly textField: Locator;

    constructor(page: Page) {
        super(page);
        this.textField = page.locator('#how-many-fields');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('How many fields are you proposing to cultivate low THC cannabis in? – Industrial hemp application');
    }

    async enterHowManyFieldsAreYouProposingToCultivateLowThcCannabisIn(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textField, value);
    }
}
