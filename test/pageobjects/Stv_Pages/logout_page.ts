import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'


class LogoutPage {
 
  public get getSideNavIcon() {
    return $('//button[contains(@class, "css-1yxmbwk")]');
  }

  public get profileSection(){
    return $('//*[text()="Help"]/following::*[text()="chevron_right"][2]');
  }

  public get signOutLink(){
    return $('//li[contains(@class,"signOut")]');
  }

  public get closeIcon(){
    return $('//*[contains(@data-testid, "CloseIcon")]');
  }

  public get signOutButton() {
    return $('//button[contains(@class,"css-1i8u2f7")]');
  }

  
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async logoutPage() {
    await (await this.profileSection).click();
    await browser.pause(1000);
    // await (this.signOutLink).isDisplayed();
    // await (await this.signOutLink).click();
    // if((await this.closeIcon).isDisplayed())
    // {
    //     (await this.closeIcon).click();
    //     await browser.pause(1000);
    // }
    // else{
    //     console.log("close icon not visible");
    // }
    // await browser.pause(3000);
    await (this.signOutLink).isDisplayed();
    await (await this.signOutLink).click();
    await browser.pause(3000);
    (await this.signOutButton).click();
    await browser.pause(10000);
  }

}
export default new LogoutPage();