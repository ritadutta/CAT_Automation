import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import Logout from '../../pageobjects/Stv_Pages/logout_page'
import ProfilePage from '../../pageobjects/Stv_Pages/profile_page'
import HelpPage from '../../pageobjects/Stv_Pages/help_page'
import { profile } from 'console'

describe('All functionality CAT', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

    it('Verify Signin functionality ', async () => {
        await LoginPage.loginPage();
         await browser.pause(1000);
       });
    
    it('Verify Homepage and HelpPage functionality ', async () => {
          await HomePage.homePage();
          await HelpPage.helpPage();
       });
    

     it('Verify Profile Page functionality ', async () => {
        await ProfilePage.profilePage();
     });
     
     it('Verify Signout functionality ', async () => {
        await Logout.logoutPage();
     });

    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})