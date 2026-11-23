import { basePage } from '../base-page';

export class LthccAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are any of the fields in a different postcode to the site address? – Industrial hemp application');
    }
    async completeAreAnyOfTheFieldsInADifferentPostcodeToTheSiteAddressPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
