/**
World is an isolated context for each scenario, exposed to the hooks and steps
as 'this'.

For more info refer to:
https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
*/ 
 
const cucumber = require('cucumber')

function CustomWorld({attach, parameters}) {
  // support default World parameters
  this.attach = attach
  this.parameters = parameters

  console.log('Hello from CustomWorld ... this is run before every scenario')
}

cucumber.setDefaultTimeout(5000)
cucumber.setWorldConstructor(CustomWorld)
console.log('Hello from world.js ... this is executed first!')