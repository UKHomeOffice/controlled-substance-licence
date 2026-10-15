import { basePage } from '../base-page';
export class CdaSummaryOfTradingReasonsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Summary of trading reasons – Controlled drugs application"
            : "Summary of trading reasons – Controlled drugs application";
    }
}
