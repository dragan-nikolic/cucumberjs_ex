// making_chesse_steps.js
const { Given, When, Then } = require('cucumber')

Given('I have no cheese', function () {
  console.log('I am so sad. I have no cheese :(')
})

When('I press the make cheese button', function () {
  console.log('There is hope. I hope this machine works')
})

Then('I should have {int} piece of Cheese', function (numPieces) {
  console.log(`Rejoice! We have ${numPieces} pieces of cheese.`)
})
