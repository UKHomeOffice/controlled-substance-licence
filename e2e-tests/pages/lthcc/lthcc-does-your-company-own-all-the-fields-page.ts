import { basePage } from '../base-page';

export class LthccDoesYourCompanyOwnAllTheFieldsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Does your company own all the fields? – Industrial hemp application');
    }
    async completeDoesYourCompanyOwnAllTheFieldsPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
