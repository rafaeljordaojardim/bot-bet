const puppeteer = require('puppeteer')

const URL = (reddit) => `https://old.reddit.com/r/${reddit}/`;

const self = {
  browser: null,
  page: null,

  initialize: async (reddit) => {
    self.browser = await puppeteer.launch({
      headless: false
    });
    self.page = await self.browser.newPage();

    await self.page.goto(URL(reddit), { waitUntil: 'networkidle0' });
  }
}

module.exports = self;