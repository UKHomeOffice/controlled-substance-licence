import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccIsTheLicenceNeededToCultivateAndPossessLowThcCannabisIndustrialHempPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Is the licence needed to cultivate and possess low THC cannabis (industrial hemp)? – Industrial hemp application');
    }
}
