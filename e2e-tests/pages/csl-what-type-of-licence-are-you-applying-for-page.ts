import { basePage } from './base-page';

export class CslWhatTypeOfLicenceAreYouApplyingForPage extends basePage {
  async expectedPageTitle(): Promise<string> {
    return this.withErrorPrefix('What type of licence are you applying for? – Controlled substance licence applications');
  }

  async selectWhatTypeOfLicenceAreYouApplyingFor(optText: string) {
    await this.selectRadioOptionWithText(optText);
  }
}
