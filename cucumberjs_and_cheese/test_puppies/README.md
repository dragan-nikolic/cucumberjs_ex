# Cucumberjs and Cheese
Based on the book Cucumber and Cheese by Jeff Morgan. The main difference is
using Javascript instead of Ruby.

Fir more info refer to the cucumberjs_and_cheese.md.
  
Testing http://puppies.herokuapp.com/.

## Prerequisites ##
* Nodejs version 8.9.4 or newer and NPM version 5.6.0 or newer

## Node modules ##
* [Cucumber JS](https://github.com/cucumber/cucumber-js): Cucumber for JavaScript.
* [WebdriverIO](http://webdriver.io/): WebDriver implementation by Christian Bromann

## How do I get set up? ###
* Run only once: ```npm install```
* Run only once: ```./node_modules/.bin/selenium-standalone install```
* Run every time in one terminal: ```./node_modules/.bin/selenium-standalone start```
* After that you can run tests in another terminal as explained below.

## How to run tests? ##
* Run all test using Chrome:
$ ./run.sh chrome
* Run all test using Firefox:
$ ./run.sh firefox

## Useful links ##
* [SmartBear CucumberJS](https://help.crossbrowsertesting.com/selenium-testing/frameworks/cucumber-js/)
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
