import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaElectronicAlarmSystemDetailsPage extends basePage {
    readonly installingCompanyNameField: Locator;
    readonly installingCompanyAddressField: Locator;
    constructor(page: Page) {
        super(page);
        this.installingCompanyNameField = page.locator("[id=\"installing-company-name\"]");
        this.installingCompanyAddressField = page.locator("[id=\"installing-company-address\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Electronic alarm system details – Controlled drugs application"
            : "Electronic alarm system details – Controlled drugs application";
    }
    async enterElectronicAlarmSystemDetails(installingCompanyName: string, installingCompanyAddress: string, optText: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.installingCompanyNameField, installingCompanyName);
        await this.clearAndEnterTextInElement(this.installingCompanyAddressField, installingCompanyAddress);
        await this.selectRadioOptionWithText(optText);
    }
}
