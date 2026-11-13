import { basePage } from '../base-page';

export class LthccHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has your Companies House reference number changed since your last application? – Industrial hemp application');
    }
    async completeHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
