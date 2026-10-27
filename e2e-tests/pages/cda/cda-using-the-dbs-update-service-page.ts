import { expect } from '../../fixture/fixtures';
import { basePage } from '../base-page';
export class CdaUsingTheDbsUpdateServicePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Email us to use the DBS Update Service – Controlled drugs application"
            : "Email us to use the DBS Update Service – Controlled drugs application";
    }

    async completeUsingTheDbsUpdateServicePage(): Promise<void> {
        await this.assertPageTitle();
        expect(await this.isLinkTextDisplayed("DBS Update Service (opens in a new tab)")).toBe(true);
        expect(await this.isLinkTextDisplayed("dflu.dom@homeoffice.gov.uk")).toBe(true);
        await this.clickSaveAndContinue();
    }
}
