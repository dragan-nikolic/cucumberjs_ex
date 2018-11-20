Feature: Multiplication

  @all @smoke
  Scenario: 1 * 0
    Given I start with 1
    When I multiply by 0
    Then I end up with 0

  @stage @dev
  Scenario: 1 * 1
    Given I start with 1
    When I multiply by 1
    Then I end up with 1

  @dev @smoke
  Scenario: 2 * 3
    Given I start with 2
    When I multiply by 3
    Then I end up with 6
