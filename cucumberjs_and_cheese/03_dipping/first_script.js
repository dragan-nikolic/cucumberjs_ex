/*
Run: $ node <file>.js
*/

(async function() {
// async wrapper begin

const webdriverio = require('webdriverio')

// create  webdriver
const options = { 
  desiredCapabilities: { 
    browserName: 'chrome'
  } 
}

const browser = webdriverio.remote(options)
await browser.init()
await browser.url('http:/www.apple.com')

// async wrapper end
})()
