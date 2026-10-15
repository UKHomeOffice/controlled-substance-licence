import { basePage } from '../base-page';
export class CdaIsTheNewSitePartOfAContractualAgreementPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the new site part of a contractual agreement? – Controlled drugs application"
            : "Is the new site part of a contractual agreement? – Controlled drugs application";
    }
}
