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

```text
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

```bash
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

```bash
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

```gherkin
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

```gherkin
Feature: Adopting puppies

  As a puppy lover
  I want to adopt puppies
  So they can chew my furniture
```

This is a good start. Now we need to begin writing the first Scenario. Let’s start with this:

```gherkin
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

Now go ahead and generate the step definitions by running the newly created feature file.
Place the step definitions in a file named adopting_puppy_steps.js in the step_definitions
directory and rename the variables to something more meaningful. After the step definitions are
generated I would like you to try to complete the script to make the Scenario run successfully. Here
is the completed first step:

```
Given('I am on the puppy adoption site', async function () {
  await this.browser.url('http://puppies.herokuapp.com/')
})
```

Try to complete all of the remaining steps without referring to the work we did in the last chapter.
Repetition will help us learn the Watir syntax and make us better automated testers. When you are
finished go ahead and run the Feature. If you have a failure, correct it and try again until the 
script runs all of the way through.

### Adopting two puppies ###

Let’s write a second Scenario in the directly below the first Scenario and call it “Adopting two
puppies”. As you might guess, we want this new Scenario to adopt two puppies and complete the
order. Your Scenario should be nearly identical to the previous Scenario.

One problem we need to address is specifying that we will click different View Details buttons. In
the first scenario we just stated that we clicked the View Details button but for this scenario we will
need to say that we click the first View Details button and the second View Details button.

After you are finished writing the second Scenario I suggest you change the first Scenario to state
that you click the first View Details button and then go ahead and update the step definitions file to
reflect the new syntax. You will also need to update the Webdriver call to add the `index` parameter in
order to click the correct button. The new Scenario should look like this:

```
Scenario: Adopting two puppies
  Given I am on the puppy adoption site
  When I click the first View Details button
  And I click the Adopt Me button
  And I click the Adopt Another Puppy button
  And I click the second View Details button
  And I click the Adopt Me button
  And I click the Complete the Adoption button
  And I enter "Cheezy" in the name field
  And I enter "123 Main Street" in the address field
  And I enter "cheezy@example.com" in the email field
  And I select "Credit card" from the pay with dropdown
  And I click the Place Order button
  Then I should see "Thank you for adopting a puppy!"
```

Go ahead and generate the step definition and implement the methods. As you see, we were able to
reuse much of the previous step definitions in this new Scenario. The two steps that we did have to
create were the ones that clicked the first and second view details buttons. We already had a step in
the first Scenario that clicked the first view details button. When we see this sort of duplication it is
a good idea to remove it. Please change the first scenario to use the step When I click the first View
Details button and then remove the step definition for the generic method so it no longer exists in
your step definition file.

### Scenario Outlines ###

Cucumber has another type of Scenario called a [Scenario Outline](https://docs.cucumber.io/gherkin/reference/#scenario-outline) that relies on the Example
keyword. It allows us to separate out the small tables of example data used in the Scenario from
the description of the steps in the Scenario and thereby run it with multiple sets of data. This is very
useful for situations when you have a single path through the application that you wish to run with
different sets of example data. These different examples might test different subtle behaviors in our
code. So we are reusing the same test code, but substituting different rows of example data for each
test execution. It is yet another trick to help us keep the code D.R.Y. (that is, without unnecessary
duplication).

Scenario Outlines take this form:

```
Scenario Outline: Using the cheese machine
  Given I have no Cheese
  When I press the make "<type>" cheese button
  Then I should see the "<message>" message

  Examples:
  | type | message |
  | Swiss | I love Swiss cheese |
  | Blue | I love Blue cheese |
  | Cheddar | I love Cheddar cheese |
```

As you can see, Scenario Outlines have two parts. The first is the outline which provides the steps for
the test and the second is the data used in the steps. These two parts are bound together by variables
that are replaced when the Scenario runs. The variables are defined in the steps with angle brackets
like <name>. This is matched with a heading in the Examples section and the value for each row is
inserted into the step.

The Scenario above will run three times. The first time the type variable will be replaced with the
word Swiss and the message variable will be replace with I love Swiss cheese. The second time the
Scenario is run it will use the data from the second row and so on.

For your next assignment I want you to rewrite the first Scenario in our adopt puppies file to make
it a Scenario Outline and provide three Examples so it will run with three different complete sets of
data. The Examples portion of your script will look something like:

```
  Examples:
  | name   | address     | email             | pay_type      |
  | Cheezy | 123 Main St | cheezy@example.com| Credit card   |
  | Joseph | 555 South St| joe@guru.com      | Check         |
  | Jared  | 234 Leandog | doc@dev.com       | Purchase order|
```

Notice, by the way, that once a Product Owner is accustomed to the sets of inputs to a Scenario, this
Examples table becomes a succinct way for them to see that several different scenarios are being
tested. It is a handy shortand for data-intensive testing situations.
At the same time, running a lot of data through the system is not always a good idea. We should be
very pragmatic about the tests we add. We want each new test to help us learn something new about
the system we are testing. Exercising the same code in the exact same way over and over again does
not expand our understanding nor does it help us discover new defects.

### Background ###

Our Scenarios have some duplication that we want to address. Both of them begin with the same
Step:

`Given I am on the puppy adoption site`

Since we have learned that duplication is evil we should find a way to eliminate this travesty.
Luckily cucumber has a solution. It is call [Background](https://docs.cucumber.io/gherkin/reference/#background). Think of it as a step or set of steps that are
executed prior to each Scenario. Using a Background the duplication in our Scenarios is eliminated
and we end up with:

```
Background:
  Given I am on the puppy adoption site

Scenario: Adopting one puppy
  When I click the "first" View Details button
  ...

Scenario: Adopting two puppies
  When I click the "first" View Details button
  ...
```

Now that feels better, doesn’t it.

### Verify the shopping cart ###

We are off to a good start with cucumber but so far our tests haven’t really tested much. We are
about to change that. In this section we will write some Scenarios that will test our shopping cart
page. Let’s look at an example shopping cart.

|![Litter Page](litter_page.png)|
|:---:|
|Your Litter Page|

Looking at this shopping cart what Scenarios do you think we need to specify this page and verify
correctness?

There are numerous Scenarios necessary to specify this page but for this section I would like you to
write two.

1. Verify the shopping cart with one puppy.
2. Verify the shopping cart with two puppies.

In each Scenario I would like you to validate the puppy’s name, the subtotal for the adoption, and
the shopping cart total.

The shopping cart data is stored in an html table. The table does not have an id, name, or any other
identifier. What do you think you can use to locate the table and its fields? If you said tag and 
index you are correct.

For example, to access shopping cart 'Your Litter' you can use WebdriverIO selector
`'table tbody tr td'`:

    cartTableFields = browser.elements('table tbody tr td')

This call returns all `<td>` elements on the page, and each `<td>` element represent a field in the
table.

The table has 18 elements per item (i.e. per puppy). 4 elements for first row that contains
puppy image, name, gender and breed and price, then 2 elements for Additional Product/Services 
header, and 4 times 3 (=12) fields for each product/service.

Puppy name is always second field of the item, so for first puppy that would be field with index
1, for second puppy index 19 and so on, for puppy `k` it would be `k*18+1`.

The shopping cart "Total" can be accessed directly using the 'total_cell' class selector.

Be aware! This is by far the most complex exercise we have done so far and I expect it to take a fair amount of time to complete.

Try to complete this exercise on your own before looking at the completed scripts below.

### The completed scripts ###

Here are the Scenarios I came up with for this exercise:

```gherkin
Scenario: Validate cart with one puppy
  When I click the "first" View Details button
  And I click the Adopt Me button
  Then I should see "Brook" as the name for line item 1
  And I should see "$34.95" as the subtotal for line item 1
  And I should see "$34.95" as the cart total

Scenario: Validate cart with two puppies
  When I click the "first" View Details button
  And I click the Adopt Me button
  And I click the Adopt Another Puppy button
  And I click the "second" View Details button
  And I click the Adopt Me button
  Then I should see "Brook" as the name for line item 1
  And I should see "$34.95" as the subtotal for line item 1
  And I should see "Hanna" as the name for line item 2
  And I should see "$22.99" as the subtotal for line item 2
  And I should see "$57.94" as the cart total
```

These Scenarios caused me to write four new step definitions. Here they are:

```javascript
Then('I should see {string} as the name for line item {int}', async function (expectedValue, lineItem) {
  const cartTable = await this.browser.elements('table tbody tr td')
  const element = await this.browser.elementIdText(cartTable.value[(lineItem-1)*18+1].ELEMENT)
  const actualValue = element.value.substring(0, element.value.length-1)
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect puppy name (${actualValue})!`)
})

Then('I should see {string} as the subtotal for line item {int}', async function (expectedValue, lineItem) {
  const cartTable = await this.browser.elements('table tbody tr td')
  const element = await this.browser.elementIdText(cartTable.value[(lineItem-1)*18+3].ELEMENT)
  const actualValue = element.value
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect subtotal for puppy (${actualValue})!`)
})

Then('I should see {string} as the cart total', async function (expectedValue) {
  const actualValue = await this.browser.getText('.total_cell')
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect total for cart (${actualValue})!`)
})
```

### Removing the duplication ###

There is some code duplication in the step definitions we just completed. There are many ways for us to eliminate this duplication but when confronted with several options I typically choose the simplest solution I can think of and then move to something more complicated when it is warranted. This philosophy comes from the Agile methodology called ["eXtreme Programming (XP)"](https://en.wikipedia.org/wiki/Extreme_programming), from which came the programming axiom ["Do the simplest thing that could possibly work"](http://c2.com/xp/DoTheSimplestThingThatCouldPossiblyWork.html).

The simplest way to remove the duplication that I can think of here is to introduce a couple of methods. To keep things extremely simple we’ll just add the methods directly in our step definitions file.

Let's eliminate duplication in the steps where we extract name and subtotal for a line item.

We can create a helper function:

```javascript
async function getCartLineItemField(browser, lineItem, field) {
  const fieldIndex = {
    'name': 1,
    'subtotal': 3
  }

  const cartTable = await browser.elements('table tbody tr td')
  const element = await browser.elementIdText(
    cartTable.value[(lineItem-1)*18+fieldIndex[field]].ELEMENT)
  return element.value
}
```

and then modify steps:

```javascript
Then('I should see {string} as the name for line item {int}', async function (expectedValue, lineItem) {
  const actualValue = await getCartLineItemField(this.browser, lineItem, 'name')
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect puppy name (${actualValue})!`)
})

Then('I should see {string} as the subtotal for line item {int}', async function (expectedValue, lineItem) {
  const actualValue = await getCartLineItemField(this.browser, lineItem, 'subtotal')
  assert.equal(
    actualValue, 
    expectedValue, 
    `Incorrect subtotal for puppy (${actualValue})!`)
})
```

After we write this code we need to re-run the Scenario to ensure we didn’t break anything.

### A page object for our shopping cart ### 
page 66