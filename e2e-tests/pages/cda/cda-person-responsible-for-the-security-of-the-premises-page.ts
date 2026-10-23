import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaPersonResponsibleForTheSecurityOfThePremisesPage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"person-responsible-for-security-full-name\"]");
        this.emailField = page.locator("[id=\"person-responsible-for-security-email-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Person responsible for the security of the premises – Controlled drugs application"
            : "Person responsible for the security of the premises – Controlled drugs application";
    }
    async enterPersonResponsibleForTheSecurityOfThePremises(fullName: string, email: string, optText: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.selectRadioOptionWithText(optText);
    }
    async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async enterPersonResponsibleForTheSecurityOfThePremisesFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterFullNameAndEmailDetails(fullName, email);
    }

    async completePersonResponsibleForTheSecurityOfThePremisesPage(fullName: string, email: string, optText: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterPersonResponsibleForTheSecurityOfThePremises(fullName, email, optText);
        await this.clickSaveAndContinue();
    }
}
