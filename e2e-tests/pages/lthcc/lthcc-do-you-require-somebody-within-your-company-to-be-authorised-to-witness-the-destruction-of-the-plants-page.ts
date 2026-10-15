import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfThePlantsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Do you require somebody within your company to be authorised to witness the destruction of the plant? – Industrial hemp application');
    }
}
