import { basePage } from '../base-page';
export class CdaWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Who is responsible for legal compliance and regulatory affairs? – Controlled drugs application"
            : "Who is responsible for legal compliance and regulatory affairs? – Controlled drugs application";
    }
    async completeWhoIsResponsibleForLegalComplianceAndRegulatoryAffairsPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndContinue();
    }
}
