import { basePage } from '../base-page';

export class PcaHasTheGuarantorSubscribedToDbsUpdatesPage extends basePage {
  readonly warningText = this.page.locator("[class='govuk-warning-text__text'] span:nth-of-type(2)");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Has the guarantor subscribed to DBS updates? – Precursor chemicals application"
            : "Has the guarantor subscribed to DBS updates? – Precursor chemicals application";
  }

  async getWarningText(): Promise<string> {
    await this.warningText.waitFor({ state: 'visible' });
    return (await this.warningText.innerText());
  }
}
