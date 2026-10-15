import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDoYouHavePermissionFromTheOwnerToCarryOutYourIntendedActivitiesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Do you have permission from the owner to carry out your intended activities? – Industrial hemp application');
    }
}
