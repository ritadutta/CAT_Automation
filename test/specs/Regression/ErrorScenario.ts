import HomePage from '../../pageobjects/Stv_Pages/home_page'
import LoginPage from '../../pageobjects/Stv_Pages/login_page'
import Logout from '../../pageobjects/Stv_Pages/logout_page'
import ProfilePage from '../../pageobjects/Stv_Pages/profile_page'
import HelpPage from '../../pageobjects/Stv_Pages/help_page'
import { profile } from 'console'

describe('Error Scenarios', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

    it('Verify user getting error message while giving wrong email id', async () => {
        await LoginPage.wrongEmail();
    });

    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})