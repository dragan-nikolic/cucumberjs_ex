const {Given, When, Then} = require('cucumber')
const assert = require('assert')

Given('I am on the puppy adoption site', async function () {
  await this.browser.url('http://puppies.herokuapp.com/')
})

When('I click the View Details button', async function () {
  const elements = await this.browser.elements('[value="View Details"]')
  await this.browser.elementIdClick(elements.value[0].ELEMENT)
})

When('I click the Adopt Me button', async function () {
  await this.browser.click('[value="Adopt Me!"]')
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

Then('I should see {string}', async function (message) {
  const pageText = await this.browser.getText('body')
  assert(pageText.includes(message), 'Adoption failed!')
})
