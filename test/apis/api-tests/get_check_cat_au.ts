import HomePage from '../../pageobjects/Stv_Pages/home_page';
const axios = require("axios");
const { faker } = require("@faker-js/faker");
import fs from "fs";
// const accessToken= HomePage.getAccessToken();
// console.log("Access token is ----",accessToken);
class GETRequest{

public async get_checkAuthCAT() {
  const accessToken = fs.readFileSync('accessToken.txt', 'utf-8');
    const res = await axios
      .get("https://bff-dev-2xy7o3x5wq-uc.a.run.app/api/v1/cat/check-auth-cat",
        {
          headers: {
            'accept': "application/json",
            Authorization: "Bearer " + accessToken + "",
          },
        }
      )
      .then((res) => res.data);
    console.log("Response is",res);
    if (res.statusCode === 200) {
      console.log("PASS", res.statusCode );
    } else {
        console.log("FAIL",res.statusCode );
    }
}
  }
export default new GETRequest();