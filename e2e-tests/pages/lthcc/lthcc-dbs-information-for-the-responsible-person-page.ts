import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDbsInformationForTheResponsiblePersonPage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator('#responsible-person-dbs-fullname');
        this.dbsReferenceField = page.locator('#responsible-person-dbs-reference');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('DBS information for the responsible person – Industrial hemp application');
    }

    async enterDbsInformationForTheResponsiblePerson(fullName: string, dbsReference: string, dateValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(dateValue);
    }
}
