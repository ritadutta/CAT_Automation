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

  public get title(){
    return $('//div[@class="header"]/child::div/child::h1');
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
    await Utils.isDisplayedGeneric(this.getSideNavIcon,"Hamburger Icon");
    await Utils.genericClick(this.getSideNavIcon,"Hamburger Icon");
    await Utils.isDisplayedGeneric(this.homeIcon,"Haome Icon");
    const homeText= await (await $('//*[text()="Home"]')).getText();
    await Utils.toEqualAssertionTitle(homeText,"Home");
    await browser.pause(2000);
    await Utils.isDisplayedGeneric(this.helpIcon,"Help Icon");
    const helpText = await (await $('//*[text()="Help"]')).getText();
    await Utils.toEqualAssertionTitle(helpText,"Help");
    await Utils.isDisplayedGeneric(this.profileIcon,"Profile Icon");
    await Utils.isDisplayedGeneric(this.filterIcon,"Filter option");
    const title= await (await this.title).getText();
    await Utils.toEqualAssertionTitle(title,"Convention Reports");
  }

  

}
export default new HomePage();