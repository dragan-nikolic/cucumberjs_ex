/*
Run: $ node <file>.js
*/

(async function() {
// async wrapper begin

const webdriverio = require('webdriverio')

async function clickOnItem(browser, selector, index) {
  const elements = await browser.elements(selector)
  await browser.elementIdClick(elements.value[index].ELEMENT)
}

// create  webdriver
const options = { 
  desiredCapabilities: { 
    browserName: 'chrome'
  } 
}

const browser = webdriverio.remote(options)
await browser.init()
await browser.url('http:/puppies.herokuapp.com')

await clickOnItem(browser, '[value="View Details"]', 1)
await browser.click('[value="Adopt Me!"]')
await browser.click('[value="Adopt Another Puppy"]')
await clickOnItem(browser, '[value="View Details"]', 2)
await browser.click('[value="Adopt Me!"]')
await browser.click('[value="Complete the Adoption"]')
await browser.setValue('#order_name', 'Cheese')
await browser.setValue('#order_address', '123 Main St.')
await browser.setValue('#order_email', 'cheese@foo.com')
await browser.selectByValue('#order_pay_type', 'Check')
await browser.click('[value="Place Order"]')
await browser.waitForExist('#notice=Thank you for adopting a puppy!', 5000)

await browser.end()

// async wrapper end
})()
