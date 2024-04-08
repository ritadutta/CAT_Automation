import HomePage from '../../pageobjects/Stv_Pages/home_page';
const axios = require("axios");
const { faker } = require("@faker-js/faker");
import fs from "fs";
import API from '../../Utils/apiRequests';
class GETRequest{

public async get_checkAuthCAT() {
  const accessToken = fs.readFileSync('accessToken.txt', 'utf-8');

  const res= await API.GET("https://bff-dev-2xy7o3x5wq-uc.a.run.app/api/v1/cat/check-auth-cat",accessToken);
  driver.logUtil("The response body is: ",res);
  
    fs.unlink('accessToken.txt', (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log('File deleted successfully.');
    });
}
  }
export default new GETRequest();