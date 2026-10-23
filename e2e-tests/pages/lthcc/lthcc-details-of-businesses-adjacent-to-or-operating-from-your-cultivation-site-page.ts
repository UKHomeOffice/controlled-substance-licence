import { Locator, Page } from '@playwright/test';
import { basePage } from '../base-page';

export class LthccDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage extends basePage {
    readonly businessNameField: Locator;
    readonly typeOfBusinessField: Locator;
    readonly whoOwnOfBusinessField: Locator;
    readonly describeBusinessField: Locator;
    readonly referenceField: Locator;

    constructor(page: Page) {
        super(page);
        this.businessNameField = page.locator('#business-name');
        this.typeOfBusinessField = page.locator('#business-type');
        this.whoOwnOfBusinessField = page.locator('#business-owner');
        this.describeBusinessField = page.locator('#business-involvement');
        this.referenceField = page.locator('#ordnance-survey-reference');
    }

    async expectedPageTitle(): Promise<string> {
        return this.withErrorPrefix('Details of businesses adjacent to or operating from your cultivation site – Industrial hemp application');
    }

    async enterDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSite(businessName: string, typeOfBusiness: string, whoOwnOfBusiness: string, describeBusiness: string, reference: string): Promise<void> {
        await this.clearAndEnterTextInElement(this.businessNameField, businessName);
        await this.clearAndEnterTextInElement(this.typeOfBusinessField, typeOfBusiness);
        await this.clearAndEnterTextInElement(this.whoOwnOfBusinessField, whoOwnOfBusiness);
        await this.clearAndEnterTextInElement(this.describeBusinessField, describeBusiness);
        await this.clearAndEnterTextInElement(this.referenceField, reference);
    }
    async completeDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSitePage(businessName: string, typeOfBusiness: string, whoOwnOfBusiness: string, describeBusiness: string, reference: string): Promise<void> {
        await this.assertPageTitle();
        await this.enterDetailsOfBusinessesAdjacentToOrOperatingFromYourCultivationSite(businessName, typeOfBusiness, whoOwnOfBusiness, describeBusiness, reference);
        await this.clickSaveAndContinue();
    }
}
