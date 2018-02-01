# BDD in JavaScript: Getting Started with Cucumber and Gherkin

https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/

Note: to be able to run tests you need to run server part of the Tab Tracker app - git@github.com:dragan-nikolic/tab-tracker.git. 

Go to server directory then run:
    - npm run seed
    - npm start

Note 2: Running tests using command 'npm test' in Windows does not work.
The following error is generated: 
  'Windows Script Host'
  Error: Invalid character

To run succesfully in Windows use following format:
$ ./node_modules/.bin/cucumber.js -r /steps/ ...
