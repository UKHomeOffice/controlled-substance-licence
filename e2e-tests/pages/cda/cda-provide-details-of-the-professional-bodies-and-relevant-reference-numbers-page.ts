import { Page, Locator } from '@playwright/test';
import { basePage } from '../base-page';
export class CdaProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbersPage extends basePage {
    readonly textArea: Locator;
    constructor(page: Page) {
        super(page);
        this.textArea = page.locator("[id=\"professional-body-details\"]");
    }
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Provide details of the professional bodies and relevant reference numbers – Controlled drugs application"
            : "Provide details of the professional bodies and relevant reference numbers – Controlled drugs application";
    }
    async enterProvideDetailsOfTheProfessionalBodiesAndRelevantReferenceNumbers(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textArea, text);
    }
}
