/*
Run: $ node <file>.js
*/

(async function() {
// async wrapper begin

const webdriverio = require('webdriverio')

async function clickOnItem(selector, index) {
  const elements = await browser.elements(selector)
  await browser.elementIdClick(elements.value[index].ELEMENT)
}

async function gotoPuppyAdoptionSite() {
  // create  webdriver
  const options = { 
    desiredCapabilities: { 
      browserName: 'chrome'
    } 
  }
  
  global.browser = webdriverio.remote(options)
  await browser.init()
  await browser.url('http:/puppies.herokuapp.com')
}

async function adoptPuppyNumber(number) {
  await clickOnItem('[value="View Details"]', number)
  await browser.click('[value="Adopt Me!"]')
}

async function continueAdoptingPuppies() {
  await browser.click('[value="Adopt Another Puppy"]')
}

async function checkoutWith(name, address, email, payType) {
  await browser.click('[value="Complete the Adoption"]')
  await browser.setValue('#order_name', name)
  await browser.setValue('#order_address', address)
  await browser.setValue('#order_email', email)
  await browser.selectByValue('#order_pay_type', payType)
  await browser.click('[value="Place Order"]')
}

async function verifyThankyouNote() {
  await browser.waitForExist('#notice=Thank you for adopting a puppy!', 5000)
}

async function closeTheBrowser() {
  await browser.end()
}

await gotoPuppyAdoptionSite()  
await adoptPuppyNumber(1)
await continueAdoptingPuppies()
await adoptPuppyNumber(2)
await checkoutWith('Cheezy', '123 Main St', 'cheezy@foo.com', 'Check')
await verifyThankyouNote()
await closeTheBrowser()  

// async wrapper end
})()
