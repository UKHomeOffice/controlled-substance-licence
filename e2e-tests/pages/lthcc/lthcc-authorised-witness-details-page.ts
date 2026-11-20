import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAuthorisedWitnessDetailsPage extends basePage {
    readonly fullNameField: Locator;
    readonly ukTelephoneNumberField: Locator;
    readonly emailAddressField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameField = page.locator('#authorised-witness-full-name');
        this.ukTelephoneNumberField = page.locator('#authorised-witness-uk-telephone');
        this.emailAddressField = page.locator('#authorised-witness-email');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Authorised witness details – Industrial hemp application');
    }

    async enterAuthorisedWitnessDetails(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.ukTelephoneNumberField, telephoneNumber);
        await this.clearAndEnterTextInElement(this.emailAddressField, email);
        await this.selectRadioOptionWithText(optValue);
    }

    async enterAuthorisedWitnessDetailsWithoutConfirmingDbs(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.fullNameField, fullName);
        await this.clearAndEnterTextInElement(this.ukTelephoneNumberField, telephoneNumber);
        await this.clearAndEnterTextInElement(this.emailAddressField, email);
    }
    async completeAuthorisedWitnessDetailsWithoutConfirmingDbs(fullName: string, telephoneNumber: string, email: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterAuthorisedWitnessDetailsWithoutConfirmingDbs(fullName, telephoneNumber, email);
    }

    async completeAuthorisedWitnessDetailsPage(fullName: string, telephoneNumber: string, email: string, optValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterAuthorisedWitnessDetails(fullName, telephoneNumber, email, optValue);
        await this.clickSaveAndContinue();
    }
}
