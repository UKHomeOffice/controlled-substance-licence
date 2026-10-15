import { basePage } from '../base-page';
export class CdaUsingTheDbsUpdateServicePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Email us to use the DBS Update Service – Controlled drugs application"
            : "Email us to use the DBS Update Service – Controlled drugs application";
    }
}
