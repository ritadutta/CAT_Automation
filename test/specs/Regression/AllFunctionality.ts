import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import Logout from '../../pageobjects/Stv_Pages/logout_page'
import ProfilePage from '../../pageobjects/Stv_Pages/profile_page'
import HelpPage from '../../pageobjects/Stv_Pages/help_page'
import logout_page from '../../pageobjects/Stv_Pages/logout_page'

describe('All functionality CAT', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

    it('Verify Signin functionality ', async () => {
      await LoginPage.loginPage();
      await browser.pause(1000);
      await Logout.logoutPage();
   });
   
   it('Validation of support ticket',async () =>{
      await LoginPage.loginPage();
      await browser.pause(1000);
      await HelpPage.helpPage();
      await Logout.logoutPage();
   });

   it('Validation of sidenav content', async () =>{
      await LoginPage.loginPage();
      await browser.pause(1000);
      await HomePage.homePage();
      await Logout.logoutPage();
   });

   it('Validation of account modal', async () =>{
      await LoginPage.loginPage();
      await browser.pause(1000);
      await ProfilePage.profilePage();
      await Logout.logoutPage();
   });

    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})