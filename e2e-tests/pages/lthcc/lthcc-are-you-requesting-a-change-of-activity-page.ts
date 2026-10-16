import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccAreYouRequestingAChangeOfActivityPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are you requesting a change of activity? – Industrial hemp application');
    }
    async completeAreYouRequestingAChangeOfActivityPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
