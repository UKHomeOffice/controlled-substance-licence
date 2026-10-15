import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccHasTheResponsiblePersonSubscribedToDbsUpdatesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Has the responsible person subscribed to DBS updates? – Industrial hemp application');
    }
}
