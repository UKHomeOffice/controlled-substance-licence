import { basePage } from '../base-page';
export class CdaAreYouRequestingAChangeInAuthorisedWitnessForThisSiteOnlyPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are you requesting a change in authorised witness for this site only? – Controlled drugs application"
            : "Are you requesting a change in authorised witness for this site only? – Controlled drugs application";
    }
}
