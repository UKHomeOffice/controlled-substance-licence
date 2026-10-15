import { basePage } from '../base-page';
export class CdaIsThePremisesAddressTheSameAsTheLicenceHolderAddressPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Is the premises address the same as the licence holder address? – Controlled drugs application"
            : "Is the premises address the same as the licence holder address? – Controlled drugs application";
    }
}
