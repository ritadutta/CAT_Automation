import login_page from '../../pageobjects/Stv_Pages/login_page';
import LoginPage from '../../pageobjects/Stv_Pages/login_page';
import logout from '../../pageobjects/Stv_Pages/logout_page';

describe('Login User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

     it('Verify user is able to login', async () => {
     await LoginPage.loginPage();
     await logout.logoutPage();
    });   
     
    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})