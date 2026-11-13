import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaLicenceHolderAddressPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postCodeField: Locator;
    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator("[id=\"licence-holder-address-line-1\"]");
        this.addressLine2TextField = page.locator("[id=\"licence-holder-address-line-2\"]");
        this.townOrCityTextField = page.locator("[id=\"licence-holder-town-or-city\"]");
        this.postCodeField = page.locator("[id=\"licence-holder-postcode\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Licence holder address – Controlled drugs application"
            : "Licence holder address – Controlled drugs application";
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
