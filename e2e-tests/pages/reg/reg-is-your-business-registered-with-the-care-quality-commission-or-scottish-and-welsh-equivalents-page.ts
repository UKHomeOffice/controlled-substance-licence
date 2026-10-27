import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Care Quality Commission registration – Register for controlled substance licensing"
            : "Care Quality Commission registration – Register for controlled substance licensing";
    }
    async completesIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage(optValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optValue);
        await this.clickContinue();
    }
}
