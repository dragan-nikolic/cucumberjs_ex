const webdriverio = require('webdriverio')

let browser

async function clickOnItem(selector, index) {
  const elements = await browser.elements(selector)
  await browser.elementIdClick(elements.value[index].ELEMENT)
}

exports.gotoPuppyAdoptionSite = async function() {
  // create  webdriver
  const options = { 
    desiredCapabilities: { 
      browserName: 'chrome'
    } 
  }
  
  browser = webdriverio.remote(options)
  await browser.init()
  await browser.url('http:/puppies.herokuapp.com')
}

exports.adoptPuppyNumber = async function(number) {
  await clickOnItem('[value="View Details"]', number)
  await browser.click('[value="Adopt Me!"]')
}

exports.continueAdoptingPuppies = async function() {
  await browser.click('[value="Adopt Another Puppy"]')
}

exports.checkoutWith = async function(name, address, email, payType) {
  await browser.click('[value="Complete the Adoption"]')
  await browser.setValue('#order_name', name)
  await browser.setValue('#order_address', address)
  await browser.setValue('#order_email', email)
  await browser.selectByValue('#order_pay_type', payType)
  await browser.click('[value="Place Order"]')
}

exports.verifyThankyouNote = async function() {
  await browser.waitForExist('#notice=Thank you for adopting a puppy!', 5000)
}

exports.closeTheBrowser = async function() {
  await browser.end()
}
