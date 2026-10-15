import { basePage } from '../base-page';
export class CdaYouCannotContinueThisApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: You cannot continue this application – Controlled drugs application"
            : "You cannot continue this application – Controlled drugs application";
    }
}
