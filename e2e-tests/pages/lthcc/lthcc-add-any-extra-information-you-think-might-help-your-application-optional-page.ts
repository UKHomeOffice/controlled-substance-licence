import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAddAnyExtraInformationYouThinkMightHelpYourApplicationOptionalPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#extra-information');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Add any extra information to your application – Industrial hemp application');
    }

    async enterAddAnyExtraInformationYouThinkMightHelpYourApplicationOptional(textAreaValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textAreaValue);
    }
}
