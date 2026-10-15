import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivatedPage extends basePage {
    readonly addressLine1TextField: Locator;
    readonly addressLine2TextField: Locator;
    readonly townOrCityTextField: Locator;
    readonly postCodeField: Locator;

    constructor(page: Page) {
        super(page);
        this.addressLine1TextField = page.locator('#growing-location-address-line-1');
        this.addressLine2TextField = page.locator('#growing-location-address-line-2');
        this.townOrCityTextField = page.locator('#growing-location-town-or-city');
        this.postCodeField = page.locator('#growing-location-postcode');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Address of the growing location where the low THC cannabis will be cultivated – Industrial hemp application');
    }

    async enterAddressOfTheGrowingLocationWhereTheLowThcCannabisWillBeCultivated(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.addressLine1TextField, addressLine1);
        await this.clearAndEnterTextInElement(this.addressLine2TextField, addressLine2);
        await this.clearAndEnterTextInElement(this.townOrCityTextField, townOrCity);
        await this.clearAndEnterTextInElement(this.postCodeField, postCode);
    }
}
