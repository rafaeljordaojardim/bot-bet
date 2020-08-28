const puppeteer = require('puppeteer-extra')

/*const URL = 'https://mobile.bet365.com/';

puppeteer.use(require('puppeteer-extra-plugin-stealth')());

const self = {
  page: null,
  browser: null,

 
  initialize: async () => {
    self.browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      args: ["--no-default-browser-check"],
      ignoreDefaultArgs: ['--enable-automation'],
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
    self.page = await self.browser();
    
      await self.page.goto('https://bet365.com/', {waitUntil: 'load', timeout:0});
    
    
  },

  getResults: async(nr) => {
    //let elements = await self.page.eval('document.getElementsByClassName("hm-MainHeaderRHSLoggedOutNarrow_Login ")');
    letmyclassname = await self.page.evaluate(() => document.querySelector('.hm-MainHeaderRHSLoggedOutNarrow_Login ' ).className);
    console.log(elements);
  }

}

module.exports = self; */

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

 
// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
 
  console.log(`Testing adblocker plugin..`)
  await page.goto('https://bet365.com/')
  await page.waitFor(1000)
  await page.screenshot({ path: 'adblocker.png', fullPage: true })
 
  console.log(`Testing the stealth plugin..`)
  await page.goto('https://google.com/')
  await page.waitFor(5000)
  await page.screenshot({ path: 'stealth.png', fullPage: true })
 
  console.log(`All done, check the screenshots. ✨`)
  //await browser.close()
})