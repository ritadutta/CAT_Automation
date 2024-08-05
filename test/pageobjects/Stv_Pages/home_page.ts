import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { parseJSON } from 'date-fns';
import * as fs from 'fs';


class HomePage {

  public get getSideNavIcon() {
    return $('//span[contains(text(),"menu")]');
  }

  public get homeIcon(){
    return $('//*[contains(@title, "Home")]');
  }

  public get helpIcon() {
    return $('#help-button');
  }

  public get profileIcon(){
    return $('#account-button');
  }

  public get rowsPerPage(){
    return $('//*[contains(@class, "selectLabel")]');
  }

  public get rowsPerPageDropDown(){
    return $('//*[contains(@class," css-194a1fa") ]');
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

  public get search(){
    return $('//input[contains(@class,"css-yz9k0d-MuiInputBase-input")]');
  }

  public get conventionNameCol(){
    return $('//*[contains(text(), "Convention Name") ]');
  }

  public get locationCol(){
    return $('//*[contains(text(), "Location") ]')
  }

  public get datesCol(){
    return $('//*[contains(text(), "Dates") ]');
  }

  public get reportCount(){
    return $('//*[contains(@class, "report-count") ]');
  }

  public get rightArrowIcon(){
    return $('//*[contains(@data-testid, "KeyboardArrowRightIcon") ]');
  }

  public get leftArrowIcon(){
    return $('//*[contains(@data-testid, "KeyboardArrowLeftIcon") ]');
  }
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async homePageBasicFunctionality() {
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.getSideNavIcon,"Hamburger Icon");
    await Utils.genericClick(this.getSideNavIcon,"Hamburger Icon");
    await Utils.isDisplayedGeneric(this.homeIcon,"Home Icon");
    const homeText= await (await $('//*[text()="Home"]')).getText();
    await Utils.toEqualAssertionTitle(homeText,"Home");
    await browser.pause(2000);
    await Utils.isDisplayedGeneric(this.helpIcon,"Help Icon");
    const helpText = await (await $('//*[text()="Help"]')).getText();
    await Utils.toEqualAssertionTitle(helpText,"Help");
    await Utils.isDisplayedGeneric(this.profileIcon,"Profile Icon");
    const title= await (await this.title).getText();
    await Utils.toEqualAssertionTitle(title,"Meetings & Conventions");
    await Utils.isDisplayedGeneric(this.appVersion,"App Version");
    await Utils.isDisplayedGeneric(this.reportCount,"Report Count");
  }

  

}
export default new HomePage();