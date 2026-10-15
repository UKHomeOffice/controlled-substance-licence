import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegBusinessTypePage extends basePage {
    readonly businessTypeField: Locator;

    constructor(page: Page) {
        super(page);
        this.businessTypeField = page.locator('#business-type');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Business type – Register for controlled substance licensing"
            : "Business type – Register for controlled substance licensing";
    }

    async selectBusinessTypeFromDropDownField(businessTypeValue: string): Promise<void> {
        await this.selectValueFromDropDownField(this.businessTypeField, businessTypeValue);
    }
}
