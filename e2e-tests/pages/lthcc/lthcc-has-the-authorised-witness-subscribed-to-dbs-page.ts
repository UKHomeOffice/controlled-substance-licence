import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasTheAuthorisedWitnessSubscribedToDbsPage extends basePage {
    readonly field: Locator;

    constructor(page: Page) {
        super(page);
        this.field = page.locator('[id=""]');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has the authorised witness subscribed to DBS updates? – Industrial hemp application');
    }
    async completeHasTheAuthorisedWitnessSubscribedToDbsPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectYesOrNoRadioOption(option);
        await this.clickSaveAndContinue();
    }
}
