import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import Logout from '../../pageobjects/Stv_Pages/logout_page'
import ProfilePage from '../../pageobjects/Stv_Pages/profile_page'
import HelpPage from '../../pageobjects/Stv_Pages/help_page'
import { profile } from 'console'

describe('Logout User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });


     it('Verify the logout functionality', async () => {
     await LoginPage.loginPage();
     await browser.pause(1000);
    //  await HomePage.homePage();
    //  await browser.pause(1000);
    //  await ProfilePage.profilePage();
    //  await browser.pause(1000);
    //  await HelpPage.helpPage();
    //  await browser.pause(1000);
     await Logout.logoutPage();
    });

     
    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})