import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"contract-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Tell us more about the contract and how it affects your licence application – Controlled drugs application"
            : "Tell us more about the contract and how it affects your licence application – Controlled drugs application";
    }
    async enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplicationPage(textValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterTellUsMoreAboutTheContractAndHowItAffectsYourLicenceApplication(textValue);
        await this.clickSaveAndContinue();
    }
}
