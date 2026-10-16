import { expect, Page } from '@playwright/test';
import type { Pages } from '../fixture/fixture';

export class CommonCslStepLib {
  protected activePage: Page;

  constructor(protected readonly pages: Pages) {
    this.activePage = pages.basePage.page;
  }

  async getPageHeaderText() { return this.activePage.locator('h1').innerText(); }

  generateRandomStringOfLength(length: string) {
    if (!/^\d+$/.test(length)) throw new Error(`Invalid random string length: ${length}`);
    return this.pages.basePage.generateRandomAlphabetString(Number(length));
  }

  async switchToTab(index: number) {
    await expect.poll(() => this.pages.basePage.page.context().pages().length).toBeGreaterThan(index);
    this.activePage = this.pages.basePage.page.context().pages()[index];
    await this.activePage.waitForLoadState('domcontentloaded');
  }

  getOpenTabCount() { 
    return this.pages.basePage.page.context().pages().length; 
  }

  getCurrentUrl() {
     return this.activePage.url(); 
  }
}
