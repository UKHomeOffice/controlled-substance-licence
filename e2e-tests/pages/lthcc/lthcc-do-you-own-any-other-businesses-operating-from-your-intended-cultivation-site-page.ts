import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Do you own any other businesses operating from your intended cultivation site? – Industrial hemp application');
    }
    async completeDoYouOwnAnyOtherBusinessesOperatingFromYourIntendedCultivationSitePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
