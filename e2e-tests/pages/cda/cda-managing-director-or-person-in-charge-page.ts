import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaManagingDirectorOrPersonInChargePage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"person-in-charge-full-name\"]");
        this.emailField = page.locator("[id=\"person-in-charge-email-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Managing director or person in charge – Controlled drugs application"
            : "Managing director or person in charge – Controlled drugs application";
    }
    async enterManagingDirectorOrPersonInCharge(fullName: string, email: string, optText: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.selectRadioOptionWithText(optText);
    }
    async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async enterManagingDirectorOrPersonInChargeFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterFullNameAndEmailDetails(fullName, email);
    }

    async completeManagingDirectorOrPersonInChargePage(fullName: string, email: string, optText: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterManagingDirectorOrPersonInCharge(fullName, email, optText);
        await this.clickSaveAndContinue();
    }
}
