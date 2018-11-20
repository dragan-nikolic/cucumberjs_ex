Feature: Addition
  @mytag @dev @stage
  Scenario: add 1 + 0 is 1
    Given I start with 1
    When I add 0
    Then I end up with 1

  @mytag @all
  Scenario: add 1 + 1 is 2
    Given I start with 1
    When I add 1
    Then I end up with 2

  # Second exmaple is supposed to fail
  @dev
  Scenario Outline: Add two numbers
    Given I start with <num1>
    When I add <num2>
    Then I end up with <result>

    Examples:
    | num1 | num2 | result |
    | 5    | 4    | 9      |
    | 6    | -2   | 3      |