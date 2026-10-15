import { basePage } from '../base-page';
export class CdaAreYouRequestingAChangeOfActivityPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting a change of activity? – Controlled drugs application"
            : "Are you requesting a change of activity? – Controlled drugs application";
    }
}
