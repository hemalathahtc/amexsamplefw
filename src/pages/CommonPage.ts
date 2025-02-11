import { expect, type Locator, type Page } from '@playwright/test';
export default class CommonPage {
    readonly page: Page;
    readonly acceptCookie :Locator;
    constructor(page:Page) { this.page = page;
        this.acceptCookie = page.locator('//button[contains(text(),"Tout Accepter")]');
    }

    public async gotoLink(link:string){
        await this.page.goto(link);
        console.log(`opening link : ${link}`);
    }
    public async acceptCookies() {
        const isPopup =await this.acceptCookie.isEnabled();
        console.log(isPopup);
       if (isPopup) {
        await this.acceptCookie.click();
        console.log("Accepted cookies to continue on the page");
       }
    }

    public async assertPageTitle(expectedTitle :string){
        await expect(this.page).toHaveTitle(expectedTitle);
        console.log(`assert page title has : ${expectedTitle}`);
    }

    public async enterValue(elementName:string, value:string){
        await this.page.getByRole('textbox', { name: elementName, exact: true }).fill(value);
        console.log (`enter value ${value} for textbox :${elementName}`);
    }

    public async selectOption(option:string){
        await this.page.locator('label').filter({ hasText: option }).click();
        console.log(`select option ${option}`);
    }

}