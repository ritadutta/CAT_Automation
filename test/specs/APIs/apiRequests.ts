import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import api from '../../apis/api-tests/get_check_cat_au'

describe('API get request User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

     it('Verify the get api', async () => {
        await LoginPage.loginPage();
        await LoginPage.getAccessToken();
       await browser.pause(2000);
        await api.get_checkAuthCAT();
    
    });

    afterEach(async () => {
        await browser.pause(2000)
        // await browser.reloadSession();
    });
   
})