import { basePage } from '../base-page';

export class PcaPremisesAddressPage extends basePage {
  readonly addressLine1TextField = this.page.locator("[id=\"premises-address-line-1\"]");
  readonly addressLine2TextField = this.page.locator("[id=\"premises-address-line-2\"]");
  readonly townOrCityTextField = this.page.locator("[id=\"premises-town-or-city\"]");
  readonly postCodeField = this.page.locator("[id=\"premises-postcode\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Premises address – Precursor chemicals application"
            : "Premises address – Precursor chemicals application";
  }

  async enterPremisesAddress(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
    await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
    await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
    await this.clearAndEnterTextInElement(this.postCodeField, postCode);
  }
  async completePremisesAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterPremisesAddress(addressLine1, addressLine2, townOrCity, postCode);
    await this.clickSaveAndContinue();
  }
}
