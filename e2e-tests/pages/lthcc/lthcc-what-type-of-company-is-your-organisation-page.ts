import { basePage } from '../base-page';

export class LthccWhatTypeOfCompanyIsYourOrganisationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('What type of company is your organisation? – Industrial hemp application');
    }
    async completeWhatTypeOfCompanyIsYourOrganisationPage(optionText: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(optionText);
        await this.clickSaveAndContinue();
    }
}
