const { After, Before } = require('cucumber')

Before(async function (scenario) {
  console.log(`Start scenario: ${scenario.pickle.name}`)
  await this.browser.init()
})

After(async function (scenario) {
  console.log(`${scenario.result.status} scenario: ${scenario.pickle.name}`)
  await this.browser.end()
})
