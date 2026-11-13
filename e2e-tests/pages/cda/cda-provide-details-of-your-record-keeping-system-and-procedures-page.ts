import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfYourRecordKeepingSystemAndProceduresPage extends basePage {
    readonly textAreaField: Locator;
    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator("[id=\"record-keeping-system-procedures\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of your record keeping system and procedures – Controlled drugs application"
            : "Provide details of your record keeping system and procedures – Controlled drugs application";
    }
    async enterProvideDetailsOfYourRecordKeepingSystemAndProcedures(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeProvideDetailsOfYourRecordKeepingSystemAndProceduresPage(textArea: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterProvideDetailsOfYourRecordKeepingSystemAndProcedures(textArea);
        await this.clickSaveAndContinue();
    }
}
