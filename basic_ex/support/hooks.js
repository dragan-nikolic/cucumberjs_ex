/*
- Multiple Before or After tags are executed in the order the are impemented in
  this file
- BeforeAll and AfterAll do not have 'this'
*/

const {BeforeAll, Before, AfterAll, After} = require('cucumber');

// Runs only once before the first test start
BeforeAll(async function() {
  console.log('***** beforeAll');
});

// Runs only once after the last test completes
// Note: 'this' is not defined here. Only scenarios have it.
AfterAll(async function() {
  console.log(' ');
  console.log('***** afterAll');
});

// Runs before each scenario
Before(async function (scenario) {
  console.log(' ');
  console.log(`***** before ${scenario.pickle.name}`);
});

// Runs after each scenario
After(async function (scenario) {
  console.log(' ');
  console.log(`***** after ${scenario.pickle.name}`);
});

// This hook will be executed before scenarios with the given tag
Before({tags: "@mytag"}, async function (scenario) {
  console.log(' ');
  console.log(`***** before mytag ${scenario.pickle.name}`);
});
