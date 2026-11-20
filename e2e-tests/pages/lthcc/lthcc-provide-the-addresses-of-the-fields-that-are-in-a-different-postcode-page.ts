import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#different-postcode-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Provide the addresses of the fields that are in a different postcode – Industrial hemp application');
    }

    async enterProvideTheAddressesOfTheFieldsThatAreInADifferentPostcode(value: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, value);
    }
    async completeProvideTheAddressesOfTheFieldsThatAreInADifferentPostcodePage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideTheAddressesOfTheFieldsThatAreInADifferentPostcode(textAreaValue);
        await this.clickSaveAndContinue();
    }
}
