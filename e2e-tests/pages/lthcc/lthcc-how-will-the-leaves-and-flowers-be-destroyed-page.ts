import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHowWillTheLeavesAndFlowersBeDestroyedPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#how-leaves-flowers-destroyed');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('How will the leaves and flowers be destroyed? – Industrial hemp application');
    }

    async enterHowWillTheLeavesAndFlowersBeDestroyed(text: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.textAreaField, text);
    }
    async completeHowWillTheLeavesAndFlowersBeDestroyedPage(value: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterHowWillTheLeavesAndFlowersBeDestroyed(value);
        await this.clickSaveAndContinue();
    }
}
