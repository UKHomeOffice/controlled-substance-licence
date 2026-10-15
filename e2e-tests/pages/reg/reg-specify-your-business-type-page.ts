import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegSpecifyYourBusinessTypePage extends basePage {
    readonly specifyBusinessTypeField: Locator;

    constructor(page: Page) {
        super(page);
        this.specifyBusinessTypeField = page.locator('#other-business-type');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Specify your business type – Register for controlled substance licensing"
            : "Specify your business type – Register for controlled substance licensing";
    }

    async enterSpecifyYourBusinessType(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.specifyBusinessTypeField, textValue);
    }
}
