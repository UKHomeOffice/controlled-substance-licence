import { basePage } from '../base-page';
export class CdaWhichOfTheFollowingSecurityFeaturesDoesTheSiteHavePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Which of the following security features does the site have? – Controlled drugs application"
            : "Which of the following security features does the site have? – Controlled drugs application";
    }
}
