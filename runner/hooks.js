const {BeforeAll, Before, AfterAll, After} = require ('cucumber')
const puppeteer = require('puppeteer');
//let moonHost = process.env.moonHostIp;
//let moonHost = '52.186.103.162';
let moonHost = '';

// Create a global browser for the test session.
BeforeAll(async() =>{
        if (moonHost){
                console.log(moonHost)
                global.browser = await puppeteer.connect({
                timeout: 10000,
                browserWSEndpoint : 'ws://'+moonHost+':4444/cdtp/chrome',
                headless:false
            });
        }
        else{
            console.log(moonHost)  
            global.browser = await puppeteer.launch({timeout:10000});
        }
});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async() =>{
    global.context = await global.browser.createIncognitoBrowserContext();
    global.page = await global.context.newPage();
    
});

After(async() => {
    global.context.close();
    global.page.close();
});
