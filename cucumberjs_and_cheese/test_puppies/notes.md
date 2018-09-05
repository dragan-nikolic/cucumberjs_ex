## 4 Cucumber & Puppies ##

### Our first Cucumber project ###

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

* Now run: `$ npm install cucumber --save`
* Next, create following directory structure:

```
  test_puppies
  +-+ features
    + step_definitions
    + support
      + hooks.js
      + world.js
  + cucumber.js
  + package-lock.json
  + package.json
```

The first thing you will notice about our cucumber project is that there is a 
single directory at the root of the project named features. This directory is 
where all of your cucumber feature files will reside. In this directory you will 
find two additional directories. They are step_definitions and support. The 
step_definitions directory is empty at this time. The support directory has two 
files hooks.js and world.js. Let’s take a quick look at them.
world.js setup the custom 
[world](https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md) object if 
we need it.
In the hooks file you can see that we have a Before block and an After block. 
The Before block is run before each test and setup the single test environment (e.g. initiates the 
webdriver object). We’ve seen this code before. The After block runs after each test and perform
the test clenup (e.g. closing the webdriver).
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

Cucumber is informing us that there are no step definitions for the scenario. It is also providing
a starting point for you to implement those steps. Aha! 
[Step Definitions](https://docs.cucumber.io/cucumber/step-definitions/). These are what make
Cucumber scripts executable, automated tests. This is where high-level feature DSL is converted to
lower-level JavaScript code, so we can actually run it, and watch it turn green, proving that not 
only are we Building Something Right, we are Building the Right Thing!
Awesome! Let’s create a new file in the step_definitions directory named making_cheese_steps.rb. 
Copy the step definitions provided by cucumber to that file. When you run the cucumber
command again you should see something slightly different.

```
λ npm test features/making_cheese.feature

> simple_cuke@1.0.0 test C:\devh\github\cucumberjs_ex\cucumberjs_and_cheese\04_simple_cuke
> cucumber-js "features/making_cheese.feature"

Before: scenario Using the cheese machine
After: scenario Using the cheese machine pending
Warnings:

1) Scenario: Using the cheese machine # features\making_cheese.feature:6
   √ Before # features\support\hooks.js:3
   ? Given I have no cheese # features\step_definitions\making_cheese_steps.js:4
       Pending
   - When I press the make cheese button # features\step_definitions\making_cheese_steps.js:9
   - Then I should have 1 piece of Cheese # features\step_definitions\making_cheese_steps.js:14
   √ After # features\support\hooks.js:7

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.015s
npm ERR! Test failed.  See above for more details.
```

Here you can see that it found the steps but indicated that the first step was pending (Here, pending
means "not yet fully implemented in code"). As a result it skipped the remaining steps. When
cucumber runs into a step that is pending it does not continue running the scenario. We can easily
resolve this. Let’s write some place-holder code to make the steps run.

```
Given('I have no cheese', function () {
  console.log('I am so sad. I have no cheese :(')
})

When('I press the make cheese button', function () {
  console.log('There is hope. I hope this machine works')
})

Then('I should have {int} piece of Cheese', function (numPieces) {
  console.log(`Rejoice! We have ${numPieces} pieces of cheese.`)
})
```

Notice that I have renamed the 'int' parameter in the third step definition to numPieces.
This is to add clarity. Let’s run the scenario again. This time you will notice that the scenario passes
and the messages are printed to the screen.

You might be asking yourself why this scenario is passing. We haven’t actually done anything yet
so why should it work? Well cucumber is following the same pattern we saw when we wrote the
Watir scripts in the last chapter. It is assuming success until either it encounters a code error or an
assertion fails. So, yes, we have a Cucumber test that doesn’t actually prove that we make cheese.
Which of course is inherently bad, since we have established that we really like cheese.

But remember that we also like puppies, and in that problem domain, we have a puppy adoption
site. We’ve already written Watir tests to prove that we can adopt a puppy. We may not be able to
adopt a cheese, but we can definitely adopt a puppy. And we can use Cucumber tests to prove that
indeed this occurs, and to do so at the puppy-adoption feature level.

We can combine the WHAT, WHY, and HOW of puppy adoption in our next Cucumber tests. Joy!
We will see how this all comes together in the next section.

### Adopting a puppy with cucumber ###

Now it is time to write a cucumber feature that does something more interesting than the feature we
created in the last section. In this section we will write a feature that adopts a puppy. Create
test_puppies directory and all supporting files and directories as explained at the beginning of
this section. Since we are going to use webdriver we should install it and add it to our 
package.json.

`$ npm install webdriverio selenium-standalone --save-dev`

Then create a new file named adopting_puppies.feature in the features directory. Our feature file 
should begin like this:

```
Feature: Adopting puppies

  As a puppy lover
  I want to adopt puppies
  So they can chew my furniture
```

This is a good start. Now we need to begin writing the first Scenario. Let’s start with this:

```
Scenario: Adopting one puppy
  Given I am on the puppy adoption site
  When I click the View Details button
  And I click the Adopt Me button
  And I click the Complete the Adoption button
  And I enter "Cheezy" in the name field
  And I enter "123 Main Street" in the address field
  And I enter "cheezy@example.com" in the email field
  And I select "Credit card" from the pay with dropdown
  And I click the Place Order button
  Then I should see "Thank you for adopting a puppy!"
```