import { basePage } from '../base-page';

export class PcaHasYourRegisteredNameAtCompaniesHouseChangedSinceYourLastApplicationPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Has your registered name at Companies House changed since your last application? – Precursor chemicals application"
            : "Has your registered name at Companies House changed since your last application? – Precursor chemicals application";
  }
}
