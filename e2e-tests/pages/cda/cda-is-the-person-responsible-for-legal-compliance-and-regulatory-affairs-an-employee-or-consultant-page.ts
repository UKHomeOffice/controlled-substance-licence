import { basePage } from '../base-page';
export class CdaIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the person responsible for legal compliance and regulatory affairs an employee or consultant? – Controlled drugs application"
            : "Is the person responsible for legal compliance and regulatory affairs an employee or consultant? – Controlled drugs application";
    }
    async completeIsThePersonResponsibleForLegalComplianceAndRegulatoryAffairsAnEmployeeOrConsultantPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndContinue();
    }
}
