import { basePage } from '../base-page';
export class CdaHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has the person responsible for the security of the premises subscribed to DBS updates? – Controlled drugs application"
            : "Has the person responsible for the security of the premises subscribed to DBS updates? – Controlled drugs application";
    }
    async completeHasThePersonResponsibleForTheSecurityOfThePremisesSubscribedToDbsUpdatesPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
