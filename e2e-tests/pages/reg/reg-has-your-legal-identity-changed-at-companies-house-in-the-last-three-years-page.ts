import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Has your legal identity changed at Companies House in the last 3 years? – Register for controlled substance licensing"
            : "Has your legal identity changed at Companies House in the last 3 years? – Register for controlled substance licensing";
    }
    async completeHasYourLegalIdentityChangedAtCompaniesHouseInTheLastThreeYearsPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickContinue();
    }
}
