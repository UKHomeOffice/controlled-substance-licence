import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegPreviousLicenseDetailsPage extends basePage {
    readonly previousLicenseNumberField: Locator;
    readonly licenseHolderNameField: Locator;

    constructor(page: Page) {
        super(page);
        this.previousLicenseNumberField = page.locator('#previous-licence-number');
        this.licenseHolderNameField = page.locator('#previous-licence-holder-name');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Previous licence details – Register for controlled substance licensing"
            : "Previous licence details – Register for controlled substance licensing";
    }

    async enterRegPreviousLicenseDetailsPage(previousLicenseNumber: string, licenseHolderName: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.previousLicenseNumberField, previousLicenseNumber);
        await this.clearAndEnterTextInElement(this.licenseHolderNameField, licenseHolderName);
        await this.enterDateOrDob(date);
    }
    async completePreviousLicenseDetailsPage(previousLicenseNumber: string, licenseHolderName: string, date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterRegPreviousLicenseDetailsPage(previousLicenseNumber, licenseHolderName, date);
        await this.clickContinue();
    }
}
