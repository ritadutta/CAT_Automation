
import searchPage from '../pageobjects/Stv_Pages/search_page'

class GenericMethod{

async clickOnFirstSuggestionSearch() {
    if (await searchPage.firstSearchSuggestion.isDisplayed()){
        (await searchPage.firstSearchSuggestion).click;
     const text =await searchPage.firstSearchSuggestion.getText();
     driver.logUtil("INFO","Clicked on first suggestion: "+text)
     }else{
         driver.logUtil("FAIL","Element not displayed to fetch text")
     }  
 }
}
export default new GenericMethod();