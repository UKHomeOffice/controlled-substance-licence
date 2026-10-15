import { basePage } from '../base-page';
export class CdaAreControlledDrugsKeptAtThisSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are controlled drugs kept at this site? – Controlled drugs application"
            : "Are controlled drugs kept at this site? – Controlled drugs application";
    }
}
