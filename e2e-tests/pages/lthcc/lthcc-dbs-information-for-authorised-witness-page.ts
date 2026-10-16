import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDbsInformationForAuthorisedWitnessPage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator('#authorised-witness-dbs-full-name');
        this.dbsReferenceField = page.locator('#authorised-witness-dbs-reference');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('DBS information for authorised witness – Industrial hemp application');
    }

    async enterDbsInformationForAuthorisedWitness(fullName: string, dbsReference: string, dateValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(dateValue);
    }
    async completeDbsInformationForAuthorisedWitnessPage(fullName: string, dbsReference: string, dateValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDbsInformationForAuthorisedWitness(fullName, dbsReference, dateValue);
        await this.clickSaveAndContinue();
    }
}
