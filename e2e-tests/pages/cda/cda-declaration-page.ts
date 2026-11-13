import { basePage } from '../base-page';
export class CdaDeclarationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Declaration – Controlled drugs application"
            : "Declaration – Controlled drugs application";
    }
    async completeDeclarationPage(optText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optText);
        await this.clickConfirmAndSubmit();
    }
}
