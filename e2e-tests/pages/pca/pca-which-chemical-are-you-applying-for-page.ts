import { basePage } from '../base-page';

export class PcaWhichChemicalAreYouApplyingForPage extends basePage {
  readonly chemicalNameField = this.page.locator("[id=\"which-chemical\"]");

  override async expectedPageTitle(): Promise<string> {
    return (await this.page.title()).startsWith("Error")
            ? "Error: Which chemical are you applying for? – Precursor chemicals application"
            : "Which chemical are you applying for? – Precursor chemicals application";
  }

  async enterWhichChemicalAreYouApplyingFor(chemicalName: string): Promise<void> {
    await this.clearAndEnterTextInElement(this.chemicalNameField, chemicalName);
  }

  async selectOwnChemicalCheckbox(checkboxLabel: string): Promise<void> {
    const namedOption = this.page.getByRole('radio', { name: checkboxLabel.trim(), exact: false })
      .or(this.page.getByRole('checkbox', { name: checkboxLabel.trim(), exact: false }));
    if (checkboxLabel.trim() && await namedOption.count()) {
      await this.selectRadioOptionWithText(checkboxLabel);
      return;
    }

    // The source phrase can differ from the deployed label; inspect before auto-waiting.
    const firstCheckbox = this.page.locator("input[type='checkbox']").first();
    if (await firstCheckbox.count()) {
      const checkboxId = await firstCheckbox.getAttribute('id');
      if (checkboxId?.trim()) {
        await this.page.locator(`label[for='${checkboxId}']`).click();
      } else {
        await firstCheckbox.click();
      }
      return;
    }

    throw new Error('Unable to select own chemical checkbox on Which chemical are you applying for? page');
  }

  async selectCheckboxAndEnterOwnChemicalName(checkboxLabel: string, chemicalName: string): Promise<void> {
    await this.selectOwnChemicalCheckbox(checkboxLabel);

    // The source intentionally leaves "Describe your chemical" empty.
    const chemicalNameLabel = this.page.locator("xpath=//label[contains(normalize-space(.), 'Enter the chemical name')]").first();
    if (await chemicalNameLabel.count()) {
      const chemicalNameFieldId = await chemicalNameLabel.getAttribute('for');
      if (chemicalNameFieldId?.trim()) {
        await this.clearAndEnterTextInElement(this.page.locator(`[id="${chemicalNameFieldId}"]`), chemicalName);
        return;
      }
    }

    const ownChemicalNameField = this.page.locator("//input[contains(@id,'chemical-name') or contains(@name,'chemical-name')]").first();
    if (await ownChemicalNameField.count()) {
      await this.clearAndEnterTextInElement(ownChemicalNameField, chemicalName);
      return;
    }

    throw new Error('Unable to find own chemical name text field on Which chemical are you applying for? page');
  }
  async completeWhichChemicalAreYouApplyingForPage(value: string): Promise<void> {
    await this.assertPageTitle();
    await this.enterWhichChemicalAreYouApplyingFor(value);
    await this.clickSaveAndContinue();
  }

  async selectOwnChemicalCheckboxOnWhichChemicalAreYouApplyingForPage(checkboxLabel: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectOwnChemicalCheckbox(checkboxLabel);
  }

  async completeWhichChemicalAreYouApplyingForPageUsingOwnChemicalName(checkboxLabel: string, ownChemicalName: string): Promise<void> {
    await this.assertPageTitle();
    await this.selectCheckboxAndEnterOwnChemicalName(checkboxLabel, ownChemicalName);
    await this.clickSaveAndContinue();
  }

  async completeSelectedChemicalStep(checkboxLabel: string | null, ownChemicalName: string | null, defaultChemical: string): Promise<void> {
    if (checkboxLabel != null && !(checkboxLabel.trim().length === 0) && ownChemicalName != null && !(ownChemicalName.trim().length === 0)) {
      await this.completeWhichChemicalAreYouApplyingForPageUsingOwnChemicalName(checkboxLabel, ownChemicalName);
      return;
    }

    await this.completeWhichChemicalAreYouApplyingForPage(defaultChemical);
  }
}
