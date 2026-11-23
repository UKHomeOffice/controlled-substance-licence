import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegRegisterForTheControlledSubstanceLicensingSystemPage extends basePage {
    readonly startNowBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.startNowBtn = page.getByRole('button', { name: 'Start now', exact: true });
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: Registration – Register for controlled substance licensing"
            : "Registration – Register for controlled substance licensing";
    }

    getStartNow(): Locator {
        return this.startNowBtn;
    }

    async selectStartNowToRegisterForControlledSubstanceLicensing(): Promise<void> {
        await this.getStartNow().click();
    }
    async selectStartNowButtonToRegisterForTheControlledSubstanceLicensingSystem(): Promise<void> {
        await this.assertPageTitle();
        await this.selectStartNowToRegisterForControlledSubstanceLicensing();
    }
}
