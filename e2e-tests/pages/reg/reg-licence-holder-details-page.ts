import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegLicenceHolderDetailsPage extends basePage {
    readonly companyNameField: Locator;
    readonly nameOfResponsiblePersonField: Locator;
    readonly companyNumberField: Locator;
    readonly contactPhoneNumberField: Locator;
    readonly contactEmailField: Locator;
    readonly webSiteUrlField: Locator;

    constructor(page: Page) {
        super(page);
        this.companyNameField = page.locator('#company-name');
        this.nameOfResponsiblePersonField = page.locator('#name-of-responsible-person');
        this.companyNumberField = page.locator('#company-number');
        this.contactPhoneNumberField = page.locator('#telephone');
        this.contactEmailField = page.locator('#email');
        this.webSiteUrlField = page.locator('#website-url');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Licence holder details – Register for controlled substance licensing"
            : "Licence holder details – Register for controlled substance licensing";
    }

    async enterLicenceHolderDetails(companyName: string, nameOfResponsiblePerson: string, companyNumber: string, contactPhoneNumber: string, email: string, webSiteUrl: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.companyNameField, companyName);
        await this.clearAndEnterTextInElement(this.companyNumberField, companyNumber);
        await this.clearAndEnterTextInElement(this.nameOfResponsiblePersonField, nameOfResponsiblePerson);
        await this.clearAndEnterTextInElement(this.contactPhoneNumberField, contactPhoneNumber);
        await this.clearAndEnterTextInElement(this.contactEmailField, email);
        await this.clearAndEnterTextInElement(this.webSiteUrlField, webSiteUrl);
    }
    async completeLicenseHolderDetailsPage(licenseHolderName: string, nameOfResponsiblePerson: string, companyNumber: string, contactPhoneNumber: string, email: string, webSiteUrl: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterLicenceHolderDetails(licenseHolderName, nameOfResponsiblePerson, companyNumber, contactPhoneNumber, email, webSiteUrl);
        await this.clickContinue();
    }
}
