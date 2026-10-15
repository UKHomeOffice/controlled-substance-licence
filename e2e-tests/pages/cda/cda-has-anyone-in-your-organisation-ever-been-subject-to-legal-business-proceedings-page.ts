import { basePage } from '../base-page';
export class CdaHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has anyone in your organisation ever been subject to legal business proceedings? – Controlled drugs application"
            : "Has anyone in your organisation ever been subject to legal business proceedings? – Controlled drugs application";
    }
}
