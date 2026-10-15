import { Page } from '@playwright/test';
import { basePage } from '../base-page';

export class RegDoesYourBusinessPossessAnyLicensesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage extends basePage {

    constructor(page: Page) {
        super(page);
    }

    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith('Error')
            ? "Error: MHRA licences – Register for controlled substance licensing"
            : "MHRA licences – Register for controlled substance licensing";
    }
}
