import login_page from '../../pageobjects/Stv_Pages/login_page';
import LoginPage from '../../pageobjects/Stv_Pages/login_page'

describe('Login User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

     it('Verify user is able to login through cookies baaner', async () => {
     await LoginPage.loginPage();
    //  await LoginPage.getAccessToken();
    //  console.log("Access token is",await LoginPage.getAccessToken());
    });

   
     
    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})