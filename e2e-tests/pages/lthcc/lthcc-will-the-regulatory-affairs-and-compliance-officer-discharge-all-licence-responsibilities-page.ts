import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilitiesPage extends basePage {
    readonly textAreaField: Locator;

    constructor(page: Page) {
        super(page);
        this.textAreaField = page.locator('#officer-non-compliance-reason');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Will the regulatory affairs and compliance officer discharge all licence responsibilities? – Industrial hemp application');
    }

    async enterWillTheRegulatoryAffairsAndComplianceOfficerDischargeAllLicenceResponsibilities(option: string, textAreaValue: string): Promise<void> {
        if (option.toLowerCase() === 'no') {
            await this.selectYesOrNoRadioOption(option);
            await this.clearAndEnterTextInElement(this.textAreaField, textAreaValue);
        } else {
            await this.selectYesOrNoRadioOption(option);
        }
    }
}
