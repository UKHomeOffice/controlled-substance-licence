import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaPersonResponsibleForWitnessingTheDestructionOfControlledDrugsPage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"responsible-for-witnessing-full-name\"]");
        this.emailField = page.locator("[id=\"responsible-for-witnessing-email-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Authorised witness information – Controlled drugs application"
            : "Authorised witness information – Controlled drugs application";
    }
    async enterPersonResponsibleForWitnessingTheDestructionOfControlledDrugs(fullName: string, email: string, optText: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.selectRadioOptionWithText(optText);
    }
    async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async enterFullNameAndEmailDetailsWithoutConfirmingDbs(fullName: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterFullNameAndEmailDetails(fullName, email);
    }

    async completeAuthorisedWitnessInformationPage(fullName: string, dbsReference: string, date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterPersonResponsibleForWitnessingTheDestructionOfControlledDrugs(fullName, dbsReference, date);
        await this.clickSaveAndContinue();
    }
}
