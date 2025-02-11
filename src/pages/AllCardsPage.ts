import CommonPage from './CommonPage';
import GoldCardPage from './GoldCardPage';
export default class AllCardsPage extends CommonPage {

public async clickEnsaviourPlusForGoldAmex():Promise<GoldCardPage>{
    await this.page.getByRole('link', { name: 'En savoir plus' }).nth(1).click();
    console.log("click on En savoir plus under Cartes Gold American Express");
    return new GoldCardPage(this.page);
}

}