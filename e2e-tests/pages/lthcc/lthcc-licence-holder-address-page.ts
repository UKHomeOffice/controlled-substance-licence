import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccLicenceHolderAddressPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postCodeField: Locator;

    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator('#licence-holder-address-line-1');
        this.addressLine2TextField = page.locator('#licence-holder-address-line-2');
        this.townOrCityTextField = page.locator('#licence-holder-town-or-city');
        this.postCodeField = page.locator('#licence-holder-postcode');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Licence holder address – Industrial hemp application');
    }

    async enterLicenceHolderAddress(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
        await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
        await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
        await this.clearAndEnterTextInElement(this.postCodeField, postCode);
    }
}
