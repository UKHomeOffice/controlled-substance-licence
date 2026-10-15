import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaHowAreYouApplyingForYourControlledDrugsLicencePage extends basePage {
    readonly ApplicationRefNoField: Locator;
    constructor(page: Page) {
        super(page);
        this.ApplicationRefNoField = page.locator("[id=\"amend-application-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: How are you applying for your controlled drugs licence? – Controlled drugs application"
            : "How are you applying for your controlled drugs licence? – Controlled drugs application";
    }
}
