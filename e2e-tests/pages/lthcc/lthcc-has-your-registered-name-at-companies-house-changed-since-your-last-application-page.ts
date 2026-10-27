import { basePage } from '../base-page';

export class LthccHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has your registered name at Companies House changed since your last application? – Industrial hemp application');
    }
    async completeHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
