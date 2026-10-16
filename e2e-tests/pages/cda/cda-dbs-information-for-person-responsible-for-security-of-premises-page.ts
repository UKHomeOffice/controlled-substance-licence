import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaDbsInformationForPersonResponsibleForSecurityOfPremisesPage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"person-responsible-for-security-dbs-fullname\"]");
        this.dbsReferenceField = page.locator("[id=\"person-responsible-for-security-dbs-reference\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: DBS information for person responsible for security of premises – Controlled drugs application"
            : "DBS information for person responsible for security of premises – Controlled drugs application";
    }
    async enterDbsInformationForPersonResponsibleForSecurityOfPremises(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(date);
    }
    async completeDbsInformationForPersonResponsibleForSecurityOfPremisesPage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDbsInformationForPersonResponsibleForSecurityOfPremises(fullName, dbsReference, date);
        await this.clickSaveAndContinue();
    }
}
