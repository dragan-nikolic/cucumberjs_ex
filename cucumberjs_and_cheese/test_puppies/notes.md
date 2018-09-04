## 4 Cucumber & Puppies ##

### Our first Cuumber project ###

* First run 'npm init'

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test_puppies)
version: (1.0.0)
description: End to end tests for Puppy Adoption Agency  web site
entry point: (index.js) none
test command:
git repository:
keywords:
author: Dragan Nikolic (dragan.d.nikolic@gmail.com)
license: (ISC)
About to write to C:\dev\github\cucumberjs_ex\cucumberjs_and_cheese\test_puppies\package.json:

{
  "name": "test_puppies",
  "version": "1.0.0",
  "description": "End to end tests for Puppy Adoption Agency  web site",
  "main": "none",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Dragan Nikolic (dragan.d.nikolic@gmail.com)",
  "license": "ISC"
}


Is this ok? (yes)
```

* Now run 'npm install cucumber selenium-standalone webdriverio --save'
* Next, create following directory structure:

  test_puppies
  +-+ features
    + step_definitions
    + support
      + pages
      + hooks.js
      + world.js
  + cucumber.js
  + package-lock.json
  + package.json

The first thing you will notice about our cucumber project is that there is a 
single directory at the root of the project named features. This directory is 
where all of your cucumber feature files will reside. In this directory you will 
find two additional directories. They are step_definitions and support. The 
step_definitions directory is empty at this time. The support directory has two 
files hooks.js and world.js. Let’s take a quick look at them.
world.js setup the custom world object, which creates webdriver object.
In the hooks file you can see that we have a Before block and an After block. 
The Before block is run before each test and is initiating the webdriver object. 
We’ve seen this code before. The After block runs after each test and here it is 
closing the webdriver.
There are other files in our project in addition to the files under the features 
directory. We’ll be covering them in later sections of the book.

### Writing a simple cuke ###

Create feature file then run it: `$ ./node_modules/.bin/cucumber-js features/making_cheese.feature `

You should see output like this:

```
λ npm test

> simple_cuke@1.0.0 test C:\devh\github\cucumberjs_ex\cucumberjs_and_cheese\04_simple_cuke
> cucumber-js

Before: scenario Using the cheese machine
After: scenario Using the cheese machine undefined
Warnings:

1) Scenario: Using the cheese machine # features\making_cheese.feature:6
   √ Before # features\support\hooks.js:3
   ? Given I have no cheese
       Undefined. Implement with the following snippet:

         Given('I have no cheese', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? When I press the make cheese button
       Undefined. Implement with the following snippet:

         When('I press the make cheese button', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then I should have 1 piece of Chees
       Undefined. Implement with the following snippet:

         Then('I should have {int} piece of Chees', function (int) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   √ After # features\support\hooks.js:7

1 scenario (1 undefined)
3 steps (3 undefined)
0m00.000s
npm ERR! Test failed.  See above for more details.
```

