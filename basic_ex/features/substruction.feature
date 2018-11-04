Feature: Substruction
  @all
  Scenario: 2 - 0
    Given I start with 2
    When I substruct 0
    Then I end up with 2

  @dev
  Scenario: 9 - 4
    Given I start with 9
    When I substruct 4
    Then I end up with 5
