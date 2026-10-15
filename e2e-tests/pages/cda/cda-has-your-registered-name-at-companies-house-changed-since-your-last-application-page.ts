import { basePage } from '../base-page';
export class CdaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has your registered name at Companies House changed since your last application? – Controlled drugs application"
            : "Has your registered name at Companies House changed since your last application? – Controlled drugs application";
    }
}
