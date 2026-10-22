import { basePage } from '../base-page';

export class LthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has the responsible person subscribed to DBS updates? – Industrial hemp application');
    }
    async completeHasTheResponsiblePersonSubscribedToDbsUpdatesPage(optValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(optValue);
        await this.clickSaveAndContinue();
    }

    async completeAndSelectSaveAndExitHasTheResponsiblePersonSubscribedToDbsUpdatesPage(optValue: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(optValue);
        await this.clickSaveAndAndExit();
    }
}
