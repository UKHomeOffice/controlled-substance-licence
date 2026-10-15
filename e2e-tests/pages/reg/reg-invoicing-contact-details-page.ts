import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegInvoicingContactDetailsPage extends basePage {
    readonly ContactNameField: Locator;
    readonly contactPhoneNumberField: Locator;
    readonly invoicingEmailAddressField: Locator;
    readonly purchaseOrderNumberField: Locator;

    constructor(page: Page) {
        super(page);
        this.ContactNameField = page.locator('#invoicing-contact-name');
        this.contactPhoneNumberField = page.locator('#invoicing-contact-telephone');
        this.invoicingEmailAddressField = page.locator('#invoicing-contact-email');
        this.purchaseOrderNumberField = page.locator('#invoicing-purchase-order-number');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Invoicing contact details – Register for controlled substance licensing"
            : "Invoicing contact details – Register for controlled substance licensing";
    }

    async enterLicenceDetails(contactName: string, contactPhoneNumber: string, email: string, purchaseOrderNumber: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.ContactNameField, contactName);
        await this.clearAndEnterTextInElement(this.contactPhoneNumberField, contactPhoneNumber);
        await this.clearAndEnterTextInElement(this.invoicingEmailAddressField, email);
        await this.clearAndEnterTextInElement(this.purchaseOrderNumberField, purchaseOrderNumber);
    }
}
