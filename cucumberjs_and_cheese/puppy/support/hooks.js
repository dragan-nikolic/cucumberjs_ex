const {After, Before} = require('cucumber')

Before(async function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
  await this.webdriver.init()
});

After(async function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
  await this.webdriver.end()
});
