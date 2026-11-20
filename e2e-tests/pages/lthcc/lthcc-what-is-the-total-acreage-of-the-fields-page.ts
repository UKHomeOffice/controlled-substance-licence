import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWhatIsTheTotalAcreageOfTheFieldsPage extends basePage {
    readonly textField: Locator;

    constructor(page: Page) {
        super(page);
        this.textField = page.locator('#field-acreage');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('What is the total acreage of the fields? – Industrial hemp application');
    }

    async enterWhatIsTheTotalAcreageOfTheFields(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textField, value);
    }
    async completeWhatIsTheTotalAcreageOfTheFieldsPage(textValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhatIsTheTotalAcreageOfTheFields(textValue);
        await this.clickSaveAndContinue();
    }
}
