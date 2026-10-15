import { basePage } from '../base-page';
export class CdaIsThereASeparateZoneForTheControlledDrugCabinetSafeOrStorePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is there a separate zone for the controlled drug cabinet, safe or store? – Controlled drugs application"
            : "Is there a separate zone for the controlled drug cabinet, safe or store? – Controlled drugs application";
    }
}
