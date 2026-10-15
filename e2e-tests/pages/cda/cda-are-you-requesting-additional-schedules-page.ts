import { basePage } from '../base-page';
export class CdaAreYouRequestingAdditionalSchedulesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting additional schedules? – Controlled drugs application"
            : "Are you requesting additional schedules? – Controlled drugs application";
    }
}
