import { basePage } from '../base-page';
export class CdaHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has anyone in your organisation ever received a criminal conviction? – Controlled drugs application"
            : "Has anyone in your organisation ever received a criminal conviction? – Controlled drugs application";
    }
}
