import { basePage } from '../base-page';
export class CdaIsYourBusinessRegisteredWithTheCareQualityCommissionOrScottishAndWelshEquivalentsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? – Controlled drugs application"
            : "Is your business registered with the Care Quality Commission or Scottish and Welsh equivalents? – Controlled drugs application";
    }
}
