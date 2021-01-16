const { expect } = require("chai");

class LoginPage {

    async navigate() {
        await page.goto('http://awswrkshpalb-1570520390.us-west-2.elb.amazonaws.com:3000/cts-shop/login');
        await page.waitForSelector('#email',{Timeout:10000});
    }
    async login(username, password) {
        await page.waitForSelector('#email');
        await page.type('#email', username);
        await page.type('#password',password);
        await page.click('form.login > .MuiButtonBase-root > .MuiButton-label');
    }
    async loginFailed(){
        await page.waitForSelector('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]',{Timeout:10000});
       // let error = await page.$eval('[class="MuiTypography-root MuiTypography-caption MuiTypography-colorSecondary MuiTypography-alignCenter"]', (errortext) => errortext.textContent);
       // expect (error).to.include("Customer not found")
    }
    async createAccount(fname,lname,email,password){
        let random = Math.floor(Math.random()*90000) + 10000;
        email = email.replace('Ashish','Ashish'+random); 
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('div.login > .MuiButtonBase-root > .MuiButton-label')
        ]);
        await page.waitForSelector('#firstname',{timeout:10000});
        await page.type('#firstname', fname);
        await page.type('#lastname', lname);
        await page.type('#registeremail', email);
        await page.type('#password', password);
        await page.type('#confirmpassword', password);      
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('form.register > .MuiButtonBase-root > .MuiButton-label')
        ]);
    }
    async loginSuccessful(){
        await page.waitForSelector('input[aria-label="Product search"]') 
        //await page.$('input[aria-label="Product search"]');
        //expect (element).to.not.be.null;
    }
  }
  module.exports = { LoginPage };