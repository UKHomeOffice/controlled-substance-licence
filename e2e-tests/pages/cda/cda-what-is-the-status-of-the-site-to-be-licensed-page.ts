import { basePage } from '../base-page';
export class CdaWhatIsTheStatusOfTheSiteToBeLicensedPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error:What is the status of the site to be licensed? – Controlled drugs application"
            : "What is the status of the site to be licensed? – Controlled drugs application";
    }
}
