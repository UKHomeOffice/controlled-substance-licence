import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaDbsInformationForThePersonInChargePage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"person-in-charge-dbs-fullname\"]");
        this.dbsReferenceField = page.locator("[id=\"person-in-charge-dbs-reference\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: DBS information for the person in charge – Controlled drugs application"
            : "DBS information for the person in charge – Controlled drugs application";
    }
    async enterDbsInformation(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(date);
    }
}
