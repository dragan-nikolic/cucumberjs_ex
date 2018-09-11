Feature: Adopting puppies

  As a puppy lover
  I want to adopt puppies
  So they can chew my furniture

Background:
  Given I am on the puppy adoption site

Scenario: Adopting one puppy
  When I click the "first" View Details button
  And I click the Adopt Me button
  And I click the Complete the Adoption button
  And I enter "Cheezy" in the name field
  And I enter "123 Main Street" in the address field
  And I enter "cheezy@example.com" in the email field
  And I select "Credit card" from the pay with dropdown
  And I click the Place Order button
  Then I should see message "Thank you for adopting a puppy!"

Scenario: Adopting two puppies
  When I click the "first" View Details button
  And I click the Adopt Me button
  And I click the Adopt Another Puppy button
  And I click the "second" View Details button
  And I click the Adopt Me button
  And I click the Complete the Adoption button
  And I enter "Cheezy" in the name field
  And I enter "123 Main Street" in the address field
  And I enter "cheezy@example.com" in the email field
  And I select "Credit card" from the pay with dropdown
  And I click the Place Order button
  Then I should see message "Thank you for adopting a puppy!"

Scenario: Validate cart with one puppy
  When I click the "first" View Details button
  And I click the Adopt Me button
  Then I should see the shopping cart with one puppy
  And The puppy name should be "Brook"
  And The subtotal should be "$34.95"
  And The total should be "$34.95"

Scenario: Validate cart with two puppies
  When I click the "first" View Details button
  And I click the Adopt Me button
  And I click the Adopt Another Puppy button
  And I click the "second" View Details button
  And I click the Adopt Me button
  Then I should see the shopping cart with 2 puppies
  And The name of the "first" puppy should be "Brook"
  And The subtotal for "first" puppy should be "$34.95"
  And The name of the "second" puppy should be "Hanna"
  And The subtotal for "second" puppy should be "$34.95"
  And The total for the cart should be "$34.95"
