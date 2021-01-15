const { expect } = require("chai");

class ProductPage {
    async searchProduct(item){
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
        await page.click('.MuiCardContent-root > :nth-child(1)');
        await page.click('.MuiCardContent-root > .MuiButton-containedSecondary > .MuiButton-label');
        await page.click('.MuiBadge-root .MuiSvgIcon-root path');
    }

    async productAddSuccessful(item){
        await page.$('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label');
    }

    async proceedToCheckOut(){
        await page.click('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label');        
    }   
}

module.exports = { ProductPage };