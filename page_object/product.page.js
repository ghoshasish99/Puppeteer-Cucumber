const { expect } = require("chai");

class ProductPage {
    async searchProduct(item){
        await page.waitForSelector('#productsearch') 
        await page.type("#productsearch",item);
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('#searchicon')
        ]);
    }

    async productSearchSuccessful(item){
        await page.$('.MuiCardContent-root > :nth-child(1)');
    }

    async addProduct(item){
        await page.waitForXPath('//*[text()="'+item+'"]',{timeout:1000});
        const products = await page.$x('//*[text()="'+item+'"]')
        await products[0].click()
        const elements = await page.$x('//button/span[text()="Add to your basket"]')
        await elements[0].click()
        await page.click("#basket")
        await page.waitForSelector("#proceedtocheckout")
    }

    async productAddSuccessful(item){
        await page.$('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label');
    }

    async proceedToCheckOut(){
        await page.click('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label');        
    }   
}

module.exports = { ProductPage };