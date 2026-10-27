import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaWitnessesYouHaveToldUsAboutPage extends basePage {
    readonly changeLink: Locator;
    readonly removeLink: Locator;
    readonly addAnotherWitnessLink: Locator;
    constructor(page: Page) {
        super(page);
        this.changeLink = page.getByRole('link', { name: "Change", exact: true });
        this.removeLink = page.getByRole('link', { name: "Remove", exact: true });
        this.addAnotherWitnessLink = page.getByRole('link', { name: "Add another witness", exact: true });
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Witnesses you have told us about – Controlled drugs application"
            : "Witnesses you have told us about – Controlled drugs application";
    }
    async completeWitnessesYouHaveToldUsAboutPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
