import { basePage } from '../base-page';
export class CdaLicenceDetailsPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Licence details – Controlled drugs application"
            : "Licence details – Controlled drugs application";
    }
    async completeLicenceDetailsPage(): Promise<void> {
        await this.assertPageTitle();
        await this.clickSaveAndContinue();
    }
}
