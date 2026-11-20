import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaPremisesAddressPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postCodeField: Locator;
    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator("[id=\"premises-address-line-1\"]");
        this.addressLine2TextField = page.locator("[id=\"premises-address-line-2\"]");
        this.townOrCityTextField = page.locator("[id=\"premises-town-or-city\"]");
        this.postCodeField = page.locator("[id=\"premises-postcode\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Premises address – Controlled drugs application"
            : "Premises address – Controlled drugs application";
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
