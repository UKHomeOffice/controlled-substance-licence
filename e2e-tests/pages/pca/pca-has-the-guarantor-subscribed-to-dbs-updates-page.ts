import { expect } from '@playwright/test';
import { basePage } from '../base-page';
import { ConstantsLib as c } from '../../utility-helper/constants-lib';

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
  async completeHasTheGuarantorSubscribedToDbsUpdatesPage(option: string): Promise<void> {
    await this.assertPageTitle();
    const actualWarningText = await this.getWarningText();
    expect(actualWarningText).toBe(c.PCA_WARNING_TEXT_FOR_DBS);
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndContinue();
  }

  async completeAndSelectSaveAndExitHasTheGuarantorSubscribedToDbsUpdatesPage(option: string): Promise<void> {
    await this.assertPageTitle();
    const actualWarningText = await this.getWarningText();
    expect(actualWarningText).toBe(c.PCA_WARNING_TEXT_FOR_DBS);
    await this.selectYesOrNoRadioOption(option);
    await this.clickSaveAndAndExit();
  }
}
