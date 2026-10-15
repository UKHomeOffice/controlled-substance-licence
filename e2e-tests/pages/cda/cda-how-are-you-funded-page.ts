import { basePage } from '../base-page';
export class CdaHowAreYouFundedPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: How are you funded? – Controlled drugs application"
            : "How are you funded? – Controlled drugs application";
    }
}
