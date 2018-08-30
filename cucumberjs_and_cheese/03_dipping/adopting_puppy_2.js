/*
Run: $ node <file>.js
*/

(async function() {
// async wrapper begin

const ah = require('./adoption_helper')

await ah.gotoPuppyAdoptionSite()  
await ah.adoptPuppyNumber(1)
await ah.continueAdoptingPuppies()
await ah.adoptPuppyNumber(2)
await ah.checkoutWith('Cheezy', '123 Main St', 'cheezy@foo.com', 'Check')
await ah.verifyThankyouNote()
await ah.closeTheBrowser()  

// async wrapper end
})()
