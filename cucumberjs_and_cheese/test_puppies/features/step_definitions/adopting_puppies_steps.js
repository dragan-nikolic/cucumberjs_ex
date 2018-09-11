const {Given, When, Then} = require('cucumber')
const assert = require('assert')

Given('I am on the puppy adoption site', async function () {
  await this.browser.url('http://puppies.herokuapp.com/')
})

When('I click the {string} View Details button', async function (ordinalNumber) {
  const ordinalNumberToIndex = {
    'first': 0,
    'second': 1,
    'third': 2
  }
  const elements = await this.browser.elements('[value="View Details"]')
  await this.browser.elementIdClick(elements.value[ordinalNumberToIndex[ordinalNumber]].ELEMENT)
})

When('I click the Adopt Me button', async function () {
  await this.browser.click('[value="Adopt Me!"]')
})

When('I check the litter', async function () {
  const tcells = await this.browser.elements('table tbody tr td')

  for (let i=0; i<tcells.value.length; i++) {
    console.log('trow', tcells.value[i])
    const element = await this.browser.elementIdText(tcells.value[i].ELEMENT)
    console.log('text', element.value)
  }
})

When('I click the Adopt Another Puppy button', async function () {
  await this.browser.click('[value="Adopt Another Puppy"]')
})

When('I click the Complete the Adoption button', async function () {
  await this.browser.click('[value="Complete the Adoption"]')
})

When('I enter {string} in the name field', async function (name) {
  await this.browser.setValue('#order_name', name)
})

When('I enter {string} in the address field', async function (address) {
  await this.browser.setValue('#order_address', address)
})

When('I enter {string} in the email field', async function (email) {
  await this.browser.setValue('#order_email', email)
})

When('I select {string} from the pay with dropdown', async function (payType) {
  await this.browser.selectByValue('#order_pay_type', payType)
})

When('I click the Place Order button', async function () {
  await this.browser.click('[value="Place Order"]')
})

Then('I should see message {string}', async function (message) {
  const pageText = await this.browser.getText('body')
  assert(pageText.includes(message), 'Adoption failed!')
})

Then('I should see the shopping cart with one puppy', async function () {
  await this.browser.waitForExist('h2=Your Litter')
  const numPuppies = await getNumberOfPuppiesInCart(this.browser)
  assert.equal(
    numPuppies, 
    1, 
    `There are incorrect number of puppies in the cart (${numPuppies})!`)
})

Then('The puppy name should be {string}', async function (puppyName) {
  const name = await getNameOfPuppy(this.browser, 0)
  assert.equal(
    name, 
    puppyName, 
    `Incorrect puppy name (${name})!`)
})

Then('The subtotal should be {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Then('The total should be {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

async function getNumberOfPuppiesInCart(browser) {
  const cartRows = await browser.elements('table tbody tr')
  return (cartRows.value.length-1)/6
}

async function getNameOfPuppy(browser, index) {
  const cartTable = await browser.elements('table tbody tr td')
  const element = await browser.elementIdText(cartTable.value[index*6+1].ELEMENT)
  
  return element.value.substring(0, element.value.length-1)
}
