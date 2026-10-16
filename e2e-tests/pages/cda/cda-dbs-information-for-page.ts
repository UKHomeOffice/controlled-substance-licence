import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaDbsInformationForPage extends basePage {
    readonly fullNameField: Locator;
    readonly dbsReferenceField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"responsible-for-witnessing-dbs-fullname\"]");
        this.dbsReferenceField = page.locator("[id=\"responsible-for-witnessing-dbs-reference\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Authorised witness DBS information – Controlled drugs application"
            : "Authorised witness DBS information – Controlled drugs application";
    }
    async enterDbsInformationFor(fullName: string, dbsReference: string, date: string, option: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.dbsReferenceField, dbsReference);
        await this.enterDateOrDob(date);
        if (option != null && option.length > 0) {
            await this.selectYesOrNoRadioOption(option);
        }
    }
    async completeDbsInformationForPage(fullName: string, dbsReference: string, date: string, option: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDbsInformationFor(fullName, dbsReference, date, option);
        await this.clickSaveAndContinue();
    }
}
