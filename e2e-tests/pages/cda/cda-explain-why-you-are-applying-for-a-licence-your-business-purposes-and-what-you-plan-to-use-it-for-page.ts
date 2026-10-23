import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"why-applying-licence\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Explain why you are applying for a licence – Controlled drugs application"
            : "Explain why you are applying for a licence – Controlled drugs application";
    }
    async enterExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItFor(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItForPage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterExplainWhyYouAreApplyingForALicenceYourBusinessPurposesAndWhatYouPlanToUseItFor(textArea);
        await this.clickSaveAndContinue();
    }
}
