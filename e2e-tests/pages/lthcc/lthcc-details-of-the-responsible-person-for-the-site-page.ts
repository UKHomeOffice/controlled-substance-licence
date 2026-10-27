import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDetailsOfTheResponsiblePersonForTheSitePage extends basePage {
    readonly fullNameField: Locator;
    readonly ukTelephoneNumberField: Locator;
    readonly emailAddressField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator('#site-responsible-person-full-name');
        this.ukTelephoneNumberField = page.locator('#site-responsible-person-uk-telephone');
        this.emailAddressField = page.locator('#site-responsible-person-email');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Details of the responsible person for the site – Industrial hemp application');
    }

    async enterDetailsOfTheResponsiblePersonForTheSite(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.ukTelephoneNumberField, telephoneNumber);
        await this.clearAndEnterTextInElement(this.emailAddressField, email);
        await this.selectRadioOptionWithText(optValue);
    }

    async enterDetailsOfTheResponsiblePersonForTheSiteWithoutConfirmingDbs(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.ukTelephoneNumberField, telephoneNumber);
        await this.clearAndEnterTextInElement(this.emailAddressField, email);
    }
    async enterDetailsOfTheResponsiblePersonForTheSiteFullNameTelephoneNoAndEmailDetails(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDetailsOfTheResponsiblePersonForTheSiteWithoutConfirmingDbs(fullName, telephoneNumber, email);
    }

    async completeDetailsOfTheResponsiblePersonForTheSitePage(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDetailsOfTheResponsiblePersonForTheSite(fullName, telephoneNumber, email, optValue);
        await this.clickSaveAndContinue();
    }
}
