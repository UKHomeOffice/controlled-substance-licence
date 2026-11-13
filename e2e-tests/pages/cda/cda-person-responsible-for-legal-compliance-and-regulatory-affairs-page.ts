import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaPersonResponsibleForLegalComplianceAndRegulatoryAffairsPage extends basePage {
    readonly fullNameField: Locator;
    readonly emailField: Locator;
    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator("[id=\"responsible-for-compliance-regulatory-full-name\"]");
        this.emailField = page.locator("[id=\"responsible-for-compliance-regulatory-email-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Person responsible for legal compliance and regulatory affairs – Controlled drugs application"
            : "Person responsible for legal compliance and regulatory affairs – Controlled drugs application";
    }
    async enterPersonResponsibleForLegalComplianceAndRegulatoryAffairs(fullName: string, email: string, optText: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.selectRadioOptionWithText(optText);
    }
    async enterFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.emailField, email);
    }
    async enterPersonResponsibleForLegalComplianceAndRegulatoryAffairsFullNameAndEmailDetails(fullName: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterFullNameAndEmailDetails(fullName, email);
    }

    async completePersonResponsibleForLegalComplianceAndRegulatoryAffairsPage(fullName: string, email: string, optText: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterPersonResponsibleForLegalComplianceAndRegulatoryAffairs(fullName, email, optText);
        await this.clickSaveAndContinue();
    }
}
