import CommonPage from './CommonPage';
import UserDetailsPage from './UserDetailsPage';
export default class GoldCardPage extends CommonPage {

    public async clickDemandezVotreCarte(){
        await this.page.locator('#pdp-side-railwrapper').getByRole('link', { name: 'Demandez votre Carte' }).click();
        console.log(`click the button Demandez votre Carte`);
        return new UserDetailsPage(this.page);
    }
}
