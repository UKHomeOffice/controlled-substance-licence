import { basePage } from '../base-page';
export class CdaWhoIsResponsibleForTheSecurityOfThePremisesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Who is responsible for the security of the premises? – Controlled drugs application"
            : "Who is responsible for the security of the premises? – Controlled drugs application";
    }
}
