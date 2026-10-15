import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegInvoicingAddressPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postCodeField: Locator;

    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator('#invoicing-address-line-1');
        this.addressLine2TextField = page.locator('#invoicing-address-line-2');
        this.townOrCityTextField = page.locator('#invoicing-address-town-or-city');
        this.postCodeField = page.locator('#invoicing-address-postcode');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Invoicing address – Register for controlled substance licensing"
            : "Invoicing address – Register for controlled substance licensing";
    }

    async enterInvoicingAddress(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
        await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
        await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
        await this.clearAndEnterTextInElement(this.postCodeField, postCode);
    }
}
