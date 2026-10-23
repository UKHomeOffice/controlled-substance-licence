import { basePage } from '../base-page';
export class CdaDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)? – Controlled drugs application"
            : "Does your business possess any licences issued by the Medicines and Healthcare products Regulatory Agency (MHRA)? – Controlled drugs application";
    }
    async completeDoesYourBusinessPossessAnyLicencesIssuedByTheMedicinesAndHealthcareProductsRegulatoryAgencyMhraPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndContinue();
    }
}
