import { basePage } from '../base-page';
export class CdaAreControlledDrugsKeptInASafeOrCabinetPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are controlled drugs kept in a safe or cabinet? – Controlled drugs application"
            : "Are controlled drugs kept in a safe or cabinet? – Controlled drugs application";
    }
}
