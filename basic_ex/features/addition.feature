Feature: Addition
  @mytag
  Scenario: 1 + 0
    Given I start with 1
    When I add 0
    Then I end up with 1

  @mytag
  Scenario: 1 + 1
    Given I start with 1
    When I add 1
    Then I end up with 2
