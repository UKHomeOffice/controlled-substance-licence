import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage extends basePage {
    readonly registrationNumberField: Locator;
    constructor(page: Page) {
        super(page);
        this.registrationNumberField = page.locator("[id=\"registration-number\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Regulatory body registration details – Controlled drugs application"
            : "Regulatory body registration details – Controlled drugs application";
    }
    async enterRegistrationDetails(registrationNumber: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.registrationNumberField, registrationNumber);
        await this.enterDateOrDob(date);
    }
    async completeRegistrationDetailsForTheCareQualityCommissionCqcOrScottishAndWelshEquivalentsPage(registrationNumber: string, date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterRegistrationDetails(registrationNumber, date);
        await this.clickSaveAndContinue();
    }
}
