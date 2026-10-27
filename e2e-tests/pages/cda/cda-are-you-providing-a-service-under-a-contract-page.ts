import { basePage } from '../base-page';
export class CdaAreYouProvidingAServiceUnderAContractPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Are you providing a service under a contract? – Controlled drugs application"
            : "Are you providing a service under a contract? – Controlled drugs application";
    }
    async completeAreYouProvidingAServiceUnderAContractPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndContinue();
    }

    async completeAndSelectSaveAndExitAreYouProvidingAServiceUnderAContractPage(option: string): Promise<void> {
        await this.assertPageTitle();
        await this.selectRadioOptionWithText(option);
        await this.clickSaveAndAndExit();
    }
}
