import { test } from '@playwright/test';
import HomePage from '../src/pages/homepage';


test.describe('Amex FR cards verification', () => {

    test('Open FR homepage and fill Cartes Gold American Express user application form', async ({ page }) => {
        const amexHomepage = new HomePage(page);
        await new HomePage(page).navigateToHomePage();
        const cardsPage = await amexHomepage.clickCard('Cartes American Express®');
        await cardsPage.acceptCookies();
        const goldPage = await cardsPage.clickEnsaviourPlusForGoldAmex();
        const userDetailsPage = await goldPage.clickDemandezVotreCarte();
        await userDetailsPage.selectOption('M.');
        await userDetailsPage.enterValue('Prénom', 'abc');
        await userDetailsPage.enterValue('Nom', 'def');
        await userDetailsPage.enterValue('Date de naissance (JJ/MM/AAAA)', '12/03/2000');
        await userDetailsPage.enterValue('Adresse e-mail', 'abc@def.com');
        await userDetailsPage.enterValue('Numéro de téléphone portable', '0612345678');
        await userDetailsPage.clickContinue();
    });


    test('test to vaildate field values', async ({ page }) => {
        const amexHomepage = new HomePage(page);
        await new HomePage(page).navigateToHomePage();
        const cardsPage = await amexHomepage.clickCard('Cartes American Express®');
        await cardsPage.acceptCookies();
        const goldPage = await cardsPage.clickEnsaviourPlusForGoldAmex();
        const userDetailsPage = await goldPage.clickDemandezVotreCarte();
        await userDetailsPage.clickContinue();
        await userDetailsPage.assertErrorMessageForField("Civilité","Merci de préciser votre civilité.");
        await userDetailsPage.assertErrorMessageForField("Prénom","Prénom obligatoire.");
        await userDetailsPage.assertErrorMessageForField("Nom","Nom obligatoire.");
        await userDetailsPage.assertErrorMessageForField("Date de naissance (JJ/MM/AAAA)","Vous devez avoir plus de 18 ans.");
        await userDetailsPage.assertErrorMessageForField("Adresse e-mail","Merci de vérifier le format de votre adresse email (exemple : nom@domaine.fr). Les caractères autorisés sont : lettres, chiffres, tirets (_-), arobase (@), et point (.).");
        await userDetailsPage.assertErrorMessageForField("Numéro de téléphone portable","Téléphone mobile obligatoire en chiffres uniquement et sans espaces. Exemple France, Guadeloupe, Martinique, Guyane, La Réunion, Saint- Barthélemy, Saint Martin, Mayotte: - 0612345678 - 0712345678 IMPORTANT : Pour tout autre pays ou région, dont Polynésie Française et Nouvelle Calédonie, merci de sélectionner l’indicatif du territoire correspondant et saisir le numéro de mobile sans le préfixe « 0 » au début.");
    });
});

test.afterAll(async () => {
    console.log('Done with tests');
});