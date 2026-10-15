import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaGiveDetailsOfSpecificationsAndAnySerialNumbersThatApplyPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"specification-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Give details of specifications, and any serial numbers that apply – Controlled drugs application"
            : "Give details of specifications, and any serial numbers that apply – Controlled drugs application";
    }
    async enterGiveDetailsOfSpecificationsAndAnySerialNumbersThatApply(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textValue);
    }
}
