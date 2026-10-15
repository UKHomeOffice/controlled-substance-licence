import { basePage } from '../base-page';
export class CdaHasYourCompaniesHouseReferredNumberChangedSinceYourLastApplicationPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has your Companies House reference number changed since your last application? – Controlled drugs application"
            : "Has your Companies House reference number changed since your last application? – Controlled drugs application";
    }
}
