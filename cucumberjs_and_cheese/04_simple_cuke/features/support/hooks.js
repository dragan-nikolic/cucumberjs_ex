const {After, Before} = require('cucumber')

Before(async function (scenario) {
  console.log(`Before: scenario ${scenario.pickle.name}`)
});

After(async function (scenario) {
  console.log(`After: scenario ${scenario.pickle.name} ${scenario.result.status}`)
});
