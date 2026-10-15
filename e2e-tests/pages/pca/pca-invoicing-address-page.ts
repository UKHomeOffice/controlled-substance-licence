import { basePage } from '../base-page';

export class PcaInvoicingAddressPage extends basePage {
  readonly addressLine1TextField = this.page.locator("[id=\"invoicing-address-line-1\"]");
  readonly addressLine2TextField = this.page.locator("[id=\"invoicing-address-line-2\"]");
  readonly townOrCityTextField = this.page.locator("[id=\"invoicing-town-or-city\"]");
  readonly postCodeField = this.page.locator("[id=\"invoicing-postcode\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Invoicing address – Precursor chemicals application"
            : "Invoicing address – Precursor chemicals application";
  }

  async enterInvoicingAddress(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
    await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
    await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
    await this.clearAndEnterTextInElement(this.postCodeField, postCode);
  }
}
