import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccInvoicingContactDetailsPage extends basePage {
    readonly contactNameField: Locator;
    readonly emailField: Locator;
    readonly contactNoField: Locator;
    readonly purchaseOrderNumberField: Locator;
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.contactNameField = page.locator('#invoicing-contact-name');
        this.emailField = page.locator('#invoicing-contact-email');
        this.contactNoField = page.locator('#invoicing-contact-telephone');
        this.purchaseOrderNumberField = page.locator('#invoicing-purchase-order-number');
        this.textAreaField = page.locator('#refund-account-details');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Invoicing contact details – Industrial hemp application');
    }

    async enterInvoicingContactDetails(contactName: string, email: string, contactNo: string, purchaseOrderNo: string, refundAccount: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.contactNameField, contactName);
        await this.clearAndEnterTextInElement(this.emailField, email);
        await this.clearAndEnterTextInElement(this.contactNoField, contactNo);
        await this.clearAndEnterTextInElement(this.purchaseOrderNumberField, purchaseOrderNo);
        await this.clearAndEnterTextInElement(this.textAreaField, refundAccount);
    }
    async completeInvoicingContactDetailsPage(contactName: string, email: string, contactNo: string, purchaseOrderNo: string, refundAccount: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterInvoicingContactDetails(contactName, email, contactNo, purchaseOrderNo, refundAccount);
        await this.clickSaveAndContinue();
    }
}
