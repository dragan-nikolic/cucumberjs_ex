/**
World is an isolated context for each scenario, exposed to the hooks and steps
as 'this'.

For more info refer to:
https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
*/ 
 
const cucumber = require('cucumber')
const webdriver = require('webdriverio')

function CustomWorld({attach, parameters}) {
  // support default World parameters
  this.attach = attach
  this.parameters = parameters

  // create  webdriver
  const options = { 
    desiredCapabilities: { 
      browserName: parameters.browser 
    } 
  }
  this.browser = webdriver.remote(options)
}

cucumber.setWorldConstructor(CustomWorld)
