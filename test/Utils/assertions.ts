import AllureReporter from '@wdio/allure-reporter'
import { Key } from 'webdriverio';
class Assertion {

    addLog(log:string){
        AllureReporter.addStep(`STEP: ${log}`)
       // console.log(`STEP: ${log}`)
    }
 
    toContain(actual:string, expected:string){
        expect(actual).toContain(expected)
       // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
        console.log(`assertion >> ${actual} to contain ${expected} `)
    }

    toContainGenericAssertion(actual: string, expected: string) {
        expect(actual).toContain(expected)
        // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
        driver.logUtil("PASS", "assertion >> " + '"' + actual + '"' + " to contain " + '"' + expected + '"' + " are matched")
    }

    async genericGetText(element : Promise<WebdriverIO.Element>) {
       if((await element).isDisplayed){
        const text = await (await element).getText();
            driver.logUtil("INFO","Fetched the text : "+text)
        }else{
            driver.logUtil("FAIL","Element not displayed to fetch text")
        }  
    }
    public async swipeRight(num){
        for(var i=1;i<=num;i++){
            browser.keys([Key.ArrowRight]);
        }
    }

    public async swipeDown(num){
        for(var i=1;i<=num;i++){
            browser.keys([Key.ArrowDown]);
        }
    }

    public async generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
    }

    public  currentDateAppender(dateChooser : string) : string{
        let currentDate: any;

        switch(dateChooser)
        {
        case "presentDate":  // Get the current date
              currentDate = new Date();
                //console.log(currentDate)
                break;
        
        case "futureDate":
                // Add five days to the current date
                currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + 3);
                break;
                
        case "previousDate":
                currentDate = new Date();
                currentDate.setDate(currentDate.getDate() - 3);
                break;
        
        case "nextMonthDate":
                currentDate = new Date();
                currentDate.setDate(currentDate.getDate() + 31);
                break;     
                
        default:
                currentDate = 'Invalid date method chooser';
                
        }       
          return currentDate;
    }
    
public switchToChildTab(){
// Example usage:
const handles = browser.getWindowHandles();
// Assuming the second tab is what you want to switch to 
const secondTab = handles[2]; 
browser.switchToWindow(secondTab);
driver.logUtil("PASS","Switch to child window tab");
}
    

    async scrollDown(count:number,distance:number) {
        for(let i=1;i<=count;i++){
         await browser.scroll(0,distance)
             driver.logUtil("INFO","Scrolling the page downwards")    
        }
     }
     async scrollUp(count:number,distance:number) {
        for(let i=1;i<=count;i++){
        await browser.scroll(0,distance)
             driver.logUtil("INFO","Scrolling the page upwards")
        }
     }
      

    
    
    
    }



export default new Assertion()
