import { expect } from '@playwright/test';
import CommonPage from './CommonPage';
export default class UserDetailsPage extends CommonPage {

    public async clickContinue() {
        await this.page.getByRole('button', { name: 'Sauvegarder et Continuer' }).click();
        await this.page.waitForTimeout(1000);
        console.log('Click the continue button');
    }

    public async getErrorAlertText(fieldname) {
        let errorLocator = `//*[contains(text(),'${fieldname}')]/parent::*/parent::div//span[@id='fieldControl-input-error-alert']`;
       return await this.page.locator(errorLocator).innerText();
    }

    public async assertErrorMessageForField(fieldName:string, errormessage:string){
        await expect(await this.getErrorAlertText(fieldName)).toEqual(errormessage);
        console.log(`Assert error message for field : ${fieldName}`);
    }
}