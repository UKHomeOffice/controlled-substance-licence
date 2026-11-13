import { basePage } from '../base-page';
export class CdaHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has the person responsible for compliance and regulatory affairs subscribed to DBS updates? – Controlled drugs application"
            : "Has the person responsible for compliance and regulatory affairs subscribed to DBS updates? – Controlled drugs application";
    }
    async completeHasThePersonResponsibleForComplianceAndRegulatoryAffairsSubscribedToDbsUpdatesPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
