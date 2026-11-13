import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#adjacent-field-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('What is adjacent to each of the fields you intend to cultivate? – Industrial hemp application');
    }

    async enterWhatIsAdjacentToEachOfTheFieldsYouIntendCultivate(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeWhatIsAdjacentToEachOfTheFieldsYouIntendCultivatePage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhatIsAdjacentToEachOfTheFieldsYouIntendCultivate(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
