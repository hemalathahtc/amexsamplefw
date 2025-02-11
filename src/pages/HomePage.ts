import AllCardsPage from './AllCardsPage';
import CommonPage from './CommonPage';
export default class HomePage extends CommonPage {
     
    public async navigateToHomePage() {
        await this.gotoLink('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
        await this.assertPageTitle("American Express FR : Cartes de Paiement & Services Privilégiés");
        await this.acceptCookies();
    }

    public async clickCard(cardName:string){
        await this.page.getByRole('link', { name: cardName }).click();
        console.log(`click the card : ${cardName}`);
        return new AllCardsPage(this.page);
    }
   
}