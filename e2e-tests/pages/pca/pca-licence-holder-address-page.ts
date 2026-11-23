import { basePage } from '../base-page';

export class PcaLicenceHolderAddressPage extends basePage {
  readonly addressLine1TextField = this.page.locator("[id=\"licence-holder-address-line-1\"]");
  readonly addressLine2TextField = this.page.locator("[id=\"licence-holder-address-line-2\"]");
  readonly townOrCityTextField = this.page.locator("[id=\"licence-holder-town-or-city\"]");
  readonly postCodeField = this.page.locator("[id=\"licence-holder-postcode\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Licence holder address – Precursor chemicals application"
            : "Licence holder address – Precursor chemicals application";
  }

  async enterLicenceHolderAddress(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
    await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
    await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
    await this.clearAndEnterTextInElement(this.postCodeField, postCode);
  }
  async completeLicenceHolderAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterLicenceHolderAddress(addressLine1, addressLine2, townOrCity, postCode);
    await this.clickSaveAndContinue();
  }
}
