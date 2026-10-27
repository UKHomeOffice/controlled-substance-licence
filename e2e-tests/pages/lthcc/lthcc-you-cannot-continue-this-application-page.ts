import { basePage } from '../base-page';

export class LthccYouCannotContinueThisApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('You cannot continue this application – Industrial hemp application');
    }
    async completeYouCannotContinueThisApplicationPage(): Promise<void> {
        await this.assertPageTitle();
    }
}
