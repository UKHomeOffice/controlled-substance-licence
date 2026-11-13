import { basePage } from '../base-page';

export class LthccDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Do you hold any Home Office or other regulatory licenses? – Industrial hemp application');
    }
    async completeDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }

    async completeAndSelectSaveAndExitDoYouHoldAnyHomeOfficeOrOtherRegulatoryLicensesPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndAndExit();
    }
}
