import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaSpecifyYourTradingReasonPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"specify-trading-reasons\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Specify your trading reason – Controlled drugs application"
            : "Specify your trading reason – Controlled drugs application";
    }
    async enterSpecifyYourTradingReason(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textValue);
    }
    async completeSpecifyYourTradingReasonPage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterSpecifyYourTradingReason(textArea);
        await this.clickSaveAndContinue();
    }
}
