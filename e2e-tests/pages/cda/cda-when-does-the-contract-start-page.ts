import { basePage } from '../base-page';
export class CdaWhenDoesTheContractStartPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: When does the contract start? – Controlled drugs application"
            : "When does the contract start? – Controlled drugs application";
    }
    async enterWhenDoesTheContractStart(date: string): Promise<void> {
        await this.enterDateOrDob(date);
    }
    async completeWhenDoesTheContractStartPage(date: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterWhenDoesTheContractStart(date);
        await this.clickSaveAndContinue();
    }
}
