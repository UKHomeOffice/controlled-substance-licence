import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#regulatory-body-registration-details');
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Details of registration with other regulatory bodies – Register for controlled substance licensing"
            : "Details of registration with other regulatory bodies – Register for controlled substance licensing";
    }

    async enterProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWith(textValue: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, textValue);
    }
    async completesProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWithPage(textAreaValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfAnyOtherRegulatoryBodiesYouAreRegisteredWith(textAreaValue);
        await this.clickContinue();
    }
}
