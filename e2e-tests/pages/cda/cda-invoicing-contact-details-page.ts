import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaInvoicingContactDetailsPage extends basePage {
    readonly contactNameField: Locator;
    readonly emailField: Locator;
    readonly contactNoField: Locator;
    readonly purchaseOrderNumberField: Locator;
    constructor(page: Page) {
        super(page);
        this.contactNameField = page.locator("[id=\"invoicing-contact-name\"]");
        this.emailField = page.locator("[id=\"invoicing-contact-email\"]");
        this.contactNoField = page.locator("[id=\"invoicing-contact-telephone\"]");
        this.purchaseOrderNumberField = page.locator("[id=\"invoicing-purchase-order-number\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Invoicing contact details – Controlled drugs application"
            : "Invoicing contact details – Controlled drugs application";
    }
    async enterInvoicingContactDetails(contactName: string, email: string, contactNo: string, purchaseOrderNo: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.contactNameField, contactName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.contactNoField, contactNo);
        await this.clearAndEnterTextInElement(this.purchaseOrderNumberField, purchaseOrderNo);
    }
}
