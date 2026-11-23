import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaWhatTradingReasonsDoesThisSiteNeedALicenceForPage extends basePage {
    readonly tradeReasonDropDownField: Locator;
    constructor(page: Page) {
        super(page);
        this.tradeReasonDropDownField = page.locator("[id=\"trading-reasons\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: What trading reasons does this site need a licence for? – Controlled drugs application"
            : "What trading reasons does this site need a licence for? – Controlled drugs application";
    }
    async selectTradingReasonsValueFromDropDownField(textValue: string): Promise<void> {
        await this.selectValueFromDropDownField(this.tradeReasonDropDownField, textValue);
    }
    async completeWhatTradingReasonsDoesThisSiteNeedALicenceForPage(dropTextValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectTradingReasonsValueFromDropDownField(dropTextValue);
        await this.clickSaveAndContinue();
    }
}
