import { basePage } from '../base-page';
export class CdaDoYouRequireSomebodyWithinYourCompanyToBeAuthorisedToWitnessTheDestructionOfControlledDrugsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error:Does your company have any authorised witnesses for the destruction of controlled drugs? – Controlled drugs application"
            : "Does your company have any authorised witnesses for the destruction of controlled drugs? – Controlled drugs application";
    }
}
