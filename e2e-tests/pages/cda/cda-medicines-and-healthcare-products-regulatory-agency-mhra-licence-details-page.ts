import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage extends basePage {
    readonly licenceNumberField: Locator;
    readonly licenceTypeField: Locator;
    constructor(page: Page) {
        super(page);
        this.licenceNumberField = page.locator("[id=\"mhra-licence-number\"]");
        this.licenceTypeField = page.locator("[id=\"mhra-licence-type\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: MHRA licence details – Controlled drugs application"
            : "MHRA licence details – Controlled drugs application";
    }
    async enterLicenceDetailsMhrc(licenceNumber: string, licenceType: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.licenceNumberField, licenceNumber);
        await this.clearAndEnterTextInElement(this.licenceTypeField, licenceType);
        await this.enterDateOrDob(date);
    }
    async completeMedicinesAndHealthcareProductsRegulatoryAgencyMhraLicenceDetailsPage(licenceNumber: string, licenceType: string, date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterLicenceDetailsMhrc(licenceNumber, licenceType, date);
        await this.clickSaveAndContinue();
    }
}
