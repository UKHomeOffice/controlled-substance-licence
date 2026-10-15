import { basePage } from '../base-page';
export class CdaAreTheyOrAnyoneNamedOnThisApplicationMemberOfProfessionalBodyPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are they, or anyone named on this application, a member of a professional body? – Controlled drugs application"
            : "Are they, or anyone named on this application, a member of a professional body? – Controlled drugs application";
    }
}
