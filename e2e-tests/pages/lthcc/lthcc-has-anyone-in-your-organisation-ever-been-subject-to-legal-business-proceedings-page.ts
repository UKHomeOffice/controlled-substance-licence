import { basePage } from '../base-page';

export class LthccHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has anyone in your organisation ever been subject to legal business proceedings? – Industrial hemp application');
    }
    async completeHasAnyoneInYourOrganisationEverBeenSubjectToLegalBusinessProceedingsPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
