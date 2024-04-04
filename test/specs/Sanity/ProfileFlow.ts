import home_page from '../../pageobjects/Stv_Pages/home_page';
import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import ProfilePage from '../../pageobjects/Stv_Pages/profile_page'

describe('Login User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

     it('Verify the profile page functionality', async () => {
    //  await LoginPage.loginPage();
     await browser.pause(1000);
    //  await HomePage.homePage();
     await ProfilePage.profilePage();
    });

     
    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})