import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalentsPage extends basePage {
    readonly RegistrationNumberField: Locator;

    constructor(page: Page) {
        super(page);
        this.RegistrationNumberField = page.locator('#registration-number');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Care Quality Commission registration details – Register for controlled substance licensing"
            : "Care Quality Commission registration details – Register for controlled substance licensing";
    }

    async enterRegistrationDetailsForTheCareQualityCommissionOrScottishAndWelshEquivalents(registrationNumber: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.RegistrationNumberField, registrationNumber);
        await this.enterDateOrDob(date);
    }
}
