import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { parseJSON } from 'date-fns';


class ProfilePage {
 
  public get getSideNavIcon() {
    return $('//button[contains(@class, "css-1yxmbwk")]');
  }
  
  public get profileIcon(){
    return $('#account-button');
  }

  public get profileSection(){
    return $('//*[text()="Help"]/following::*[text()="chevron_right"][2]');
  }

  public get viewMyAccountLink(){
    return $(".viewMyAccountLink");
  }

  public get goToMyZartico(){
    return $('//*[text()="Go to My Zartico"]');
  }

  

  
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async profilePage() {
    await browser.pause(1000);
    await (await this.getSideNavIcon).isDisplayed();
    (await this.profileIcon).isDisplayed();
    (await this.profileSection).click();//After clicking on this all the links should be displayed
    (await this.viewMyAccountLink).isDisplayed();
    (await this.goToMyZartico).isDisplayed();
    browser.pause(2000);
    (await this.viewMyAccountLink).click();
    browser.pause(10000);
    // Get the current window handle (main window)
    const mainWindowHandle = await browser.getWindowHandle();
    // Get all window handles (including the main window and the new tab)
    const allWindowHandles = await browser.getWindowHandles();
    // Switch to the new tab
    const newTabHandle = allWindowHandles.find(handle => handle !== mainWindowHandle);
    await browser.switchToWindow(newTabHandle);
     // Get the URL of the new tab
     const newTabUrl = await browser.getUrl();
     console.log('URL of the new tab:', newTabUrl);
     expect(newTabUrl).toEqual("https://my.zartico.com/learn/my-profile");
     // Close the new tab
     await browser.closeWindow();
     // Switch back to the main window
     await browser.switchToWindow(mainWindowHandle);
     browser.pause(3000);
     (await this.profileSection).click();
    //  (await this.goToMyZartico).click();
    //  browser.pause(10000);
    //  const zarticoHomeurl = await browser.getUrl();
    //  console.log('URL of the current tab:', await zarticoHomeurl);
     // Navigate back to the previous page
     // await browser.back();
     browser.pause(1000);
    
  }

}
export default new ProfilePage();