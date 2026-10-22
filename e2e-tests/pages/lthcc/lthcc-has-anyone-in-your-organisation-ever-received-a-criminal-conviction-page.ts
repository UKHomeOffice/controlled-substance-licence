import { basePage } from '../base-page';
import { expect } from '../../fixture/fixtures';

export class LthccHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has anyone in your organisation ever received a criminal conviction? – Industrial hemp application');
    }

    async completeHasAnyoneInYourOrganisationEverReceivedACriminalConvictionPage(option: string): Promise<void> {
        await this.assertPageTitle();
        expect(await this.isLinkTextDisplayed("dflu.dom@homeoffice.gov.uk")).toBe(true);
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
