import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { parseJSON } from 'date-fns';


class HelpPage {
 
  public get getSideNavIcon() {
    return $('//button[contains(@class, "css-1yxmbwk")]');
  }

  public get helpIcon() {
    return $('//*[contains(@class, "help-text css-1tsvksn")]');
  }

  public get submitTicketLink(){
    return $('//*[@class="helpLink"]');
  }

  public get accessHelpResourceLink(){
    return $('//*[text()="Access Help Resources"]');
  }

  public get provideFeedbackLink(){
    return $('//*[text()="Provide Feedback"]');
  }
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async helpPage() {
    await browser.pause(1000);
    await (await this.getSideNavIcon).isDisplayed();
    (await this.helpIcon).isDisplayed();
    (await this.helpIcon).click();
    browser.pause(2000);
    await this.submitTicketLink.isDisplayed();
    (await this.accessHelpResourceLink).isDisplayed();
    (await this.provideFeedbackLink).isDisplayed();
    browser.pause(2000);
    (await this.submitTicketLink).click();
     // Get the current window handle (main window)
     const mainWindowHandle = await browser.getWindowHandle();
     // Get all window handles (including the main window and the new tab)
    const allWindowHandles = await browser.getWindowHandles();
     // Switch to the new tab
    const newTabHandle = allWindowHandles.find(handle => handle !== mainWindowHandle);
    await browser.switchToWindow(newTabHandle);
      // Get the URL of the new tab
    const supportTabUrl = await browser.getUrl();
    console.log('URL of the support tab:', supportTabUrl);
    expect(supportTabUrl).toMatch("https://support.zartico.com/the-zartico-way/support");
     // Close the new tab
    await browser.closeWindow();
     // Switch back to the main window
    await browser.switchToWindow(mainWindowHandle);
  }


}
export default new HelpPage();