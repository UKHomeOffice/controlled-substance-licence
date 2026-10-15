import { basePage } from '../base-page';
export class CdaHasTheManagingDirectorOrPersonInChargeSubscribedToDbsUpdatesPage extends basePage {
    async expectedPageTitle(): Promise<string> {
        return (await this.page.title()).startsWith("Error")
            ? "Error: Has the managing director or person in charge subscribed to DBS updates? – Controlled drugs application"
            : "Has the managing director or person in charge subscribed to DBS updates? – Controlled drugs application";
    }
}
