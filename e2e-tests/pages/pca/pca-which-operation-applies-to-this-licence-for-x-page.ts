import { basePage } from '../base-page';
import { expect } from '@playwright/test';

export class PcaWhichOperationAppliesToThisLicenceForXPage extends basePage {

  override async expectedPageTitle(): Promise<string> {
    return "Which operation applies to this licence for Safrole – Precursor chemicals application";
  }

  override async assertPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/^(?:Error: )?Which operation applies to this licence for.*– Precursor chemicals application – GOV\.UK$/, { timeout: 10_000 });
  }

  async selectWhichOperationAppliesToThisLicenceForX(optText: string): Promise<void> {
    await this.selectRadioOptionWithText(optText);
  }
}
