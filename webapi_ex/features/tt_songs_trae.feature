Feature: TabTracker
  Scenario: Get all songs
    When I make TT trae call to get all songs
    Then I should see all the songs in the database

  Scenario: Create a song
    When I add new song
    Then I should see the same song in the database 

  Scenario: Update a song
