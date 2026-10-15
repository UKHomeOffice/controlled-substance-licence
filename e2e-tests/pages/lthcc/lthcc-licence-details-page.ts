import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccLicenceDetailsPage extends basePage {
    readonly licenceTypeField: Locator;
    readonly licenceNumberField: Locator;

    constructor(page: Page) {
        super(page);
        this.licenceTypeField = page.locator('#other-licence-type');
        this.licenceNumberField = page.locator('#other-licence-number');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Licence details – Industrial hemp application');
    }

    async enterLicenceDetails(licenceType: string, licenceNumber: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.licenceTypeField, licenceType);
        await this.clearAndEnterTextInElement(this.licenceNumberField, licenceNumber);
        await this.enterDateOrDob(date);
    }
}
