const {Given, When, Then} = require('cucumber')
const assert = require('assert')

const ordinalNumberToIndex = {
  'first': 0,
  'second': 1,
  'third': 2
}

// Temp step to investigate shopping cart table
When('I check the litter', async function () {
  const tcells = await this.browser.elements('table tbody tr td')

  for (let i=0; i<tcells.value.length; i++) {
    //console.log(`cell ${i}`, tcells.value[i])
    const element = await this.browser.elementIdText(tcells.value[i].ELEMENT)
    console.log(`text ${i}`, element.value)
  }
})

Given('I am on the puppy adoption site', async function () {
  await this.browser.url('http://puppies.herokuapp.com/')
})

When('I click the {string} View Details button', {timeout: 30000}, async function (ordinalNumber) {
  const elements = await this.browser.elements('[value="View Details"]')
  await this.browser.elementIdClick(elements.value[ordinalNumberToIndex[ordinalNumber]].ELEMENT)
})

When('I click the Adopt Me button', async function () {
  await this.browser.click('[value="Adopt Me!"]')
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
  await expectNumOfPuppiesInCartToBe(this.browser, 1)
})

Then('I should see the shopping cart with {int} puppies', async function (expectedValue) {
  await expectNumOfPuppiesInCartToBe(this.browser, expectedValue)
})

Then('The puppy name should be {string}', async function (expectedValue) {
  await expectNameOfPuppyToBe(this.browser, 0, expectedValue) 
})

Then('The name of the {string} puppy should be {string}', async function (ordinalNumber, expectedValue) {
  await expectNameOfPuppyToBe(this.browser, ordinalNumberToIndex[ordinalNumber], expectedValue) 
})

Then('The subtotal should be {string}', async function (expectedValue) {
  await expectSubtotalForPuppyToBe(this.browser, 0, expectedValue)
})

Then('The subtotal for {string} puppy should be {string}', async function (ordinalNumber, expectedValue) {
  await expectSubtotalForPuppyToBe(this.browser, ordinalNumberToIndex[ordinalNumber], expectedValue)
})

Then('The total for the cart should be {string}', async function (expectedValue) {
  const actualValue = await getTotalForCart(this.browser)
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect total for cart (${actualValue})!`)
})

// ===== helpers =====
async function getNumberOfPuppiesInCart(browser) {
  const cartRows = await browser.elements('table tbody tr')
  return (cartRows.value.length-1)/6
}

async function expectNumOfPuppiesInCartToBe(browser, expectedValue) {
  await browser.waitForExist('h2=Your Litter')
  const actualValue = await getNumberOfPuppiesInCart(browser)
  assert.equal(
    actualValue, 
    expectedValue, 
    `There are incorrect number of puppies in the cart (${actualValue})!`)
}

async function getNameOfPuppy(browser, index) {
  const cartTable = await browser.elements('table tbody tr td')
  const element = await browser.elementIdText(cartTable.value[index*18+1].ELEMENT)
  
  return element.value.substring(0, element.value.length-1)
}

async function expectNameOfPuppyToBe(browser, index, expectedValue) {
  const actualValue = await getNameOfPuppy(browser, index)
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect puppy name (${actualValue})!`)
}

async function getSubtotalForPuppy(browser, index) {
  const cartTable = await browser.elements('table tbody tr td')
  const element = await browser.elementIdText(cartTable.value[index*18+3].ELEMENT)
  
  return element.value
}

async function expectSubtotalForPuppyToBe(browser, index, expectedValue) {
  const actualValue = await getSubtotalForPuppy(browser, index)
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect subtotal for puppy (${actualValue})!`)
}

async function getTotalForCart(browser) {
  const total = await browser.getText('.total_cell')
  return total
}
