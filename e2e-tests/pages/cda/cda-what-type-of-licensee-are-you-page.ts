import { basePage } from '../base-page';
export class CdaWhatTypeOfLicenseeAreYouPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: What type of controlled drugs licensee are you? – Controlled drugs application"
            : "What type of controlled drugs licensee are you? – Controlled drugs application";
    }
    async selectWhatTypeOfLicenseeAreYou(optText: string): Promise<void> {
        await this.selectRadioOptionWithText(optText);
    }
}
