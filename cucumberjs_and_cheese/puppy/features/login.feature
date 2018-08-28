Feature: Adopt Puppy Login

  Scenario: Verify succesful login
    When I login as admin user
    Then I see welcome message
