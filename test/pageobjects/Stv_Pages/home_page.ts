import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { parseJSON } from 'date-fns';
import * as fs from 'fs';


class HomePage {

  public get getSideNavIcon() {
    return $('//button[contains(@class, "css-1yxmbwk")]');
  }

  public get homeIcon(){
    return $('//*[contains(@title, "Home")]');
  }

  public get signOutIcon() {
    return $('//*[contains(@title, "Sign Out")]');
  }

  public get helpIcon() {
    return $('//*[contains(@class, "help-text css-1tsvksn")]');
  }

  public get profileIcon(){
    return $('#account-button');
  }

  public get filterIcon(){
    return $('//*[contains(@class, "filterButton css-1cuyamw")]');
  }

  public get rowsPerPageDropDownIcon(){
    return $('//*[contains(@class, "css-157zcnj")]');
  }

  public get appVersion(){
    return $('//*[contains(@class, "app-version")]');
  }

  public get imageBarChart(){
    return $('//*[contains(@alt, "City and Bar Chart")]');
  }

  
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async homePage() {
    await browser.pause(1000);
    await (await this.getSideNavIcon).isDisplayed();
    await (await this.getSideNavIcon).click();
    await (await this.homeIcon).isDisplayed();
    const homeText= await (await $('//*[text()="Home"]')).getText();
    expect(homeText).toEqual("Home");
    await (await this.signOutIcon).isDisplayed();
    // const signOutText = (await $('//*[text()="Sign Out"]')).getText();
    // expect(signOutText).toEqual("Sign Out");
    await browser.pause(2000);
    await (await this.helpIcon).isDisplayed();
    // const helpText = (await $('//*[text()="Help"]')).getText();
    // console.log("Help text",await helpText);
    // await browser.pause(2000);
    // expect(helpText).toEqual("Help");
    await (await this.profileIcon).isDisplayed();
    await (await this.filterIcon).isDisplayed();
    //await (await this.rowsPerPageDropDownIcon).click();
    await (await this.imageBarChart).isDisplayed();
    // const heading = await $('//*[text()="Convention Reports"]');
    // console.log("heading text",await heading);
    // await browser.pause(2000);
    // expect(heading).toEqual("Convention Reports");
    
  }

  

}
export default new HomePage();