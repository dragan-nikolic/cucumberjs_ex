Feature: TabTracker
  Scenario: Get all songs
    When I make TT trae call to get all songs
    Then I should see all the songs in the database
