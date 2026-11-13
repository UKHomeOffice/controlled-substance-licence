import { basePage } from '../base-page';
export class CdaYouHaveNotSelectedAnyActivitiesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: You have not selected any activities – Controlled drugs application"
            : "You have not selected any activities – Controlled drugs application";
    }
}
