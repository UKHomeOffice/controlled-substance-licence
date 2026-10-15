import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetailsPage extends basePage {
    readonly LicenseNumberField: Locator;
    readonly licenseTypeField: Locator;

    constructor(page: Page) {
        super(page);
        this.LicenseNumberField = page.locator('#mhra-licence-number');
        this.licenseTypeField = page.locator('#mhra-licence-type');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: MHRA licence details – Register for controlled substance licensing"
            : "MHRA licence details – Register for controlled substance licensing";
    }

    async enterMedicinesAndHealthcareProductsRegulatoryAgencyLicenseDetails(LicenseNumber: string, licenseType: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.LicenseNumberField, LicenseNumber);
        await this.clearAndEnterTextInElement(this.licenseTypeField, licenseType);
        await this.enterDateOrDob(date);
    }
}
