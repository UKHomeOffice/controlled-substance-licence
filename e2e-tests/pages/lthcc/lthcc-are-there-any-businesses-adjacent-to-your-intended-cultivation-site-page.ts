import { basePage } from '../base-page';

export class LthccAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Are there any businesses adjacent to your intended cultivation site? – Industrial hemp application');
    }
    async completeAreThereAnyBusinessesAdjacentToYourIntendedCultivationSitePage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
