import { basePage } from '../base-page';

export class PcaInvoicingContactDetailsPage extends basePage {
  readonly fullNameField = this.page.locator("[id=\"invoicing-fullname\"]");
  readonly emailField = this.page.locator("[id=\"invoicing-email\"]");
  readonly ukTelPhoneNoField = this.page.locator("[id=\"invoicing-telephone\"]");
  readonly purchaseOrderNumberField = this.page.locator("[id=\"invoicing-purchase-order-number\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Invoicing contact details – Precursor chemicals application"
            : "Invoicing contact details – Precursor chemicals application";
  }

  async enterInvoicingContactDetails(fullName: string, email: string, ukTelPhoneNo: string, purchaseOrderNo: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.fullNameField, fullName);
    await this.clearAndEnterTextInElement(this.emailField, email);
    await this.clearAndEnterTextInElement(this.ukTelPhoneNoField, ukTelPhoneNo);
    await this.clearAndEnterTextInElement(this.purchaseOrderNumberField, purchaseOrderNo);
  }
  async completeInvoicingContactDetailsPage(fullName: string, email: string, ukTelPhoneNo: string, purchaseOrderNo: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterInvoicingContactDetails(fullName, email, ukTelPhoneNo, purchaseOrderNo);
    await this.clickSaveAndContinue();
  }
}
