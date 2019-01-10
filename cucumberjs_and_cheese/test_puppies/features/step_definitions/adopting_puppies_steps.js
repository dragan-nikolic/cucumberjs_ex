const { Given, When, Then } = require('cucumber')
const assert = require('assert')

const ordinalNumberToIndex = {
  'first': 0,
  'second': 1,
  'third': 2
}

// Temp step to investigate shopping cart table
When('I check the litter', async function () {
  const tcells = await this.browser.elements('table tbody tr td')

  for (let i = 0; i < tcells.value.length; i++) {
    // console.log(`cell ${i}`, tcells.value[i])
    const element = await this.browser.elementIdText(tcells.value[i].ELEMENT)
    console.log(`text ${i}`, element.value)
  }
})

// increaded timeout for this step because initial opening of the site
// can sometimes take extra time
Given('I am on the puppy adoption site', { timeout: 30000 }, async function () {
  await this.browser.url('http://puppies.herokuapp.com/')
})

When('I click the {string} View Details button', async function (ordinalNumber) {
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

When('I select {string} product', async function (product) {
  await clickCartLineItemField(this.browser, 3, )
})

Then('I should see message {string}', async function (message) {
  const pageText = await this.browser.getText('body')
  assert(pageText.includes(message), 'Adoption failed!')
})

Then('I should see {string} as the name for line item {int}', async function (expectedValue, lineItem) {
  const actualValue = await getCartLineItemField(this.browser, lineItem, 'name')
  assert.strict.equal(
    actualValue,
    expectedValue,
    `Incorrect puppy name (${actualValue})!`)
})

Then('I should see {string} as the subtotal for line item {int}', async function (expectedValue, lineItem) {
  const actualValue = await getCartLineItemField(this.browser, lineItem, 'subtotal')
  assert.strict.equal(
    actualValue,
    expectedValue,
    `Incorrect subtotal for puppy (${actualValue})!`)
})

Then('I should see {string} as the cart total', async function (expectedValue) {
  const actualValue = await this.browser.getText('.total_cell')
  assert.strict.equal(
    actualValue,
    expectedValue,
    `Incorrect total for cart (${actualValue})!`)
})

// helpers
function trimChar (str, ch) {
  const replaceThis = new RegExp(`^${ch}+|${ch}+$`, 'gm')
  const withThis = ''
  return str.replace(replaceThis, withThis)
}

async function getCartLineItemField (browser, lineItem, field) {
  const fieldIndex = {
    'name': 1,
    'subtotal': 3
  }

  const cartTable = await browser.elements('table tbody tr td')
  const element = await browser.elementIdText(
    cartTable.value[(lineItem - 1) * 18 + fieldIndex[field]].ELEMENT)
  return trimChar(element.value, ':')
}

async function clickCartLineItemField (browser, lineItem, field) {
  const fieldIndex = {
    'name': 1,
    'subtotal': 3,
    'collar_and_leash_product': 5
  }

  const cartTable = await browser.elements('table tbody tr td')
  const result = await browser.elementIdClick(
    cartTable.value[(lineItem - 1) * 18 + fieldIndex[field]].ELEMENT)
  consoile.log('********result****************', result)
}
