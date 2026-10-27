import { expect } from '@playwright/test';
import { basePage } from '../base-page';
import { ConstantsLib as c } from '../../utility-helper/constants-lib';

export class PcaHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage extends basePage {
  readonly warningText = this.page.locator("[class='govuk-warning-text__text'] span:nth-of-type(2)");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Has anyone employed by your company ever received criminal convictions? – Precursor chemicals application"
            : "Has anyone employed by your company ever received criminal convictions? – Precursor chemicals application";
  }

  async getWarningText(): Promise<string> {
    await this.warningText.waitFor({ state: 'visible' });
    return (await this.warningText.innerText());
  }
  async completeHasAnyoneEmployedByYourCompanyEverReceivedCriminalConvictionsPage(option: string): Promise<void> {
    await this.assertPageTitle();
    const actualWarningText = await this.getWarningText();
    expect(actualWarningText).toBe(c.PCA_WARNING_TEXT_FOR_CONVICTION);
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }
}
