const { expect } = require("chai");

class PaymentPage{

    async enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip){
        await Promise.all([
            page.waitForNavigation({timeout:10000}),
            page.click('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label')
        ]);
        await page.type('#datitle', title);
        await page.type('#dafirstname', fname);
        await page.type('#dalastname', lname);
        await page.type('#daaddressline1', addr1);
        await page.type('#daaddressline2', addr2);
        await page.type('#dacity', city);
        await page.type('#dastateprovinceregion', state);
        await page.type('#dazippostcode', zip);
    }

    async enterPaymentDetails(cardNo,name,month,year,code){
        await page.click('#buttonnext > .MuiButton-label')
        await page.type('#cardnumber', cardNo);
        await page.type('#nameoncard', name);
        await page.type('#expirymonth', month);
        await page.type('#expiryyear', year);
        await page.type('#securitycode', code);
        await page.click('#buttonconfirm > .MuiButton-label');
    }
}

module.exports = { PaymentPage };