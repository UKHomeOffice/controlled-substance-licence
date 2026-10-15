import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaDbsInformationForPersonResponsibleForComplianceAndRegulatoryAffairsPage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"responsible-for-compliance-regulatory-dbs-fullname\"]");
        this.dbsReferenceField = page.locator("[id=\"responsible-for-compliance-regulatory-dbs-reference\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: DBS information for person responsible for compliance and regulatory affairs – Controlled drugs application"
            : "DBS information for person responsible for compliance and regulatory affairs – Controlled drugs application";
    }
    async enterDbsInformationForThePersonResponsibleForComplianceAndRegulatoryAffairs(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(date);
    }
}
